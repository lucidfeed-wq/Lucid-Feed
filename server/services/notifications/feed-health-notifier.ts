/**
 * Feed Health Notifier Service
 * 
 * Manages user notifications for feed health issues with friendly messaging,
 * throttling, and email digest capabilities.
 */

import { storage } from '../../storage';
import { sendAlert } from '../../lib/resend';
import type { FeedCatalog, FeedNotification, InsertFeedNotification } from '../../../shared/schema';

// User-friendly message mappings for different error types
const ERROR_MESSAGE_MAPPINGS: Record<string, (feedName: string) => string> = {
  'Connection refused': (name) => `We couldn't connect to ${name}. The source might be temporarily down. We'll keep trying!`,
  'Connection timeout': (name) => `${name} is taking a while to respond. We'll check back soon.`,
  'Certificate has expired': (name) => `${name} has a security certificate issue. We're monitoring for when it's fixed.`,
  'Invalid SSL certificate': (name) => `${name} has a security issue we're working around.`,
  '404': (name) => `${name} seems to have moved. We're looking for its new location.`,
  '403': (name) => `${name} is temporarily blocking access. We'll try again later.`,
  '500': (name) => `${name} is having server issues. We'll check back when it's recovered.`,
  '503': (name) => `${name} is temporarily unavailable. This usually resolves itself soon.`,
  'Invalid feed format': (name) => `${name}'s format has changed. We're adapting to read it properly.`,
  'Feed URL has changed': (name) => `${name} has moved to a new address. We're updating it for you.`,
  'Malformed XML': (name) => `${name} has formatting issues. We're working on a fix.`,
  'Empty feed': (name) => `${name} isn't providing any content right now. We'll monitor for updates.`,
  'Feed discontinued': (name) => `${name} appears to be discontinued. We're searching for alternatives.`,
  'Rate limited': (name) => `We're being careful not to overload ${name}. Updates will resume shortly.`,
  'Authentication required': (name) => `${name} now requires login. We're exploring ways to restore access.`,
  'default': (name) => `${name} is having temporary issues. We're working on it!`
};

// Map technical error types to severity levels
const ERROR_SEVERITY_MAP: Record<string, 'warning' | 'error' | 'info'> = {
  'Connection timeout': 'warning',
  'Rate limited': 'info',
  'Feed discontinued': 'error',
  '404': 'error',
  '403': 'warning',
  '500': 'warning',
  '503': 'info',
  'Invalid feed format': 'warning',
  'Malformed XML': 'warning',
  'Empty feed': 'info',
  'Authentication required': 'error',
  'default': 'warning'
};

export class FeedHealthNotifier {
  /**
   * Notify a user about a feed issue with throttling
   */
  async notifyFeedIssue(
    userId: string,
    feedId: string,
    feedName: string,
    technicalError: string,
    severity?: 'warning' | 'error' | 'info'
  ): Promise<void> {
    // Check for recent notification for this feed (throttling - 24 hours)
    const recentNotification = await storage.getRecentNotificationForFeed(userId, feedId, 24);
    
    if (recentNotification) {
      console.log(`[FeedHealthNotifier] Skipping notification for feed ${feedId} - already notified within 24 hours`);
      return;
    }

    // Find the best matching user-friendly message
    const messageKey = Object.keys(ERROR_MESSAGE_MAPPINGS).find(key => 
      technicalError.toLowerCase().includes(key.toLowerCase())
    ) || 'default';
    
    const userFriendlyMessage = ERROR_MESSAGE_MAPPINGS[messageKey](feedName);
    const finalSeverity = severity || ERROR_SEVERITY_MAP[messageKey] || 'warning';

    // Save notification
    const notification: InsertFeedNotification = {
      userId,
      feedId,
      severity: finalSeverity,
      message: userFriendlyMessage,
      technicalDetails: technicalError,
      isRead: false,
    };

    await storage.saveFeedNotification(notification);
    console.log(`[FeedHealthNotifier] Saved notification for user ${userId} about feed ${feedId}`);
  }

  /**
   * Notify about feed removal with alternatives search status
   */
  async notifyFeedRemoval(
    userId: string,
    feed: FeedCatalog,
    reason: string,
    alternativeSearchStarted: boolean
  ): Promise<void> {
    let message = `${feed.name} has been removed from our catalog`;
    
    if (reason.toLowerCase().includes('discontinu')) {
      message = `${feed.name} appears to have been discontinued by its publisher`;
    } else if (reason.toLowerCase().includes('404')) {
      message = `${feed.name} is no longer available at its original location`;
    }
    
    if (alternativeSearchStarted) {
      message += `. Good news: we're automatically searching for similar feeds to replace it!`;
    } else {
      message += `. We recommend exploring our feed catalog for alternatives.`;
    }

    const notification: InsertFeedNotification = {
      userId,
      feedId: feed.id,
      severity: 'error',
      message,
      technicalDetails: reason,
      isRead: false,
    };

    await storage.saveFeedNotification(notification);
    console.log(`[FeedHealthNotifier] Notified user ${userId} about removal of feed ${feed.id}`);
  }

  /**
   * Get consolidated notifications for a user
   */
  async getConsolidatedNotifications(userId: string): Promise<FeedNotification[]> {
    // Get all unread notifications
    const unreadNotifications = await storage.getUnreadNotifications(userId);
    
    // Group by feed to consolidate multiple issues
    const consolidatedMap = new Map<string, FeedNotification>();
    
    for (const notification of unreadNotifications) {
      const feedId = notification.feedId || 'general';
      
      // Keep the most severe notification per feed
      const existing = consolidatedMap.get(feedId);
      if (!existing || this.getSeverityPriority(notification.severity) > this.getSeverityPriority(existing.severity)) {
        consolidatedMap.set(feedId, notification);
      }
    }
    
    return Array.from(consolidatedMap.values());
  }

