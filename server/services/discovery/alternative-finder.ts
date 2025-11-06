/**
 * AlternativeFinder: Main class for discovering alternative feeds
 */

import type { FeedCatalog, FeedCandidate } from '@shared/schema';
import { storage } from '../../storage';
import Parser from 'rss-parser';
import { nanoid } from 'nanoid';

// Import discovery strategies
import { TopicBasedDiscovery } from './strategies/topic-based-discovery';
import { DomainVariantDiscovery } from './strategies/domain-variant-discovery';
import { SocialAPIDiscovery } from './strategies/social-api-discovery';
import { SearchEngineDiscovery } from './strategies/search-engine-discovery';
import { WaybackMachineDiscovery } from './strategies/wayback-machine-discovery';
import type { DiscoveryStrategy } from './strategies/discovery-strategy';

// Score weights for candidate ranking
const SCORE_WEIGHTS = {
  TOPIC_MATCH: 0.3,
  SAME_SOURCE_TYPE: 0.2,
  DOMAIN_SIMILARITY: 0.2,
  VALIDATION_SUCCESS: 0.15,
  DISCOVERY_STRATEGY: 0.15,
};

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'LucidFeed/1.0 (Feed Alternative Discovery)',
  },
});

export class AlternativeFinder {
  private strategies: DiscoveryStrategy[];
  private feedCatalogCache: { data: FeedCatalog[] | null; timestamp: number } = { data: null, timestamp: 0 };
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

  constructor() {
    // Initialize discovery strategies
    this.strategies = [
      new TopicBasedDiscovery(),
      new DomainVariantDiscovery(),
      new SocialAPIDiscovery(),
      new SearchEngineDiscovery(),
      new WaybackMachineDiscovery(),
    ];
  }

  /**
   * Get cached feed catalog or fetch fresh if expired
   */
  async getCachedFeedCatalog(): Promise<FeedCatalog[]> {
    const now = Date.now();
    
    // Check if cache is valid
    if (this.feedCatalogCache.data && (now - this.feedCatalogCache.timestamp) < this.CACHE_TTL) {
      console.log(`📦 Using cached feed catalog (${this.feedCatalogCache.data.length} feeds)`);
      return this.feedCatalogCache.data;
    }
    
    // Fetch fresh catalog
    console.log('📡 Fetching fresh feed catalog...');
    const catalog = await storage.getFeedCatalog();
    
    // Update cache
    this.feedCatalogCache = {
      data: catalog,
      timestamp: now
    };
    
    console.log(`📦 Cached ${catalog.length} feeds`);
    return catalog;
  }

  /**
   * Find alternative feeds for a broken feed
   */
  async findAlternatives(brokenFeed: FeedCatalog): Promise<FeedCandidate[]> {
    console.log(`🔍 Finding alternatives for feed: ${brokenFeed.name} (${brokenFeed.id})`);

    // Check if we've already tried too many times
    const attemptCount = await storage.getDiscoveryAttemptCount(brokenFeed.id);
    if (attemptCount >= 3) {
      console.log(`⚠️ Feed ${brokenFeed.id} already has ${attemptCount} discovery attempts, skipping`);
      return [];
    }

    // Run all applicable strategies in parallel
    const strategyPromises = this.strategies
      .filter(strategy => strategy.isApplicable(brokenFeed))
      .map(strategy => this.runStrategy(strategy, brokenFeed));

    const strategyResults = await Promise.allSettled(strategyPromises);
    
    // Collect all candidates from successful strategies
    const allCandidates: FeedCandidate[] = [];
    for (const result of strategyResults) {
      if (result.status === 'fulfilled' && result.value) {
        allCandidates.push(...result.value);
      }
    }

    // Deduplicate candidates by URL
    const uniqueCandidates = this.deduplicateCandidates(allCandidates);

    // Score and rank candidates
    const scoredCandidates = await this.scoreCandidates(uniqueCandidates, brokenFeed);

    // Sort by confidence score descending
    scoredCandidates.sort((a, b) => b.confidence - a.confidence);

    // Validate top candidates in parallel (limit to top 10)
    const topCandidates = scoredCandidates.slice(0, 10);
    const validationPromises = topCandidates.map(candidate => 
      this.validateCandidate(candidate)
    );
    
    await Promise.all(validationPromises);

    // Filter out invalid candidates
    const validCandidates = topCandidates.filter(c => 
      c.validationResult?.isValid === true
    );

    // Save discovery attempts for tracking
    for (const candidate of validCandidates.slice(0, 3)) {
      await this.saveDiscoveryAttempt(brokenFeed, candidate);
    }

    console.log(`✅ Found ${validCandidates.length} valid alternatives for feed ${brokenFeed.id}`);
    return validCandidates;
  }

