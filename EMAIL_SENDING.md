# Email Sending Configuration

This document describes how to configure email sending using Resend with your custom domain.

## Required Environment Variables

### RESEND_API_KEY (Required)
Your Resend API key. Get this from the [Resend Dashboard](https://resend.com/api-keys).

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### RESEND_FROM (Required)
The email address to use as the "From" field for all outgoing emails. **This domain must be verified in Resend** by setting up DNS records.

```bash
RESEND_FROM=alerts@getlucidfeed.com
```

⚠️ **Important**: The domain (e.g., `getlucidfeed.com`) must be verified in your Resend account. See [Resend Domain Verification](https://resend.com/docs/dashboard/domains/introduction) for setup instructions.

## Optional Environment Variables

### RESEND_TO (Optional)
Comma-separated list of email addresses for test sends. Used by the weekly digest email job.

```bash
RESEND_TO=test1@example.com,test2@example.com
```

### TEST_EMAIL (Optional)
Single email address for testing. Takes priority over `RESEND_TO` if both are set.

```bash
TEST_EMAIL=your-test@example.com
```

## Domain Verification

Before you can send emails from your custom domain, you must verify it in Resend:

1. Go to [Resend Dashboard → Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `getlucidfeed.com`)
4. Add the DNS records to your domain's DNS settings:
   - **SPF Record**: Authorizes Resend to send emails on your behalf
   - **DKIM Record**: Verifies email authenticity
   - **MX Record**: (Optional) For receiving emails

Example DNS records (from Resend):
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: TXT
Name: resend._domainkey
Value: [long DKIM key from Resend]
```

5. Wait for DNS propagation (can take up to 48 hours, usually faster)
6. Verify in Resend dashboard (status should show "Verified")

## Health Check Endpoint

Check your email configuration at any time (requires admin authentication):

```bash
# You must be logged in as an admin to access this endpoint
curl https://your-app.com/health/email
```

Response:
```json
{
  "ok": true,
  "from": "alerts@getlucidfeed.com",
  "apiKeySet": true,
  "domainHint": "getlucidfeed.com"
}
```

**Note**: This endpoint requires admin authentication to prevent configuration information leaks.

## Email Functions

### Alert Emails
Sent to admin emails configured in `ALERT_EMAILS` environment variable:
- Cost spike alerts
- Daily cost summaries
- User cost cap alerts

### User Notification Emails
Sent to individual users:
- Feed request notifications (when matching feeds are found)

### Weekly Digest Emails
Sent via the weekly digest job:
- Uses Resend template alias `weeklyDigest`
- Sent to addresses in `RESEND_TO` or `TEST_EMAIL`

## Error Messages

### "RESEND_FROM missing (use a verified domain like alerts@getlucidfeed.com)"
You need to set the `RESEND_FROM` environment variable.

### "RESEND_API_KEY missing"
You need to set the `RESEND_API_KEY` environment variable.

### "No recipients: set TEST_EMAIL (for testing) or RESEND_TO (comma-separated emails)"
For the weekly digest job, you need to configure either `TEST_EMAIL` or `RESEND_TO`.

## Testing

### Test Basic Email Configuration
```bash
# Check if email is configured
curl https://your-app.com/health/email

# Send a test email (requires admin access)
curl -X POST https://your-app.com/admin/test-email?token=YOUR_TOKEN
```

### Test Weekly Digest Email
```bash
# Set TEST_EMAIL for testing
export TEST_EMAIL=your-email@example.com

# Send digest
curl -X POST "https://your-app.com/admin/run/email-digest?token=YOUR_MARKETING_JOBS_TOKEN"
```

## Troubleshooting

### Emails not sending
1. Check `/health/email` to verify configuration
2. Ensure `RESEND_API_KEY` is set correctly
3. Ensure `RESEND_FROM` domain is verified in Resend
4. Check Resend dashboard for delivery errors

### "Domain not verified" errors
1. Verify DNS records are set correctly
2. Wait for DNS propagation (can take up to 48 hours)
3. Use Resend's DNS verification tool in the dashboard

### Wrong "From" address
1. Update `RESEND_FROM` environment variable
2. Ensure the domain is verified in Resend
3. Restart the application

## Production Checklist

Before going to production:

- [ ] Domain verified in Resend dashboard
- [ ] `RESEND_API_KEY` set in production environment
- [ ] `RESEND_FROM` set to verified email address (e.g., `alerts@getlucidfeed.com`)
- [ ] `ALERT_EMAILS` set to admin email addresses
- [ ] Test email sending with `/admin/test-email` endpoint
- [ ] Monitor Resend dashboard for delivery issues
- [ ] Set up DMARC policy for better deliverability (optional but recommended)
