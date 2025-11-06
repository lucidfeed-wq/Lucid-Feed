# Production Deployment Guide

## Automatic Database Seeding ✨

**Good news!** Feed catalog seeding is now **fully automated**. When you publish your app:

1. The database schema automatically migrates (as always)
2. On first startup, the app **automatically detects** if the feed catalog is empty
3. If empty, it **auto-seeds** all 500 curated feeds from `server/seeds/feed-catalog.json`
4. On subsequent restarts, it skips seeding (already populated)

**You don't need to do anything!** Just publish and the app handles everything.

### What Gets Auto-Seeded

When the production database is empty, the app automatically loads:
- **500 approved feeds** across all source types:
  - 163 Reddit communities
  - 152 YouTube channels  
  - 112 Podcasts
  - 42 Academic journals
  - 31 Substack publications
- **159 featured feeds** for onboarding
- All feed metadata (topics, quality scores, etc.)

### Manual Seeding (Optional)

If you ever need to manually seed (e.g., after clearing the database):

**Option 1 - Command Line:**
```bash
tsx server/scripts/seed-feeds.ts
```

**Option 2 - Admin UI:**
1. Visit `/admin`
2. Click "Seed Feed Catalog" button
3. Wait for confirmation

### Verification

After seeding, check:
```bash
# Count feeds in production
tsx -e "import { db } from './server/db'; import { feedCatalog } from './shared/schema'; const c = await db.select().from(feedCatalog); console.log('Feeds:', c.length); process.exit(0)"
```

Should show: `Feeds: 500`

### Re-seeding (If Needed)

The seed script is **idempotent** - safe to run multiple times:
- Existing feeds get updated
- New feeds get inserted  
- Nothing gets deleted

### Troubleshooting

**Problem**: Onboarding shows "No feeds found"  
**Solution**: Run the seed script - production database is empty

**Problem**: Discover page is empty  
**Solution**: Same as above + check that featured feeds exist

**Problem**: Seed script fails  
**Solution**: Make sure DATABASE_URL points to production database

---

## Full Deployment Checklist

### Before Publishing

- [ ] Verify `server/seeds/feed-catalog.json` exists (should have 500 feeds)
- [ ] Verify environment variables are set in Replit Secrets

### After Publishing (Automatic)

The app handles everything automatically on first startup:
- ✅ Database schema migrates
- ✅ Feed catalog auto-seeds (500 feeds)
- ✅ Scheduled jobs initialize

### Verification Steps

- [ ] Test onboarding flow (should show 50 feed suggestions)
- [ ] Test discover page (should show 159 featured feeds)
- [ ] Verify admin panel access
- [ ] Check scheduled jobs are running (view in server logs)

### Environment Variables Required

Production requires these secrets:
- `DATABASE_URL` - Auto-configured by Replit
- `OPENAI_API_KEY` - For AI summaries
- `STRIPE_SECRET_KEY` - For payments
- `RECAPTCHA_SITE_KEY` - Bot protection
- `RECAPTCHA_SECRET_KEY` - Server verification
- `VITE_RECAPTCHA_SITE_KEY` - Frontend (same as RECAPTCHA_SITE_KEY)
- `RESEND_API_KEY` - Email alerts (optional)
- `ALERT_EMAILS` - Cost alert recipients (optional)
- `ADMIN_USER_IDS` - Comma-separated admin user IDs

### Monitoring

After deployment, monitor:
- Feed ingestion job (runs daily at midnight UTC)
- Digest generation (Monday 12 PM UTC)  
- Feed request processing (daily 2 AM UTC)
- Topic migration cleanup (daily 3 AM UTC) - **auto-fixes invalid topics**
- OpenAI token spend (check admin dashboard)

---

## Topic Migration (Production Database Update)

### 🤖 Automatic Nightly Cleanup

**Good news!** The app now automatically fixes invalid topics every night at 3 AM UTC. This runs as a scheduled job that:
- Compares database feed topics with the corrected catalog
- Updates any feeds with invalid topics
- Only logs when it actually fixes something (silent otherwise)
- Safe to run repeatedly (idempotent)