  /**
   * Run a single discovery strategy
   */
  private async runStrategy(
    strategy: DiscoveryStrategy, 
    feed: FeedCatalog
  ): Promise<FeedCandidate[]> {
    try {
      console.log(`🔧 Running ${strategy.name} strategy for feed ${feed.id}`);
      const candidates = await strategy.discover(feed);
      return candidates;
    } catch (error) {
      console.error(`❌ Strategy ${strategy.name} failed:`, error);
      return [];
    }
  }

  /**
   * Deduplicate candidates by URL
   */
  private deduplicateCandidates(candidates: FeedCandidate[]): FeedCandidate[] {
    const seen = new Set<string>();
    return candidates.filter(candidate => {
      const url = candidate.url.toLowerCase();
      if (seen.has(url)) {
        return false;
      }
      seen.add(url);
      return true;
    });
  }

  /**
   * Score candidates based on similarity to original feed
   */
  private async scoreCandidates(
    candidates: FeedCandidate[], 
    originalFeed: FeedCatalog
  ): Promise<FeedCandidate[]> {
    return candidates.map(candidate => {
      let score = 0;

      // Topic match score
      if (candidate.topics && originalFeed.topics) {
        const matchingTopics = candidate.topics.filter(t => 
          originalFeed.topics?.includes(t as any)
        );
        const topicScore = matchingTopics.length / Math.max(originalFeed.topics.length, 1);
        score += topicScore * SCORE_WEIGHTS.TOPIC_MATCH;
      }

      // Same source type score
      if (candidate.sourceType === originalFeed.sourceType) {
        score += SCORE_WEIGHTS.SAME_SOURCE_TYPE;
      }

      // Domain similarity score
      try {
        const originalDomain = new URL(originalFeed.url).hostname.replace(/^www\./, '');
        const candidateDomain = new URL(candidate.url).hostname.replace(/^www\./, '');
        
        if (originalDomain === candidateDomain) {
          score += SCORE_WEIGHTS.DOMAIN_SIMILARITY;
        } else if (this.areSimilarDomains(originalDomain, candidateDomain)) {
          score += SCORE_WEIGHTS.DOMAIN_SIMILARITY * 0.5;
        }
      } catch (error) {
        // Invalid URLs, no domain score
      }

      // Strategy confidence score
      const strategyConfidences: Record<string, number> = {
        'topic_based': 0.8,
        'domain_variant': 0.9,
        'social_api': 0.7,
        'search_engine': 0.6,
        'wayback_machine': 0.85,
      };
      score += (strategyConfidences[candidate.strategy] || 0.5) * SCORE_WEIGHTS.DISCOVERY_STRATEGY;

      // Apply any existing similarity score from the strategy
      if (candidate.similarityScore) {
        score = (score + candidate.similarityScore) / 2;
      }

      // Convert to 0-100 confidence score
      candidate.confidence = Math.round(score * 100);
      
      return candidate;
    });
  }

  /**
   * Check if two domains are similar (e.g., subdomains, related domains)
   */
  private areSimilarDomains(domain1: string, domain2: string): boolean {
    // Remove common prefixes
    const clean1 = domain1.replace(/^(www\.|blog\.|feed\.|feeds\.|api\.)/, '');
    const clean2 = domain2.replace(/^(www\.|blog\.|feed\.|feeds\.|api\.)/, '');
    
    // Check if one is a subdomain of the other
    if (clean1.includes(clean2) || clean2.includes(clean1)) {
      return true;
    }
    
    // Check if they share the same base domain (e.g., example.com vs example.org)
    const base1 = clean1.split('.')[0];
    const base2 = clean2.split('.')[0];
    
    return base1 === base2;
  }

  /**
   * Validate a feed candidate by trying to parse it
   */
  async validateCandidate(candidate: FeedCandidate): Promise<boolean> {
    try {
      console.log(`🔍 Validating candidate: ${candidate.url}`);
      
      // Try to parse the feed
      const feed = await parser.parseURL(candidate.url);
      
      // Check if feed has items
      const hasItems = feed.items && feed.items.length > 0;
      const itemCount = feed.items?.length || 0;
      
      // Extract additional metadata if available
      if (feed.title && !candidate.title) {
        candidate.title = feed.title;
      }
      if (feed.description && !candidate.description) {
        candidate.description = feed.description;
      }
      
      candidate.validationResult = {
        isValid: true,
        hasItems,
        itemCount,
      };
      
      // Boost confidence if validation successful and has items
      if (hasItems) {
        candidate.confidence = Math.min(100, candidate.confidence + 10);
      }
      
      return true;
    } catch (error: any) {
      console.log(`❌ Validation failed for ${candidate.url}: ${error.message}`);
      candidate.validationResult = {
        isValid: false,
        hasItems: false,
        error: error.message,
      };
      
      // Reduce confidence on validation failure
      candidate.confidence = Math.max(0, candidate.confidence - 20);
      
      return false;
    }
  }

