/**
 * Resend email API wrapper for sending alerts
 * Requires RESEND_API_KEY environment variable
 */

import { Resend } from 'resend';
import { env } from '../../config/env';

// Initialize Resend client (will be undefined if API key not set)
// Prefer personal account (RESEND_USER_API_KEY) over Replit internal (RESEND_API_KEY)
let resend: Resend | null = null;
const apiKey = env.resendUserApiKey || env.resendApiKey;
const fromAddress = env.resendUserFrom || env.resendFrom;

if (apiKey) {
  resend = new Resend(apiKey);
  console.log('✉️  Resend email client initialized');
  
  if (env.resendUserApiKey) {
    console.log('[EMAIL] using personal Resend account (RESEND_USER_API_KEY)');
  } else {
    console.log('[EMAIL] using Replit Resend account (RESEND_API_KEY)');
  }
  
  console.log(`[EMAIL] using From: ${fromAddress || '(not configured - will fail on send)'}`);
} else {
  console.log('⚠️  Resend API key not configured - email alerts disabled');
}

// Export the configured from address for other modules to use
export const resendFromAddress = fromAddress;

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

  if (!resendFromAddress) {
    throw new Error('RESEND_FROM or RESEND_USER_FROM missing (use a verified domain like alerts@getlucidfeed.com)');
  }

  try {
    const { data, error } = await resend.emails.send({
      from: resendFromAddress,
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

/**
 * Send feed request notification to user when feeds are found
 */
export async function sendFeedRequestNotification(
  userEmail: string,
  searchQuery: string,
  feeds: Array<{ id: string; title: string; description: string; url: string }>
): Promise<void> {
  // Skip if Resend not configured
  if (!resend) {
    console.log('[Feed Request Notification] Skipped (Resend not configured) for:', userEmail);
    return;
  }

  if (!resendFromAddress) {
    throw new Error('RESEND_FROM or RESEND_USER_FROM missing (use a verified domain like alerts@getlucidfeed.com)');
  }

  try {
    const feedList = feeds
      .slice(0, 5) // Limit to top 5 feeds
      .map(feed => {
        const description = feed.description || 'No description available';
        const truncated = description.length > 100 ? description.substring(0, 100) + '...' : description;
        return `• ${feed.title}\n  ${truncated}\n  ${feed.url}`;
      })
      .join('\n\n');

    const text = `Good news! We found feeds matching your search: "${searchQuery}"\n\n` +
      `Here are ${feeds.length > 5 ? 'the top 5 of ' : ''}${feeds.length} feeds we found:\n\n${feedList}\n\n` +
      `Log in to Lucid Feed to subscribe to these feeds and start getting personalized digests:\n` +
      `https://lucidfeed.app/discover\n\n` +
      `Happy reading!\n` +
      `- The Lucid Feed Team`;

    const html = `
      <h2>Good news! We found feeds matching your search</h2>
      <p>You requested feeds for: <strong>"${searchQuery}"</strong></p>
      <p>We found ${feeds.length} ${feeds.length === 1 ? 'feed' : 'feeds'} that ${feeds.length === 1 ? 'matches' : 'match'} your search:</p>
      <ul>
        ${feeds.slice(0, 5).map(feed => {
          const description = feed.description || 'No description available';
          const truncated = description.length > 100 ? description.substring(0, 100) + '...' : description;
          return `
          <li style="margin-bottom: 1em;">
            <strong>${feed.title}</strong><br>
            <small style="color: #666;">${truncated}</small><br>
            <a href="${feed.url}" style="color: #0066cc;">${feed.url}</a>
          </li>
        `;
        }).join('')}
      </ul>
      ${feeds.length > 5 ? `<p><em>...and ${feeds.length - 5} more!</em></p>` : ''}
      <p>
        <a href="https://lucidfeed.app/discover" style="display: inline-block; padding: 10px 20px; background-color: #0066cc; color: white; text-decoration: none; border-radius: 5px; margin-top: 1em;">
          Subscribe to These Feeds
        </a>
      </p>
      <p style="color: #666; font-size: 0.9em; margin-top: 2em;">
        Happy reading!<br>
        - The Lucid Feed Team
      </p>
    `;

    const { data, error } = await resend.emails.send({
      from: resendFromAddress,
      to: userEmail,
      subject: `✅ Feeds found for "${searchQuery}"`,
      text,
      html,
    });

    if (error) {
      console.error('[Feed Request Notification] Failed to send email:', error);
      throw new Error(`Failed to send notification: ${error.message}`);
    }

    console.log('[Feed Request Notification] Sent successfully to:', userEmail, '(ID:', data?.id, ')');
  } catch (error) {
    console.error('[Feed Request Notification] Error sending email:', error);
    throw error;
  }
}
