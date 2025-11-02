import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { runIngestJob } from "./services/ingest";
import { generateWeeklyDigest } from "./services/digest";
import { exportDigestJSON, exportDigestMarkdown, exportDigestRSS } from "./services/exports";
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
      const result = await runIngestJob();
      res.json({
        success: true,
        message: "Ingestion completed",
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
