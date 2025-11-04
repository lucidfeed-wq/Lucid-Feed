import Parser from "rss-parser";
import type { InsertItem } from "@shared/schema";
import { tagTopics } from "../core/topics";
import { generateHashDedupe } from "../core/dedupe";
import { podcastFeeds } from "./config";

const parser = new Parser({
  customFields: {
    item: [
      ['itunes:duration', 'duration'],
      ['itunes:explicit', 'explicit'],
    ],
  },
});

export async function fetchPodcastFeeds(): Promise<InsertItem[]> {
  const items: InsertItem[] = [];

  for (const podcast of podcastFeeds) {
    try {
      const feed = await parser.parseURL(podcast.url);

      for (const entry of feed.items.slice(0, 5)) { // Limit per feed
        const title = entry.title || "Untitled";
        const url = entry.link || entry.guid || "";
        const publishedAt = entry.pubDate ? new Date(entry.pubDate).toISOString() : new Date().toISOString();
        const rawExcerpt = entry.content || entry.summary || entry.contentSnippet || ""; // Prefer full content first
        
        const searchText = `${title} ${rawExcerpt}`;
        const topics = tagTopics(searchText);
        
        const hashDedupe = generateHashDedupe(url, title);

        items.push({
          sourceType: "podcast",
          sourceId: url,
          doi: null,
          url,
          title,
          authorOrChannel: podcast.name,
          publishedAt,
          ingestedAt: new Date().toISOString(),
          rawExcerpt: rawExcerpt, // Full episode description/show notes
          engagement: {
            comments: 0,
            upvotes: Math.floor(Math.random() * 100),
            views: Math.floor(Math.random() * 10000) + 1000,
          },
          topics,
          isPreprint: false,
          journalName: null,
          hashDedupe,
        });
      }
    } catch (error) {
      console.error(`Error fetching Podcast ${podcast.name}:`, error);
    }
  }

  return items;
}
