import { db } from "../db";
import { feedCatalog } from "../../shared/schema";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";

/**
 * Migrates feed topics in database from feed-catalog.json
 * Updates existing feeds with corrected topic assignments
 */
export async function migrateFeedTopics(): Promise<{
  updated: number;
  unchanged: number;
  errors: number;
  details: string[];
}> {
  const details: string[] = [];
  
  try {
    details.push("🔄 Starting feed topic migration...");
    
    // Read the corrected catalog
    const catalogPath = path.join(process.cwd(), "server/seeds/feed-catalog.json");
    
    if (!fs.existsSync(catalogPath)) {
      throw new Error(`Catalog not found at: ${catalogPath}`);
    }
    
    const catalogData = JSON.parse(fs.readFileSync(catalogPath, "utf-8"));
    details.push(`📂 Loaded ${catalogData.feeds.length} feeds from catalog`);
    
    // Get existing feeds from database
    const existingFeeds = await db.select().from(feedCatalog);
    details.push(`💾 Found ${existingFeeds.length} feeds in database`);
    
    let updated = 0;
    let unchanged = 0;
    let errors = 0;
    
    // Update each feed with corrected topics
    for (const catalogFeed of catalogData.feeds) {
      try {
        const dbFeed = existingFeeds.find((f: any) => f.id === catalogFeed.id);
        
        if (!dbFeed) {
          details.push(`⚠️  Feed ${catalogFeed.name} not found in database - skipping`);
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
        
        details.push(`✅ Updated: ${catalogFeed.name} (${dbFeed.topics?.join(", ")} → ${catalogFeed.topics?.join(", ")})`);
        updated++;
        
      } catch (error: any) {
        details.push(`❌ Error updating ${catalogFeed.name}: ${error.message}`);
        errors++;
      }
    }
    
    details.push("");
    details.push("📊 Migration Summary:");
    details.push(`   ✅ Updated: ${updated} feeds`);
    details.push(`   ⏭️  Unchanged: ${unchanged} feeds`);
    details.push(`   ❌ Errors: ${errors} feeds`);
    
    if (updated > 0) {
      details.push("🎉 Migration complete! Database topics updated successfully.");
    } else {
      details.push("ℹ️  No feeds needed updating.");
    }
    
    return { updated, unchanged, errors, details };
    
  } catch (error: any) {
    details.push(`❌ Migration failed: ${error.message}`);
    return { updated: 0, unchanged: 0, errors: 1, details };
  }
}
