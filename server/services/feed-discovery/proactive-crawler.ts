/**
 * Proactive Discovery Crawler
 * Autonomously discovers and catalogs feeds 24/7
 * Limits to top 100 per topic with cross-referencing
 */

import { db } from '../../db';
import { learningCatalog, feedCatalog } from '../../../shared/schema';
import { eq, and, sql, desc, lt } from 'drizzle-orm';
import { searchYouTubeChannels } from './youtube-search';
import { searchRedditSubreddits } from './reddit-search';
import { searchSubstackNewsletters } from './substack-search';

const FEEDS_PER_TOPIC_LIMIT = 100;
const DISCOVERY_BATCH_SIZE = 10;
const DISCOVERY_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes

// Topic search queries for each source type
const TOPIC_QUERIES: Record<string, { youtube?: string[], reddit?: string[], substack?: string[] }> = {
  'metabolic': {
    youtube: ['metabolic health', 'insulin resistance', 'metabolic syndrome'],
    reddit: ['metabolichealth', 'insulinresistance', 'metabolicsyndrome'],
    substack: ['metabolic health', 'metabolism']
  },
  'carnivore': {
    youtube: ['carnivore diet', 'zero carb', 'meat based'],
    reddit: ['carnivore', 'zerocarb', 'carnivorediet'],
    substack: ['carnivore diet', 'meat based nutrition']
  },
  'keto': {
    youtube: ['ketogenic diet', 'keto', 'low carb'],
    reddit: ['keto', 'ketogains', 'ketoscience'],
    substack: ['keto diet', 'ketogenic']
  },
  'biohacking': {
    youtube: ['biohacking', 'health optimization', 'quantified self'],
    reddit: ['biohackers', 'quantifiedself', 'nootropics'],
    substack: ['biohacking', 'health optimization']
  },
  'longevity': {
    youtube: ['longevity', 'anti aging', 'lifespan'],
    reddit: ['longevity', 'antiaging', 'supplements'],
    substack: ['longevity science', 'aging research']
  },
  'artificial_intelligence': {
    youtube: ['AI', 'machine learning', 'deep learning'],
    reddit: ['machinelearning', 'artificial', 'deeplearning'],
    substack: ['artificial intelligence', 'AI', 'machine learning']
  },
  'neuroscience': {
    youtube: ['neuroscience', 'brain science', 'neurobiology'],
    reddit: ['neuroscience', 'neuro', 'brainhealth'],
    substack: ['neuroscience', 'brain research']
  },
  'investing': {
    youtube: ['investing', 'stock market', 'value investing'],
    reddit: ['investing', 'stocks', 'valueinvesting'],
    substack: ['investing', 'markets', 'finance']
  },
  'startups': {
    youtube: ['startups', 'entrepreneurship', 'YC'],
    reddit: ['startups', 'entrepreneur', 'SaaS'],
    substack: ['startups', 'founders', 'entrepreneurship']
  },
  'space_exploration': {
    youtube: ['space exploration', 'astronomy', 'NASA'],
    reddit: ['space', 'astronomy', 'spacex'],
    substack: ['space exploration', 'astronomy']
  }
};

interface DiscoveredFeed {
  sourceType: string;
  sourceId: string;
  sourceName: string;
  feedUrl: string;
  sourceUrl?: string;
  topics: string[];
  quality: number;
}

class ProactiveCrawler {
  private isRunning = false;
  private discoveryQueue: string[] = [];
  private lastDiscoveryTime: Map<string, Date> = new Map();

  async start() {
    if (this.isRunning) return;
    
    console.log('[Proactive Crawler] Starting autonomous discovery system...');
    this.isRunning = true;
    
    // Initialize queue with all topics
    this.discoveryQueue = Object.keys(TOPIC_QUERIES);
    
    // Start continuous discovery
    this.runDiscoveryCycle();
    
    // Schedule periodic runs
    setInterval(() => {
      this.runDiscoveryCycle();
    }, DISCOVERY_INTERVAL_MS);
  }

