import { db } from "../db";
import { feedCatalog } from "../../shared/schema";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Seed the feed catalog from the exported JSON file
 * Safe to run multiple times - uses upsert logic
 * 
 * Usage:
 *   tsx server/scripts/seed-feeds.ts
 */
async function seedFeeds() {
  console.log("🌱 Seeding feed catalog...");
  
  try {
    // Read seed file
    const seedPath = path.join(__dirname, "../seeds/feed-catalog.json");
    
    if (!fs.existsSync(seedPath)) {
      console.error(`❌ Seed file not found: ${seedPath}`);
      console.log("Run 'tsx server/scripts/export-feeds.ts' first to create the seed file");
      process.exit(1);
    }
    
    const seedData = JSON.parse(fs.readFileSync(seedPath, "utf-8"));
    console.log(`📂 Found seed file with ${seedData.count} feeds (exported ${seedData.exported_at})`);
    
    let inserted = 0;
    let updated = 0;
    let skipped = 0;
    
    // Process each feed
    for (const feed of seedData.feeds) {
      try {
        // Check if feed already exists
        const existing = await db
          .select()
          .from(feedCatalog)
          .where(eq(feedCatalog.id, feed.id))
          .limit(1);
        
        if (existing.length > 0) {
          // Update existing feed
          await db
            .update(feedCatalog)
            .set({
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
            })
            .where(eq(feedCatalog.id, feed.id));
          updated++;
        } else {
          // Insert new feed
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
        }
      } catch (error: any) {
        console.warn(`⚠️  Skipped feed ${feed.name}: ${error.message}`);
        skipped++;
      }
    }
    
    console.log("\n✅ Seeding complete!");
    console.log(`  Inserted: ${inserted}`);
    console.log(`  Updated: ${updated}`);
    console.log(`  Skipped: ${skipped}`);
    console.log(`  Total: ${inserted + updated + skipped}/${seedData.count}`);
    
    // Verify
    const totalFeeds = await db.select().from(feedCatalog);
    const approvedFeeds = totalFeeds.filter(f => f.isApproved);
    const featuredFeeds = totalFeeds.filter(f => f.featured && f.isApproved);
    
    console.log("\n📊 Database status:");
    console.log(`  Total feeds: ${totalFeeds.length}`);
    console.log(`  Approved: ${approvedFeeds.length}`);
    console.log(`  Featured: ${featuredFeeds.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedFeeds();
