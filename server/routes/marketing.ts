import { Router } from "express";
import { z } from "zod";

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

// POST /jobs/build-weekly-digest - Protected job to build and send digest
router.post("/jobs/build-weekly-digest", async (req, res) => {
  try {
    const token = req.query.token;
    const expectedToken = process.env.MARKETING_JOBS_TOKEN;

    if (!expectedToken) {
      return res.status(503).json({ 
        error: "MARKETING_JOBS_TOKEN not configured" 
      });
    }

    if (token !== expectedToken) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Get week from body or compute current week
    const week = req.body?.week || new Date().toISOString().split('T')[0];

    // Build example digest with placeholder items
    const exampleDigest = {
      week,
      items: [
        {
          title: "AI Breakthrough: New Language Models Show Reasoning Capabilities",
          url: "https://example.com/ai-breakthrough",
          source: "TechCrunch"
        },
        {
          title: "Climate Tech Raises $500M in Series C Funding",
          url: "https://example.com/climate-funding",
          source: "The Verge"
        },
        {
          title: "Study: Remote Work Increases Productivity by 20%",
          url: "https://example.com/remote-work-study",
          source: "Harvard Business Review"
        },
        {
          title: "Quantum Computing Milestone Reached at Stanford",
          url: "https://example.com/quantum-milestone",
          source: "Nature"
        },
        {
          title: "New Framework Makes Web Development 10x Faster",
          url: "https://example.com/web-framework",
          source: "Dev.to"
        }
      ]
    };

    // POST to /webhooks/digest internally
    const baseUrl = req.headers.host?.startsWith('localhost') 
      ? 'http://localhost:5000'
      : `https://${req.headers.host}`;
    
    const digestResponse = await fetch(`${baseUrl}/webhooks/digest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exampleDigest),
    });

    if (!digestResponse.ok) {
      throw new Error(`Digest webhook failed: ${digestResponse.status}`);
    }

    console.log(`[Marketing] Weekly digest built and sent: week=${week}`);
    res.status(200).json({ 
      success: true, 
      week,
      itemCount: exampleDigest.items.length 
    });
    
  } catch (error: any) {
    console.error("[Marketing] Build digest job error:", error.message);
    res.status(500).json({ error: "Failed to build weekly digest" });
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
