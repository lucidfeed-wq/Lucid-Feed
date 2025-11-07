/**
 * Real-Time Feed Health Monitor
 * Continuously monitors feed health and triggers discovery when needed
 */

import { storage } from '../../storage';
import type { FeedCatalog } from '@shared/schema';
import { validateFeed } from '../feed-ingestion/unified-pipeline';
import { FeedDiscoveryEngine } from '../feed-discovery/discovery-engine';
import { FeedHealthNotifier } from '../notifications/feed-health-notifier';

export interface MonitorConfig {
  checkIntervalMs: number; // How often to check feeds (default: 5 minutes)
  batchSize: number; // How many feeds to check per batch
  failureThreshold: number; // Failures before triggering discovery
  healthyCheckInterval: number; // Hours between checks for healthy feeds
  unhealthyCheckInterval: number; // Minutes between checks for unhealthy feeds
}

export interface FeedHealthStatus {
  feedId: string;
  status: 'healthy' | 'degraded' | 'failing' | 'dead';
  lastCheck: Date;
  consecutiveFailures: number;
  lastError?: string;
  discoveryInProgress?: boolean;
  alternativeFound?: string;
}

export class RealTimeFeedMonitor {
  private config: MonitorConfig;
  private monitorInterval: NodeJS.Timeout | null = null;
  private healthCache = new Map<string, FeedHealthStatus>();
  private discoveryEngine: FeedDiscoveryEngine;
  private notifier: FeedHealthNotifier;
  private isRunning = false;

  constructor(config?: Partial<MonitorConfig>) {
    this.config = {
      checkIntervalMs: config?.checkIntervalMs || 5 * 60 * 1000, // 5 minutes
      batchSize: config?.batchSize || 10,
      failureThreshold: config?.failureThreshold || 3,
      healthyCheckInterval: config?.healthyCheckInterval || 24, // hours
      unhealthyCheckInterval: config?.unhealthyCheckInterval || 30, // minutes
      ...config
    };

    this.discoveryEngine = new FeedDiscoveryEngine();
    this.notifier = new FeedHealthNotifier();
  }

  /**
   * Start monitoring
   */
  async start() {
    if (this.isRunning) {
      console.log('Feed monitor already running');
      return;
    }

    console.log('🚀 Starting Real-Time Feed Monitor');
    this.isRunning = true;

    // Initial check
    await this.monitorCycle();

    // Set up recurring checks
    this.monitorInterval = setInterval(
      () => this.monitorCycle().catch(console.error),
      this.config.checkIntervalMs
    );
  }

