# Marketing Automation

This module provides webhook endpoints and job triggers for marketing automation via Zapier.

## Environment Variables

Add these to your Replit Secrets:

### Required
- **`ZAPIER_DIGEST_HOOK`** - Zapier webhook URL for receiving weekly digest data
- **`ZAPIER_LEAD_HOOK`** - Zapier webhook URL for receiving lead/signup data
- **`MARKETING_JOBS_TOKEN`** - Secret token to protect job endpoints (e.g., generate random string)

### Optional
- **`RESEND_API_KEY`** - Email API key (already configured if using email alerts)

## Endpoints

### 1. POST /webhooks/digest

Receives digest data and forwards to Zapier.

**Request Body:**
```json
{
  "week": "2025-11-03",
  "items": [
    {
      "title": "AI Breakthrough: New Language Models",
      "url": "https://example.com/article",
      "source": "TechCrunch"
    }
  ]
}
```

**Response:**
- `200` - Success
- `400` - Invalid payload
- `503` - ZAPIER_DIGEST_HOOK not configured
- `500` - Forward failed

**Test with curl:**
```bash
curl -X POST http://localhost:5000/webhooks/digest \
  -H "Content-Type: application/json" \
  -d '{
    "week": "2025-11-03",
    "items": [
      {"title": "Test Article", "url": "https://example.com", "source": "Blog"}
    ]
  }'
```

---

### 2. POST /webhooks/lead

Receives lead signup data and forwards to Zapier.

**Request Body:**
```json
{
  "email": "user@example.com",
  "segment": "newsletter",
  "utm": {
    "source": "twitter",
    "medium": "social",
    "campaign": "launch"
  }
}
```

**Response:**
- `200` - Success
- `400` - Invalid email or payload
- `503` - ZAPIER_LEAD_HOOK not configured
- `500` - Forward failed

**Test with curl:**
```bash
curl -X POST http://localhost:5000/webhooks/lead \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "segment": "newsletter",
    "utm": {
      "source": "direct",
      "medium": "web",
      "campaign": "site"
    }
  }'
```

---

### 3. POST /jobs/build-weekly-digest

Protected endpoint to build example digest and trigger webhook.

**Query Parameters:**
- `token` (required) - Must match `MARKETING_JOBS_TOKEN`

**Request Body (optional):**
```json
{
  "week": "2025-11-03"
}
```

If `week` not provided, uses current date.

**Response:**
- `200` - Success with digest details
- `401` - Invalid token
- `503` - MARKETING_JOBS_TOKEN not configured
- `500` - Build failed

**Test with curl:**
```bash
# Replace YOUR_TOKEN with your MARKETING_JOBS_TOKEN value
curl -X POST "http://localhost:5000/jobs/build-weekly-digest?token=YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"week": "2025-11-03"}'
```

---

### 4. GET /health/marketing

Health check endpoint to verify configuration.

**Response:**
```json
{
  "ok": true,
  "hasDigestHook": true,
  "hasLeadHook": true,
  "hasJobsToken": true
}
```

**Test with curl:**
```bash
curl http://localhost:5000/health/marketing
```

---

## Newsletter Signup Component

The `SignupLite` component is available for adding to any page:

```tsx
import SignupLite from '@/components/SignupLite';

function LandingPage() {
  return (
    <div>
      <h1>Subscribe to our newsletter</h1>
      <SignupLite />
    </div>
  );
}
```

The component:
- Captures UTM parameters from URL automatically
- Sends data to `/webhooks/lead`
- Shows success/error messages
- Uses shadcn UI components for consistent styling

---

## Zapier Setup

### Digest Webhook (Weekly Email)
1. Create a new Zap
2. Trigger: Webhooks by Zapier → Catch Hook
3. Copy the webhook URL → Set as `ZAPIER_DIGEST_HOOK`
4. Action: Email by Zapier (or your email provider)
5. Map fields: `week`, `items[].title`, `items[].url`, `items[].source`

