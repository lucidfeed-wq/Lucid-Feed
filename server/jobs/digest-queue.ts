/**
 * Lightweight digest job queue using Postgres row-locking
 * Eliminates 300-second frontend timeouts by converting digest generation to async background jobs
 */
import { db } from "../db";
import { digestJobs } from "@shared/schema";
import { eq, and, sql } from "drizzle-orm";
import { generatePersonalizedDigest } from "../services/digest";

export interface EnqueueArgs {
  topic?: string;
  userId?: string;
}

export interface ProgressCallback {
  (done: number, total: number): Promise<void>;
}

/**
 * Enqueue a new digest generation job
 * Returns immediately with a job ID for polling
 */
export async function enqueueDigest(args: EnqueueArgs): Promise<string> {
  console.log(`[Digest Queue] Enqueuing digest job for user: ${args.userId || 'global'}, topic: ${args.topic || 'all'}`);
  
  const [job] = await db.insert(digestJobs).values({
    topic: args.topic ?? null,
    userId: args.userId ?? null,
    status: 'queued',
    progress: 0,
    total: 0,
  }).returning();
  
  console.log(`[Digest Queue] Job enqueued with ID: ${job.id}`);
  return job.id;
}

/**
 * Get job status for polling
 */
export async function getJobStatus(jobId: string) {
  const [job] = await db
    .select()
    .from(digestJobs)
    .where(eq(digestJobs.id, jobId))
    .limit(1);
  
  if (!job) {
    return null;
  }
  
  return {
    status: job.status,
    progress: job.progress,
    total: job.total,
    digestId: job.digestId,
    error: job.error,
  };
}

/**
 * Get recent jobs for a user (for admin/debugging)
 */
export async function getUserJobs(userId: string, limit = 10) {
  const jobs = await db
    .select()
    .from(digestJobs)
    .where(eq(digestJobs.userId, userId))
    .orderBy(sql`${digestJobs.createdAt} DESC`)
    .limit(limit);
  
  return jobs;
}

let runnerStarted = false;
let runnerActive = false;

/**
 * Start the background digest job runner
 * Uses Postgres row-locking (FOR UPDATE SKIP LOCKED) for safe concurrency
 */
export function startDigestRunner() {
  if (runnerStarted) {
    console.log('[Digest Runner] Already started');
    return;
  }
  
  runnerStarted = true;
  console.log('🚀 Starting Digest Job Runner...');

  // Simple forever loop with idle sleep
  (async function loop() {
    // Don't start another iteration if one is already running
    if (runnerActive) {
      await new Promise(r => setTimeout(r, 1000));
      return setImmediate(loop);
    }

    try {
      // Pace: don't hammer DB
      await new Promise(r => setTimeout(r, 500));

      // Pick one queued job using row-locking
      const job = await db.transaction(async (tx) => {
        const [queuedJob] = await tx
          .select()
          .from(digestJobs)
          .where(eq(digestJobs.status, 'queued'))
          .orderBy(digestJobs.createdAt)
          .limit(1)
          .for('update', { skipLocked: true });

        if (!queuedJob) return null;

        // Mark as running
        await tx
          .update(digestJobs)
          .set({ 
            status: 'running', 
            updatedAt: new Date() 
          })
          .where(eq(digestJobs.id, queuedJob.id));

        return queuedJob;
      });

      if (!job) {
        // No jobs in queue, continue loop
        return setImmediate(loop);
      }

      runnerActive = true;
      const jobId = job.id;
      console.log(`[Digest Runner] Processing job ${jobId}`);

      // Progress callback to update job state
      const onProgress = async (done: number, total: number) => {
        try {
          await db
            .update(digestJobs)
            .set({ 
              progress: done, 
              total, 
              updatedAt: new Date() 
            })
            .where(eq(digestJobs.id, jobId));
          
          console.log(`[Digest Runner] Job ${jobId} progress: ${done}/${total}`);
        } catch (error) {
          console.error(`[Digest Runner] Failed to update progress:`, error);
        }
      };

      try {
        // Validate userId exists
        if (!job.userId) {
          throw new Error('Job missing userId - cannot generate personalized digest');
        }

        // Generate the digest with progress updates
        const result = await generatePersonalizedDigest(
          job.userId,
          { onProgress }
        );

        // Mark as done
        await db
          .update(digestJobs)
          .set({
            status: 'done',
            digestId: result.id,
            progress: 100,
            total: 100,
            updatedAt: new Date(),
          })
          .where(eq(digestJobs.id, jobId));

        console.log(`✅ [Digest Runner] Job ${jobId} completed successfully. Digest: ${result.slug}`);
      } catch (error: any) {
        const errorMessage = error?.message || String(error);
        console.error(`❌ [Digest Runner] Job ${jobId} failed:`, errorMessage);

        // Mark as error
        await db
          .update(digestJobs)
          .set({
            status: 'error',
            error: errorMessage.slice(0, 500), // Limit error message length
            updatedAt: new Date(),
          })
          .where(eq(digestJobs.id, jobId));
      } finally {
        runnerActive = false;
        // Continue processing next job immediately
        setImmediate(loop);
      }
    } catch (error) {
      console.error('[Digest Runner] Unexpected error in job loop:', error);
      runnerActive = false;
      // Continue loop even on unexpected errors
      setImmediate(loop);
    }
  })();

  console.log('✅ Digest job runner started');
}

/**
 * Stop the digest runner (for clean shutdown)
 */
export function stopDigestRunner() {
  runnerStarted = false;
  console.log('[Digest Runner] Stopped');
}
