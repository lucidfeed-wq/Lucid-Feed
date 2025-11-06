import cron from "node-cron";
import { runIngestJob } from "./services/ingest";
import { generateWeeklyDigest } from "./services/digest";
import { processFeedRequests } from "./services/feedRequestProcessor";
import { migrateFeedTopics } from "./services/migrate-topics";

export function initializeScheduler() {
  // Daily ingestion at midnight UTC
  cron.schedule("0 0 * * *", async () => {
    console.log("Running scheduled daily ingestion...");
    try {
      await runIngestJob({ useSubscribedFeeds: true });
    } catch (error) {
      console.error("Scheduled ingestion failed:", error);
    }
  });

  // Weekly digest generation every Monday at 06:00 CST (12:00 UTC)
  cron.schedule("0 12 * * 1", async () => {
    console.log("Running scheduled weekly digest generation...");
    try {
      await generateWeeklyDigest();
    } catch (error) {
      console.error("Scheduled digest generation failed:", error);
    }
  });

  // Process feed requests daily at 2 AM UTC
  cron.schedule("0 2 * * *", async () => {
    console.log("Running scheduled feed request processing...");
    try {
      await processFeedRequests();
    } catch (error) {
      console.error("Scheduled feed request processing failed:", error);
    }
  });

  // Topic migration cleanup at 3 AM UTC daily
  // Ensures feed topics stay in sync with catalog (safety net for manual additions)
  cron.schedule("0 3 * * *", async () => {
    try {
      const result = await migrateFeedTopics();
      
      // Only log if something was updated or there were errors
      if (result.updated > 0 || result.errors > 0) {
        console.log("🔄 Nightly topic migration completed:");
        console.log(`   ✅ Updated: ${result.updated} feeds`);
        console.log(`   ⏭️  Unchanged: ${result.unchanged} feeds`);
        if (result.errors > 0) {
          console.log(`   ❌ Errors: ${result.errors} feeds`);
        }
      }
      // Silent if no changes needed (normal case)
    } catch (error) {
      console.error("Scheduled topic migration failed:", error);
    }
  });

  console.log("Scheduler initialized");
  console.log("- Daily ingestion: Every day at midnight UTC");
  console.log("- Weekly digest: Every Monday at 06:00 CST (12:00 UTC)");
  console.log("- Feed request processing: Every day at 2 AM UTC");
  console.log("- Topic migration cleanup: Every day at 3 AM UTC");
}
