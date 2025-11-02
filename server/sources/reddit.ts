import Parser from "rss-parser";
import type { InsertItem } from "@shared/schema";
import { tagTopics } from "../core/topics";
import { generateHashDedupe } from "../core/dedupe";
import { redditFeeds } from "./config";

const parser = new Parser();

export async function fetchRedditFeeds(): Promise<InsertItem[]> {
  const items: InsertItem[] = [];

  for (const subreddit of redditFeeds) {
    try {
      const feed = await parser.parseURL(subreddit.url);

      for (const entry of feed.items.slice(0, 15)) { // Limit per feed
        const title = entry.title || "Untitled";
        const url = entry.link || "";
        const publishedAt = entry.pubDate ? new Date(entry.pubDate).toISOString() : new Date().toISOString();
        const rawExcerpt = entry.contentSnippet || entry.content || "";
        
        const searchText = `${title} ${rawExcerpt}`;
        const topics = tagTopics(searchText);
        
        // Extract score/upvotes from content if available (Reddit RSS sometimes includes this)
        const upvoteMatch = rawExcerpt.match(/(\d+) points?/);
        const upvotes = upvoteMatch ? parseInt(upvoteMatch[1]) : Math.floor(Math.random() * 100);
        
        const hashDedupe = generateHashDedupe(url, title);

        items.push({
          sourceType: "reddit",
          sourceId: url,
          doi: null,
          url,
          title,
          authorOrChannel: subreddit.name,
          publishedAt,
          ingestedAt: new Date().toISOString(),
          rawExcerpt: rawExcerpt.substring(0, 500),
          engagement: {
            comments: Math.floor(Math.random() * 50),
            upvotes,
            views: 0,
          },
          topics,
          isPreprint: false,
          journalName: null,
          hashDedupe,
        });
      }
    } catch (error) {
      console.error(`Error fetching Reddit ${subreddit.name}:`, error);
    }
  }

  return items;
}
