# Production Fix - Routes Not Found

## Issue
All API routes returning "Not Found" in production, but app works locally.

## Root Cause
One of these is happening:
1. Production deployment failed to build/start
2. Express routes not mounting in production
3. Static file serving catching all routes

## Fix Steps

### Step 1: Check Production Logs
In Replit:
1. Click "Deployments" tab
2. Click your active deployment
3. Click "Logs" 
4. Look for startup errors or "serving on port 5000"

**Look for:**
- ❌ Build errors
- ❌ Startup crashes
- ❌ "Module not found" errors
- ✅ "serving on port 5000" (good)
- ✅ "Feed catalog already populated" (good)

### Step 2: Redeploy

If you see errors, try redeploying:
1. In Replit, click "Deploy" button
2. Wait for build to complete
3. Check logs again

### Step 3: Verify Build Works Locally

In your Replit development environment:
```bash
# Build production assets
npm run build

# Check for errors
echo $?   # Should output 0
```

### Step 4: Check Vite Static Serving

The issue might be static file serving. Check if this is in server/index.ts:

```typescript
// This should come AFTER all API routes
if (app.get("env") === "development") {
  await setupVite(app, server);
} else {
  serveStatic(app);  // This might be catching all routes
}
```

### Step 5: Emergency Rollback

If production is broken:
1. Go to Deployments tab
2. Find previous working deployment
3. Click "Promote to Production"

## Quick Test

Try these in order:

```bash
# 1. Basic connectivity
curl https://lucidfeed.replit.app

# 2. Marketing health (should work if app running)
curl https://lucidfeed.replit.app/health/marketing

# 3. Feed catalog
curl https://lucidfeed.replit.app/api/feeds/catalog

# 4. Latest digest (404 is OK if no digest exists)
curl https://lucidfeed.replit.app/api/digest/latest
```

## Most Likely Issue

Based on "Not Found" for ALL routes, this is probably:

**Routes not registering in production build**

Check if `server/routes/marketing.ts` has proper export:
```typescript
export default router;  // ✅ Correct
```

And `server/routes.ts` imports it:
```typescript
import marketingRouter from "./routes/marketing";
// ...
app.use(marketingRouter);  // ✅ Correct
```

## Next Steps

1. **Share production logs** - Copy/paste last 30 lines
2. **Try redeploying** - Click Deploy button
3. **Test curl commands** after redeploy
4. **If still broken** - rollback to previous deployment

---

## Development vs Production Checklist

Make sure these work locally first:

```bash
# Start dev server
npm run dev

# Test endpoints
curl http://localhost:5000/health/marketing
curl http://localhost:5000/api/feeds/catalog

# Build production
npm run build

# Both should succeed with no errors
```
