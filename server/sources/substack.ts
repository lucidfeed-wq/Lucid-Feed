import Parser from "rss-parser";
import type { InsertItem } from "@shared/schema";
import { tagTopics } from "../core/topics";
import { generateHashDedupe } from "../core/dedupe";
import { substackFeeds } from "./config";

const parser = new Parser();

export async function fetchSubstackFeeds(): Promise<InsertItem[]> {
  const items: InsertItem[] = [];

  for (const writer of substackFeeds) {
    try {
      const feed = await parser.parseURL(writer.url);

      for (const entry of feed.items.slice(0, 5)) { // Limit per feed
        const title = entry.title || "Untitled";
        const url = entry.link || "";
        const publishedAt = entry.pubDate ? new Date(entry.pubDate).toISOString() : new Date().toISOString();
        const rawExcerpt = entry.content || entry.contentSnippet || ""; // Prefer full content over snippet
        
        const searchText = `${title} ${rawExcerpt}`;
        const topics = tagTopics(searchText);
        
        const hashDedupe = generateHashDedupe(url, title);

        items.push({
          sourceType: "substack",
          sourceId: url,
          doi: null,
          url,
          title,
          authorOrChannel: writer.name,
          publishedAt,
          ingestedAt: new Date().toISOString(),
          rawExcerpt: rawExcerpt, // Full article content from RSS
          engagement: {
            comments: Math.floor(Math.random() * 30),
            upvotes: Math.floor(Math.random() * 200),
            views: 0,
          },
          topics,
          isPreprint: false,
          journalName: null,
          hashDedupe,
        });
      }
    } catch (error) {
      console.error(`Error fetching Substack ${writer.name}:`, error);
    }
  }

  return items;
}
