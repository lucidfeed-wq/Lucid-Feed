#!/usr/bin/env -S tsx
/**
 * Migration script to update feed topics in the database
 * This updates existing feeds with corrected topics from feed-catalog.json
 * 
 * Usage: tsx server/scripts/migrate-feed-topics.ts
 */

import { db } from "../db.js";
import { feedCatalog } from "../../shared/schema.js";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function migrateFeedTopics() {
  try {
    console.log("🔄 Starting feed topic migration...\n");
    
    // Read the corrected catalog
    const catalogPath = path.join(process.cwd(), "server/seeds/feed-catalog.json");
    const catalogData = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
    
    console.log(`📂 Loaded ${catalogData.feeds.length} feeds from catalog`);
    
    // Get existing feeds from database
    const existingFeeds = await db.select().from(feedCatalog);
    console.log(`💾 Found ${existingFeeds.length} feeds in database\n`);
    
    let updated = 0;
    let unchanged = 0;
    let errors = 0;
    
    // Update each feed with corrected topics
    for (const catalogFeed of catalogData.feeds) {
      try {
        const dbFeed = existingFeeds.find((f: any) => f.id === catalogFeed.id);
        
        if (!dbFeed) {
          console.log(`⚠️  Feed ${catalogFeed.name} not found in database - skipping`);
          continue;
        }
        
        // Check if topics need updating
        const dbTopics = JSON.stringify(dbFeed.topics?.sort());
        const catalogTopics = JSON.stringify(catalogFeed.topics?.sort());
        
        if (dbTopics === catalogTopics) {
          unchanged++;
          continue;
        }
        
        // Update the feed
        await db.update(feedCatalog)
          .set({ topics: catalogFeed.topics })
          .where(eq(feedCatalog.id, catalogFeed.id));
        
        console.log(`✅ Updated: ${catalogFeed.name}`);
        console.log(`   Old: ${dbFeed.topics?.join(", ") || "none"}`);
        console.log(`   New: ${catalogFeed.topics?.join(", ") || "none"}\n`);
        
        updated++;
        
      } catch (error: any) {
        console.error(`❌ Error updating ${catalogFeed.name}: ${error.message}`);
        errors++;
      }
    }
    
    console.log("\n📊 Migration Summary:");
    console.log(`   ✅ Updated: ${updated} feeds`);
    console.log(`   ⏭️  Unchanged: ${unchanged} feeds`);
    console.log(`   ❌ Errors: ${errors} feeds`);
    console.log(`   📝 Total processed: ${catalogData.feeds.length} feeds\n`);
    
    if (updated > 0) {
      console.log("🎉 Migration complete! Database topics updated successfully.");
    } else {
      console.log("ℹ️  No feeds needed updating.");
    }
    
    process.exit(0);
    
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

migrateFeedTopics();