### Lead Webhook (Newsletter Signups)
1. Create a new Zap
2. Trigger: Webhooks by Zapier → Catch Hook
3. Copy the webhook URL → Set as `ZAPIER_LEAD_HOOK`
4. Action: Add to mailing list (Mailchimp, ConvertKit, etc.)
5. Map fields: `email`, `segment`, `utm.source`, etc.

---

### 5. POST /admin/run/email-digest

**NEW: Resend Email Sender** - Send weekly digest via Resend template (no Zapier required).

**Query Parameters:**
- `token` (required) - Must match `MARKETING_JOBS_TOKEN`

**How It Works:**
1. Fetches digest data from `/export/weekly.json`
2. Sends email via Resend API using "weeklyDigest" template alias
3. Returns success with item count

**Required Environment Variables:**
- `RESEND_API_KEY` - Your Resend API key
- `MARKETING_JOBS_TOKEN` - Authentication token
- `TEST_EMAIL` (for testing) OR `RESEND_TO` (comma-separated emails for production)

**Response (Success):**
```json
{
  "ok": true,
  "sent": true,
  "week": "2024-11-05",
  "items": 10
}
```

**Response (Missing Recipients):**
```json
{
  "ok": false,
  "error": "No recipients: set TEST_EMAIL (for testing) or RESEND_TO (comma-separated emails)."
}
```

**Test with curl:**
```bash
# Replace YOUR_TOKEN with your MARKETING_JOBS_TOKEN value
curl -X POST "https://www.getlucidfeed.com/admin/run/email-digest?token=YOUR_TOKEN"
```

**Resend Template Setup:**
- Template alias: `weeklyDigest` (must be created in Resend UI)
- Template data structure:
  ```typescript
  {
    week: string;
    intro: string;
    items: Array<{ title: string; url: string; source?: string }>
  }
  ```

**Recipient Strategy:**
- If `TEST_EMAIL` is set → sends only to that address (recommended for testing)
- Else if `RESEND_TO` is set → sends to comma-separated list of emails
- Else → returns error (safety measure to prevent accidental sends)

---

## Scheduling the Digest Job

Use a cron service (Cron-job.org, EasyCron, etc.) to trigger weekly:

**Endpoint:**
```
POST https://your-app.replit.app/jobs/build-weekly-digest?token=YOUR_TOKEN
```

**Schedule:** Weekly (e.g., every Monday at 9 AM)

**Body (optional):**
```json
{"week": "2025-11-03"}
```

---

## Rollback

If you need to remove this feature:

### Option 1: Git Revert
```bash
git revert <commit-hash>
```

### Option 2: Manual Removal
1. Remove `server/routes/marketing.ts`
2. Remove import in `server/routes.ts`:
   ```typescript
   import marketingRouter from "./routes/marketing";
   ```
3. Remove mount in `server/routes.ts`:
   ```typescript
   app.use(marketingRouter);
   ```
4. Remove `client/src/components/SignupLite.tsx` (if not used)
5. Restart app

---

## Testing Checklist

- [ ] Set environment variables (ZAPIER_DIGEST_HOOK, ZAPIER_LEAD_HOOK, MARKETING_JOBS_TOKEN)
- [ ] Test `/health/marketing` shows all hooks configured
- [ ] Test `/webhooks/digest` with sample payload
- [ ] Test `/webhooks/lead` with sample email
- [ ] Test `/jobs/build-weekly-digest` with token
- [ ] Add `<SignupLite />` to landing page
- [ ] Submit newsletter form and verify Zapier receives data
- [ ] Schedule weekly digest job with cron service

---

## Security Notes

- All webhook endpoints validate input with Zod schemas
- Job endpoints require secret token via query parameter
- Failed forwards return 500 without exposing internal details
- Missing env vars return 503 with helpful error messages
- All errors logged to console for debugging
