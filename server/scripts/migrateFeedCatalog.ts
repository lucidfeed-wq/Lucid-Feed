import { db } from '../db';
import { feedCatalog } from '@shared/schema';
import { nanoid } from 'nanoid';
import { journalFeeds, redditFeeds, substackFeeds, youtubeFeeds } from '../sources/config';

/**
 * Migrates existing RSS sources from config.ts to feed_catalog table
 * All sources are pre-approved since they're curated
 */
async function migrateFeedCatalog() {
  console.log('Starting feed catalog migration...');
  
  const feedsToInsert = [];
  
  // Migrate journal feeds
  for (const feed of journalFeeds) {
    feedsToInsert.push({
      id: nanoid(),
      name: feed.name,
      url: feed.url,
      domain: 'health' as const,
      category: 'Medical Journals',
      description: `Peer-reviewed medical journal: ${feed.name}`,
      sourceType: 'journal' as const,
      isApproved: true,
      isActive: true,
      submittedBy: null,
      approvedBy: null,
      approvedAt: new Date(),
    });
  }
  
  // Migrate Reddit feeds
  for (const feed of redditFeeds) {
    feedsToInsert.push({
      id: nanoid(),
      name: feed.name,
      url: feed.url,
      domain: 'health' as const,
      category: 'Health Communities',
      description: `Reddit community: ${feed.name}`,
      sourceType: 'reddit' as const,
      isApproved: true,
      isActive: true,
      submittedBy: null,
      approvedBy: null,
      approvedAt: new Date(),
    });
  }
  
  // Migrate Substack feeds
  for (const feed of substackFeeds) {
    feedsToInsert.push({
      id: nanoid(),
      name: feed.name,
      url: feed.url,
      domain: 'health' as const,
      category: 'Expert Newsletters',
      description: `Substack newsletter: ${feed.name}`,
      sourceType: 'substack' as const,
      isApproved: true,
      isActive: true,
      submittedBy: null,
      approvedBy: null,
      approvedAt: new Date(),
    });
  }
  
  // Migrate YouTube feeds
  for (const feed of youtubeFeeds) {
    feedsToInsert.push({
      id: nanoid(),
      name: feed.name,
      url: feed.url,
      domain: 'health' as const,
      category: 'Educational Videos',
      description: `YouTube channel: ${feed.name}`,
      sourceType: 'youtube' as const,
      isApproved: true,
      isActive: true,
      submittedBy: null,
      approvedBy: null,
      approvedAt: new Date(),
    });
  }
  
  console.log(`Inserting ${feedsToInsert.length} feeds into catalog...`);
  
  try {
    await db.insert(feedCatalog).values(feedsToInsert);
    console.log(`✓ Successfully migrated ${feedsToInsert.length} feeds to catalog`);
    console.log(`  - Journals: ${journalFeeds.length}`);
    console.log(`  - Reddit: ${redditFeeds.length}`);
    console.log(`  - Substack: ${substackFeeds.length}`);
    console.log(`  - YouTube: ${youtubeFeeds.length}`);
  } catch (error) {
    console.error('Error migrating feeds:', error);
    throw error;
  }
}

// Run migration
migrateFeedCatalog()
  .then(() => {
    console.log('Migration complete');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });
