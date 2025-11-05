/**
 * Resend email API wrapper for sending alerts
 * Requires RESEND_API_KEY environment variable
 */

import { Resend } from 'resend';
import { env } from '../../config/env';

// Initialize Resend client (will be undefined if API key not set)
let resend: Resend | null = null;

if (env.resendApiKey) {
  resend = new Resend(env.resendApiKey);
  console.log('✉️  Resend email client initialized');
} else {
  console.log('⚠️  Resend API key not configured - email alerts disabled');
}

export interface EmailAlert {
  subject: string;
  text: string;
  html?: string;
}

/**
 * Send an alert email to configured admin emails
 * @param alert Email alert content
 * @returns Promise that resolves when email is sent, or immediately if Resend not configured
 */
export async function sendAlert(alert: EmailAlert): Promise<void> {
  // Skip if Resend not configured
  if (!resend || env.alertEmails.length === 0) {
    console.log('[Alert] Skipped (Resend not configured):', alert.subject);
    return;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Lucid Feed Alerts <alerts@lucidfeed.app>',
      to: env.alertEmails,
      subject: alert.subject,
      text: alert.text,
      html: alert.html || alert.text.replace(/\n/g, '<br>'),
    });

    if (error) {
      console.error('[Alert] Failed to send email:', error);
      throw new Error(`Failed to send alert: ${error.message}`);
    }

    console.log('[Alert] Sent successfully:', alert.subject, '(ID:', data?.id, ')');
  } catch (error) {
    console.error('[Alert] Error sending email:', error);
    // Don't throw - we don't want email failures to break the app
  }
}

/**
 * Send a cost spike alert
 */
export async function sendCostSpikeAlert(params: {
  currentCost: number;
  averageCost: number;
  spike: number;
  topOffenders?: Array<{ userId: string; cost: number }>;
}): Promise<void> {
  const { currentCost, averageCost, spike, topOffenders } = params;

  let text = `⚠️ COST SPIKE DETECTED ⚠️\n\n`;
  text += `Current daily cost: $${currentCost.toFixed(2)}\n`;
  text += `7-day average: $${averageCost.toFixed(2)}\n`;
  text += `Spike: ${(spike * 100).toFixed(0)}%\n\n`;

  if (topOffenders && topOffenders.length > 0) {
    text += `Top cost contributors:\n`;
    topOffenders.forEach((offender, i) => {
      text += `${i + 1}. User ${offender.userId}: $${offender.cost.toFixed(2)}\n`;
    });
  }

  text += `\nCheck the admin dashboard for details.`;

  await sendAlert({
    subject: `🚨 Cost Spike Alert: ${(spike * 100).toFixed(0)}% increase`,
    text,
  });
}

/**
 * Send a daily cost summary
 */
export async function sendDailyCostSummary(params: {
  date: string;
  openaiCost: number;
  emailCost: number;
  transcriptCost: number;
  totalCost: number;
  tokensIn: number;
  tokensOut: number;
}): Promise<void> {
  const { date, openaiCost, emailCost, transcriptCost, totalCost, tokensIn, tokensOut } = params;

  let text = `📊 Daily Cost Summary for ${date}\n\n`;
  text += `OpenAI: $${openaiCost.toFixed(2)}\n`;
  text += `Email: $${emailCost.toFixed(2)}\n`;
  text += `Transcripts: $${transcriptCost.toFixed(2)}\n`;
  text += `Total: $${totalCost.toFixed(2)}\n\n`;
  text += `Tokens: ${tokensIn.toLocaleString()} in / ${tokensOut.toLocaleString()} out\n`;

  await sendAlert({
    subject: `📊 Daily Cost Summary: $${totalCost.toFixed(2)}`,
    text,
  });
}

/**
 * Send a user cost cap alert
 */
export async function sendUserCostCapAlert(params: {
  userId: string;
  email?: string;
  monthlyCost: number;
  cap: number;
  isHardCap: boolean;
}): Promise<void> {
  const { userId, email, monthlyCost, cap, isHardCap } = params;

  const capType = isHardCap ? 'HARD CAP' : 'soft cap';
  
  let text = `⚠️ User ${capType} reached ⚠️\n\n`;
  text += `User ID: ${userId}\n`;
  if (email) {
    text += `Email: ${email}\n`;
  }
  text += `Monthly cost: $${monthlyCost.toFixed(2)}\n`;
  text += `Cap: $${cap.toFixed(2)}\n\n`;
  
  if (isHardCap) {
    text += `User has been blocked from further API usage until next billing cycle.\n`;
  } else {
    text += `User has been notified of approaching cost limit.\n`;
  }

  await sendAlert({
    subject: `⚠️ User ${capType} Alert: ${userId}`,
    text,
  });
}

/**
 * Test email function to verify Resend configuration
 */
export async function sendTestEmail(): Promise<void> {
  await sendAlert({
    subject: '✅ Resend Email Test',
    text: 'This is a test email from Lucid Feed to verify Resend configuration is working correctly.',
  });
}
