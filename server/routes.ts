import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { runIngestJob } from "./services/ingest";
import { generateWeeklyDigest } from "./services/digest";
import { exportDigestJSON, exportDigestMarkdown, exportDigestRSS } from "./services/exports";
import { z } from "zod";
import { topics } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";

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
      const prefs = await storage.upsertUserPreferences({
        userId,
        favoriteTopics,
      });
      res.json(prefs);
    } catch (error) {
      console.error("Error updating preferences:", error);
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
  app.post("/admin/run/ingest", async (req, res) => {
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

  app.post("/admin/run/digest", async (req, res) => {
    try {
      const result = await generateWeeklyDigest();
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

  const httpServer = createServer(app);
  return httpServer;
}
