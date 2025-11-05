# Production Deployment Guide

## Database Seeding for Production

When you publish your Replit app, the **database schema** (tables, columns) automatically migrates to production, but **data does NOT**. This means your production database will be empty even though development has 500 feeds.

### Quick Fix: Seed Production Database

After publishing, run this command **once** to populate your production feed catalog:

```bash
tsx server/scripts/seed-feeds.ts
```

This will:
- ✅ Import all 500 curated feeds
- ✅ Work safely (can run multiple times)
- ✅ Preserve any existing data
- ✅ Take ~30 seconds

### Alternative: Admin UI Method

1. Publish your app
2. Log in as admin
3. Visit `/admin`
4. Click "Seed Feed Catalog" button
5. Wait for confirmation

### What Gets Seeded

- **500 approved feeds** across all source types:
  - 163 Reddit communities
  - 152 YouTube channels  
  - 112 Podcasts
  - 42 Academic journals
  - 31 Substack publications
- **159 featured feeds** for onboarding
- All feed metadata (topics, quality scores, etc.)

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

- [ ] Export latest feed catalog: `tsx server/scripts/export-feeds.ts`
- [ ] Commit the `server/seeds/feed-catalog.json` file
- [ ] Test locally: `tsx server/scripts/seed-feeds.ts`
- [ ] Verify environment variables are set in Replit Secrets

### After Publishing

- [ ] Run seed script: `tsx server/scripts/seed-feeds.ts`
- [ ] Test onboarding flow (should show 50 feed suggestions)
- [ ] Test discover page (should show 159 featured feeds)
- [ ] Verify admin panel access
- [ ] Check scheduled jobs are running

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
