# Production Troubleshooting Guide

## Quick Diagnostic Steps

### 1. Check if App is Running
Visit your production URL and check:
```
https://your-app.replit.app
```

**If you see:**
- ❌ "Application Error" or 5xx → App crashed on startup
- ❌ Blank page → Frontend build issue
- ✅ Landing page loads → App is running

### 2. Check Health Endpoints

```bash
# Marketing automation health
curl https://your-app.replit.app/health/marketing

# Expected: {"ok":true,"hasDigestHook":false,...}
```

### 3. Check Auto-Seed Status

View production logs (in Replit):
1. Open your Replit
2. Click "Deployments" tab
3. Find active deployment
4. Click "Logs" or "Console"

Look for these messages:
```
✓ Feed catalog already populated (500 feeds)  ← Good!
🌱 Feed catalog empty - auto-seeding...        ← Seeding
✅ Auto-seed complete! Inserted 500 feeds      ← Success
❌ Auto-seed failed: ...                       ← ERROR
⚠️  Seed file not found                        ← Missing file
```

### 4. Test Feed Endpoints

```bash
# Check if feeds exist
curl https://your-app.replit.app/api/feeds/catalog

# Check onboarding suggestions (might need auth)
curl https://your-app.replit.app/api/feeds/discover

# Expected: Array of feeds, not empty []
```

## Common Production Issues

### Issue 1: Seed File Not Deployed

**Symptom:** Onboarding shows "No feeds found"

**Check:**
```bash
# In your Replit shell
ls -lh server/seeds/feed-catalog.json
```

**Fix:**
If missing, the file wasn't committed. Run:
```bash
git add server/seeds/feed-catalog.json
git commit -m "chore: add feed catalog seed file"
```
Then redeploy.

---

### Issue 2: Auto-Seed Failing

**Symptom:** App starts but no feeds

**Check production logs for:**
```
❌ Auto-seed failed: <error message>
```

**Common causes:**
- Database connection timeout
- Insufficient memory during seed
- Path resolution issues

**Fix:**
Run manual seed via admin endpoint:
```bash
curl -X POST https://your-app.replit.app/api/admin/seed-feeds \
  -H "Cookie: your-auth-cookie"
```

---

### Issue 3: Database Migration Failed

**Symptom:** App crashes on startup

**Check logs for:**
```
Error: relation "feed_catalog" does not exist
```

**Fix:**
Schema needs to push to production:
1. In Replit, go to "Shell"
2. Run: `npm run db:push --force`
3. Redeploy

---

### Issue 4: Environment Variables Missing

**Symptom:** Features not working, 503 errors

**Check:**
Visit `/health/marketing` - shows which env vars are missing

**Fix:**
Add missing secrets in Replit:
1. Click "Secrets" in sidebar
2. Add required variables:
   - `OPENAI_API_KEY`
   - `STRIPE_SECRET_KEY`
   - `RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
   - `VITE_RECAPTCHA_SITE_KEY`
   - `RESEND_API_KEY`
   - `ALERT_EMAILS`
   - `ADMIN_USER_IDS`

---

### Issue 5: Build Errors

**Symptom:** Deployment fails or shows "Build failed"

**Check build logs in Replit Deployments tab**

**Common causes:**
- TypeScript errors
- Missing dependencies
- Vite build failures

**Fix:**
Test locally first:
```bash
npm run build
```

---

## Manual Recovery Steps

### Option 1: Force Re-seed via Shell

In Replit Shell:
```bash
tsx server/scripts/seed-feeds.ts
```

### Option 2: Database Reset (DESTRUCTIVE)

**WARNING: Deletes all data**

```bash
# Drop and recreate tables
npm run db:push --force

# Re-seed
tsx server/scripts/seed-feeds.ts
```

### Option 3: Rollback Deployment

In Replit Deployments:
1. Find last working deployment
2. Click "Promote to Production"

---

## Debug Checklist

- [ ] Production app URL loads (not 5xx error)
- [ ] Check deployment logs for startup errors
- [ ] Verify `server/seeds/feed-catalog.json` exists in deployed code
- [ ] Check database connection (run query in Replit DB tab)
- [ ] Verify all environment variables are set
- [ ] Test `/health/marketing` endpoint
- [ ] Test `/api/feeds/catalog` endpoint
- [ ] Check auto-seed log messages
- [ ] Try manual seed via admin endpoint

---

## Get Help

**To help me debug, tell me:**
1. What happens when you visit your production URL?
2. What do you see in production logs (Deployments → Logs)?
3. Do you see any error messages?
4. What does `/health/marketing` return?
5. What does `/api/feeds/catalog` return?

**Send:**
- Screenshot of production URL
- Last 50 lines of production logs
- Output of health endpoint
