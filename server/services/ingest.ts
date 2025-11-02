import { storage } from "../storage";
import { fetchJournalFeeds } from "../sources/journals";
import { fetchRedditFeeds } from "../sources/reddit";
import { fetchSubstackFeeds } from "../sources/substack";
import { fetchYouTubeFeeds } from "../sources/youtube";
import type { InsertItem } from "@shared/schema";

export async function runIngestJob(): Promise<{ inserted: number; skipped: number; merged: number }> {
  console.log("Starting ingestion job...");

  let inserted = 0;
  let skipped = 0;
  let merged = 0;

  try {
    // Fetch from all sources in parallel
    const [journals, reddit, substack, youtube] = await Promise.all([
      fetchJournalFeeds(),
      fetchRedditFeeds(),
      fetchSubstackFeeds(),
      fetchYouTubeFeeds(),
    ]);

    const allItems: InsertItem[] = [...journals, ...reddit, ...substack, ...youtube];
    console.log(`Fetched ${allItems.length} items from all sources`);

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

    console.log(`Ingestion complete: ${inserted} inserted, ${skipped} skipped, ${merged} merged`);
    return { inserted, skipped, merged };
  } catch (error) {
    console.error("Error during ingestion:", error);
    throw error;
  }
}
