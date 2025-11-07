import Parser from "rss-parser";
import { journalFeeds, youtubeFeeds, redditFeeds, substackFeeds, podcastFeeds } from "./config";

const parser = new Parser({
  timeout: 5000,
  customFields: {
    item: [
      ['dc:identifier', 'doi'],
      ['media:group', 'media'],
      ['yt:videoId', 'videoId'],
    ],
  },
});

export async function testFeedConnectivity() {
  const results: Record<string, any> = {
    journals: { total: 0, successful: 0, failed: 0, errors: [] },
    youtube: { total: 0, successful: 0, failed: 0, errors: [] },
    reddit: { total: 0, successful: 0, failed: 0, errors: [] },
    substack: { total: 0, successful: 0, failed: 0, errors: [] },
    podcasts: { total: 0, successful: 0, failed: 0, errors: [] }
  };

  // Test journal feeds
  console.log("Testing journal feeds...");
  results.journals.total = journalFeeds.length;
  for (const feed of journalFeeds.slice(0, 5)) { // Test first 5
    try {
      await parser.parseURL(feed.url);
      results.journals.successful++;
      console.log(`✅ Journal: ${feed.name}`);
    } catch (error: any) {
      results.journals.failed++;
      results.journals.errors.push({ feed: feed.name, error: error.message });
      console.log(`❌ Journal: ${feed.name} - ${error.message}`);
    }
  }

  // Test YouTube feeds
  console.log("\nTesting YouTube feeds...");
  results.youtube.total = youtubeFeeds.length;
  for (const feed of youtubeFeeds.slice(0, 5)) { // Test first 5
    try {
      await parser.parseURL(feed.url);
      results.youtube.successful++;
      console.log(`✅ YouTube: ${feed.name}`);
    } catch (error: any) {
      results.youtube.failed++;
      results.youtube.errors.push({ feed: feed.name, error: error.message });
      console.log(`❌ YouTube: ${feed.name} - ${error.message}`);
    }
  }

  // Test Reddit feeds
  console.log("\nTesting Reddit feeds...");
  results.reddit.total = redditFeeds.length;
  for (const feed of redditFeeds.slice(0, 5)) { // Test first 5
    try {
      await parser.parseURL(feed.url);
      results.reddit.successful++;
      console.log(`✅ Reddit: ${feed.name}`);
    } catch (error: any) {
      results.reddit.failed++;
      results.reddit.errors.push({ feed: feed.name, error: error.message });
      console.log(`❌ Reddit: ${feed.name} - ${error.message}`);
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Journals: ${results.journals.successful}/${results.journals.total} successful`);
  console.log(`YouTube: ${results.youtube.successful}/${results.youtube.total} successful`);
  console.log(`Reddit: ${results.reddit.successful}/${results.reddit.total} successful`);
  
  if (results.journals.failed > 0) {
    console.log("\nFailed journal feeds:");
    results.journals.errors.forEach((e: any) => console.log(`  - ${e.feed}: ${e.error}`));
  }
  
  if (results.youtube.failed > 0) {
    console.log("\nFailed YouTube feeds:");
    results.youtube.errors.forEach((e: any) => console.log(`  - ${e.feed}: ${e.error}`));
  }

  return results;
}

// Run the test
testFeedConnectivity().then(results => {
  console.log("\n\nFull results:", JSON.stringify(results, null, 2));
  process.exit(results.journals.failed > 0 || results.youtube.failed > 0 ? 1 : 0);
}).catch(error => {
  console.error("Test failed:", error);
  process.exit(1);
});