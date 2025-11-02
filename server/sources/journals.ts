import Parser from "rss-parser";
import { nanoid } from "nanoid";
import type { InsertItem } from "@shared/schema";
import { tagTopics } from "../core/topics";
import { generateHashDedupe, extractDOI } from "../core/dedupe";
import { journalFeeds } from "./config";

const parser = new Parser({
  customFields: {
    item: [['dc:identifier', 'doi']],
  },
});

export async function fetchJournalFeeds(): Promise<InsertItem[]> {
  const items: InsertItem[] = [];

  for (const journal of journalFeeds) {
    try {
      const feed = await parser.parseURL(journal.url);

      for (const entry of feed.items.slice(0, 10)) { // Limit per feed
        const title = entry.title || "Untitled";
        const url = entry.link || "";
        const publishedAt = entry.pubDate ? new Date(entry.pubDate).toISOString() : new Date().toISOString();
        const rawExcerpt = entry.contentSnippet || entry.content || "";
        
        // Extract DOI from entry or content
        const doi = extractDOI(entry.link || "") || extractDOI(rawExcerpt) || url;
        
        const searchText = `${title} ${rawExcerpt}`;
        const topics = tagTopics(searchText);
        
        const hashDedupe = generateHashDedupe(url, title);

        items.push({
          sourceType: "journal",
          sourceId: doi,
          url,
          title,
          authorOrChannel: entry.creator || journal.name,
          publishedAt,
          ingestedAt: new Date().toISOString(),
          rawExcerpt: rawExcerpt.substring(0, 500),
          engagement: {
            comments: 0,
            upvotes: 0,
            views: 0,
          },
          topics,
          isPreprint: title.toLowerCase().includes("preprint") || rawExcerpt.toLowerCase().includes("preprint"),
          journalName: journal.name,
          hashDedupe,
        });
      }
    } catch (error) {
      console.error(`Error fetching journal ${journal.name}:`, error);
    }
  }

  return items;
}
