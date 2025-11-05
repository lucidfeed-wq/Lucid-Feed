import { nanoid } from "nanoid";
import { format, subDays } from "date-fns";
import { storage } from "../storage";
import { rankItems } from "../core/ranking";
import { generateBatchSummaries, generateCategorySummary } from "./summary";
import { enrichContentBatch } from "./content-enrichment";
import { fetchJournalFeeds } from "../sources/journals";
import { fetchRedditFeeds } from "../sources/reddit";
import { fetchSubstackFeeds } from "../sources/substack";
import { fetchYouTubeFeeds } from "../sources/youtube";
import { fetchPodcastFeeds } from "../sources/podcasts";
import type { InsertDigest, DigestSectionItem, Item, Summary, CategorySummary, InsertItem, Topic } from "@shared/schema";
import { topics } from "@shared/schema";

interface DigestGenerationOptions {
  itemCounts?: {
    research?: number;
    community?: number;
    expert?: number;
  };
  windowDays?: number;
}

export async function generateWeeklyDigest(options: DigestGenerationOptions = {}): Promise<{ id: string; slug: string }> {
  console.log("Starting weekly digest generation...");

  // Default item counts (configurable)
  const itemCounts = {
    research: options.itemCounts?.research ?? 15,
    community: options.itemCounts?.community ?? 15,
    expert: options.itemCounts?.expert ?? 10,
  };

  console.log(`Digest configuration: ${itemCounts.research} research, ${itemCounts.community} community, ${itemCounts.expert} expert videos`);

  // Create job run for observability
  const jobRun = await storage.createJobRun({
    jobName: 'digest',
    status: 'success',
    itemsIngested: 0,
    dedupeHits: 0,
    tokenSpend: 0,
  });

  let totalTokenSpend = 0;

  try {
    // Define window (default 7 days, configurable)
    const windowEnd = new Date();
    const windowStart = subDays(windowEnd, options.windowDays ?? 7);

  // Fetch items from the past week
  const items = await storage.getItemsInWindow(
    windowStart.toISOString(),
    windowEnd.toISOString()
  );

  console.log(`Found ${items.length} items in window`);

  // Rank all items
  const rankedItems = rankItems(items);

  // Filter out items with insufficient content
  // Items with contentQuality < 10 typically have:
  // - Just graphical abstracts
  // - Future publication dates
  // - Minimal/missing content
  const qualityFilteredItems = rankedItems.filter(item => {
    if (!item.scoreBreakdown) return true; // Keep unenriched items for now
    
    const contentQuality = item.scoreBreakdown.contentQuality || 0;
    if (contentQuality < 10) {
      console.log(`Filtered out low-content item: "${item.title}" (content quality: ${contentQuality})`);
      return false;
    }
    
    return true;
  });

  console.log(`${rankedItems.length - qualityFilteredItems.length} items filtered for insufficient content`);

  // Separate by source type
  const journalItems = qualityFilteredItems.filter(i => i.sourceType === 'journal');
  const redditItems = qualityFilteredItems.filter(i => i.sourceType === 'reddit');
  const substackItems = qualityFilteredItems.filter(i => i.sourceType === 'substack');
  const youtubeItems = qualityFilteredItems.filter(i => i.sourceType === 'youtube');

  // Select top items for each section (using configurable counts)
  const topJournals = journalItems.slice(0, itemCounts.research);
  const topCommunity = [...redditItems, ...substackItems].slice(0, itemCounts.community);
  const topExperts = youtubeItems.slice(0, itemCounts.expert);

  // Generate AI summaries for all top items
  const allTopItems = [...topJournals, ...topCommunity, ...topExperts];
  const allItemIds = allTopItems.map(i => i.id);

  console.log(`Generating AI summaries for ${allTopItems.length} items...`);
  
  // Check if summaries already exist
  const existingSummaries = await storage.getSummariesByItemIds(allItemIds);
  const existingSummaryMap = new Map(existingSummaries.map(s => [s.itemId, s]));
  
  // Generate summaries only for items that don't have them
  const itemsNeedingSummaries = allTopItems.filter(item => !existingSummaryMap.has(item.id));
  
  if (itemsNeedingSummaries.length > 0) {
    console.log(`Generating ${itemsNeedingSummaries.length} new summaries...`);
    const newSummaries = await generateBatchSummaries(itemsNeedingSummaries, 5);
    await storage.createBatchSummaries(newSummaries);
    
    // Add new summaries to the map
    newSummaries.forEach(s => existingSummaryMap.set(s.itemId, s));
  }

  // Build digest sections with summaries
  const researchHighlights: DigestSectionItem[] = topJournals.map(item => 
    buildDigestItem(item, existingSummaryMap.get(item.id))
  );

  const communityTrends: DigestSectionItem[] = topCommunity.map(item => 
    buildDigestItem(item, existingSummaryMap.get(item.id))
  );

  const expertCommentary: DigestSectionItem[] = topExperts.map(item => 
    buildDigestItem(item, existingSummaryMap.get(item.id))
  );

  // Generate category summaries for each section
  console.log('Generating category summaries...');
  
  let researchHighlightsSummary: CategorySummary | undefined;
  let communityTrendsSummary: CategorySummary | undefined;
  let expertCommentarySummary: CategorySummary | undefined;

  try {
    // Generate summaries in parallel (pass aligned arrays - keep undefined entries for index alignment)
    const [resSummary, commSummary, expSummary] = await Promise.all([
      topJournals.length > 0 
        ? generateCategorySummary(
            'Research Articles & Scientific Journals',
            topJournals,
            topJournals.map(item => existingSummaryMap.get(item.id)) as Array<Summary | undefined>
          )
        : Promise.resolve(undefined),
      
      topCommunity.length > 0
        ? generateCategorySummary(
            'Community Discussions & Expert Newsletters',
            topCommunity,
            topCommunity.map(item => existingSummaryMap.get(item.id)) as Array<Summary | undefined>
          )
        : Promise.resolve(undefined),
      
      topExperts.length > 0
        ? generateCategorySummary(
            'Expert Commentary & Educational Videos',
            topExperts,
            topExperts.map(item => existingSummaryMap.get(item.id)) as Array<Summary | undefined>
          )
        : Promise.resolve(undefined),
    ]);

    researchHighlightsSummary = resSummary;
    communityTrendsSummary = commSummary;
    expertCommentarySummary = expSummary;
    
    console.log('Category summaries generated');
  } catch (error) {
    console.error('Error generating category summaries:', error);
    // Continue without category summaries if they fail
  }

  // Generate public slug with timestamp to keep unique digests (format: 2025w-3-1730649000)
  const year = windowEnd.getFullYear();
  const week = Math.ceil((new Date().getTime() - new Date(year, 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  const timestamp = Math.floor(Date.now() / 1000);
  const slug = `${year}w-${week}-${timestamp}`;

    const digest: InsertDigest = {
      slug,
      windowStart: windowStart.toISOString(),
      windowEnd: windowEnd.toISOString(),
      sections: {
        researchHighlights,
        communityTrends,
        expertCommentary,
        researchHighlightsSummary,
        communityTrendsSummary,
        expertCommentarySummary,
      } as any,
    };

    const created = await storage.createDigest(digest);
    console.log(`Digest created: ${created.id} (${slug})`);

    // Estimate token spend (rough: ~500 tokens per summary, ~300 per category summary)
    const itemSummariesCount = itemsNeedingSummaries.length;
    const categorySummariesCount = [researchHighlightsSummary, communityTrendsSummary, expertCommentarySummary].filter(Boolean).length;
    totalTokenSpend = (itemSummariesCount * 500) + (categorySummariesCount * 300);

    // Finish job run with success
    await storage.finishJobRun(jobRun.id, {
      status: 'success',
      itemsIngested: allTopItems.length,
      dedupeHits: 0,
      tokenSpend: totalTokenSpend,
    });

    return { id: created.id, slug };
  } catch (error) {
    console.error("Error generating digest:", error);
    
    // Finish job run with error
    await storage.finishJobRun(jobRun.id, {
      status: 'error',
      itemsIngested: 0,
      dedupeHits: 0,
      tokenSpend: totalTokenSpend,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });
    
    throw error;
  }
}

/**
 * Generate a personalized digest for a specific user with immediate enrichment
 * This allows on-demand digest creation (e.g., after onboarding) without waiting for cron
 */
export async function generatePersonalizedDigest(userId: string, options: DigestGenerationOptions = {}): Promise<{ id: string; slug: string }> {
  console.log(`Starting personalized digest generation for user ${userId}...`);

  // Default item counts (smaller for personalized)
  const itemCounts = {
    research: options.itemCounts?.research ?? 10,
    community: options.itemCounts?.community ?? 10,
    expert: options.itemCounts?.expert ?? 8,
  };

  let totalTokenSpend = 0;

  try {
    // Get user's subscribed feeds
    const userFeedSubscriptions = await storage.getUserFeedSubscriptions(userId);
    console.log(`User has ${userFeedSubscriptions.length} subscribed feeds`);

    if (userFeedSubscriptions.length === 0) {
      throw new Error('User has no subscribed feeds. Cannot generate personalized digest.');
    }

    // Extract feed info from subscriptions
    const userFeeds = userFeedSubscriptions.map(sub => sub.feed);

    // Fetch fresh items from RSS for user's feeds (last 7 days)
    const windowDays = options.windowDays ?? 7;
    const windowEnd = new Date();
    const windowStart = subDays(windowEnd, windowDays);

    console.log('Fetching fresh RSS items from subscribed feeds...');
    
    // Fetch from all sources
    const [journals, reddit, substack, youtube, podcasts] = await Promise.all([
      fetchJournalFeeds(),
      fetchRedditFeeds(),
      fetchSubstackFeeds(),
      fetchYouTubeFeeds(),
      fetchPodcastFeeds(),
    ]);

    let allFreshItems: InsertItem[] = [...journals, ...reddit, ...substack, ...youtube, ...podcasts];
    
    // Filter to only items from user's subscribed feeds
    const userFeedIds = new Set(userFeeds.map(f => f.id));
    allFreshItems = allFreshItems.filter(item => {
      // Match by sourceType and domain/name
      return userFeeds.some(feed => {
        if (feed.sourceType !== item.sourceType) return false;
        // For journals, match by domain
        if (feed.sourceType === 'journal' && item.journalName) {
          return feed.name.toLowerCase().includes(item.journalName.toLowerCase()) ||
                 item.journalName.toLowerCase().includes(feed.name.toLowerCase());
        }
        // For other types, match by author/channel
        if (item.authorOrChannel) {
          return feed.name.toLowerCase() === item.authorOrChannel.toLowerCase();
        }
        return false;
      });
    });

    // Filter by date window
    allFreshItems = allFreshItems.filter(item => {
      const pubDate = new Date(item.publishedAt);
      return pubDate >= windowStart && pubDate <= windowEnd;
    });

    console.log(`Found ${allFreshItems.length} fresh items from user's feeds`);

    if (allFreshItems.length === 0) {
      throw new Error('No recent items found from subscribed feeds. Try subscribing to more active feeds.');
    }

    // IMMEDIATE ENRICHMENT: Enrich all items right now (don't wait for cron)
    console.log('Enriching items with full content and quality scoring...');
    const enrichedItems = await enrichContentBatch(allFreshItems);
    
    // Save enriched items to database
    const savedItems: Item[] = [];
    for (const item of enrichedItems) {
      const existing = await storage.getItemByHash(item.hashDedupe);
      if (!existing) {
        const saved = await storage.createItem(item);
        savedItems.push(saved);
      } else {
        savedItems.push(existing);
      }
    }

    console.log(`Saved/retrieved ${savedItems.length} enriched items`);

    // Rank items
    const rankedItems = rankItems(savedItems);

    // Filter by quality
    const qualityFilteredItems = rankedItems.filter(item => {
      if (!item.scoreBreakdown) return true;
      const contentQuality = item.scoreBreakdown.contentQuality || 0;
      return contentQuality >= 10;
    });

    // Separate by source type
    const journalItems = qualityFilteredItems.filter(i => i.sourceType === 'journal');
    const redditItems = qualityFilteredItems.filter(i => i.sourceType === 'reddit');
    const substackItems = qualityFilteredItems.filter(i => i.sourceType === 'substack');
    const youtubeItems = qualityFilteredItems.filter(i => i.sourceType === 'youtube');
    const podcastItems = qualityFilteredItems.filter(i => i.sourceType === 'podcast');

    // Select top items for each section
    const topJournals = journalItems.slice(0, itemCounts.research);
    const topCommunity = [...redditItems, ...substackItems, ...podcastItems].slice(0, itemCounts.community);
    const topExperts = youtubeItems.slice(0, itemCounts.expert);

    const allTopItems = [...topJournals, ...topCommunity, ...topExperts];

    if (allTopItems.length === 0) {
      throw new Error('No quality items found after filtering. Try subscribing to more feeds.');
    }

    console.log(`Generating AI summaries for ${allTopItems.length} items...`);

    // Generate AI summaries
    const allItemIds = allTopItems.map(i => i.id);
    const existingSummaries = await storage.getSummariesByItemIds(allItemIds);
    const existingSummaryMap = new Map(existingSummaries.map(s => [s.itemId, s]));

    const itemsNeedingSummaries = allTopItems.filter(item => !existingSummaryMap.has(item.id));

    if (itemsNeedingSummaries.length > 0) {
      const newSummaries = await generateBatchSummaries(itemsNeedingSummaries, 5);
      await storage.createBatchSummaries(newSummaries);
      newSummaries.forEach(s => existingSummaryMap.set(s.itemId, s));
    }

    // Build digest sections
    const researchHighlights: DigestSectionItem[] = topJournals.map(item =>
      buildDigestItem(item, existingSummaryMap.get(item.id))
    );

    const communityTrends: DigestSectionItem[] = topCommunity.map(item =>
      buildDigestItem(item, existingSummaryMap.get(item.id))
    );

    const expertCommentary: DigestSectionItem[] = topExperts.map(item =>
      buildDigestItem(item, existingSummaryMap.get(item.id))
    );

    // Generate category summaries
    const [resSummary, commSummary, expSummary] = await Promise.all([
      topJournals.length > 0
        ? generateCategorySummary(
            'Research Articles & Scientific Journals',
            topJournals,
            topJournals.map(item => existingSummaryMap.get(item.id)) as Array<Summary | undefined>
          )
        : Promise.resolve(undefined),

      topCommunity.length > 0
        ? generateCategorySummary(
            'Community Discussions & Expert Newsletters',
            topCommunity,
            topCommunity.map(item => existingSummaryMap.get(item.id)) as Array<Summary | undefined>
          )
        : Promise.resolve(undefined),

      topExperts.length > 0
        ? generateCategorySummary(
            'Expert Commentary & Educational Videos',
            topExperts,
            topExperts.map(item => existingSummaryMap.get(item.id)) as Array<Summary | undefined>
          )
        : Promise.resolve(undefined),
    ]);

    // Generate unique slug for personalized digest
    const timestamp = Math.floor(Date.now() / 1000);
    const slug = `personal-${userId.substring(0, 8)}-${timestamp}`;

    const digest: InsertDigest = {
      slug,
      windowStart: windowStart.toISOString(),
      windowEnd: windowEnd.toISOString(),
      sections: {
        researchHighlights,
        communityTrends,
        expertCommentary,
        researchHighlightsSummary: resSummary,
        communityTrendsSummary: commSummary,
        expertCommentarySummary: expSummary,
      } as any,
    };

    const created = await storage.createDigest(digest);
    console.log(`Personalized digest created: ${created.id} (${slug})`);

    // Estimate token spend
    totalTokenSpend = (itemsNeedingSummaries.length * 500) + 
                      ([resSummary, commSummary, expSummary].filter(Boolean).length * 300);

    return { id: created.id, slug };
  } catch (error) {
    console.error(`Error generating personalized digest for user ${userId}:`, error);
    throw error;
  }
}

// Create a Set of valid topics for fast lookup and normalization
const validTopicsSet = new Set<string>(topics);

function buildDigestItem(item: Item, summary?: Summary): DigestSectionItem {
  // Normalize topics: filter out any invalid values that don't match the Topic enum
  // This ensures frontend filtering works correctly with exact string matching
  const normalizedTopics: Topic[] = (Array.isArray(item.topics) ? item.topics : [])
    .filter((topic): topic is Topic => {
      if (typeof topic === 'string' && validTopicsSet.has(topic)) {
        return true;
      }
      // Log invalid topics for debugging
      if (topic) {
        console.warn(`Filtering out invalid topic "${topic}" from item ${item.id}`);
      }
      return false;
    });

  const base = {
    itemId: item.id,
    title: item.title,
    url: item.url,
    sourceType: item.sourceType as any,
    publishedAt: item.publishedAt,
    topics: normalizedTopics,
    authorOrChannel: item.authorOrChannel,
    pdfUrl: item.pdfUrl, // Include Unpaywall PDF URL for open access papers
    engagement: item.engagement,
    scoreBreakdown: item.scoreBreakdown as any,
  };

  if (summary) {
    return {
      ...base,
      keyInsights: summary.keyInsights,
      clinicalTakeaway: summary.clinicalTakeaway,
      methodology: summary.methodology as any,
      levelOfEvidence: summary.levelOfEvidence as any,
      journalName: item.journalName,
    };
  }

  return base;
}
