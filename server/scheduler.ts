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

  // Weekly feed health retry - every Sunday at 4 AM UTC
  // Automatically retries degraded feeds to give them a chance to recover
  cron.schedule("0 4 * * 0", async () => {
    console.log("🏥 Running weekly feed health retry...");
    try {
      const { retryDegradedFeeds } = await import("./services/feed-health");
      const result = await retryDegradedFeeds();
      
      console.log("✅ Weekly feed health retry completed:");
      console.log(`   🔄 Retried: ${result.retried} feeds`);
      console.log(`   ✅ Recovered: ${result.recovered} feeds`);
      console.log(`   ⚠️  Still failing: ${result.stillFailing} feeds`);
    } catch (error) {
      console.error("Scheduled feed health retry failed:", error);
    }
  });

  // Notification cleanup - every 6 hours, delete notifications older than 48 hours
  cron.schedule("0 */6 * * *", async () => {
    try {
      const { storage } = await import("./storage");
      const deleted = await storage.deleteOldNotifications(48);
      if (deleted > 0) {
        console.log(`🧹 Cleaned up ${deleted} old notifications (>48h)`);
      }
    } catch (error) {
      console.error("Notification cleanup failed:", error);
    }
  });

  // Start the discovery job processor
  // This runs continuously with its own interval
  console.log("🚀 Starting discovery job processor...");
  import("./services/discovery/discovery-job-processor").then(({ discoveryJobProcessor }) => {
    discoveryJobProcessor.start();
    console.log("✅ Discovery job processor started");
  }).catch(error => {
    console.error("Failed to start discovery job processor:", error);
  });

  // Start proactive discovery crawler for autonomous catalog building
  console.log("🤖 Starting proactive discovery crawler...");
  import("./services/feed-discovery/proactive-crawler").then(({ proactiveCrawler }) => {
    proactiveCrawler.start();
    console.log("✅ Proactive crawler started - building catalog 24/7 (100 feeds per topic max)");
  }).catch(error => {
    console.error("Failed to start proactive crawler:", error);
  });

  // Process discovery queue every hour
  // This is a safety net in case the processor's own interval misses something
  cron.schedule("0 * * * *", async () => {
    try {
      const { discoveryJobProcessor } = await import("./services/discovery/discovery-job-processor");
      const status = discoveryJobProcessor.getStatus();
      
      if (status.queueStatus.pending > 0) {
        console.log(`📋 Discovery queue status: ${status.queueStatus.pending} pending, ${status.queueStatus.processing} processing`);
      }
    } catch (error) {
      console.error("Failed to check discovery queue:", error);
    }
  });

  console.log("Scheduler initialized");
  console.log("- Daily ingestion: Every day at midnight UTC");
  console.log("- Weekly digest: Every Monday at 06:00 CST (12:00 UTC)");
  console.log("- Feed request processing: Every day at 2 AM UTC");
  console.log("- Topic migration cleanup: Every day at 3 AM UTC");
  console.log("- Weekly feed health retry: Every Sunday at 4 AM UTC");
  console.log("- Notification cleanup: Every 6 hours (removes >48h old)");
  console.log("- Discovery processor: Running continuously (checks every 30s)");
  console.log("- Proactive crawler: Building catalog 24/7 (100 feeds/topic limit, 30min cycles)");
}
