/**
 * Feed Health Service
 * Manages feed health monitoring and recovery
 */

import { storage } from '../storage';
import { fetchFeedItems } from './feed-fetcher';
import type { FeedCatalog } from '../../shared/schema';

/**
 * Retry all degraded feeds (active but with failures) to help them recover
 * Called weekly by scheduler to give failing feeds a chance to recover
 */
export async function retryDegradedFeeds(): Promise<{
  retried: number;
  recovered: number;
  stillFailing: number;
}> {
  console.log('🏥 Starting weekly feed health retry...');
  
  // Get all degraded feeds (active with failures but not yet deactivated)
  const allFeeds = await storage.getFeedCatalog({});
  const degradedFeeds = allFeeds.filter(f => f.isActive && f.consecutiveFailures > 0);
  
  if (degradedFeeds.length === 0) {
    console.log('✅ No degraded feeds to retry - all feeds healthy!');
    return { retried: 0, recovered: 0, stillFailing: 0 };
  }
  
  console.log(`🔄 Retrying ${degradedFeeds.length} degraded feed(s)...`);
  
  // Attempt to fetch from degraded feeds
  // The feed-fetcher will handle retries and update failure counts
  const items = await fetchFeedItems(degradedFeeds);
  
  // Check how many recovered after the retry
  const updatedFeeds = await storage.getFeedCatalog({});
  const updatedDegradedFeeds = updatedFeeds.filter((f: FeedCatalog) => 
    degradedFeeds.some((d: FeedCatalog) => d.id === f.id)
  );
  
  const recovered = updatedDegradedFeeds.filter((f: FeedCatalog) => f.consecutiveFailures === 0).length;
  const stillFailing = updatedDegradedFeeds.filter((f: FeedCatalog) => f.consecutiveFailures > 0).length;
  
  console.log(`\n📊 Retry Results:`);
  console.log(`   🔄 Total retried: ${degradedFeeds.length}`);
  console.log(`   ✅ Recovered: ${recovered}`);
  console.log(`   ⚠️  Still failing: ${stillFailing}`);
  console.log(`   📥 Items fetched: ${items.length}`);
  
  return {
    retried: degradedFeeds.length,
    recovered,
    stillFailing,
  };
}
