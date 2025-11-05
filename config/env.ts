/**
 * Environment configuration with safe defaults
 * All values can be overridden via environment variables
 */

export interface EnvConfig {
  // Cost guards
  costGuardsEnabled: boolean;
  maxDailyOpenAISpendUSD: number;

  // Tier limits - Free
  freeMaxFeeds: number;
  freeDailyChat: number;
  freeRPM: number;
  freeItemsPerDigest: number;
  freeDigestFreq: 'weekly' | 'daily';

  // Tier limits - Premium
  premiumMaxFeeds: number;
  premiumDailyChat: number;
  premiumRPM: number;
  premiumItemsPerDigest: number;
  premiumDigestFreq: 'weekly' | 'daily';

  // Tier limits - Pro
  proMaxFeeds: number;
  proDailyChat: number;
  proRPM: number;
  proItemsPerDigest: number;
  proDigestFreq: 'weekly' | 'daily';
  proRealtimeOptIn: boolean;

  // Token caps
  msgInputTokensMax: number;
  msgOutputTokensMax: number;

  // Email alerts
  alertEmails: string[];

  // Resend (Replit internal)
  resendApiKey: string | undefined;
  resendFrom: string | undefined;
  resendTo: string[];

  // Resend (Personal account - preferred if set)
  resendUserApiKey: string | undefined;
  resendUserFrom: string | undefined;

  // Turnstile (preferred) or reCAPTCHA fallback
  turnstileSiteKey: string | undefined;
  turnstileSecretKey: string | undefined;
  recaptchaSiteKey: string | undefined;
  recaptchaSecretKey: string | undefined;
}

function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true' || value === '1';
}

function parseNumber(value: string | undefined, defaultValue: number): number {
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

function parseEmails(value: string | undefined): string[] {
  if (!value) return [];
  return value.split(',').map(s => s.trim()).filter(Boolean);
}

export const env: EnvConfig = {
  // Cost guards
  costGuardsEnabled: parseBoolean(process.env.COST_GUARDS_ENABLED, true),
  maxDailyOpenAISpendUSD: parseNumber(process.env.MAX_DAILY_OPENAI_SPEND_USD, 20),

  // Free tier
  freeMaxFeeds: parseNumber(process.env.FREE_MAX_FEEDS, 10),
  freeDailyChat: parseNumber(process.env.FREE_DAILY_CHAT, 10),
  freeRPM: parseNumber(process.env.FREE_RPM, 3),
  freeItemsPerDigest: parseNumber(process.env.FREE_ITEMS_PER_DIGEST, 15),
  freeDigestFreq: (process.env.FREE_DIGEST_FREQ as 'weekly' | 'daily') || 'weekly',

  // Premium tier
  premiumMaxFeeds: parseNumber(process.env.PREMIUM_MAX_FEEDS, 30),
  premiumDailyChat: parseNumber(process.env.PREMIUM_DAILY_CHAT, 50),
  premiumRPM: parseNumber(process.env.PREMIUM_RPM, 6),
  premiumItemsPerDigest: parseNumber(process.env.PREMIUM_ITEMS_PER_DIGEST, 30),
  premiumDigestFreq: (process.env.PREMIUM_DIGEST_FREQ as 'weekly' | 'daily') || 'daily',

  // Pro tier
  proMaxFeeds: parseNumber(process.env.PRO_MAX_FEEDS, 60),
  proDailyChat: parseNumber(process.env.PRO_DAILY_CHAT, 200),
  proRPM: parseNumber(process.env.PRO_RPM, 10),
  proItemsPerDigest: parseNumber(process.env.PRO_ITEMS_PER_DIGEST, 50),
  proDigestFreq: (process.env.PRO_DIGEST_FREQ as 'weekly' | 'daily') || 'daily',
  proRealtimeOptIn: parseBoolean(process.env.PRO_REALTIME_OPT_IN, true),

  // Token caps
  msgInputTokensMax: parseNumber(process.env.MSG_INPUT_TOKENS_MAX, 2000),
  msgOutputTokensMax: parseNumber(process.env.MSG_OUTPUT_TOKENS_MAX, 500),

  // Email alerts
  alertEmails: parseEmails(process.env.ALERT_EMAILS),

  // Resend (Replit internal)
  resendApiKey: process.env.RESEND_API_KEY,
  resendFrom: process.env.RESEND_FROM,
  resendTo: parseEmails(process.env.RESEND_TO),

  // Resend (Personal account - preferred if set)
  resendUserApiKey: process.env.RESEND_USER_API_KEY,
  resendUserFrom: process.env.RESEND_USER_FROM,

  // Turnstile
  turnstileSiteKey: process.env.TURNSTILE_SITE_KEY,
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,

  // reCAPTCHA fallback
  recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
};

// Log startup configuration (without secrets)
if (env.costGuardsEnabled) {
  console.log('💰 Cost Guards Enabled');
  console.log(`  - Max daily OpenAI spend: $${env.maxDailyOpenAISpendUSD}`);
  console.log(`  - Token caps: ${env.msgInputTokensMax} in / ${env.msgOutputTokensMax} out`);
  console.log(`  - Alert emails: ${env.alertEmails.length > 0 ? env.alertEmails.join(', ') : 'none configured'}`);
  
  if (env.turnstileSecretKey) {
    console.log('  - Signup protection: Cloudflare Turnstile ✓');
  } else if (env.recaptchaSecretKey) {
    console.log('  - Signup protection: Google reCAPTCHA ✓');
  } else {
    console.log('  - Signup protection: ⚠️  NOT CONFIGURED');
  }
  
  if (env.resendUserApiKey || env.resendApiKey) {
    console.log('  - Email alerts: Resend ✓');
  } else {
    console.log('  - Email alerts: ⚠️  NOT CONFIGURED');
  }
} else {
  console.log('⚠️  Cost Guards Disabled (COST_GUARDS_ENABLED=false)');
}
