import cron from "node-cron";
import { runIngestJob } from "./services/ingest";
import { generateWeeklyDigest } from "./services/digest";

export function initializeScheduler() {
  // Daily ingestion at midnight UTC
  cron.schedule("0 0 * * *", async () => {
    console.log("Running scheduled daily ingestion...");
    try {
      await runIngestJob();
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

  console.log("Scheduler initialized");
  console.log("- Daily ingestion: Every day at midnight UTC");
  console.log("- Weekly digest: Every Monday at 06:00 CST (12:00 UTC)");
}
