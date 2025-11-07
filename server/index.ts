import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { initializeScheduler } from "./scheduler";
import { autoSeedFeedCatalog } from "./core/auto-seed";
import { migrateFeedTopics } from "./services/migrate-topics";
import publicHealth from "./routes/publicHealth";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Mount public health routes before auth
app.use(publicHealth);

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // API Key Configuration Check
  const apiKeys = {
    'YOUTUBE_API_KEY': !!process.env.YOUTUBE_API_KEY,
    'REDDIT_CLIENT_ID': !!process.env.REDDIT_CLIENT_ID,
    'REDDIT_SECRET': !!process.env.REDDIT_SECRET,
    'REDDIT_USERNAME': !!process.env.REDDIT_USERNAME,
    'REDDIT_PASSWORD': !!process.env.REDDIT_PASSWORD,
    'OPENAI_API_KEY': !!process.env.OPENAI_API_KEY,
    'RESEND_USER_API_KEY': !!process.env.RESEND_USER_API_KEY
  };
  
  console.log('🔑 API Key Configuration:');
  Object.entries(apiKeys).forEach(([key, present]) => {
    console.log(`  ${present ? '✓' : '✗'} ${key}`);
  });

  // Auto-seed feed catalog if empty (for production deployments)
  await autoSeedFeedCatalog();
  
  // Auto-migrate feed topics on startup (fixes invalid topics from old catalog)
  try {
    const migrationResult = await migrateFeedTopics();
    if (migrationResult.updated > 0) {
      console.log(`🔄 Startup migration: Updated ${migrationResult.updated} feeds with corrected topics`);
    } else {
      console.log(`✓ Topic migration check: ${migrationResult.unchanged} feeds already correct`);
    }
    if (migrationResult.errors > 0) {
      console.log(`⚠️  Topic migration had ${migrationResult.errors} errors`);
    }
  } catch (error: any) {
    console.error(`❌ Startup migration failed: ${error.message}`);
  }

  // List all registered routes for diagnostics
  const routes = (app as any)._router?.stack
    ?.filter((r: any) => r.route)
    .map((r: any) => `${Object.keys(r.route.methods).join(',').toUpperCase()} ${r.route.path}`)
    .sort() || [];
  console.log('Routes:', routes);

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
    
    // Initialize cron scheduler
    initializeScheduler();
    
    // Initialize real-time feed monitoring
    import('./services/feed-monitoring/real-time-monitor').then(({ startGlobalMonitoring }) => {
      startGlobalMonitoring()
        .then(() => console.log("✅ Real-time feed monitoring started"))
        .catch(err => console.error("❌ Failed to start feed monitoring:", err));
    });
    
    // Marketing jobs route info
    console.log("Marketing jobs route active: /jobs/build-weekly-digest");
    console.log("[READY] Resend weekly digest emailer wired. Test with: POST /admin/run/email-digest?token=...");
  });
})();
