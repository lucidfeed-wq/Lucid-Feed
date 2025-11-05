import { storage } from "../storage";
import { fetchJournalFeeds } from "../sources/journals";
import { fetchRedditFeeds } from "../sources/reddit";
import { fetchSubstackFeeds } from "../sources/substack";
import { fetchYouTubeFeeds } from "../sources/youtube";
import { fetchPodcastFeeds } from "../sources/podcasts";
import { enrichContentBatch } from "./content-enrichment";
import { fetchFeedItems } from "./feed-fetcher";
import type { InsertItem, Topic, FeedCatalog, UserFeedSubscription } from "@shared/schema";

export interface IngestOptions {
  topics?: Topic[]; // If provided, only ingest items with these topics
  enrichContent?: boolean; // Whether to fetch full content and quality metrics (default: true)
  useSubscribedFeeds?: boolean; // If true, only ingest feeds that users are subscribed to (default: true)
  feedIds?: string[]; // If provided, only ingest these specific feeds
}

export async function runIngestJob(options: IngestOptions = {}): Promise<{ inserted: number; skipped: number; merged: number; filtered: number }> {
  const { topics, enrichContent = true, useSubscribedFeeds = true, feedIds } = options;
  console.log(`Starting ingestion job${topics ? ` (filtering for ${topics.length} topics)` : ''}${enrichContent ? ' (with enrichment)' : ''}${useSubscribedFeeds ? ' (subscribed feeds only)' : ''}...`);

  let inserted = 0;
  let skipped = 0;
  let merged = 0;
  let filtered = 0;

  // Create job run for observability
  const jobRun = await storage.createJobRun({
    jobName: 'ingest',
    status: 'success',
    itemsIngested: 0,
    dedupeHits: 0,
    tokenSpend: 0,
  });

  try {
    let allItems: InsertItem[] = [];

    // Determine which feeds to process
    let feedsToProcess: FeedCatalog[] = [];
    
    if (feedIds && feedIds.length > 0) {
      // Use specific feed IDs provided
      console.log(`Fetching ${feedIds.length} specific feeds...`);
      feedsToProcess = await Promise.all(
        feedIds.map(id => storage.getFeedById(id))
      ).then(feeds => feeds.filter(Boolean) as FeedCatalog[]);
    } else if (useSubscribedFeeds) {
      // Get all unique feeds that users are subscribed to
      console.log('Fetching subscribed feeds across all users...');
      const subscriptions = await storage.getAllFeedSubscriptions();
      const uniqueFeedIds = Array.from(new Set(subscriptions.map((sub: UserFeedSubscription) => sub.feedId)));
      
      if (uniqueFeedIds.length === 0) {
        console.log('⚠️  No feed subscriptions found. Consider subscribing to feeds or set useSubscribedFeeds=false.');
        await storage.finishJobRun(jobRun.id, {
          status: 'success',
          itemsIngested: 0,
          dedupeHits: 0,
          tokenSpend: 0,
          errorMessage: 'No feed subscriptions found',
        });
        return { inserted: 0, skipped: 0, merged: 0, filtered: 0 };
      }
      
      console.log(`Found ${uniqueFeedIds.length} unique subscribed feeds`);
      feedsToProcess = await Promise.all(
        uniqueFeedIds.map(id => storage.getFeedById(id))
      ).then(feeds => feeds.filter(Boolean) as FeedCatalog[]);
    } else {
      // Fallback: use hardcoded source fetchers (old behavior)
      console.log('Using hardcoded feed sources (legacy mode)...');
      const [journals, reddit, substack, youtube, podcasts] = await Promise.all([
        fetchJournalFeeds(),
        fetchRedditFeeds(),
        fetchSubstackFeeds(),
        fetchYouTubeFeeds(),
        fetchPodcastFeeds(),
      ]);
      allItems = [...journals, ...reddit, ...substack, ...youtube, ...podcasts];
      console.log(`Fetched ${allItems.length} items from hardcoded sources`);
    }

    // If we're using database feeds, fetch items from them
    if (feedsToProcess.length > 0) {
      console.log(`Processing ${feedsToProcess.length} feeds from database catalog...`);
      allItems = await fetchFeedItems(feedsToProcess);
      console.log(`Fetched ${allItems.length} items from subscribed feeds`);
    }

    // Filter by topics if specified
    if (topics && topics.length > 0) {
      const topicsSet = new Set(topics);
      const beforeFilter = allItems.length;
      allItems = allItems.filter(item => 
        item.topics.some(topic => topicsSet.has(topic as Topic))
      );
      filtered = beforeFilter - allItems.length;
      console.log(`Filtered to ${allItems.length} items matching ${topics.length} topics (excluded ${filtered} items)`);
    }

    // Enrich content with full text and quality metrics
    if (enrichContent) {
      console.log('\n🔬 Enriching content with full text and quality scoring...');
      allItems = await enrichContentBatch(allItems);
      
      // Filter out items with insufficient content after enrichment
      const beforeContentFilter = allItems.length;
      allItems = allItems.filter(item => {
        // Skip items with very short excerpts (likely just metadata)
        if (!item.rawExcerpt || item.rawExcerpt.length < 100) {
          console.log(`Filtered out item with minimal excerpt: "${item.title}"`);
          return false;
        }
        
        // Skip future publications (no content available yet)
        const publishedDate = new Date(item.publishedAt);
        if (publishedDate > new Date()) {
          console.log(`Filtered out future publication: "${item.title}" (${item.publishedAt})`);
          return false;
        }
        
        // If enriched with quality score, skip items with very low content quality
        if (item.scoreBreakdown && item.scoreBreakdown.contentQuality < 10) {
          console.log(`Filtered out low-content item: "${item.title}" (content quality: ${item.scoreBreakdown.contentQuality})`);
          return false;
        }
        
        return true;
      });
      
      const contentFiltered = beforeContentFilter - allItems.length;
      filtered += contentFiltered;
      if (contentFiltered > 0) {
        console.log(`Filtered ${contentFiltered} items with insufficient content`);
      }
    }

    // Process each item
    for (const item of allItems) {
      const existing = await storage.getItemByHash(item.hashDedupe);

      if (existing) {
        // Check if this is a cross-source reference (same DOI/URL)
        if (existing.sourceType !== item.sourceType) {
          // Merge engagement data
          await storage.mergeItemEngagement(existing.id, item.engagement);
          merged++;
        } else {
          skipped++;
        }
      } else {
        // Insert new item
        await storage.createItem(item);
        inserted++;
      }
    }

    console.log(`Ingestion complete: ${inserted} inserted, ${skipped} skipped, ${merged} merged, ${filtered} filtered`);
    
    // Finish job run with success
    await storage.finishJobRun(jobRun.id, {
      status: 'success',
      itemsIngested: inserted,
      dedupeHits: skipped + merged,
      tokenSpend: 0, // Ingestion doesn't use AI
    });
    
    return { inserted, skipped, merged, filtered };
  } catch (error) {
    console.error("Error during ingestion:", error);
    
    // Finish job run with error
    await storage.finishJobRun(jobRun.id, {
      status: 'error',
      itemsIngested: inserted,
      dedupeHits: skipped + merged,
      tokenSpend: 0,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });
    
    throw error;
  }
}
