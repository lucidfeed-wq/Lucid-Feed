type DigestItem = { title: string; url: string; source?: string };
type Digest = { week: string; intro?: string; items: DigestItem[] };

export async function sendWeeklyDigest(digest: Digest) {
  // Prefer personal account over Replit internal
  const apiKey = process.env.RESEND_USER_API_KEY || process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_USER_API_KEY or RESEND_API_KEY missing");
  
  const from = process.env.RESEND_USER_FROM || process.env.RESEND_FROM;
  if (!from) throw new Error("RESEND_USER_FROM or RESEND_FROM missing (use a verified domain like alerts@getlucidfeed.com)");
  
  if (!digest?.items?.length) throw new Error("digest.items empty");

  // Choose recipient strategy:
  // 1) TEST_EMAIL (single address for testing) – default if present,
  // 2) RESEND_TO (comma-separated list of emails),
  // 3) otherwise fail with a friendly message so we don't blast anyone by accident.
  let to: string[] | undefined = undefined;
  if (process.env.TEST_EMAIL) {
    to = [process.env.TEST_EMAIL];
  } else if (process.env.RESEND_TO) {
    to = process.env.RESEND_TO.split(",").map(s => s.trim()).filter(Boolean);
  }
  if (!to || !to.length) {
    throw new Error("No recipients: set TEST_EMAIL (for testing) or RESEND_TO (comma-separated emails).");
  }

  const payload = {
    from,
    to,
    subject: `LucidFeed — ${digest.week}`,
    // Use the published Resend template alias (prebuilt in the UI).
    template: "weeklyDigest",
    // Data object the template expects.
    data: {
      week: digest.week,
      intro: digest.intro || "This week on LucidFeed:",
      items: digest.items.slice(0, 10)
    }
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  console.log("[RESEND] status", res.status, text);
  if (!res.ok) throw new Error(text);
}
