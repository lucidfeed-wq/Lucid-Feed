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
- OpenAI token spend (check admin dashboard)