**This means:**
- Manual additions with wrong topics get auto-fixed within 24 hours
- Catalog updates automatically sync to database
- Database stays clean without manual intervention

### Manual Migration (First-Time Setup)

If your production database already has feeds with **invalid topics**, you need to run a **one-time** migration to update them. After this, the nightly cleanup keeps everything in sync.

### When You Need Manual Migration
You need to run the manual migration if:
- You're seeing errors like "Feed 'Nature' has invalid topic: scientific-research"
- Your production database was seeded **before** the topic fixes were made
- Digest generation is failing due to invalid topics
- You can't wait 24 hours for the automatic nightly cleanup

### Migration Steps

#### Step 1: Deploy Latest Code
1. Click **Deploy** button in Replit
2. Wait for deployment to complete
3. Verify app is running at www.getkucidfeed.com

#### Step 2: Run Migration Endpoint

**Option A - Using Browser Console (Easiest)**
1. Log in to **www.getkucidfeed.com** as an admin
2. Open browser DevTools (F12)
3. Go to Console tab
4. Paste and run:
```javascript
fetch('/admin/run/migrate-topics', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
})
.then(r => r.json())
.then(result => {
  console.log('Migration Results:', result);
  if (result.success) {
    console.log(`✅ Updated ${result.updated} feeds`);
  }
})
```

**Option B - Using curl**
```bash
# Get your session cookie from browser DevTools > Application > Cookies
curl -X POST https://www.getkucidfeed.com/admin/run/migrate-topics \
  -H "Content-Type: application/json" \
  -H "Cookie: connect.sid=your-session-cookie-here"
```

#### Step 3: Expected Response
```json
{
  "success": true,
  "message": "Migration complete! Updated 373 feeds.",
  "updated": 373,
  "unchanged": 127,
  "errors": 0,
  "details": [
    "🔄 Starting feed topic migration...",
    "📂 Loaded 500 feeds from catalog",
    "💾 Found 500 feeds in database",
    "✅ Updated: Nature (scientific-research → biology, chemistry, ...)",
    "✅ Updated: 3Blue1Brown (mathematics-statistics → mathematics)",
    "...",
    "🎉 Migration complete! Database topics updated successfully."
  ]
}
```

#### Step 4: Verification

**A. Check Migration Results**
The response should show `"updated": 373` with no errors.

**B. Verify No Invalid Topics Remain**
Run this in browser console while logged in as admin:
```javascript
fetch('/api/feeds')
  .then(r => r.json())
  .then(feeds => {
    const validTopics = new Set([/* paste valid topics from schema */]);
    const invalid = feeds.filter(f => 
      f.topics?.some(t => !validTopics.has(t))
    );
    console.log(`Invalid topics found: ${invalid.length}`);
    if (invalid.length > 0) console.log(invalid);
  })
```

**C. Test Digest Generation**
Try generating a digest - should complete without invalid topic errors:
```javascript
fetch('/api/digest/generate', { method: 'POST' })
  .then(r => r.json())
  .then(console.log)
```

### What Gets Updated
The migration fixes 41 invalid topic variations:
- `mathematics-statistics` → `mathematics`
- `scientific-research` → `research` or `biology` (context-dependent)
- `technology-ai` → `artificial_intelligence`
- `entrepreneurship-startups` → `entrepreneurship`
- `exercise-fitness` → `fitness_recovery`
- `nutrition-diet` → `nutrition_science`
- And 35+ more variations...

Total: **373 feeds** will be updated with corrected topics.

### Safety
- **Safe to run multiple times** - Migration is idempotent (compares before updating)
- **No data loss** - Only updates topic arrays, never deletes
- **Fast** - Completes in ~5-10 seconds
- **Incremental** - Updates feed-by-feed (partial completion still makes progress)

### Rollback
If you need to rollback:
1. Restore production database from backup
2. Or redeploy previous version of app

### Troubleshooting

**Problem**: "Unauthorized" error  
**Solution**: Make sure you're logged in as admin user

**Problem**: "No feeds needed updating"  
**Solution**: Migration already ran successfully or database already has correct topics

**Problem**: Migration shows errors  
**Solution**: Check production logs for details. Contact support if needed.