  /**
   * Stop monitoring
   */
  stop() {
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
      this.monitorInterval = null;
    }
    this.isRunning = false;
    console.log('🛑 Stopped Real-Time Feed Monitor');
  }

  /**
   * Single monitoring cycle
   */
  private async monitorCycle() {
    try {
      // Get feeds that need checking
      const feedsToCheck = await this.selectFeedsForCheck();
      
      if (feedsToCheck.length === 0) {
        return;
      }

      console.log(`🔍 Checking ${feedsToCheck.length} feeds`);

      // Check feeds in parallel (respecting batch size)
      const results = await this.checkFeedsBatch(feedsToCheck);

      // Process results
      for (const result of results) {
        await this.processFeedHealth(result);
      }

      // Trigger discovery for failed feeds
      await this.triggerDiscoveryForFailedFeeds();

      // Clean up completed discoveries
      await this.cleanupCompletedDiscoveries();

    } catch (error) {
      console.error('Monitor cycle error:', error);
    }
  }

  /**
   * Select feeds that need checking based on their last check time and health
   */
  private async selectFeedsForCheck(): Promise<FeedCatalog[]> {
    const allFeeds = await storage.getActiveFeeds();
    const now = new Date();
    const feedsToCheck: FeedCatalog[] = [];

    for (const feed of allFeeds) {
      const healthStatus = this.healthCache.get(feed.id);
      
      // First time check
      if (!healthStatus) {
        feedsToCheck.push(feed);
        continue;
      }

      const hoursSinceLastCheck = 
        (now.getTime() - healthStatus.lastCheck.getTime()) / (1000 * 60 * 60);

      // Check based on health status
      if (healthStatus.status === 'healthy') {
        // Check healthy feeds less frequently
        if (hoursSinceLastCheck >= this.config.healthyCheckInterval) {
          feedsToCheck.push(feed);
        }
      } else {
        // Check unhealthy feeds more frequently
        const minutesSinceLastCheck = hoursSinceLastCheck * 60;
        if (minutesSinceLastCheck >= this.config.unhealthyCheckInterval) {
          feedsToCheck.push(feed);
        }
      }
    }

    // Return batch
    return feedsToCheck.slice(0, this.config.batchSize);
  }

  /**
   * Check a batch of feeds in parallel
   */
  private async checkFeedsBatch(feeds: FeedCatalog[]): Promise<FeedHealthStatus[]> {
    const checkPromises = feeds.map(async (feed) => {
      const status = await this.checkSingleFeed(feed);
      
      // Update cache
      this.healthCache.set(feed.id, status);
      
      // Update database
      await this.updateFeedHealthInDB(feed.id, status);
      
      return status;
    });

    return Promise.all(checkPromises);
  }

  /**
   * Check a single feed's health
   */
  private async checkSingleFeed(feed: FeedCatalog): Promise<FeedHealthStatus> {
    const cachedStatus = this.healthCache.get(feed.id);
    const previousFailures = cachedStatus?.consecutiveFailures || 0;

    try {
      // Validate the feed
      const validation = await validateFeed(feed.url);

      if (validation.valid) {
        return {
          feedId: feed.id,
          status: 'healthy',
          lastCheck: new Date(),
          consecutiveFailures: 0
        };
      } else {
        const newFailures = previousFailures + 1;
        return {
          feedId: feed.id,
          status: this.calculateStatus(newFailures),
          lastCheck: new Date(),
          consecutiveFailures: newFailures,
          lastError: validation.error
        };
      }
    } catch (error: any) {
      const newFailures = previousFailures + 1;
      return {
        feedId: feed.id,
        status: this.calculateStatus(newFailures),
        lastCheck: new Date(),
        consecutiveFailures: newFailures,
        lastError: error.message
      };
    }
  }

  /**
   * Calculate feed status based on failure count
   */
  private calculateStatus(failures: number): FeedHealthStatus['status'] {
    if (failures === 0) return 'healthy';
    if (failures <= 2) return 'degraded';
    if (failures <= 5) return 'failing';
    return 'dead';
  }

  /**
   * Process feed health result
   */
  private async processFeedHealth(status: FeedHealthStatus) {
    const feed = await storage.getFeedById(status.feedId);
    if (!feed) return;

    // Log status changes
    const previousStatus = this.healthCache.get(status.feedId);
    if (previousStatus && previousStatus.status !== status.status) {
      console.log(`📊 Feed ${feed.name} status changed: ${previousStatus.status} → ${status.status}`);
      
      // Notify user of status changes
      if (status.status === 'failing' || status.status === 'dead') {
        await this.notifier.notifyFeedFailure(feed, status.lastError || 'Unknown error');
      } else if (status.status === 'healthy' && previousStatus.status !== 'healthy') {
        await this.notifier.notifyFeedRecovered(feed);
      }
    }
  }

  /**
   * Update feed health in database
   */
  private async updateFeedHealthInDB(feedId: string, status: FeedHealthStatus) {
    await storage.updateFeedHealth(feedId, {
      lastHealthCheck: status.lastCheck,
      consecutiveFailures: status.consecutiveFailures,
      healthStatus: status.status,
      lastErrorMessage: status.lastError
    });
  }

  /**
   * Trigger discovery for feeds that have exceeded failure threshold
   */
  private async triggerDiscoveryForFailedFeeds() {
    for (const [feedId, status] of this.healthCache.entries()) {
      // Skip if discovery already in progress
      if (status.discoveryInProgress) continue;

      // Trigger discovery if threshold exceeded
      if (status.consecutiveFailures >= this.config.failureThreshold) {
        console.log(`🔄 Triggering discovery for failed feed ${feedId}`);
        
        // Mark discovery in progress
        status.discoveryInProgress = true;
        
        // Get feed details
        const feed = await storage.getFeedById(feedId);
        if (!feed) continue;

        // Trigger async discovery
        this.discoveryEngine.discoverAlternative(feed)
          .then(alternative => {
            if (alternative) {
              status.alternativeFound = alternative.url;
              console.log(`✅ Found alternative for ${feed.name}: ${alternative.url}`);
              
              // Notify user of alternative
              this.notifier.notifyAlternativeFound(feed, alternative);
            } else {
              console.log(`❌ No alternative found for ${feed.name}`);
            }
            status.discoveryInProgress = false;
          })
          .catch(error => {
            console.error(`Discovery error for ${feed.name}:`, error);
            status.discoveryInProgress = false;
          });
      }
    }
  }

  /**
   * Clean up completed discoveries
   */
  private async cleanupCompletedDiscoveries() {
    // Check for accepted alternatives and update feeds
    const notifications = await storage.getAcceptedNotifications();
    
    for (const notification of notifications) {
      if (notification.alternativeFeedId && notification.feedId) {
        const feedId = notification.feedId;
        const alternativeFeedId = notification.alternativeFeedId;
        
        // Get the alternative feed's URL
        const alternativeFeed = await storage.getFeedById(alternativeFeedId);
        if (!alternativeFeed) continue;
        
        // Update feed URL
        await storage.updateFeedUrl(feedId, alternativeFeed.url);
        
        // Reset health status
        this.healthCache.set(feedId, {
          feedId,
          status: 'healthy',
          lastCheck: new Date(),
          consecutiveFailures: 0
        });
        
        console.log(`🔄 Updated feed ${feedId} with new URL from ${alternativeFeedId}: ${alternativeFeed.url}`);
      }
    }
  }

  /**
   * Get current health snapshot
   */
  getHealthSnapshot(): {
    total: number;
    healthy: number;
    degraded: number;
    failing: number;
    dead: number;
  } {
    const snapshot = {
      total: this.healthCache.size,
      healthy: 0,
      degraded: 0,
      failing: 0,
      dead: 0
    };

    for (const status of this.healthCache.values()) {
      snapshot[status.status]++;
    }

    return snapshot;
  }

  /**
   * Force check a specific feed
   */
  async checkFeedNow(feedId: string): Promise<FeedHealthStatus | null> {
    const feed = await storage.getFeedById(feedId);
    if (!feed) return null;

    const status = await this.checkSingleFeed(feed);
    this.healthCache.set(feedId, status);
    await this.updateFeedHealthInDB(feedId, status);
    
    return status;
  }
}

// Singleton instance
let monitorInstance: RealTimeFeedMonitor | null = null;

/**
 * Get or create monitor instance
 */
export function getMonitor(config?: Partial<MonitorConfig>): RealTimeFeedMonitor {
  if (!monitorInstance) {
    monitorInstance = new RealTimeFeedMonitor(config);
  }
  return monitorInstance;
}

/**
 * Start global monitoring
 */
export async function startGlobalMonitoring() {
  const monitor = getMonitor();
  await monitor.start();
  
  // Log health snapshot every hour
  setInterval(() => {
    const snapshot = monitor.getHealthSnapshot();
    console.log('📊 Feed Health Snapshot:', snapshot);
  }, 60 * 60 * 1000);
  
  return monitor;
}