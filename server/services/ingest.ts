import { storage } from "../storage";
import { fetchJournalFeeds } from "../sources/journals";
import { fetchRedditFeeds } from "../sources/reddit";
import { fetchSubstackFeeds } from "../sources/substack";
import { fetchYouTubeFeeds } from "../sources/youtube";
import type { InsertItem, Topic } from "@shared/schema";

export interface IngestOptions {
  topics?: Topic[]; // If provided, only ingest items with these topics
}

export async function runIngestJob(options: IngestOptions = {}): Promise<{ inserted: number; skipped: number; merged: number; filtered: number }> {
  const { topics } = options;
  console.log(`Starting ingestion job${topics ? ` (filtering for ${topics.length} topics)` : ''}...`);

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
    // Fetch from all sources in parallel
    const [journals, reddit, substack, youtube] = await Promise.all([
      fetchJournalFeeds(),
      fetchRedditFeeds(),
      fetchSubstackFeeds(),
      fetchYouTubeFeeds(),
    ]);

    let allItems: InsertItem[] = [...journals, ...reddit, ...substack, ...youtube];
    console.log(`Fetched ${allItems.length} items from all sources`);

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