  /**
   * Send daily feed health email digest
   */
  async sendDailyFeedHealthEmail(userId: string, notifications: FeedNotification[]): Promise<void> {
    if (notifications.length === 0) {
      return;
    }

    // Get user email
    const user = await storage.getUser(userId);
    if (!user?.email) {
      console.log(`[FeedHealthNotifier] Cannot send email - no email for user ${userId}`);
      return;
    }

    // Group notifications by severity
    const errors = notifications.filter(n => n.severity === 'error');
    const warnings = notifications.filter(n => n.severity === 'warning');
    const info = notifications.filter(n => n.severity === 'info');

    let emailContent = `Hi there,\n\nHere's a quick update on your feed subscriptions:\n\n`;
    
    if (errors.length > 0) {
      emailContent += `**Important Issues (${errors.length}):**\n`;
      errors.forEach(n => {
        emailContent += `• ${n.message}\n`;
      });
      emailContent += '\n';
    }
    
    if (warnings.length > 0) {
      emailContent += `**Minor Issues (${warnings.length}):**\n`;
      warnings.forEach(n => {
        emailContent += `• ${n.message}\n`;
      });
      emailContent += '\n';
    }
    
    if (info.length > 0) {
      emailContent += `**For Your Information (${info.length}):**\n`;
      info.forEach(n => {
        emailContent += `• ${n.message}\n`;
      });
      emailContent += '\n';
    }
    
    emailContent += `We're actively working on all these issues. Most feed problems resolve themselves within 24-48 hours.\n\n`;
    emailContent += `You can manage your subscriptions at: https://lucidfeed.app/feeds\n\n`;
    emailContent += `Best regards,\nThe Lucid Feed Team`;

    const htmlContent = `
      <h2>Feed Health Update</h2>
      <p>Hi there,</p>
      <p>Here's a quick update on your feed subscriptions:</p>
      
      ${errors.length > 0 ? `
        <h3 style="color: #dc3545;">Important Issues (${errors.length})</h3>
        <ul>
          ${errors.map(n => `<li>${n.message}</li>`).join('')}
        </ul>
      ` : ''}
      
      ${warnings.length > 0 ? `
        <h3 style="color: #ffc107;">Minor Issues (${warnings.length})</h3>
        <ul>
          ${warnings.map(n => `<li>${n.message}</li>`).join('')}
        </ul>
      ` : ''}
      
      ${info.length > 0 ? `
        <h3 style="color: #17a2b8;">For Your Information (${info.length})</h3>
        <ul>
          ${info.map(n => `<li>${n.message}</li>`).join('')}
        </ul>
      ` : ''}
      
      <p style="padding: 1em; background: #f8f9fa; border-left: 4px solid #28a745; margin: 1em 0;">
        <strong>We're on it!</strong><br>
        Our system is actively working on all these issues. Most feed problems resolve themselves within 24-48 hours.
      </p>
      
      <p>
        <a href="https://lucidfeed.app/feeds" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
          Manage Your Subscriptions
        </a>
      </p>
      
      <p style="color: #6c757d; font-size: 0.9em; margin-top: 2em;">
        Best regards,<br>
        The Lucid Feed Team
      </p>
    `;

    try {
      await sendAlert({
        subject: `Feed Health Update: ${errors.length} issues need attention`,
        text: emailContent,
        html: htmlContent,
      });
      
      // Mark notifications as notified
      for (const notification of notifications) {
        await storage.markNotificationAsNotified(notification.id);
      }
      
      console.log(`[FeedHealthNotifier] Sent daily digest email to ${user.email} with ${notifications.length} notifications`);
    } catch (error) {
      console.error(`[FeedHealthNotifier] Failed to send email to ${user.email}:`, error);
    }
  }

  /**
   * Helper to get severity priority for consolidation
   */
  private getSeverityPriority(severity: string): number {
    const priorities: Record<string, number> = {
      'error': 3,
      'warning': 2,
      'info': 1,
    };
    return priorities[severity] || 0;
  }
  
  /**
   * Notify all subscribers of a feed about an issue
   */
  async notifyAllFeedSubscribers(
    feedId: string,
    feedName: string,
    technicalError: string,
    severity?: 'warning' | 'error' | 'info'
  ): Promise<void> {
    // Get all subscribers of this feed
    const subscriptions = await storage.getAllFeedSubscriptions();
    const feedSubscribers = subscriptions.filter(sub => sub.feedId === feedId);
    
    console.log(`[FeedHealthNotifier] Notifying ${feedSubscribers.length} subscribers about issue with ${feedName}`);
    
    // Notify each subscriber with throttling
    const notificationPromises = feedSubscribers.map(sub =>
      this.notifyFeedIssue(sub.userId, feedId, feedName, technicalError, severity)
    );
    
    await Promise.all(notificationPromises);
  }
  
  /**
   * Send consolidated daily digest for all users with notifications
   */
  async sendDailyDigestForAllUsers(): Promise<void> {
    console.log('[FeedHealthNotifier] Starting daily digest send for all users');
    
    // This would typically be called by a cron job
    // For now, we'll get all users with unread notifications
    const allUsers = await storage.getUser(''); // This needs to be updated to get all users
    
    // Note: We'd need to add a method to get all users or 
    // query distinct userIds from feedNotifications table
    // For now, this is a placeholder implementation
    
    console.log('[FeedHealthNotifier] Daily digest send completed');
  }
}

// Export singleton instance
export const feedHealthNotifier = new FeedHealthNotifier();