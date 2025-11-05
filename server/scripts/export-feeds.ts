import { db } from "../db";
import { feedCatalog } from "../../shared/schema";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Export all approved feeds from the database to a JSON seed file
 * This allows easy seeding of production database
 */
async function exportFeeds() {
  console.log("📦 Exporting feed catalog...");
  
  try {
    // Fetch all approved feeds
    const feeds = await db
      .select()
      .from(feedCatalog)
      .where(eq(feedCatalog.isApproved, true))
      .orderBy(feedCatalog.starterRank, feedCatalog.name);
    
    console.log(`✓ Found ${feeds.length} approved feeds`);
    
    // Prepare seed data
    const seedData = {
      exported_at: new Date().toISOString(),
      count: feeds.length,
      feeds: feeds.map(feed => ({
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
      }))
    };
    
    // Save to seeds directory
    const seedsDir = path.join(__dirname, "../seeds");
    if (!fs.existsSync(seedsDir)) {
      fs.mkdirSync(seedsDir, { recursive: true });
    }
    
    const filePath = path.join(seedsDir, "feed-catalog.json");
    fs.writeFileSync(filePath, JSON.stringify(seedData, null, 2));
    
    console.log(`✓ Exported ${feeds.length} feeds to ${filePath}`);
    console.log(`  Featured: ${feeds.filter(f => f.featured).length}`);
    console.log(`  By type:`);
    const byType = feeds.reduce((acc, f) => {
      acc[f.sourceType] = (acc[f.sourceType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    Object.entries(byType).forEach(([type, count]) => {
      console.log(`    ${type}: ${count}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Export failed:", error);
    process.exit(1);
  }
}

exportFeeds();