  private async runDiscoveryCycle() {
    try {
      console.log('[Proactive Crawler] Starting discovery cycle...');
      
      // Get next batch of topics to process
      const topicsToProcess = this.getNextTopicsToProcess();
      
      for (const topic of topicsToProcess) {
        await this.discoverFeedsForTopic(topic);
        
        // Update last discovery time
        this.lastDiscoveryTime.set(topic, new Date());
        
        // Small delay between topics to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      // Verify and update existing catalog
      await this.verifyExistingCatalog();
      
      console.log('[Proactive Crawler] Discovery cycle completed');
    } catch (error) {
      console.error('[Proactive Crawler] Error in discovery cycle:', error);
    }
  }

  private getNextTopicsToProcess(): string[] {
    // Prioritize topics that haven't been processed recently
    const topics = [...this.discoveryQueue];
    
    // Sort by last discovery time (oldest first)
    topics.sort((a, b) => {
      const timeA = this.lastDiscoveryTime.get(a)?.getTime() || 0;
      const timeB = this.lastDiscoveryTime.get(b)?.getTime() || 0;
      return timeA - timeB;
    });
    
    return topics.slice(0, DISCOVERY_BATCH_SIZE);
  }

  private async discoverFeedsForTopic(topic: string) {
    console.log(`[Proactive Crawler] Discovering feeds for topic: ${topic}`);
    
    const queries = TOPIC_QUERIES[topic];
    if (!queries) return;
    
    const discoveredFeeds: DiscoveredFeed[] = [];
    
    // Search YouTube
    if (queries.youtube) {
      for (const query of queries.youtube) {
        try {
          const channels = await searchYouTubeChannels(query);
          
          for (const channel of channels) {
            discoveredFeeds.push({
              sourceType: 'youtube',
              sourceId: channel.channelId,
              sourceName: channel.channelName,
              feedUrl: channel.rssFeedUrl,
              sourceUrl: channel.channelUrl,
              topics: [topic],
              quality: 80 // Base quality score
            });
          }
        } catch (error) {
          console.error(`[Proactive Crawler] YouTube search error for "${query}":`, error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Search Reddit
    if (queries.reddit) {
      for (const query of queries.reddit) {
        try {
          const subreddits = await searchRedditSubreddits(query);
          
          for (const subreddit of subreddits) {
            discoveredFeeds.push({
              sourceType: 'reddit',
              sourceId: subreddit.subreddit.toLowerCase(),
              sourceName: subreddit.displayName,
              feedUrl: subreddit.rssFeedUrl,
              sourceUrl: `https://www.reddit.com/r/${subreddit.subreddit}`,
              topics: [topic],
              quality: 70 // Base quality score
            });
          }
        } catch (error) {
          console.error(`[Proactive Crawler] Reddit search error for "${query}":`, error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Search Substack
    if (queries.substack) {
      for (const query of queries.substack) {
        try {
          const newsletters = await searchSubstackNewsletters(query);
          
          for (const newsletter of newsletters) {
            discoveredFeeds.push({
              sourceType: 'substack',
              sourceId: newsletter.subdomain,
              sourceName: newsletter.name,
              feedUrl: newsletter.rssFeedUrl,
              sourceUrl: `https://${newsletter.subdomain}.substack.com`,
              topics: [topic],
              quality: 75 // Base quality score
            });
          }
        } catch (error) {
          console.error(`[Proactive Crawler] Substack search error for "${query}":`, error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Save discovered feeds to learning catalog
    await this.saveToCatalog(discoveredFeeds, topic);
  }

  private async saveToCatalog(feeds: DiscoveredFeed[], primaryTopic: string) {
    for (const feed of feeds) {
      try {
        // Check if already in learning catalog
        const existing = await db.select()
          .from(learningCatalog)
          .where(
            and(
              eq(learningCatalog.sourceType, feed.sourceType),
              eq(learningCatalog.sourceId, feed.sourceId)
            )
          )
          .limit(1);
        
        if (existing.length > 0) {
          // Update existing entry - add topic if not present
          const existingEntry = existing[0];
          const existingTopics = existingEntry.metadata ? 
            JSON.parse(existingEntry.metadata).topics || [] : [];
          
          if (!existingTopics.includes(primaryTopic)) {
            existingTopics.push(primaryTopic);
            
            await db.update(learningCatalog)
              .set({
                metadata: JSON.stringify({
                  ...JSON.parse(existingEntry.metadata || '{}'),
                  topics: existingTopics,
                  crossReferenced: true
                }),
                updatedAt: new Date()
              })
              .where(eq(learningCatalog.id, existingEntry.id));
            
            console.log(`[Proactive Crawler] Cross-referenced ${feed.sourceName} to ${primaryTopic}`);
          }
        } else {
          // Check topic limit
          const topicCount = await this.getTopicFeedCount(primaryTopic);
          
          if (topicCount < FEEDS_PER_TOPIC_LIMIT) {
            // Add new entry
            await db.insert(learningCatalog).values({
              sourceType: feed.sourceType,
              sourceId: feed.sourceId,
              sourceName: feed.sourceName,
              feedUrl: feed.feedUrl,
              sourceUrl: feed.sourceUrl,
              category: primaryTopic,
              metadata: JSON.stringify({
                topics: [primaryTopic],
                quality: feed.quality,
                discoveredAt: new Date(),
                autoDiscovered: true
              }),
              discoveredVia: 'proactive_crawler',
              successCount: 0,
              failureCount: 0,
              lastVerified: null
            });
            
            console.log(`[Proactive Crawler] Added ${feed.sourceName} to catalog for ${primaryTopic}`);
            
            // Also add to main feed catalog if high quality
            if (feed.quality >= 75) {
              await this.promoteToCatalog(feed, primaryTopic);
            }
          } else {
            console.log(`[Proactive Crawler] Topic ${primaryTopic} at limit (${FEEDS_PER_TOPIC_LIMIT})`);
          }
        }
      } catch (error) {
        console.error(`[Proactive Crawler] Error saving feed ${feed.sourceName}:`, error);
      }
    }
  }

  private async getTopicFeedCount(topic: string): Promise<number> {
    const result = await db.select({ count: sql<number>`count(*)::int` })
      .from(learningCatalog)
      .where(eq(learningCatalog.category, topic));
    
    return result[0]?.count || 0;
  }

  private async promoteToCatalog(feed: DiscoveredFeed, topic: string) {
    try {
      // Check if already in main catalog
      const existing = await db.select()
        .from(feedCatalog)
        .where(eq(feedCatalog.url, feed.feedUrl))
        .limit(1);
      
      if (existing.length === 0) {
        // Generate unique ID for feed catalog entry
        const { nanoid } = await import('nanoid');
        const feedId = nanoid();
        
        // Add to main catalog for immediate use
        await db.insert(feedCatalog).values({
          id: feedId,
          url: feed.feedUrl,
          name: feed.sourceName,
          domain: this.getDomainForTopic(topic),
          category: this.getCategoryForTopic(topic),
          description: `Auto-discovered ${feed.sourceType} feed for ${topic}`,
          sourceType: feed.sourceType as any,
          isActive: true,
          qualityScore: feed.quality,
          topics: [topic],
          isApproved: true, // Auto-approve high quality feeds
        });
        
        console.log(`[Proactive Crawler] Promoted ${feed.sourceName} to main catalog`);
      }
    } catch (error) {
      console.error(`[Proactive Crawler] Error promoting feed:`, error);
    }
  }

  private async verifyExistingCatalog() {
    try {
      // Get entries that haven't been verified in 24 hours
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      
      const entriesToVerify = await db.select()
        .from(learningCatalog)
        .where(
          sql`${learningCatalog.lastVerified} IS NULL OR ${learningCatalog.lastVerified} < ${oneDayAgo}`
        )
        .limit(20);
      
      for (const entry of entriesToVerify) {
        try {
          // Verify feed is still accessible
          const response = await fetch(entry.feedUrl, {
            method: 'HEAD',
            signal: AbortSignal.timeout(5000)
          });
          
          if (response.ok) {
            await db.update(learningCatalog)
              .set({
                successCount: entry.successCount + 1,
                lastVerified: new Date()
              })
              .where(eq(learningCatalog.id, entry.id));
          } else {
            await db.update(learningCatalog)
              .set({
                failureCount: entry.failureCount + 1,
                lastVerified: new Date()
              })
              .where(eq(learningCatalog.id, entry.id));
            
            // Remove from catalog if too many failures
            if (entry.failureCount >= 5) {
              console.log(`[Proactive Crawler] Removing failed feed: ${entry.sourceName}`);
              await db.delete(learningCatalog)
                .where(eq(learningCatalog.id, entry.id));
            }
          }
        } catch (error) {
          // Network error - increment failure
          await db.update(learningCatalog)
            .set({
              failureCount: entry.failureCount + 1,
              lastVerified: new Date()
            })
            .where(eq(learningCatalog.id, entry.id));
        }
        
        // Small delay between verifications
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error('[Proactive Crawler] Error verifying catalog:', error);
    }
  }

  private getDomainForTopic(topic: string): string {
    const domainMap: Record<string, string> = {
      'metabolic': 'metabolic',
      'carnivore': 'carnivore',
      'keto': 'keto',
      'biohacking': 'biohacking',
      'longevity': 'longevity',
      'artificial_intelligence': 'tech',
      'neuroscience': 'science',
      'investing': 'finance',
      'startups': 'entrepreneurship',
      'space_exploration': 'science'
    };
    
    return domainMap[topic] || 'general';
  }

  private getCategoryForTopic(topic: string): string {
    const categoryMap: Record<string, string> = {
      'metabolic': 'Health Journals',
      'carnivore': 'Expert Newsletters',
      'keto': 'Expert Newsletters',
      'biohacking': 'Health Journals',
      'longevity': 'Health Journals',
      'artificial_intelligence': 'Tech Blogs',
      'neuroscience': 'Science Publications',
      'investing': 'Finance Publications',
      'startups': 'Business Media',
      'space_exploration': 'Science Publications'
    };
    
    return categoryMap[topic] || 'General';
  }

  stop() {
    console.log('[Proactive Crawler] Stopping autonomous discovery...');
    this.isRunning = false;
  }
}

// Export singleton instance
export const proactiveCrawler = new ProactiveCrawler();

// Start immediately when module loads
if (process.env.NODE_ENV !== 'test') {
  proactiveCrawler.start();
}