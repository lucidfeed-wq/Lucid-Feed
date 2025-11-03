import { nanoid } from "nanoid";
import { format, subDays } from "date-fns";
import { storage } from "../storage";
import { rankItems } from "../core/ranking";
import { generateBatchSummaries, generateCategorySummary } from "./summary";
import type { InsertDigest, DigestSectionItem, Item, Summary, CategorySummary } from "@shared/schema";

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

  // Separate by source type
  const journalItems = rankedItems.filter(i => i.sourceType === 'journal');
  const redditItems = rankedItems.filter(i => i.sourceType === 'reddit');
  const substackItems = rankedItems.filter(i => i.sourceType === 'substack');
  const youtubeItems = rankedItems.filter(i => i.sourceType === 'youtube');

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

  // Generate public slug (format: 2025w-3)
  const year = windowEnd.getFullYear();
  const week = Math.ceil((new Date().getTime() - new Date(year, 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  const slug = `${year}w-${week}`;

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

function buildDigestItem(item: Item, summary?: Summary): DigestSectionItem {
  const base = {
    itemId: item.id,
    title: item.title,
    url: item.url,
    sourceType: item.sourceType as any,
    publishedAt: item.publishedAt,
    topics: item.topics as any,
    authorOrChannel: item.authorOrChannel,
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
