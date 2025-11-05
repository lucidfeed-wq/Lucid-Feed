import { db } from "../db";
import { feedCatalog } from "../../shared/schema";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Automatically seed feed catalog on app startup if empty
 * This ensures production databases are always populated after deployment
 */
export async function autoSeedFeedCatalog(): Promise<void> {
  try {
    // Check current feed count
    const existingFeeds = await db.select().from(feedCatalog);
    
    // If we already have feeds, skip seeding
    if (existingFeeds.length > 0) {
      console.log(`✓ Feed catalog already populated (${existingFeeds.length} feeds)`);
      return;
    }
    
    console.log("🌱 Feed catalog empty - auto-seeding from catalog...");
    
    // Read seed file
    const seedPath = path.join(__dirname, "../seeds/feed-catalog.json");
    
    if (!fs.existsSync(seedPath)) {
      console.warn("⚠️  Seed file not found - skipping auto-seed");
      return;
    }
    
    const seedData = JSON.parse(fs.readFileSync(seedPath, "utf-8"));
    console.log(`📂 Loading ${seedData.count} feeds...`);
    
    let inserted = 0;
    
    // Insert all feeds
    for (const feed of seedData.feeds) {
      try {
        await db.insert(feedCatalog).values({
          id: feed.id,
          name: feed.name,
          url: feed.url,
          domain: feed.domain,
          category: feed.category,
          description: feed.description,
          sourceType: feed.sourceType,
          topics: feed.topics,
          featured: feed.featured,
          starterRank: feed.starterRank,
          qualityScore: feed.qualityScore,
          isApproved: feed.isApproved,
          isActive: feed.isActive,
        });
        inserted++;
      } catch (error: any) {
        // Skip duplicates silently
        if (!error.message.includes('duplicate key')) {
          console.warn(`⚠️  Skipped feed ${feed.name}: ${error.message}`);
        }
      }
    }
    
    console.log(`✅ Auto-seed complete! Inserted ${inserted} feeds`);
    
  } catch (error) {
    console.error("❌ Auto-seed failed:", error);
    // Don't crash the app - just log the error
  }
}
