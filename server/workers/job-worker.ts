import { db } from '../db';
import { jobQueue } from '@shared/schema';
import { eq, and, lte } from 'drizzle-orm';
import { nanoid } from 'nanoid';

export interface JobHandler {
  (payload: any): Promise<void>;
}

export interface JobWorkerOptions {
  pollInterval?: number; // ms between polling for new jobs
  concurrency?: number; // max concurrent jobs per worker
  maxRetries?: number; // max retries before dead letter
  retryBackoff?: {
    base: number; // base delay in ms
    factor: number; // exponential factor
    jitter: number; // jitter factor (0-1)
  };
}

const DEFAULT_OPTIONS: Required<JobWorkerOptions> = {
  pollInterval: 5000, // 5 seconds
  concurrency: 5,
  maxRetries: 5,
  retryBackoff: {
    base: 2000, // 2 seconds
    factor: 2,
    jitter: 0.4,
  },
};

/**
 * Simple PostgreSQL-based job queue worker
 * Replaces BullMQ for MVP - upgrades to Redis later
 */
export class JobWorker {
  private handlers: Map<string, JobHandler> = new Map();
  private options: Required<JobWorkerOptions>;
  private running = false;
  private activeJobs = 0;

  constructor(options: JobWorkerOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  /**
   * Register a job handler
   */
  register(type: string, handler: JobHandler): void {
    this.handlers.set(type, handler);
  }

  /**
   * Start polling for jobs
   */
  start(): void {
    if (this.running) return;
    this.running = true;
    this.poll();
  }

  /**
   * Stop polling
   */
  stop(): void {
    this.running = false;
  }

  /**
   * Poll for pending jobs and process them
   */
  private async poll(): Promise<void> {
    while (this.running) {
      try {
        // Check if we have capacity
        if (this.activeJobs < this.options.concurrency) {
          await this.processNextJob();
        }
        
        // Wait before next poll
        await new Promise(resolve => setTimeout(resolve, this.options.pollInterval));
      } catch (error) {
        console.error('[JobWorker] Poll error:', error);
        await new Promise(resolve => setTimeout(resolve, this.options.pollInterval));
      }
    }
  }

  /**
   * Process the next available job
   */
  private async processNextJob(): Promise<void> {
    try {
      // Find next pending job
      const jobs = await db
        .select()
        .from(jobQueue)
        .where(
          and(
            eq(jobQueue.status, 'pending'),
            lte(jobQueue.nextRunAt, new Date())
          )
        )
        .orderBy(jobQueue.priority, jobQueue.nextRunAt)
        .limit(1);

      if (jobs.length === 0) return;

      const job = jobs[0];

      // Mark as processing
      await db
        .update(jobQueue)
        .set({
          status: 'processing',
          processingStartedAt: new Date(),
        })
        .where(eq(jobQueue.id, job.id));

      this.activeJobs++;

      try {
        // Get handler
        const handler = this.handlers.get(job.type);
        if (!handler) {
          throw new Error(`No handler registered for job type: ${job.type}`);
        }

        // Execute job
        await handler(job.payload);

        // Mark as completed
        await db
          .update(jobQueue)
          .set({
            status: 'completed',
            completedAt: new Date(),
          })
          .where(eq(jobQueue.id, job.id));

      } catch (error) {
        // Handle failure
        await this.handleJobFailure(job, error);
      } finally {
        this.activeJobs--;
      }

    } catch (error) {
      console.error('[JobWorker] Process job error:', error);
    }
  }

  /**
   * Handle job failure with exponential backoff
   */
  private async handleJobFailure(job: any, error: any): Promise<void> {
    const retries = job.retries + 1;
    const maxRetries = job.maxRetries || this.options.maxRetries;

    if (retries >= maxRetries) {
      // Move to dead letter queue
      await db
        .update(jobQueue)
        .set({
          status: 'dead_letter',
          retries,
          failReason: error instanceof Error ? error.message : String(error),
          completedAt: new Date(),
        })
        .where(eq(jobQueue.id, job.id));
    } else {
      // Schedule retry with exponential backoff
      const { base, factor, jitter } = this.options.retryBackoff;
      const delay = base * Math.pow(factor, retries);
      const jitteredDelay = delay * (1 + (Math.random() - 0.5) * jitter);
      const nextRunAt = new Date(Date.now() + jitteredDelay);

      await db
        .update(jobQueue)
        .set({
          status: 'pending',
          retries,
          nextRunAt,
          failReason: error instanceof Error ? error.message : String(error),
        })
        .where(eq(jobQueue.id, job.id));
    }
  }
}

/**
 * Enqueue a new job
 */
export async function enqueueJob(
  type: string,
  payload: any,
  options: {
    priority?: number;
    maxRetries?: number;
    runAt?: Date;
  } = {}
): Promise<string> {
  const id = nanoid();
  
  await db.insert(jobQueue).values({
    id,
    type,
    payload,
    priority: options.priority || 5,
    maxRetries: options.maxRetries || 5,
    nextRunAt: options.runAt || new Date(),
    status: 'pending',
    retries: 0,
  });

  return id;
}

/**
 * Get job status
 */
export async function getJobStatus(jobId: string) {
  const jobs = await db
    .select()
    .from(jobQueue)
    .where(eq(jobQueue.id, jobId))
    .limit(1);

  return jobs[0] || null;
}
