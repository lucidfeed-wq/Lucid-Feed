#!/usr/bin/env -S tsx
/**
 * Validates that all topics in feed-catalog.json are valid according to shared/schema.ts
 * Run this before committing changes to feed-catalog.json
 * 
 * Usage: tsx server/scripts/validate-catalog-topics.ts
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { topics as VALID_TOPICS } from '../../shared/schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function validateCatalog() {
  const catalogPath = join(__dirname, '..', 'seeds', 'feed-catalog.json');
  const data = JSON.parse(readFileSync(catalogPath, 'utf8'));
  const feeds = data.feeds || [];

  const validTopicsSet = new Set(VALID_TOPICS);
  const invalidTopicsMap = new Map<string, string[]>(); // topic -> feed names
  let totalInvalidCount = 0;

  feeds.forEach((feed: any) => {
    if (feed.topics) {
      feed.topics.forEach((topic: string) => {
        if (!validTopicsSet.has(topic as any)) {
          if (!invalidTopicsMap.has(topic)) {
            invalidTopicsMap.set(topic, []);
          }
          invalidTopicsMap.get(topic)!.push(feed.name);
          totalInvalidCount++;
        }
      });
    }
  });

  if (invalidTopicsMap.size === 0) {
    console.log('✅ All topics are valid!');
    console.log(`   Validated ${feeds.length} feeds with no issues.`);
    console.log(`   Schema defines ${VALID_TOPICS.length} valid topics.`);
    return true;
  } else {
    console.error('❌ VALIDATION FAILED: Found invalid topics\n');
    console.error(`   Total invalid topic assignments: ${totalInvalidCount}`);
    console.error(`   Unique invalid topics: ${invalidTopicsMap.size}\n`);
    
    const sortedInvalid = Array.from(invalidTopicsMap.entries())
      .sort((a, b) => b[1].length - a[1].length);
    
    sortedInvalid.forEach(([topic, feedNames]) => {
      console.error(`   ❌ "${topic}" (used in ${feedNames.length} feed${feedNames.length > 1 ? 's' : ''})`);
      if (feedNames.length <= 3) {
        feedNames.forEach(name => console.error(`      - ${name}`));
      } else {
        feedNames.slice(0, 3).forEach(name => console.error(`      - ${name}`));
        console.error(`      ... and ${feedNames.length - 3} more`);
      }
    });
    
    console.error(`\n   💡 Valid topics (${VALID_TOPICS.length}) are defined in shared/schema.ts`);
    console.error('   💡 Run "node server/scripts/fix-catalog-topics.cjs" to auto-fix common issues\n');
    
    return false;
  }
}

const isValid = validateCatalog();
process.exit(isValid ? 0 : 1);
