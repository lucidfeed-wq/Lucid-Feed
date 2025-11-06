/**
 * Discovery Job Processor: Background processor for feed discovery jobs
 */

import { AlternativeFinder } from './alternative-finder';
import { storage } from '../../storage';
import { db } from '../../db';
import { feedCatalog } from '@shared/schema';
import { nanoid } from 'nanoid';
import type { FeedCatalog, InsertFeedCatalog } from '@shared/schema';

interface DiscoveryJob {
  feedId: string;
  priority: 'high' | 'medium' | 'low';
  retryCount: number;
  createdAt: Date;
  metadata?: {
    subscriberCount?: number;
    lastErrorType?: string;
    reason?: string;
  };
}

// Job queue (in production, would use a proper queue like Bull or Redis)
class DiscoveryJobQueue {
  private jobs: Map<string, DiscoveryJob> = new Map();
  private processing: Set<string> = new Set();
  
  /**
   * Add a job to the queue
   */
  enqueue(job: DiscoveryJob): void {
    // Don't add duplicate jobs
    if (this.jobs.has(job.feedId) || this.processing.has(job.feedId)) {
      console.log(`Job for feed ${job.feedId} already exists, skipping`);
      return;
    }
    
    this.jobs.set(job.feedId, job);
    console.log(`📥 Enqueued discovery job for feed ${job.feedId} with priority ${job.priority}`);
  }
  
  /**
   * Get next job based on priority
   */
  dequeue(): DiscoveryJob | null {
    if (this.jobs.size === 0) {
      return null;
    }
    
    // Sort jobs by priority and age
    const sortedJobs = Array.from(this.jobs.values()).sort((a, b) => {
      // Priority order: high > medium > low
      const priorityWeight = { high: 3, medium: 2, low: 1 };
      const priorityDiff = priorityWeight[b.priority] - priorityWeight[a.priority];
      
      if (priorityDiff !== 0) {
        return priorityDiff;
      }
      
      // If same priority, older jobs first
      return a.createdAt.getTime() - b.createdAt.getTime();
    });
    
    const job = sortedJobs[0];
    if (job) {
      this.jobs.delete(job.feedId);
      this.processing.add(job.feedId);
    }
    
    return job;
  }
  
  /**
   * Mark job as complete
   */
  complete(feedId: string): void {
    this.processing.delete(feedId);
  }
  
  /**
   * Re-queue a failed job
   */
  requeue(job: DiscoveryJob): void {
    this.processing.delete(job.feedId);
    
    // Increase retry count
    job.retryCount++;
    
    // Lower priority after failures
    if (job.retryCount >= 2 && job.priority === 'high') {
      job.priority = 'medium';
    } else if (job.retryCount >= 3 && job.priority === 'medium') {
      job.priority = 'low';
    }
    
    // Only requeue if under max retries
    if (job.retryCount < 3) {
      this.enqueue(job);
    } else {
      console.log(`❌ Max retries reached for feed ${job.feedId}, abandoning job`);
    }
  }
  
  /**
   * Get queue status
   */
  getStatus(): { pending: number; processing: number } {
    return {
      pending: this.jobs.size,
      processing: this.processing.size,
    };
  }
}

export class DiscoveryJobProcessor {
  private finder: AlternativeFinder;
  private queue: DiscoveryJobQueue;
  private isRunning: boolean = false;
  private processingInterval: NodeJS.Timeout | null = null;
  private readonly BATCH_SIZE = 3; // Process up to 3 jobs in parallel
  private readonly POLL_INTERVAL = 30000; // Poll every 30 seconds

  constructor() {
    this.finder = new AlternativeFinder();
    this.queue = new DiscoveryJobQueue();
  }

  /**
   * Start the job processor
   */
  start(): void {
    if (this.isRunning) {
      console.log('Discovery job processor is already running');
      return;
    }

    this.isRunning = true;
    console.log('🚀 Starting discovery job processor');

    // Process jobs periodically
    this.processingInterval = setInterval(() => {
      this.processBatch().catch(error => {
        console.error('Error processing discovery batch:', error);
      });
    }, this.POLL_INTERVAL);

    // Process immediately
    this.processBatch().catch(console.error);
  }

  /**
   * Stop the job processor
   */
  stop(): void {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;
    
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
      this.processingInterval = null;
    }

    console.log('🛑 Stopped discovery job processor');
  }

  /**
   * Queue a discovery job for a failed feed
   */
  async queueDiscovery(
    feedId: string, 
    reason: string = 'feed_failure',
    priority?: 'high' | 'medium' | 'low'
  ): Promise<void> {
    try {
      const feed = await storage.getFeedById(feedId);
      if (!feed) {
        console.error(`Feed ${feedId} not found`);
        return;
      }

      // Check if we've already tried too many times
      const attemptCount = await storage.getDiscoveryAttemptCount(feedId);
      if (attemptCount >= 3) {
        console.log(`Feed ${feedId} has reached max discovery attempts`);
        return;
      }

      // Determine priority based on subscriber count if not provided
      if (!priority) {
        // Get all subscriptions for this feed
        const allSubscriptions = await storage.getAllFeedSubscriptions();
        const feedSubscriptions = allSubscriptions.filter(sub => sub.feedId === feedId);
        const subscriberCount = feedSubscriptions.length;
        
        if (subscriberCount >= 10) {
          priority = 'high';
        } else if (subscriberCount >= 3) {
          priority = 'medium';
        } else {
          priority = 'low';
        }
      }

      // Create and enqueue job
      const allSubs = await storage.getAllFeedSubscriptions();
      const feedSubs = allSubs.filter(sub => sub.feedId === feedId);
      const job: DiscoveryJob = {
        feedId,
        priority,
        retryCount: 0,
        createdAt: new Date(),
        metadata: {
          subscriberCount: feedSubs.length,
          lastErrorType: feed.lastErrorMessage || undefined,
          reason,
        },
      };

      this.queue.enqueue(job);
      console.log(`📋 Queued discovery for feed ${feedId} (${feed.name}) with priority ${priority}`);
      
      // If processor isn't running, process immediately
      if (!this.isRunning) {
        await this.processBatch();
      }
    } catch (error) {
      console.error(`Failed to queue discovery job for feed ${feedId}:`, error);
    }
  }

  /**
   * Process a batch of jobs
   */
  private async processBatch(): Promise<void> {
    const status = this.queue.getStatus();
    
    if (status.pending === 0) {
      return; // No jobs to process
    }

    console.log(`📦 Processing discovery batch (${status.pending} pending, ${status.processing} processing)`);

    // Get jobs up to batch size
    const jobs: DiscoveryJob[] = [];
    for (let i = 0; i < this.BATCH_SIZE; i++) {
      const job = this.queue.dequeue();
      if (job) {
        jobs.push(job);
      } else {
        break;
      }
    }

    if (jobs.length === 0) {
      return;
    }

    // Process jobs in parallel
    const promises = jobs.map(job => this.processJob(job));
    await Promise.allSettled(promises);
  }

  /**
   * Process a single discovery job
   */
  private async processJob(job: DiscoveryJob): Promise<void> {
    console.log(`🔧 Processing discovery job for feed ${job.feedId}`);

    try {
      // Get the feed
      const feed = await storage.getFeedById(job.feedId);
      if (!feed) {
        console.error(`Feed ${job.feedId} not found`);
        this.queue.complete(job.feedId);
        return;
      }

      // Run discovery
      const candidates = await this.finder.findAlternatives(feed);
      
      if (candidates.length === 0) {
        console.log(`No alternatives found for feed ${job.feedId}`);
        this.queue.complete(job.feedId);
        return;
      }

      console.log(`Found ${candidates.length} alternatives for feed ${job.feedId}`);

      // Process the best candidate
      const bestCandidate = candidates[0];
      
      // Check if this is a high-confidence match for auto-subscription
      if (bestCandidate.confidence >= 90 && bestCandidate.sourceType === feed.sourceType) {
        await this.handleHighConfidenceMatch(feed, bestCandidate);
      } else if (bestCandidate.confidence >= 60) {
        await this.handleMediumConfidenceMatch(feed, bestCandidate);
      } else {
        console.log(`Low confidence alternatives for feed ${job.feedId}, not taking action`);
      }

      this.queue.complete(job.feedId);
    } catch (error) {
      console.error(`Error processing discovery job for feed ${job.feedId}:`, error);
      
      // Requeue the job if it hasn't exceeded retry limit
      if (job.retryCount < 2) {
        this.queue.requeue(job);
      } else {
        this.queue.complete(job.feedId);
      }
    }
  }

  /**
   * Handle high-confidence alternative (auto-subscribe)
   */
  private async handleHighConfidenceMatch(feed: FeedCatalog, candidate: any): Promise<void> {
    console.log(`🎯 High confidence match found for ${feed.name}: ${candidate.url}`);

    try {
      // First, check if the alternative feed exists in our catalog (using cached version)
      const allFeeds = await this.finder.getCachedFeedCatalog();
      let alternativeFeed = allFeeds.find(f => f.url === candidate.url);
      
      if (!alternativeFeed) {
        // Add the feed to catalog directly using db
        const feedId = nanoid();
        const [newFeed] = await db.insert(feedCatalog).values({
          id: feedId,
          url: candidate.url,
          name: candidate.title || feed.name + ' (Alternative)',
          description: candidate.description || feed.description || '',
          sourceType: candidate.sourceType || feed.sourceType,
          topics: candidate.topics || feed.topics || [],
          domain: feed.domain, 
          category: feed.category,
          isActive: true,
          isApproved: true,
          createdAt: new Date(),
        }).returning();
        alternativeFeed = newFeed;
      }

      // Auto-subscribe all users
      const subscribedCount = await storage.autoSubscribeUsersToAlternative(
        feed.id,
        alternativeFeed.id
      );

      if (subscribedCount > 0) {
        console.log(`✅ Auto-subscribed ${subscribedCount} users to alternative feed ${alternativeFeed.id}`);
        
        // Save discovery attempt with auto-subscription flag
        await storage.saveDiscoveryAttempt({
          originalFeedId: feed.id,
          candidateFeedId: alternativeFeed.id,
          candidateUrl: candidate.url,
          strategy: candidate.strategy,
          confidence: candidate.confidence,
          autoSubscribed: true,
          metadata: {
            discoveryDetails: {
              subscribedCount,
              originalFeedName: feed.name,
              alternativeFeedName: alternativeFeed.name,
            },
          },
          validatedAt: new Date(),
          processedAt: new Date(),
          accepted: true,
        });

        // Get users subscribed to the new alternative feed
        const allSubs = await storage.getAllFeedSubscriptions();
        const alternativeFeedSubs = allSubs.filter(sub => sub.feedId === alternativeFeed.id);
        const userIds = Array.from(new Set(alternativeFeedSubs.map(sub => sub.userId)));
        
        for (const userId of userIds) {
          await storage.saveFeedNotification({
            userId,
            feedId: feed.id,
            severity: 'info',
            message: `Your subscription to "${feed.name}" has been automatically switched to a working alternative because the original feed is no longer available.`,
            isRead: false,
            lastNotifiedAt: new Date(),
          });
        }
      }
    } catch (error) {
      console.error('Error handling high confidence match:', error);
    }
  }

  /**
   * Handle medium-confidence alternative (notify users)
   */
  private async handleMediumConfidenceMatch(feed: FeedCatalog, candidate: any): Promise<void> {
    console.log(`💡 Medium confidence match found for ${feed.name}: ${candidate.url}`);

    try {
      // First, check if the alternative feed exists in our catalog (using cached version)
      const allFeeds = await this.finder.getCachedFeedCatalog();
      let alternativeFeed = allFeeds.find(f => f.url === candidate.url);
      
      if (!alternativeFeed) {
        // Add the feed to catalog directly using db
        const feedId = nanoid();
        const [newFeed] = await db.insert(feedCatalog).values({
          id: feedId,
          url: candidate.url,
          name: candidate.title || feed.name + ' (Alternative)',
          description: candidate.description || feed.description || '',
          sourceType: candidate.sourceType || feed.sourceType,
          topics: candidate.topics || feed.topics || [],
          domain: feed.domain,
          category: feed.category,
          isActive: true,
          isApproved: true,
          createdAt: new Date(),
        }).returning();
        alternativeFeed = newFeed;
      }

      // Save discovery attempt
      await storage.saveDiscoveryAttempt({
        originalFeedId: feed.id,
        candidateFeedId: alternativeFeed.id,
        candidateUrl: candidate.url,
        strategy: candidate.strategy,
        confidence: candidate.confidence,
        autoSubscribed: false,
        metadata: {
          discoveryDetails: {
            originalFeedName: feed.name,
            alternativeFeedName: alternativeFeed.name,
          },
        },
        validatedAt: new Date(),
      });

      // Get users subscribed to the original feed
      const allSubs = await storage.getAllFeedSubscriptions();
      const originalFeedSubs = allSubs.filter(sub => sub.feedId === feed.id);
      const userIds = Array.from(new Set(originalFeedSubs.map(sub => sub.userId)));
      
      for (const userId of userIds) {
        await this.finder.notifyUserOfAlternative(userId, feed, alternativeFeed);
      }
      
      console.log(`📧 Notified ${userIds.length} users about alternative for ${feed.name}`);
    } catch (error) {
      console.error('Error handling medium confidence match:', error);
    }
  }

  /**
   * Get processor status
   */
  getStatus(): { isRunning: boolean; queueStatus: { pending: number; processing: number } } {
    return {
      isRunning: this.isRunning,
      queueStatus: this.queue.getStatus(),
    };
  }
}

// Export singleton instance
export const discoveryJobProcessor = new DiscoveryJobProcessor();