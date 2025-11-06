/**
 * Test file for the Healing Orchestrator
 * This file demonstrates how to use the healing service
 */

import { HealingOrchestrator } from './healing-orchestrator';
import type { FeedCatalog } from '@shared/schema';

// Example usage
async function testHealing() {
  const orchestrator = new HealingOrchestrator();

  // Example failing feed
  const failingFeed: FeedCatalog = {
    id: 'test-feed-1',
    name: 'Test Feed',
    url: 'https://example.com/rss',
    domain: 'technology',
    category: 'blog',
    description: 'A test feed',
    sourceType: 'journal',
    topics: [],
    featured: false,
    starterRank: null,
    qualityScore: 50,
    isApproved: true,
    isActive: true,
    submittedBy: null,
    approvedBy: null,
    createdAt: new Date(),
    approvedAt: null,
    lastFetchedAt: null,
    lastFetchStatus: 'transient_error',
    consecutiveFailures: 3,
    lastErrorMessage: 'Failed to parse XML: invalid format',
    healingStatus: 'degraded',
    lastHealingAt: null,
    preferredRecoveryTactic: null
  };

  console.log('Testing single feed healing...');
  const result = await orchestrator.healFeed(failingFeed, 2000);
  console.log('Healing result:', {
    success: result.success,
    tactic: result.tactic,
    duration: result.duration,
    error: result.error
  });

  // Test bulk healing
  const feeds: FeedCatalog[] = [
    failingFeed,
    { ...failingFeed, id: 'test-feed-2', url: 'https://example.org/feed' },
    { ...failingFeed, id: 'test-feed-3', url: 'https://example.net/rss.xml' }
  ];

  console.log('\nTesting bulk feed healing...');
  const bulkResults = await orchestrator.healFeedsBulk(feeds, 2);
  
  console.log('Bulk healing results:');
  bulkResults.forEach((result, feedId) => {
    console.log(`  ${feedId}: ${result.success ? 'SUCCESS' : 'FAILED'} (${result.duration}ms)`);
  });
}

// Run test if this file is executed directly
if (require.main === module) {
  testHealing().catch(console.error);
}

export { testHealing };