  /**
   * Save a discovery attempt for tracking
   */
  private async saveDiscoveryAttempt(
    originalFeed: FeedCatalog, 
    candidate: FeedCandidate
  ): Promise<void> {
    try {
      await storage.saveDiscoveryAttempt({
        originalFeedId: originalFeed.id,
        candidateUrl: candidate.url,
        strategy: candidate.strategy,
        confidence: candidate.confidence,
        autoSubscribed: false,
        metadata: {
          similarityScore: candidate.similarityScore,
          matchedTopics: candidate.topics,
          discoveryDetails: {
            title: candidate.title,
            description: candidate.description,
            sourceType: candidate.sourceType,
            validationResult: candidate.validationResult,
          },
        },
        validatedAt: candidate.validationResult ? new Date() : null,
      });
    } catch (error) {
      console.error('Failed to save discovery attempt:', error);
    }
  }

  /**
   * Auto-subscribe users to an alternative feed
   */
  async autoSubscribeAlternative(
    userId: string, 
    oldFeedId: string, 
    newFeedId: string
  ): Promise<void> {
    try {
      // Check if user is subscribed to the old feed
      const isSubscribed = await storage.isSubscribedToFeed(userId, oldFeedId);
      if (!isSubscribed) {
        console.log(`User ${userId} is not subscribed to old feed ${oldFeedId}`);
        return;
      }

      // Subscribe user to the new feed
      await storage.subscribeFeed(userId, newFeedId);
      
      // Unsubscribe from the old feed if it's permanently broken
      const oldFeed = await storage.getFeedById(oldFeedId);
      if (oldFeed && oldFeed.lastFetchStatus === 'permanent_error') {
        await storage.unsubscribeFeed(userId, oldFeedId);
      }

      // Update discovery attempt to mark as auto-subscribed
      const attempts = await storage.getDiscoveryHistory(oldFeedId);
      const relevantAttempt = attempts.find(a => 
        a.candidateFeedId === newFeedId && 
        a.confidence >= 90
      );
      
      if (relevantAttempt) {
        await storage.markDiscoveryAccepted(
          relevantAttempt.id, 
          true, 
          'Auto-subscribed due to high confidence'
        );
      }

      console.log(`✅ Auto-subscribed user ${userId} from feed ${oldFeedId} to ${newFeedId}`);
    } catch (error) {
      console.error('Failed to auto-subscribe alternative:', error);
    }
  }

  /**
   * Notify user about discovered alternative
   */
  async notifyUserOfAlternative(
    userId: string, 
    oldFeed: FeedCatalog, 
    newFeed: FeedCatalog
  ): Promise<void> {
    try {
      // Check if we've already notified recently
      const recentNotification = await storage.getRecentNotificationForFeed(
        userId, 
        oldFeed.id, 
        48 // Don't re-notify within 48 hours
      );
      
      if (recentNotification) {
        console.log(`Already notified user ${userId} about feed ${oldFeed.id} recently`);
        return;
      }

      // Create notification
      await storage.saveFeedNotification({
        userId,
        feedId: oldFeed.id,
        severity: 'info',
        message: `Alternative found for "${oldFeed.name}": We found a replacement feed: "${newFeed.name}". The original feed appears to be broken, would you like to switch to the alternative?`,
        technicalDetails: JSON.stringify({
          oldFeedId: oldFeed.id,
          oldFeedName: oldFeed.name,
          newFeedId: newFeed.id,
          newFeedName: newFeed.name,
          newFeedUrl: newFeed.url,
          confidence: 75, // Default confidence for manual review
        }),
        isRead: false,
      });

      console.log(`📧 Notified user ${userId} about alternative for feed ${oldFeed.id}`);
    } catch (error) {
      console.error('Failed to notify user of alternative:', error);
    }
  }

  /**
   * Process auto-subscription for high-confidence alternatives
   */
  async processAutoSubscriptions(feedId: string): Promise<number> {
    const feed = await storage.getFeedById(feedId);
    if (!feed) return 0;

    // Get accepted discovery attempts with high confidence
    const attempts = await storage.getDiscoveryHistory(feedId);
    const highConfidenceAttempt = attempts.find(a => 
      a.confidence >= 90 && 
      a.candidateFeedId && 
      !a.autoSubscribed
    );

    if (!highConfidenceAttempt || !highConfidenceAttempt.candidateFeedId) {
      return 0;
    }

    // Auto-subscribe all users to the alternative
    const subscribedCount = await storage.autoSubscribeUsersToAlternative(
      feedId,
      highConfidenceAttempt.candidateFeedId
    );

    // Update the attempt to mark as auto-subscribed
    if (subscribedCount > 0) {
      await storage.markDiscoveryAccepted(
        highConfidenceAttempt.id,
        true,
        `Auto-subscribed ${subscribedCount} users`
      );
    }

    return subscribedCount;
  }
}