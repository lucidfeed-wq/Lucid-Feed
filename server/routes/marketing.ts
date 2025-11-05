import { Router } from "express";
import { z } from "zod";
import { sendWeeklyDigest } from "../jobs/sendWeeklyDigest";

const router = Router();

// Validation schemas
const digestWebhookSchema = z.object({
  week: z.string(),
  items: z.array(z.object({
    title: z.string(),
    url: z.string(),
    source: z.string().optional(),
  })),
});

const leadWebhookSchema = z.object({
  email: z.string().email(),
  segment: z.string().optional(),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
  }).optional(),
});

// POST /webhooks/digest - Forward digest data to Zapier
router.post("/webhooks/digest", async (req, res) => {
  try {
    const zapierHook = process.env.ZAPIER_DIGEST_HOOK;
    
    if (!zapierHook) {
      return res.status(503).json({ 
        error: "ZAPIER_DIGEST_HOOK not configured. Add it to environment variables." 
      });
    }

    // Basic validation
    const result = digestWebhookSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ 
        error: "Invalid payload", 
        details: result.error.issues 
      });
    }

    // Forward to Zapier
    const response = await fetch(zapierHook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      throw new Error(`Zapier responded with ${response.status}`);
    }

    console.log(`[Marketing] Digest webhook forwarded: week=${result.data.week}, items=${result.data.items.length}`);
    res.status(200).json({ success: true });
    
  } catch (error: any) {
    console.error("[Marketing] Digest webhook error:", error.message);
    res.status(500).json({ error: "Failed to forward digest webhook" });
  }
});

// POST /webhooks/lead - Forward lead data to Zapier
router.post("/webhooks/lead", async (req, res) => {
  try {
    const zapierHook = process.env.ZAPIER_LEAD_HOOK;
    
    if (!zapierHook) {
      return res.status(503).json({ 
        error: "ZAPIER_LEAD_HOOK not configured. Add it to environment variables." 
      });
    }

    // Basic validation
    const result = leadWebhookSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ 
        error: "Invalid payload", 
        details: result.error.issues 
      });
    }

    // Forward to Zapier
    const response = await fetch(zapierHook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      throw new Error(`Zapier responded with ${response.status}`);
    }

    console.log(`[Marketing] Lead webhook forwarded: email=${result.data.email}, segment=${result.data.segment || 'none'}`);
    res.status(200).json({ success: true });
    
  } catch (error: any) {
    console.error("[Marketing] Lead webhook error:", error.message);
    res.status(500).json({ error: "Failed to forward lead webhook" });
  }
});

// GET /jobs/build-weekly-digest - Return 405 for non-POST requests
router.get("/jobs/build-weekly-digest", (_req, res) => {
  res.status(405).json({ 
    ok: false, 
    error: "use POST with ?token=" 
  });
});

// POST /jobs/build-weekly-digest - Protected job to build and send digest
router.post("/jobs/build-weekly-digest", async (req, res) => {
  try {
    const token = req.query.token;
    const expectedToken = process.env.MARKETING_JOBS_TOKEN;

    if (!token || !expectedToken || token !== expectedToken) {
      return res.status(401).json({ 
        ok: false, 
        error: "invalid token" 
      });
    }

    const zapierHook = process.env.ZAPIER_DIGEST_HOOK;
    if (!zapierHook) {
      return res.status(503).json({ 
        ok: false,
        error: "ZAPIER_DIGEST_HOOK not configured" 
      });
    }

    // Build minimal sample payload
    const payload = {
      week: new Date().toISOString().slice(0, 10),
      items: [
        { title: 'Sample Story A', url: 'https://example.com/a', source: 'JAMA' },
        { title: 'Sample Story B', url: 'https://example.com/b', source: 'YouTube' },
        { title: 'Sample Story C', url: 'https://example.com/c', source: 'Substack' }
      ]
    };

    // POST directly to Zapier
    const response = await fetch(zapierHook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Zapier responded with ${response.status}`);
    }

    console.log('[DIGEST-JOB] forwarded sample to Zapier', { week: payload.week, count: payload.items.length });
    res.status(200).json({ ok: true, forwarded: true });
    
  } catch (error: any) {
    console.error("[DIGEST-JOB] Error:", error.message);
    res.status(500).json({ ok: false, error: "Failed to forward to Zapier" });
  }
});

// GET /admin/run/email-digest - Return 405 for non-POST requests
router.get("/admin/run/email-digest", (_req, res) => {
  res.status(405).json({ ok: false, error: "use POST with ?token=" });
});

// POST /admin/run/email-digest - Send weekly digest via Resend template
router.post("/admin/run/email-digest", async (req, res) => {
  try {
    const token = req.query.token;
    const expectedToken = process.env.MARKETING_JOBS_TOKEN;

    if (!token || !expectedToken || token !== expectedToken) {
      return res.status(401).json({ ok: false, error: "invalid token" });
    }
    const r = await fetch("https://www.getlucidfeed.com/export/weekly.json");
    if (!r.ok) return res.status(503).json({ ok: false, error: "cannot fetch /export/weekly.json" });
    const digest = await r.json();
    digest.intro = digest.intro || "Hand-picked, source-linked stories you can trust.";
    await sendWeeklyDigest(digest);
    return res.json({ ok: true, sent: true, week: digest.week, items: digest.items?.length || 0 });
  } catch (e: any) {
    console.error("[ADMIN DIGEST] error", e?.message || e);
    return res.status(500).json({ ok: false, error: e?.message || "send failed" });
  }
});

// GET /health/marketing - Health check endpoint
router.get("/health/marketing", (_req, res) => {
  res.json({
    ok: true,
    hasDigestHook: !!process.env.ZAPIER_DIGEST_HOOK,
    hasLeadHook: !!process.env.ZAPIER_LEAD_HOOK,
    hasJobsToken: !!process.env.MARKETING_JOBS_TOKEN,
  });
});

export default router;
