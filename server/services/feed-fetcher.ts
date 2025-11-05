import Parser from "rss-parser";
import type { InsertItem, FeedCatalog, Topic } from "@shared/schema";
import { tagTopics } from "../core/topics";
import { generateHashDedupe, extractDOI } from "../core/dedupe";

const parser = new Parser({
  customFields: {
    item: [['dc:identifier', 'doi']],
  },
});

const BATCH_SIZE = 10; // Process feeds in batches to avoid overload

/**
 * Generic feed fetcher that processes feeds from the catalog.
 * Fetches items from RSS feeds and normalizes them to InsertItem format.
 * 
 * @param feeds - Array of FeedCatalog entries to fetch from
 * @returns Array of normalized InsertItem objects
 */
export async function fetchFeedItems(feeds: FeedCatalog[]): Promise<InsertItem[]> {
  const allItems: InsertItem[] = [];
  const totalFeeds = feeds.length;

  // Process feeds in batches to avoid overwhelming the system
  for (let i = 0; i < feeds.length; i += BATCH_SIZE) {
    const batch = feeds.slice(i, i + BATCH_SIZE);
    
    // Fetch feeds in parallel within each batch
    const batchResults = await Promise.all(
      batch.map(async (feed) => {
        const feedIndex = i + batch.indexOf(feed) + 1;
        console.log(`Processing feed ${feedIndex} of ${totalFeeds}: ${feed.name}`);
        
        try {
          return await fetchSingleFeed(feed);
        } catch (error) {
          console.error(`Error fetching feed ${feed.name} (${feed.url}):`, error);
          return []; // Continue on error
        }
      })
    );
    
    // Flatten batch results into allItems
    for (const items of batchResults) {
      allItems.push(...items);
    }
  }

  console.log(`Total items fetched from ${totalFeeds} feeds: ${allItems.length}`);
  return allItems;
}

/**
 * Fetch and normalize items from a single feed.
 */
async function fetchSingleFeed(feed: FeedCatalog): Promise<InsertItem[]> {
  const items: InsertItem[] = [];

  try {
    const rssFeed = await parser.parseURL(feed.url);

    // Limit items per feed to avoid overload (take most recent 10)
    for (const entry of rssFeed.items.slice(0, 10)) {
      try {
        const item = normalizeFeedEntry(entry, feed);
        items.push(item);
      } catch (error) {
        console.error(`Error normalizing entry from ${feed.name}:`, error);
        // Continue processing other entries
      }
    }
  } catch (error) {
    console.error(`Failed to parse RSS feed ${feed.url}:`, error);
    throw error; // Let caller handle feed-level errors
  }

  return items;
}

/**
 * Normalize a single RSS entry to InsertItem format.
 */
function normalizeFeedEntry(entry: any, feed: FeedCatalog): InsertItem {
  const title = entry.title || "Untitled";
  const url = entry.link || "";
  const publishedAt = entry.pubDate ? new Date(entry.pubDate).toISOString() : new Date().toISOString();
  const rawExcerpt = entry.contentSnippet || entry.content || entry.summary || "";
  
  // Extract DOI if available
  const doi = extractDOI(entry.link || "") || extractDOI(rawExcerpt) || null;
  
  // Tag topics: combine feed's predefined topics with auto-detected topics
  const searchText = `${title} ${rawExcerpt}`;
  const autoDetectedTopics = tagTopics(searchText);
  const feedTopics = (feed.topics || []) as Topic[];
  
  // Merge topics, preferring feed's topics, then auto-detected
  const combinedTopics = [...new Set([...feedTopics, ...autoDetectedTopics])].slice(0, 5) as Topic[];
  
  const hashDedupe = generateHashDedupe(url, title);

  // Extract author/channel name
  let authorOrChannel = entry.creator || entry.author || feed.name;
  if (typeof authorOrChannel === 'object' && authorOrChannel.name) {
    authorOrChannel = authorOrChannel.name;
  }

  // Build base item
  const item: InsertItem = {
    sourceType: feed.sourceType as any,
    sourceId: doi || url,
    doi,
    url,
    title,
    authorOrChannel,
    publishedAt,
    rawExcerpt: rawExcerpt.substring(0, 500),
    engagement: {
      comments: 0,
      upvotes: 0,
      views: 0,
    },
    topics: combinedTopics,
    isPreprint: title.toLowerCase().includes("preprint") || rawExcerpt.toLowerCase().includes("preprint"),
    journalName: feed.sourceType === 'journal' ? feed.name : null,
    hashDedupe,
  };

  return item;
}
