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
    return { inserted, skipped, merged, filtered };
  } catch (error) {
    console.error("Error during ingestion:", error);
    throw error;
  }
}
