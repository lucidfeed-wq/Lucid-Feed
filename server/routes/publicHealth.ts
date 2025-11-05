import express from 'express';

const router = express.Router();

router.get('/health/email', (_req, res) => {
  const from = process.env.RESEND_USER_FROM || process.env.RESEND_FROM || null;
  const userKey = !!process.env.RESEND_USER_API_KEY;
  const internalKey = !!process.env.RESEND_API_KEY;
  const apiKeySource = userKey ? 'RESEND_USER_API_KEY' : (internalKey ? 'RESEND_API_KEY' : null);
  
  res.json({
    ok: true,
    from,
    apiKeySet: !!(userKey || internalKey),
    apiKeySource,
    domainHint: from ? from.split('@')[1] : null,
  });
});

export default router;
