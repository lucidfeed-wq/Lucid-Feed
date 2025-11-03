import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { runIngestJob } from "./services/ingest";
import { generateWeeklyDigest } from "./services/digest";
import { exportDigestJSON, exportDigestMarkdown, exportDigestRSS } from "./services/exports";
import { enrichContentBatch } from "./services/content-enrichment";
import { z } from "zod";
import { topics, feedDomains, sourceTypes, insertFeedCatalogSchema, insertUserFeedSubmissionSchema, type InsertUserFeedSubmission } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { isAdmin } from "./middleware/isAdmin";
import { chatWithDigest } from "./services/chat";
import { generateMissingEmbeddings } from "./services/embeddings";
import { discoverFeeds, verifyRssFeed } from "./services/feed-discovery/discovery-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

  // Auth endpoints
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // User preferences endpoints (protected)
  app.get('/api/preferences', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const prefs = await storage.getUserPreferences(userId);
      if (!prefs) {
        return res.json({ userId, favoriteTopics: [], updatedAt: null });
      }
      res.json(prefs);
    } catch (error) {
      console.error("Error fetching preferences:", error);
      res.status(500).json({ message: "Failed to fetch preferences" });
    }
  });

  app.put('/api/preferences', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { favoriteTopics } = req.body;
      console.log("[PUT /api/preferences] userId:", userId, "favoriteTopics:", favoriteTopics);
      
      if (!favoriteTopics || !Array.isArray(favoriteTopics)) {
        console.error("[PUT /api/preferences] Invalid favoriteTopics:", favoriteTopics);
        return res.status(400).json({ message: "favoriteTopics must be an array" });
      }
      
      const prefs = await storage.upsertUserPreferences({
        userId,
        favoriteTopics,
      });
      console.log("[PUT /api/preferences] Success:", prefs);
      res.json(prefs);
    } catch (error) {
      console.error("[PUT /api/preferences] Error updating preferences:", error);
      res.status(500).json({ message: "Failed to update preferences" });
    }
  });

  // Saved items endpoints (protected)
  app.get('/api/saved-items', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const savedItemsList = await storage.getSavedItemsByUser(userId);
      res.json(savedItemsList);
    } catch (error) {
      console.error("Error fetching saved items:", error);
      res.status(500).json({ message: "Failed to fetch saved items" });
    }
  });

  app.post('/api/saved-items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const saved = await storage.saveItem(userId, itemId);
      res.json(saved);
    } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ message: "Failed to save item" });
    }
  });

  app.delete('/api/saved-items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      await storage.unsaveItem(userId, itemId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unsaving item:", error);
      res.status(500).json({ message: "Failed to unsave item" });
    }
  });

  app.get('/api/saved-items/:itemId/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const isSaved = await storage.isItemSaved(userId, itemId);
      res.json({ isSaved });
    } catch (error) {
      console.error("Error checking saved status:", error);
      res.status(500).json({ message: "Failed to check saved status" });
    }
  });

  // Community rating endpoints (protected)
  app.post('/api/ratings/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const { rating, comment } = req.body;
      
      if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" });
      }
      
      const userRating = await storage.upsertUserRating({
        userId,
        itemId,
        rating,
        comment: comment || null,
      });
      
      res.json(userRating);
    } catch (error) {
      console.error("Error submitting rating:", error);
      res.status(500).json({ message: "Failed to submit rating" });
    }
  });

  app.get('/api/ratings/:itemId/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const rating = await storage.getUserRating(userId, itemId);
      res.json(rating || null);
    } catch (error) {
      console.error("Error fetching user rating:", error);
      res.status(500).json({ message: "Failed to fetch rating" });
    }
  });

  app.get('/api/ratings/:itemId/stats', async (req, res) => {
    try {
      const { itemId } = req.params;
      const stats = await storage.getRatingStats(itemId);
      res.json(stats);
    } catch (error) {
      console.error("Error fetching rating stats:", error);
      res.status(500).json({ message: "Failed to fetch rating stats" });
    }
  });

  // Feed Discovery endpoints (protected)
  app.get('/api/discover/feeds', isAuthenticated, async (req: any, res) => {
    try {
      const { query, sourceTypes } = req.query;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ message: "Query parameter is required" });
      }
      
      const types = sourceTypes ? (typeof sourceTypes === 'string' ? sourceTypes.split(',') : sourceTypes) : undefined;
      const results = await discoverFeeds(query, types);
      
      res.json(results);
    } catch (error) {
      console.error("Error discovering feeds:", error);
      res.status(500).json({ message: "Failed to discover feeds" });
    }
  });

  app.post('/api/discover/verify', isAuthenticated, async (req: any, res) => {
    try {
      const { url } = req.body;
      
      if (!url || typeof url !== 'string') {
        return res.status(400).json({ message: "URL is required" });
      }
      
      const result = await verifyRssFeed(url);
      res.json(result);
    } catch (error) {
      console.error("Error verifying feed:", error);
      res.status(500).json({ message: "Failed to verify feed" });
    }
  });

  // User Feed Subscription endpoints (protected)
  app.get('/api/subscriptions/feeds', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscriptions = await storage.getUserFeedSubscriptions(userId);
      res.json(subscriptions);
    } catch (error) {
      console.error("Error fetching user feed subscriptions:", error);
      res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  app.post('/api/subscriptions/feeds/:feedId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { feedId } = req.params;
      
      const subscription = await storage.subscribeFeed(userId, feedId);
      res.json(subscription);
    } catch (error) {
      console.error("Error subscribing to feed:", error);
      res.status(500).json({ message: "Failed to subscribe to feed" });
    }
  });

  app.delete('/api/subscriptions/feeds/:feedId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { feedId } = req.params;
      
      await storage.unsubscribeFeed(userId, feedId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unsubscribing from feed:", error);
      res.status(500).json({ message: "Failed to unsubscribe from feed" });
    }
  });

  app.get('/api/subscriptions/feeds/:feedId/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { feedId } = req.params;
      
      const isSubscribed = await storage.isSubscribedToFeed(userId, feedId);
      res.json({ isSubscribed });
    } catch (error) {
      console.error("Error checking subscription status:", error);
      res.status(500).json({ message: "Failed to check subscription status" });
    }
  });

  // User Subscription Management (Stripe tier)
  app.get('/api/subscription', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscription = await storage.getUserSubscription(userId);
      
      // Create free tier if no subscription exists
      if (!subscription) {
        const defaultSubscription = await storage.upsertUserSubscription({
          userId,
          tier: 'free',
          status: 'active',
          digestFrequency: 'weekly',
          cancelAtPeriodEnd: false,
        });
        return res.json(defaultSubscription);
      }
      
      res.json(subscription);
    } catch (error) {
      console.error("Error fetching user subscription:", error);
      res.status(500).json({ message: "Failed to fetch subscription" });
    }
  });

  // Digest endpoints (public)
  app.get("/api/digest/latest", async (req, res) => {
    try {
      const digest = await storage.getLatestDigest();
      if (!digest) {
        return res.status(404).json({ error: "No digest available" });
      }
      res.json(digest);
    } catch (error) {
      console.error("Error fetching latest digest:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/digest/archive", async (req, res) => {
    try {
      const digests = await storage.getAllDigests();
      res.json(digests);
    } catch (error) {
      console.error("Error fetching digest archive:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/digest/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const digest = await storage.getDigestBySlug(slug);
      if (!digest) {
        return res.status(404).json({ error: "Digest not found" });
      }
      res.json(digest);
    } catch (error) {
      console.error("Error fetching digest:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Admin endpoints
  app.post("/admin/run/ingest", isAuthenticated, isAdmin, async (req, res) => {
    try {
      // Validate request body with Zod
      const ingestRequestSchema = z.object({
        topics: z.array(z.enum(topics)).optional(),
      });
      
      const validationResult = ingestRequestSchema.safeParse(req.body || {});
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid request", 
          details: validationResult.error.errors,
          validTopics: topics 
        });
      }
      
      const { topics: requestTopics } = validationResult.data;
      const options = requestTopics && requestTopics.length > 0 
        ? { topics: requestTopics } 
        : {};
      
      const result = await runIngestJob(options);
      res.json({
        success: true,
        message: requestTopics && requestTopics.length > 0 
          ? `Ingestion completed (filtered for ${requestTopics.length} topics)` 
          : "Ingestion completed",
        ...result,
      });
    } catch (error) {
      console.error("Error running ingest job:", error);
      res.status(500).json({ error: "Ingestion failed" });
    }
  });

  app.post("/admin/run/digest", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { itemCounts, windowDays } = req.body;
      
      const options: any = {};
      if (itemCounts) options.itemCounts = itemCounts;
      if (windowDays) options.windowDays = windowDays;
      
      const result = await generateWeeklyDigest(options);
      res.json({
        success: true,
        message: "Digest generated",
        ...result,
      });
    } catch (error) {
      console.error("Error generating digest:", error);
      res.status(500).json({ error: "Digest generation failed" });
    }
  });

  app.post("/admin/run/enrich", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { limit } = req.body;
      const maxItems = limit && typeof limit === 'number' ? limit : 50;
      
      console.log(`Starting enrichment for up to ${maxItems} items without quality scores...`);
      
      // Get items that don't have scoreBreakdown
      const items = await storage.getItemsWithoutQualityScores(maxItems);
      
      if (items.length === 0) {
        return res.json({
          success: true,
          message: "No items need enrichment",
          itemsEnriched: 0,
        });
      }
      
      console.log(`Found ${items.length} items to enrich`);
      
      // Enrich items with quality scores
      const enriched = await enrichContentBatch(items as any);
      
      // Update items in database
      let updated = 0;
      for (const item of enriched) {
        await storage.updateItem(item.id, {
          fullText: item.fullText,
          pdfUrl: item.pdfUrl,
          qualityMetrics: item.qualityMetrics,
          scoreBreakdown: item.scoreBreakdown,
        });
        updated++;
      }
      
      console.log(`Successfully enriched ${updated} items`);
      
      res.json({
        success: true,
        message: `Enriched ${updated} items with quality scores`,
        itemsEnriched: updated,
      });
    } catch (error) {
      console.error("Error enriching items:", error);
      res.status(500).json({ error: "Enrichment failed" });
    }
  });

  // Export endpoints
  app.get("/export/weekly.json", async (req, res) => {
    try {
      const json = await exportDigestJSON();
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Disposition", "attachment; filename=weekly-digest.json");
      res.send(json);
    } catch (error) {
      console.error("Error exporting JSON:", error);
      res.status(500).json({ error: "Export failed" });
    }
  });

  app.get("/export/weekly.md", async (req, res) => {
    try {
      const markdown = await exportDigestMarkdown();
      res.setHeader("Content-Type", "text/markdown");
      res.setHeader("Content-Disposition", "attachment; filename=weekly-digest.md");
      res.send(markdown);
    } catch (error) {
      console.error("Error exporting Markdown:", error);
      res.status(500).json({ error: "Export failed" });
    }
  });

  app.get("/rss/weekly.xml", async (req, res) => {
    try {
      const rss = await exportDigestRSS();
      res.setHeader("Content-Type", "application/rss+xml");
      res.send(rss);
    } catch (error) {
      console.error("Error exporting RSS:", error);
      res.status(500).json({ error: "Export failed" });
    }
  });

  // Chat endpoints (protected)
  app.post("/api/chat", isAuthenticated, async (req, res) => {
    try {
      const { query, conversationHistory, digestId } = req.body;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: "Query is required" });
      }
      
      const response = await chatWithDigest(query, conversationHistory || [], digestId);
      res.json(response);
    } catch (error) {
      console.error("Error processing chat:", error);
      res.status(500).json({ error: "Chat failed" });
    }
  });

  // Feed catalog endpoints (public browse, protected submit)
  app.get("/api/feeds", async (req, res) => {
    try {
      const { domain, sourceType, search } = req.query;
      
      const filters: any = {};
      if (domain && typeof domain === 'string') filters.domain = domain;
      if (sourceType && typeof sourceType === 'string') filters.sourceType = sourceType;
      if (search && typeof search === 'string') filters.search = search;
      
      const feeds = await storage.getFeedCatalog(filters);
      res.json(feeds);
    } catch (error) {
      console.error("Error fetching feed catalog:", error);
      res.status(500).json({ error: "Failed to fetch feeds" });
    }
  });

  app.post("/api/feeds/submit", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const validationResult = insertUserFeedSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid submission", 
          details: validationResult.error.errors 
        });
      }
      
      // Add userId and status after validation
      const submissionData = {
        ...validationResult.data,
        userId,
        status: 'pending' as const,
      } as InsertUserFeedSubmission;
      const submission = await storage.submitFeed(submissionData);
      res.json(submission);
    } catch (error) {
      console.error("Error submitting feed:", error);
      res.status(500).json({ error: "Failed to submit feed" });
    }
  });

  app.get("/api/feeds/submissions", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const submissions = await storage.getUserFeedSubmissions(userId);
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.get("/api/feeds/submissions/pending", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const pending = await storage.getPendingFeedSubmissions();
      res.json(pending);
    } catch (error) {
      console.error("Error fetching pending submissions:", error);
      res.status(500).json({ error: "Failed to fetch pending submissions" });
    }
  });

  app.patch("/api/feeds/submissions/:id/review", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const reviewerId = req.user.claims.sub;
      const { id } = req.params;
      const { status, reviewNotes } = req.body;
      
      if (!['approved', 'rejected'].includes(status)) {
        return res.status(400).json({ error: "Status must be 'approved' or 'rejected'" });
      }
      
      const reviewed = await storage.reviewFeedSubmission(id, reviewerId, status, reviewNotes);
      res.json(reviewed);
    } catch (error) {
      console.error("Error reviewing submission:", error);
      res.status(500).json({ error: "Failed to review submission" });
    }
  });

  // Admin metrics endpoint - job observability
  app.get("/api/admin/metrics/jobs", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const { days } = req.query;
      const daysFilter = days ? parseInt(days as string) : 7;
      
      const jobs = await storage.getJobRuns({ days: daysFilter });
      
      // Calculate summary stats
      const totalJobs = jobs.length;
      const successfulJobs = jobs.filter(j => j.status === 'success').length;
      const failedJobs = jobs.filter(j => j.status === 'error').length;
      const totalItemsIngested = jobs.reduce((sum, j) => sum + (j.itemsIngested || 0), 0);
      const totalDedupeHits = jobs.reduce((sum, j) => sum + (j.dedupeHits || 0), 0);
      const totalTokenSpend = jobs.reduce((sum, j) => sum + (j.tokenSpend || 0), 0);
      const avgDedupeRate = totalItemsIngested + totalDedupeHits > 0
        ? (totalDedupeHits / (totalItemsIngested + totalDedupeHits) * 100).toFixed(1)
        : 0;
      
      res.json({
        jobs,
        summary: {
          totalJobs,
          successfulJobs,
          failedJobs,
          totalItemsIngested,
          totalDedupeHits,
          totalTokenSpend,
          avgDedupeRate,
        },
      });
    } catch (error) {
      console.error("Error fetching job metrics:", error);
      res.status(500).json({ error: "Failed to fetch metrics" });
    }
  });

  // Admin endpoint to generate embeddings
  app.post("/admin/run/embeddings", async (req, res) => {
    try {
      const count = await generateMissingEmbeddings();
      res.json({
        success: true,
        message: `Generated ${count} embeddings`,
        count,
      });
    } catch (error) {
      console.error("Error generating embeddings:", error);
      res.status(500).json({ error: "Embedding generation failed" });
    }
  });

  // Admin: Bulk enrichment - process ALL items without scores in background
  app.post("/admin/run/enrich-all", isAuthenticated, isAdmin, async (req, res) => {
    try {
      // Count items needing enrichment
      const items = await storage.getItemsWithoutQualityScores(1000);
      const totalPending = items.length;
      
      // Start async background job
      res.json({
        success: true,
        message: `Bulk enrichment started for ~${totalPending}+ items. Check server logs for progress.`,
        itemsPending: totalPending,
      });
      
      // Process in background
      (async () => {
        try {
          let totalEnriched = 0;
          let batch = 0;
          const batchSize = 50;
          
          console.log(`\n🔬 Starting bulk enrichment for all items without scores...`);
          
          while (true) {
            batch++;
            console.log(`\nBatch ${batch}: Fetching next ${batchSize} items...`);
            
            const batchItems = await storage.getItemsWithoutQualityScores(batchSize);
            if (batchItems.length === 0) {
              console.log(`✅ Bulk enrichment complete! Enriched ${totalEnriched} total items.`);
              break;
            }
            
            console.log(`Processing ${batchItems.length} items...`);
            const enriched = await enrichContentBatch(batchItems as any);
            
            // Update database
            for (const item of enriched) {
              await storage.updateItem(item.id, {
                fullText: item.fullText,
                pdfUrl: item.pdfUrl,
                qualityMetrics: item.qualityMetrics,
                scoreBreakdown: item.scoreBreakdown,
              });
              totalEnriched++;
            }
            
            console.log(`Batch ${batch} complete. Total enriched: ${totalEnriched}`);
            
            // Rate limit between batches (5 second pause)
            await new Promise(resolve => setTimeout(resolve, 5000));
          }
        } catch (error) {
          console.error('❌ Error in bulk enrichment:', error);
        }
      })();
      
    } catch (error) {
      console.error("Error starting bulk enrichment:", error);
      res.status(500).json({ error: "Failed to start bulk enrichment" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
