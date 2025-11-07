import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { runIngestJob } from "./services/ingest";
import { generateWeeklyDigest, generatePersonalizedDigest } from "./services/digest";
import { exportDigestJSON, exportDigestMarkdown, exportDigestRSS } from "./services/exports";
import { enrichContentBatch } from "./services/content-enrichment";
import { z } from "zod";
import { topics, feedDomains, sourceTypes, insertFeedCatalogSchema, insertUserFeedSubmissionSchema, type InsertUserFeedSubmission } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { isAdmin } from "./middleware/isAdmin";
import { chatWithDigest } from "./services/chat";
import { generateMissingEmbeddings } from "./services/embeddings";
import { discoverFeeds, verifyRssFeed } from "./services/feed-discovery/discovery-service";
import { canSubscribeToFeed, canSendChatMessage } from "./tierChecks";
import Stripe from "stripe";
import marketingRouter from "./routes/marketing";
import { migrateFeedTopics } from "./services/migrate-topics";
import { healingMonitor } from "./services/healing/monitoring";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-10-29.clover",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

  // Public health check endpoint for healing system
  app.get('/api/health/healing', async (req, res) => {
    try {
      const healthStatus: {
        healingSystemStatus: 'operational' | 'error';
        lastHealingAttempt: Date | null;
        discoveryJobsActive: boolean;
        notificationSystemStatus: 'operational' | 'error';
        databaseConnection: 'ok' | 'error';
      } = {
        healingSystemStatus: 'operational',
        lastHealingAttempt: null,
        discoveryJobsActive: false,
        notificationSystemStatus: 'operational',
        databaseConnection: 'ok'
      };

      // Check database connection
      try {
        // Try a simple database query - just check if we can get a user (lightweight)
        // This avoids loading the entire feed catalog (500+ feeds)
        await storage.getUser('health-check-user');
        // If no error is thrown, the database is accessible
      } catch (dbError) {
        // It's expected to not find a health-check-user
        // Only mark as error if it's a database connection error
        const errorMessage = dbError instanceof Error ? dbError.message : String(dbError);
        if (errorMessage.includes('connect') || errorMessage.includes('database') || errorMessage.includes('ECONNREFUSED')) {
          console.error('Health check: Database connection error:', dbError);
          healthStatus.databaseConnection = 'error';
          healthStatus.healingSystemStatus = 'error';
        }
        // If it's just "user not found", that's fine - database is working
      }

      // Check healing system status
      try {
        // Get healing dashboard data to check system health
        const dashboard = await healingMonitor.getHealingDashboard();
        
        // Check if there are recent healing attempts
        if (dashboard.recentAttempts && dashboard.recentAttempts.length > 0) {
          healthStatus.lastHealingAttempt = dashboard.recentAttempts[0].attemptedAt;
        }

        // Check if healing system is operational based on metrics
        const successRate = dashboard.metrics.totalAttempts > 0
          ? (dashboard.metrics.successfulAttempts / dashboard.metrics.totalAttempts) * 100
          : 100; // If no attempts, consider it operational
        
        if (successRate < 10 && dashboard.metrics.totalAttempts > 10) {
          // If success rate is very low with significant attempts, mark as error
          healthStatus.healingSystemStatus = 'error';
        }

        // Check if there are feeds currently being healed
        healthStatus.discoveryJobsActive = dashboard.activeFeedsUnderHealing.length > 0;
      } catch (healingError) {
        console.error('Health check: Healing system error:', healingError);
        healthStatus.healingSystemStatus = 'error';
      }

      // Check notification system
      try {
        // Try to query notifications table to verify it's accessible
        await storage.getUserNotifications('health-check-user', 1);
        // If we get here, notification system is operational
      } catch (notifError) {
        // It's expected to not find notifications for a fake user
        // Only mark as error if it's a database/system error
        const errorMessage = notifError instanceof Error ? notifError.message : String(notifError);
        if (errorMessage.includes('connect') || errorMessage.includes('database') || errorMessage.includes('table')) {
          console.error('Health check: Notification system error:', notifError);
          healthStatus.notificationSystemStatus = 'error';
        }
      }

      res.json(healthStatus);
    } catch (error) {
      console.error('Health check endpoint error:', error);
      res.status(500).json({
        healingSystemStatus: 'error',
        lastHealingAttempt: null,
        discoveryJobsActive: false,
        notificationSystemStatus: 'error',
        databaseConnection: 'error'
      });
    }
  });

  // Auth endpoints
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // User preferences endpoints (protected)
  app.get('/api/preferences', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const prefs = await storage.getUserPreferences(userId);
      if (!prefs) {
        return res.json({ userId, favoriteTopics: [], preferredSourceTypes: [], updatedAt: null });
      }
      res.json(prefs);
    } catch (error) {
      console.error("Error fetching preferences:", error);
      res.status(500).json({ message: "Failed to fetch preferences" });
    }
  });

  app.put('/api/preferences', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { favoriteTopics, preferredSourceTypes } = req.body;
      console.log("[PUT /api/preferences] userId:", userId, "favoriteTopics:", favoriteTopics, "preferredSourceTypes:", preferredSourceTypes);
      
      // Validate favoriteTopics
      if (!favoriteTopics || !Array.isArray(favoriteTopics)) {
        console.error("[PUT /api/preferences] Invalid favoriteTopics:", favoriteTopics);
        return res.status(400).json({ message: "favoriteTopics must be an array" });
      }
      
      const validTopics = new Set(topics);
      const invalidTopics = favoriteTopics.filter((topic: any) => !validTopics.has(topic));
      if (invalidTopics.length > 0) {
        console.error("[PUT /api/preferences] Invalid topic values:", invalidTopics);
        return res.status(400).json({ message: `Invalid topics: ${invalidTopics.join(', ')}` });
      }
      
      // Validate preferredSourceTypes
      if (!preferredSourceTypes || !Array.isArray(preferredSourceTypes)) {
        console.error("[PUT /api/preferences] Invalid preferredSourceTypes:", preferredSourceTypes);
        return res.status(400).json({ message: "preferredSourceTypes must be an array" });
      }
      
      const validSourceTypes = new Set(sourceTypes);
      const invalidSourceTypes = preferredSourceTypes.filter((st: any) => !validSourceTypes.has(st));
      if (invalidSourceTypes.length > 0) {
        console.error("[PUT /api/preferences] Invalid source type values:", invalidSourceTypes);
        return res.status(400).json({ message: `Invalid source types: ${invalidSourceTypes.join(', ')}` });
      }
      
      const prefs = await storage.upsertUserPreferences({
        userId,
        favoriteTopics,
        preferredSourceTypes,
      });
      console.log("[PUT /api/preferences] Success:", prefs);
      res.json(prefs);
    } catch (error) {
      console.error("[PUT /api/preferences] Error updating preferences:", error);
      res.status(500).json({ message: "Failed to update preferences" });
    }
  });

  // Saved items endpoints (protected)
  app.get('/api/saved-items', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const savedItemsList = await storage.getSavedItemsByUser(userId);
      res.json(savedItemsList);
    } catch (error) {
      console.error("Error fetching saved items:", error);
      res.status(500).json({ message: "Failed to fetch saved items" });
    }
  });

  app.post('/api/saved-items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const saved = await storage.saveItem(userId, itemId);
      res.json(saved);
    } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ message: "Failed to save item" });
    }
  });

  // Feed notifications endpoints (protected)
  app.get('/api/notifications/unread', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      // Clean up old notifications (>48h) before fetching
      await storage.deleteOldNotifications(48);
      
      const notifications = await storage.getUnreadNotifications(userId);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching unread notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });

  app.get('/api/notifications', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
      const notifications = await storage.getUserNotifications(userId, limit);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });

  app.post('/api/notifications/mark-read', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { notificationIds } = req.body;
      
      if (!notificationIds || !Array.isArray(notificationIds)) {
        return res.status(400).json({ message: "notificationIds must be an array" });
      }
      
      await storage.markNotificationsRead(userId, notificationIds);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking notifications as read:", error);
      res.status(500).json({ message: "Failed to mark notifications as read" });
    }
  });

  // Get action-required notifications
  app.get('/api/notifications/action-required', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const notifications = await storage.getActionRequiredNotifications(userId);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching action-required notifications:", error);
      res.status(500).json({ message: "Failed to fetch action-required notifications" });
    }
  });

  // Handle notification action (accept/decline)
  app.post('/api/notifications/:notificationId/action', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { notificationId } = req.params;
      const { action } = req.body;
      
      if (!action || !['accepted', 'declined'].includes(action)) {
        return res.status(400).json({ message: "Action must be 'accepted' or 'declined'" });
      }
      
      // Verify notification belongs to user
      const notification = await storage.getNotificationById(notificationId);
      if (!notification || notification.userId !== userId) {
        return res.status(404).json({ message: "Notification not found" });
      }
      
      await storage.handleNotificationAction(notificationId, userId, action);
      res.json({ success: true, message: `Feed substitution ${action}` });
    } catch (error) {
      console.error("Error handling notification action:", error);
      res.status(500).json({ message: "Failed to process notification action" });
    }
  });

  app.delete('/api/saved-items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      await storage.unsaveItem(userId, itemId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unsaving item:", error);
      res.status(500).json({ message: "Failed to unsave item" });
    }
  });

  app.get('/api/saved-items/:itemId/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId} = req.params;
      const isSaved = await storage.isItemSaved(userId, itemId);
      res.json({ isSaved });
    } catch (error) {
      console.error("Error checking saved status:", error);
      res.status(500).json({ message: "Failed to check saved status" });
    }
  });

  // Read items endpoints (protected)
  // NOTE: Bulk endpoint MUST come before :itemId route to avoid "bulk" being treated as an itemId
  app.post('/api/read-items/bulk', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemIds } = req.body;
      if (!Array.isArray(itemIds)) {
        return res.status(400).json({ message: "itemIds must be an array" });
      }
      const readIds = await storage.getReadItemIds(userId, itemIds);
      res.json({ readIds });
    } catch (error) {
      console.error("Error fetching read status:", error);
      res.status(500).json({ message: "Failed to fetch read status" });
    }
  });

  app.post('/api/read-items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const read = await storage.markItemAsRead(userId, itemId);
      res.json(read);
    } catch (error) {
      console.error("Error marking item as read:", error);
      res.status(500).json({ message: "Failed to mark item as read" });
    }
  });

  app.delete('/api/read-items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      await storage.markItemAsUnread(userId, itemId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking item as unread:", error);
      res.status(500).json({ message: "Failed to mark item as unread" });
    }
  });

  // Folder endpoints (protected)
  app.get('/api/folders', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const folders = await storage.getUserFolders(userId);
      res.json(folders);
    } catch (error) {
      console.error("Error fetching folders:", error);
      res.status(500).json({ message: "Failed to fetch folders" });
    }
  });

  app.post('/api/folders', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { name, color } = req.body;
      
      if (!name || name.trim().length === 0) {
        return res.status(400).json({ message: "Folder name is required" });
      }
      
      const folder = await storage.createFolder(userId, { name: name.trim(), color });
      res.json(folder);
    } catch (error) {
      console.error("Error creating folder:", error);
      res.status(500).json({ message: "Failed to create folder" });
    }
  });

  app.patch('/api/folders/:folderId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { folderId } = req.params;
      const { name, color } = req.body;
      
      const folder = await storage.updateFolder(folderId, userId, { name, color });
      res.json(folder);
    } catch (error) {
      console.error("Error updating folder:", error);
      res.status(500).json({ message: "Failed to update folder" });
    }
  });

  app.delete('/api/folders/:folderId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { folderId } = req.params;
      await storage.deleteFolder(folderId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting folder:", error);
      res.status(500).json({ message: "Failed to delete folder" });
    }
  });

  app.post('/api/folders/:folderId/items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { folderId, itemId } = req.params;
      const itemFolder = await storage.addItemToFolder(userId, itemId, folderId);
      res.json(itemFolder);
    } catch (error) {
      console.error("Error adding item to folder:", error);
      res.status(500).json({ message: "Failed to add item to folder" });
    }
  });

  app.delete('/api/folders/:folderId/items/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { folderId, itemId } = req.params;
      await storage.removeItemFromFolder(userId, itemId, folderId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing item from folder:", error);
      res.status(500).json({ message: "Failed to remove item from folder" });
    }
  });

  app.get('/api/items/:itemId/folders', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const folders = await storage.getItemFolders(userId, itemId);
      res.json(folders);
    } catch (error) {
      console.error("Error fetching item folders:", error);
      res.status(500).json({ message: "Failed to fetch item folders" });
    }
  });

  app.get('/api/folders/:folderId/items', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { folderId } = req.params;
      const items = await storage.getFolderItems(userId, folderId);
      res.json(items);
    } catch (error) {
      console.error("Error fetching folder items:", error);
      res.status(500).json({ message: "Failed to fetch folder items" });
    }
  });

  // Chat endpoints (protected)
  app.post('/api/chat', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { query, conversationHistory, scope } = req.body;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ message: "Query is required" });
      }
      
      // Import tier check utilities
      const { canSendChatMessage, getUserTier } = await import('./tierChecks');
      
      // Check tier limits for chat messages
      const messageCheck = await canSendChatMessage(storage, userId);
      if (!messageCheck.allowed) {
        return res.status(403).json({ 
          message: messageCheck.reason,
          error: 'CHAT_LIMIT_EXCEEDED',
          limitReached: true,
          tier: messageCheck.tier,
          currentUsage: messageCheck.currentUsage,
          limit: messageCheck.limit
        });
      }
      
      // Get user tier for scope validation
      const tier = await getUserTier(storage, userId);
      
      // Validate scope access based on tier
      if (scope) {
        if (scope.type === 'saved_items' && tier === 'free') {
          return res.status(403).json({ 
            message: "Saved items scope requires Premium or Pro tier",
            upgradeRequired: true,
            requiredTier: 'premium'
          });
        }
        if (scope.type === 'folder' && !['premium', 'pro'].includes(tier)) {
          return res.status(403).json({ 
            message: "Folder scope requires Premium or Pro tier",
            upgradeRequired: true,
            requiredTier: 'premium'
          });
        }
        
        // Add userId to scope for filtering
        if (scope.type === 'saved_items' || scope.type === 'folder') {
          scope.userId = userId;
        }
      }
      
      // Import chat service
      const { chatWithDigest } = await import('./services/chat');
      
      // Process chat query
      const response = await chatWithDigest(query, conversationHistory || [], scope);
      
      // Increment message count
      const today = new Date().toISOString().split('T')[0];
      await storage.incrementDailyChatMessageCount(userId, today);
      
      res.json(response);
    } catch (error) {
      console.error("Error processing chat query:", error);
      res.status(500).json({ message: "Failed to process chat query" });
    }
  });
  
  // Chat conversation management
  app.get('/api/chat/conversations', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const conversations = await storage.getUserChatConversations(userId);
      res.json(conversations);
    } catch (error) {
      console.error("Error fetching chat conversations:", error);
      res.status(500).json({ message: "Failed to fetch conversations" });
    }
  });
  
  app.post('/api/chat/conversations', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { title, messages, scope } = req.body;
      
      const conversation = await storage.createChatConversation(userId, {
        title: title || 'New Conversation',
        messages: messages || [],
        scope: scope || null,
      });
      
      res.json(conversation);
    } catch (error) {
      console.error("Error creating chat conversation:", error);
      res.status(500).json({ message: "Failed to create conversation" });
    }
  });
  
  app.get('/api/chat/conversations/:conversationId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { conversationId } = req.params;
      
      const conversation = await storage.getChatConversation(conversationId, userId);
      if (!conversation) {
        return res.status(404).json({ message: "Conversation not found" });
      }
      
      res.json(conversation);
    } catch (error) {
      console.error("Error fetching chat conversation:", error);
      res.status(500).json({ message: "Failed to fetch conversation" });
    }
  });
  
  app.put('/api/chat/conversations/:conversationId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { conversationId } = req.params;
      const updates = req.body;
      
      const conversation = await storage.updateChatConversation(conversationId, userId, updates);
      res.json(conversation);
    } catch (error) {
      console.error("Error updating chat conversation:", error);
      res.status(500).json({ message: "Failed to update conversation" });
    }
  });
  
  app.delete('/api/chat/conversations/:conversationId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { conversationId } = req.params;
      
      await storage.deleteChatConversation(conversationId, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting chat conversation:", error);
      res.status(500).json({ message: "Failed to delete conversation" });
    }
  });
  
  // Chat settings
  app.get('/api/chat/settings', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const settings = await storage.getChatSettings(userId);
      
      // Return defaults if no settings exist
      if (!settings) {
        return res.json({
          userId,
          enableHistoryTracking: false,
          enableHistoryLearning: false,
          defaultScope: 'current_digest',
          defaultFolderId: null,
        });
      }
      
      res.json(settings);
    } catch (error) {
      console.error("Error fetching chat settings:", error);
      res.status(500).json({ message: "Failed to fetch chat settings" });
    }
  });
  
  app.put('/api/chat/settings', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const updates = req.body;
      
      // Check tier restrictions for history features
      const subscription = await storage.getUserSubscription(userId);
      const tier = subscription?.tier || 'free';
      
      if (updates.enableHistoryTracking && tier !== 'pro') {
        return res.status(403).json({ 
          message: "History tracking requires Pro tier",
          upgradeRequired: true,
          requiredTier: 'pro'
        });
      }
      
      if (updates.enableHistoryLearning && tier !== 'pro') {
        return res.status(403).json({ 
          message: "History learning requires Pro tier",
          upgradeRequired: true,
          requiredTier: 'pro'
        });
      }
      
      const settings = await storage.upsertChatSettings(userId, updates);
      res.json(settings);
    } catch (error) {
      console.error("Error updating chat settings:", error);
      res.status(500).json({ message: "Failed to update chat settings" });
    }
  });

  // Community rating endpoints (protected)
  app.post('/api/ratings/:itemId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const { rating, comment } = req.body;
      
      if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "Rating must be between 1 and 5" });
      }
      
      const userRating = await storage.upsertUserRating({
        userId,
        itemId,
        rating,
        comment: comment || null,
      });
      
      res.json(userRating);
    } catch (error) {
      console.error("Error submitting rating:", error);
      res.status(500).json({ message: "Failed to submit rating" });
    }
  });

  app.get('/api/ratings/:itemId/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemId } = req.params;
      const rating = await storage.getUserRating(userId, itemId);
      res.json(rating || null);
    } catch (error) {
      console.error("Error fetching user rating:", error);
      res.status(500).json({ message: "Failed to fetch rating" });
    }
  });

  app.get('/api/ratings/:itemId/stats', async (req, res) => {
    try {
      const { itemId } = req.params;
      const stats = await storage.getRatingStats(itemId);
      res.json(stats);
    } catch (error) {
      console.error("Error fetching rating stats:", error);
      res.status(500).json({ message: "Failed to fetch rating stats" });
    }
  });

  // Server-side tier to price ID mapping (NEVER trust client-provided price IDs)
  const TIER_PRICE_IDS: Record<string, string> = {
    premium: process.env.STRIPE_PREMIUM_PRICE_ID || '',
    pro: process.env.STRIPE_PRO_PRICE_ID || '',
  };

  // Reverse mapping: price ID to tier (for webhook validation)
  const PRICE_ID_TO_TIER: Record<string, 'free' | 'premium' | 'pro'> = {
    [process.env.STRIPE_PREMIUM_PRICE_ID || '']: 'premium',
    [process.env.STRIPE_PRO_PRICE_ID || '']: 'pro',
  };

  // Helper function to get tier from Stripe subscription (NEVER trust metadata)
  function getTierFromSubscription(subscription: Stripe.Subscription): 'free' | 'premium' | 'pro' {
    if (!subscription.items || subscription.items.data.length === 0) {
      console.warn('No subscription items found, defaulting to free');
      return 'free';
    }

    const priceId = subscription.items.data[0].price.id;
    const tier = PRICE_ID_TO_TIER[priceId];

    if (!tier) {
      console.error(`Unknown Stripe price ID: ${priceId}, defaulting to free`);
      return 'free';
    }

    return tier;
  }

  // Stripe Subscription endpoints (protected)
  app.post('/api/subscriptions/create-checkout', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { tier } = req.body;
      
      // Validate tier
      if (!tier || (tier !== 'premium' && tier !== 'pro')) {
        return res.status(400).json({ message: "Invalid tier. Must be 'premium' or 'pro'" });
      }
      
      // Get server-side price ID (NEVER trust client)
      const priceId = TIER_PRICE_IDS[tier];
      if (!priceId) {
        return res.status(500).json({ message: `Stripe price ID not configured for ${tier} tier` });
      }
      
      const user = await storage.getUser(userId);
      if (!user || !user.email) {
        return res.status(400).json({ message: "User email not found" });
      }
      
      let subscription = await storage.getUserSubscription(userId);
      let customerId = subscription?.stripeCustomerId;
      
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          metadata: { userId },
        });
        customerId = customer.id;
      }
      
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        payment_method_types: ['card'],
        line_items: [{
          price: priceId,
          quantity: 1,
        }],
        mode: 'subscription',
        success_url: `${process.env.REPLIT_DEV_DOMAIN || 'http://localhost:5000'}/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.REPLIT_DEV_DOMAIN || 'http://localhost:5000'}/pricing`,
        metadata: { userId, tier },
        subscription_data: {
          metadata: { userId },
        },
      });
      
      res.json({ sessionId: session.id, url: session.url });
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ message: "Failed to create checkout session: " + error.message });
    }
  });
  
  app.get('/api/subscriptions/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscription = await storage.getUserSubscription(userId);
      res.json(subscription || { tier: 'free', status: 'inactive' });
    } catch (error) {
      console.error("Error fetching subscription status:", error);
      res.status(500).json({ message: "Failed to fetch subscription status" });
    }
  });
  
  app.post('/api/subscriptions/portal', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscription = await storage.getUserSubscription(userId);
      
      if (!subscription?.stripeCustomerId) {
        return res.status(400).json({ message: "No active subscription found" });
      }
      
      const session = await stripe.billingPortal.sessions.create({
        customer: subscription.stripeCustomerId,
        return_url: `${process.env.REPLIT_DEV_DOMAIN || 'http://localhost:5000'}/account`,
      });
      
      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Error creating portal session:", error);
      res.status(500).json({ message: "Failed to create portal session: " + error.message });
    }
  });
  
  app.post('/api/webhooks/stripe', async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    if (!sig || !webhookSecret) {
      return res.status(400).send('Webhook signature or secret missing');
    }
    
    let event: Stripe.Event;
    
    try {
      event = stripe.webhooks.constructEvent(req.body, sig as string, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object as Stripe.Checkout.Session;
          const userId = session.metadata?.userId;
          
          if (userId && session.subscription) {
            const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
            const tier = getTierFromSubscription(subscription);
            
            await storage.upsertUserSubscription({
              userId,
              tier,
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string,
              status: 'active',
            });
          }
          break;
        }
        
        case 'customer.subscription.updated': {
          const subscription = event.data.object as Stripe.Subscription;
          const userId = subscription.metadata?.userId;
          
          if (userId) {
            const tier = getTierFromSubscription(subscription);
            
            await storage.upsertUserSubscription({
              userId,
              tier,
              stripeCustomerId: subscription.customer as string,
              stripeSubscriptionId: subscription.id,
              status: subscription.status as any,
              cancelAtPeriodEnd: subscription.cancel_at_period_end,
            });
          }
          break;
        }
        
        case 'customer.subscription.deleted': {
          const subscription = event.data.object as Stripe.Subscription;
          const userId = subscription.metadata?.userId;
          
          if (userId) {
            await storage.upsertUserSubscription({
              userId,
              tier: 'free',
              status: 'canceled',
              cancelAtPeriodEnd: false,
            });
          }
          break;
        }
      }
      
      res.json({ received: true });
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).json({ message: 'Webhook processing failed' });
    }
  });

  // OPML import endpoint
  app.post('/api/feeds/import-opml', isAuthenticated, async (req: any, res) => {
    try {
      const { opmlContent } = req.body;
      const userId = req.user.claims.sub;

      if (!opmlContent) {
        return res.status(400).json({ error: 'OPML content is required' });
      }

      // Import the unified pipeline
      const { importOPML } = await import('./services/feed-ingestion/unified-pipeline');
      
      // Import feeds from OPML
      const result = await importOPML(opmlContent, userId);

      res.json({
        success: true,
        total: result.total,
        imported: result.success,
        failed: result.failed,
        results: result.results
      });
    } catch (error: any) {
      console.error('Error importing OPML:', error);
      res.status(500).json({ error: error.message || 'Failed to import OPML' });
    }
  });

  // Feed discovery/search endpoint  
  app.get('/api/feeds/search', isAuthenticated, async (req: any, res) => {
    try {
      const { query, sourceType } = req.query;

      if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
      }

      // Import the discovery engine
      const { FeedDiscoveryEngine } = await import('./services/feed-discovery/discovery-engine');
      const discoveryEngine = new FeedDiscoveryEngine();
      
      // Search for feeds
      const results = await discoveryEngine.searchFeeds(query as string, sourceType as string);

      res.json({
        success: true,
        results
      });
    } catch (error: any) {
      console.error('Error searching feeds:', error);
      res.status(500).json({ error: error.message || 'Failed to search feeds' });
    }
  });

  // Feed health check endpoint (force check a specific feed)
  app.post('/api/feeds/:id/check-health', isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      
      // Import the monitor
      const { getMonitor } = await import('./services/feed-monitoring/real-time-monitor');
      const monitor = getMonitor();
      
      // Force check the feed
      const status = await monitor.checkFeedNow(id);
      
      if (status) {
        res.json({
          success: true,
          status
        });
      } else {
        res.status(404).json({ error: 'Feed not found' });
      }
    } catch (error: any) {
      console.error('Error checking feed health:', error);
      res.status(500).json({ error: error.message || 'Failed to check feed health' });
    }
  });

  // Feed health monitoring endpoint - get overall system health
  app.get('/api/feeds/health', async (req, res) => {
    try {
      // Get health stats from storage
      const healthStats = await storage.getFeedHealthStats();
      
      res.json({
        status: 'active',
        monitoring: {
          enabled: true,
          checkInterval: '5 minutes',
          healingEnabled: true
        },
        stats: {
          total_feeds: healthStats.total || 0,
          healthy_feeds: healthStats.healthy || 0,
          warning_feeds: healthStats.warning || 0,
          failed_feeds: healthStats.failed || 0,
          last_check: healthStats.lastCheck || new Date()
        }
      });
    } catch (error: any) {
      console.error('Error getting feed health:', error);
      res.status(500).json({ error: error.message || 'Failed to get feed health' });
    }
  });

  // Feed discovery endpoint - discover alternatives for failing feeds
  app.post('/api/feeds/discover', async (req, res) => {
    try {
      const { url, name } = req.body;

      if (!url || !name) {
        return res.status(400).json({ error: 'URL and name are required' });
      }

      // Import discovery engine
      const { FeedDiscoveryEngine } = await import('./services/feed-discovery/discovery-engine');
      const discoveryEngine = new FeedDiscoveryEngine();

      // Create temporary feed object for discovery
      const tempFeed = {
        id: 'temp-' + Date.now(),
        url,
        name,
        sourceType: 'unknown',
        category: 'unknown',
        domain: 'health'
      };

      // Attempt discovery
      const result = await discoveryEngine.discoverAlternative(tempFeed as any);

      res.json({
        success: result !== null,
        discovered: result || null,
        message: result ? 'Alternative feed found' : 'No alternatives found',
        attempts: 1
      });
    } catch (error: any) {
      console.error('Error discovering feeds:', error);
      res.status(500).json({ error: error.message || 'Failed to discover feeds' });
    }
  });

  // Feed preview endpoints (protected)
  app.get('/api/feeds/:id', isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const feed = await storage.getFeedById(id);
      
      if (!feed) {
        return res.status(404).json({ error: 'Feed not found' });
      }
      
      res.json(feed);
    } catch (error) {
      console.error('Error fetching feed:', error);
      res.status(500).json({ error: 'Failed to fetch feed' });
    }
  });

  app.get('/api/feeds/:id/items', isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const limit = parseInt(req.query.limit as string) || 5;
      
      // First get the feed to get its URL
      const feed = await storage.getFeedById(id);
      
      if (!feed) {
        return res.status(404).json({ error: 'Feed not found' });
      }
      
      // Get sample items from this feed
      const items = await storage.getItemsByFeedUrl(feed.url, limit);
      
      res.json(items);
    } catch (error) {
      console.error('Error fetching feed items:', error);
      res.status(500).json({ error: 'Failed to fetch feed items' });
    }
  });

  // Feed Discovery endpoints (protected)
  app.get('/api/discover/feeds', isAuthenticated, async (req: any, res) => {
    try {
      const { query, sourceTypes, featured } = req.query;
      
      console.log(`\n========== DISCOVERY ROUTE CALLED ==========`);
      console.log(`[Route] Query: "${query}", SourceTypes: ${sourceTypes}, Featured: ${featured}`);
      console.log(`[Route] Full query params:`, req.query);
      
      const types = sourceTypes ? (typeof sourceTypes === 'string' ? sourceTypes.split(',') : sourceTypes) : undefined;
      
      // If featured=true, return featured feeds
      if (featured === 'true') {
        console.log('[Route] Fetching featured feeds...');
        const catalogFeeds = await storage.getFeedCatalog({ featured: true });
        console.log(`[Route] ✓ Fetched ${catalogFeeds.length} featured feeds from catalog`);
        
        // Map to FeedResult format
        const results = catalogFeeds.map(feed => ({
          id: feed.id,
          title: feed.name,
          url: feed.url,
          description: feed.description || '',
          sourceType: feed.sourceType as 'youtube' | 'podcast' | 'reddit' | 'substack' | 'journal',
          category: feed.category || undefined,
        }));
        
        console.log(`[Route] ✓ Returning ${results.length} featured feeds`);
        console.log(`========================================\n`);
        return res.json(results);
      }
      
      // Otherwise, search is required
      if (!query || typeof query !== 'string') {
        console.log('[Route] ❌ Missing or invalid query parameter');
        return res.status(400).json({ message: "Query parameter is required" });
      }
      
      // Fetch ALL approved feeds from catalog (filtering happens in discoverFeeds)
      const catalogFeeds = await storage.getFeedCatalog({});
      console.log(`[Route] ✓ Fetched ${catalogFeeds.length} feeds from catalog`);
      
      // Pass catalog feeds to discovery service for query filtering
      const results = await discoverFeeds(query, types, catalogFeeds);
      console.log(`[Route] ✓ Discovery returned ${results.length} results`);
      
      if (results.length > 0) {
        console.log(`[Route] First result:`, JSON.stringify(results[0], null, 2));
      }
      console.log(`========================================\n`);
      
      res.json(results);
    } catch (error) {
      console.error("[Route] ❌ Error discovering feeds:", error);
      res.status(500).json({ message: "Failed to discover feeds" });
    }
  });

  app.post('/api/discover/verify', isAuthenticated, async (req: any, res) => {
    try {
      const { url } = req.body;
      
      if (!url || typeof url !== 'string') {
        return res.status(400).json({ message: "URL is required" });
      }
      
      const result = await verifyRssFeed(url);
      res.json(result);
    } catch (error) {
      console.error("Error verifying feed:", error);
      res.status(500).json({ message: "Failed to verify feed" });
    }
  });

  // User Feed Subscription endpoints (protected)
  app.get('/api/subscriptions/feeds', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscriptions = await storage.getUserFeedSubscriptions(userId);
      res.json(subscriptions);
    } catch (error) {
      console.error("Error fetching user feed subscriptions:", error);
      res.status(500).json({ message: "Failed to fetch subscriptions" });
    }
  });

  app.post('/api/subscriptions/feeds/:feedId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { feedId } = req.params;
      
      // Check tier limits
      const tierCheck = await canSubscribeToFeed(storage, userId);
      if (!tierCheck.allowed) {
        return res.status(403).json({ 
          message: "Feed subscription limit reached",
          error: "FEED_LIMIT_EXCEEDED",
          limit: tierCheck.limit,
          currentUsage: tierCheck.currentUsage,
          tier: tierCheck.tier
        });
      }
      
      const subscription = await storage.subscribeFeed(userId, feedId);
      res.json(subscription);
    } catch (error) {
      console.error("Error subscribing to feed:", error);
      res.status(500).json({ message: "Failed to subscribe to feed" });
    }
  });

  app.delete('/api/subscriptions/feeds/:feedId', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { feedId } = req.params;
      
      await storage.unsubscribeFeed(userId, feedId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error unsubscribing from feed:", error);
      res.status(500).json({ message: "Failed to unsubscribe from feed" });
    }
  });

  app.get('/api/subscriptions/feeds/:feedId/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { feedId } = req.params;
      
      const isSubscribed = await storage.isSubscribedToFeed(userId, feedId);
      res.json({ isSubscribed });
    } catch (error) {
      console.error("Error checking subscription status:", error);
      res.status(500).json({ message: "Failed to check subscription status" });
    }
  });

  // User tier info endpoint (includes test account handling)
  app.get('/api/user/tier-info', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { getUserTier } = await import('./tierChecks');
      const tier = await getUserTier(storage, userId);
      
      res.json({ tier });
    } catch (error) {
      console.error("Error fetching user tier info:", error);
      res.status(500).json({ message: "Failed to fetch tier info" });
    }
  });

  // User Subscription Management (Stripe tier)
  app.get('/api/subscription', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscription = await storage.getUserSubscription(userId);
      
      // Create free tier if no subscription exists
      if (!subscription) {
        const defaultSubscription = await storage.upsertUserSubscription({
          userId,
          tier: 'free',
          status: 'active',
          digestFrequency: 'weekly',
          cancelAtPeriodEnd: false,
        });
        return res.json(defaultSubscription);
      }
      
      res.json(subscription);
    } catch (error) {
      console.error("Error fetching user subscription:", error);
      res.status(500).json({ message: "Failed to fetch subscription" });
    }
  });

  // Digest endpoints (public)
  app.get("/api/digest/latest", async (req, res) => {
    try {
      const digest = await storage.getLatestDigest();
      if (!digest) {
        return res.status(404).json({ error: "No digest available" });
      }
      res.json(digest);
    } catch (error) {
      console.error("Error fetching latest digest:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/digest/archive", async (req, res) => {
    try {
      const digests = await storage.getAllDigests();
      res.json(digests);
    } catch (error) {
      console.error("Error fetching digest archive:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/digest/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const digest = await storage.getDigestBySlug(slug);
      if (!digest) {
        return res.status(404).json({ error: "Digest not found" });
      }
      res.json(digest);
    } catch (error) {
      console.error("Error fetching digest:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Generate on-demand personalized digest for authenticated user
  app.post("/api/digest/generate", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { recaptchaToken } = req.body;
      
      console.log(`[POST /api/digest/generate] Generating personalized digest for user ${userId}`);
      
      // Verify reCAPTCHA token (required for onboarding security)
      if (!recaptchaToken) {
        return res.status(400).json({ error: "reCAPTCHA verification required" });
      }

      const { env } = await import('../config/env');
      const secretKey = env.recaptchaSecretKey;

      if (secretKey) {
        // Only verify if configured (fail closed in production)
        try {
          const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
          const response = await fetch(verifyUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secretKey}&response=${recaptchaToken}`
          });

          const data = await response.json();

          if (!data.success) {
            console.error("[reCAPTCHA] Verification failed for user", userId, data['error-codes']);
            return res.status(400).json({ error: "reCAPTCHA verification failed" });
          }
          console.log("[reCAPTCHA] Verified successfully for user", userId);
        } catch (error) {
          console.error("[reCAPTCHA] Verification error:", error);
          return res.status(500).json({ error: "reCAPTCHA verification error" });
        }
      } else {
        console.warn("[reCAPTCHA] Secret key not configured - bypassing verification");
      }
      
      const { id, slug } = await generatePersonalizedDigest(userId);
      
      res.json({ 
        success: true, 
        digestId: id, 
        slug,
        message: 'Personalized digest generated successfully' 
      });
    } catch (error) {
      console.error("Error generating personalized digest:", error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate digest';
      res.status(500).json({ error: errorMessage });
    }
  });

  // Refresh digest - run ingestion and digest generation with healing
  app.post("/api/digest/refresh", isAuthenticated, async (req: any, res) => {
    const startTime = Date.now();
    
    try {
      const userId = req.user.claims.sub;
      console.log(`🔄 Starting digest generation for user: ${userId}`);

      // 1. Get user and check if test account
      const user = await storage.getUser(userId);
      const isTestAccount = user?.isTestAccount || false;

      // 2. Get user subscription
      const subscription = await storage.getUserSubscription(userId);
      let tier = (subscription?.tier || 'free') as 'free' | 'premium' | 'pro';
      
      // Test accounts are treated as 'pro' tier
      if (isTestAccount) {
        tier = 'pro';
      }

      // 3. Check tier limits
      const limits: Record<'free' | 'premium' | 'pro', number> = {
        free: 0,
        premium: 1,
        pro: Infinity,
      };

      if (limits[tier] === 0) {
        return res.status(403).json({ 
          error: "Upgrade to Premium for manual refresh",
          tier: 'free',
          upgradeRequired: true
        });
      }

      // 4. Get today's usage
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      const usage = await storage.getDailyUsage(userId, today);
      const refreshCount = usage?.digestRefreshes || 0;

      // 5. Check if user exceeded limit (skip for test accounts)
      if (!isTestAccount && refreshCount >= limits[tier]) {
        return res.status(429).json({ 
          error: `Daily refresh limit reached (${limits[tier]} per day)`,
          limit: limits[tier],
          used: refreshCount,
          tier
        });
      }

      // 5a. Initialize healing metadata tracking
      const healingMetadata = {
        healedFeeds: [] as string[],
        fallbackFeeds: [] as string[],
        healingMessages: [] as string[]
      };

      // 5b. Detect and heal failing feeds before ingestion
      const { HealingOrchestrator } = await import('./services/healing/healing-orchestrator');
      const healingOrchestrator = new HealingOrchestrator();
      
      // Get user's subscribed feeds
      const userFeedSubscriptions = await storage.getUserFeedSubscriptions(userId);
      const userFeeds = userFeedSubscriptions.map(sub => sub.feed);
      
      // Detect failing feeds
      const failingFeeds = userFeeds.filter(feed => 
        feed.consecutiveFailures > 0 || 
        (feed.lastFetchStatus && feed.lastFetchStatus !== 'success')
      );
      
      if (failingFeeds.length > 0) {
        console.log(`🏥 [POST /api/digest/refresh] Detected ${failingFeeds.length} failing feeds, attempting healing...`);
        
        try {
          // Heal feeds in bulk with 2-second timeout per feed
          const healingResults = await healingOrchestrator.healFeedsBulk(failingFeeds, 3);
          
          // Track healing results
          healingResults.forEach((result, feedId) => {
            const feed = failingFeeds.find(f => f.id === feedId);
            if (feed) {
              if (result.success) {
                healingMetadata.healedFeeds.push(feed.name);
                console.log(`✅ Healed feed: ${feed.name}`);
              } else {
                healingMetadata.fallbackFeeds.push(feed.name);
                console.log(`⚠️ Will use cached content for: ${feed.name}`);
              }
            }
          });
          
          // Add healing status messages
          if (healingMetadata.healedFeeds.length > 0) {
            healingMetadata.healingMessages.push(`${healingMetadata.healedFeeds.length} feeds were automatically recovered`);
          }
          if (healingMetadata.fallbackFeeds.length > 0) {
            healingMetadata.healingMessages.push(`Using cached content for ${healingMetadata.fallbackFeeds.length} temporarily unavailable feeds`);
          }
        } catch (healingError) {
          console.error(`❌ [POST /api/digest/refresh] Healing error:`, healingError);
          // Continue without healing - ingestion will use existing feeds
        }
      }

      // 6. Run ingestion (with error handling)
      let ingestionSuccess = false;
      let ingestionError: string | null = null;
      try {
        console.log(`[POST /api/digest/refresh] Running ingestion job...`);
        await runIngestJob({ useSubscribedFeeds: true });
        ingestionSuccess = true;
        console.log(`[POST /api/digest/refresh] Ingestion completed successfully`);
      } catch (error) {
        ingestionError = error instanceof Error ? error.message : 'Unknown error';
        console.error(`⚠️  Ingestion failed but continuing to digest generation:`, error);
        console.error(`Ingestion error details:`, ingestionError);
        // Continue to digest generation - it will use existing content in the database
      }

      // 7. Run digest generation (with error handling)
      let id: string;
      let slug: string;
      let digest: any;
      let digestMetadata: any;
      try {
        console.log(`[POST /api/digest/refresh] Generating personalized digest...`);
        const result = await generatePersonalizedDigest(userId);
        id = result.id;
        slug = result.slug;
        digestMetadata = result.metadata;
        console.log(`[POST /api/digest/refresh] Digest generated successfully: ${slug}`);
        
        // Fetch the digest immediately to ensure we have content
        digest = await storage.getDigestBySlug(slug);
        if (!digest) {
          throw new Error('Digest was created but not found in storage');
        }
      } catch (error) {
        const digestError = error instanceof Error ? error.message : 'Unknown error';
        console.error(`❌ Digest generation failed:`, error);
        console.error(`Digest error details:`, digestError);
        
        // If digest generation fails, try to return the most recent digest as fallback
        const fallbackDigest = await storage.getLatestDigest();
        if (fallbackDigest) {
          console.log(`⚠️  Returning fallback digest: ${fallbackDigest.slug}`);
          return res.json({
            success: true,
            digestId: fallbackDigest.id,
            slug: fallbackDigest.slug,
            digest: fallbackDigest,
            message: 'Using previous digest (refresh failed)',
            warnings: [
              ...healingMetadata.healingMessages,
              ingestionError ? `Ingestion: ${ingestionError}` : undefined,
              `Digest generation: ${digestError}`
            ].filter(Boolean),
            healingMetadata,
            usage: {
              used: refreshCount,
              limit: limits[tier],
              tier: isTestAccount ? 'pro (test)' : tier
            }
          });
        }
        
        // If no fallback digest, fail completely
        return res.status(500).json({ 
          error: 'Failed to generate digest and no fallback available',
          details: digestError,
          ingestionSuccess,
          ingestionError,
          healingMetadata
        });
      }

      // 8. Increment refresh counter (still track for test accounts)
      try {
        await storage.incrementDigestRefresh(userId, today);
      } catch (error) {
        console.error(`⚠️  Failed to increment refresh counter:`, error);
        // Non-critical error, continue
      }

      // 9. Return the digest with metadata
      const warnings = [
        ...healingMetadata.healingMessages,
        ingestionError ? `Ingestion: ${ingestionError}` : undefined
      ].filter(Boolean);
      
      // Merge healing metadata
      const finalHealingMetadata = {
        ...healingMetadata,
        ...(digestMetadata || {})
      };
      
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`✅ Digest generated successfully: ${slug} (${duration}s)`);
      
      res.json({ 
        success: true,
        digestId: id,
        slug,
        digest,
        duration: duration,
        message: ingestionSuccess 
          ? 'Digest refreshed successfully' 
          : 'Digest created with existing content (ingestion failed)',
        warnings: warnings.length > 0 ? warnings : undefined,
        healingMetadata: finalHealingMetadata,
        usage: {
          used: refreshCount + 1,
          limit: limits[tier],
          tier: isTestAccount ? 'pro (test)' : tier
        }
      });
    } catch (error) {
      console.error('❌ Digest generation failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate digest';
      res.status(500).json({ 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
      });
    }
  });

  // reCAPTCHA verification endpoint
  app.post("/api/verify-recaptcha", async (req, res) => {
    try {
      const { token } = req.body;
      
      if (!token) {
        return res.status(400).json({ success: false, message: "reCAPTCHA token is required" });
      }

      const { env } = await import('../config/env');
      const secretKey = env.recaptchaSecretKey;

      if (!secretKey) {
        console.warn("reCAPTCHA secret key not configured");
        // Allow through if not configured (for development)
        return res.json({ success: true, message: "reCAPTCHA not configured, bypassing verification" });
      }

      // Verify token with Google
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
      const response = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`
      });

      const data = await response.json();

      if (data.success) {
        res.json({ success: true, message: "reCAPTCHA verified successfully" });
      } else {
        res.status(400).json({ success: false, message: "reCAPTCHA verification failed", errors: data['error-codes'] });
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      res.status(500).json({ success: false, message: "reCAPTCHA verification error" });
    }
  });

  // Admin endpoints
  app.post("/admin/test-email", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { sendTestEmail } = await import('./lib/resend');
      await sendTestEmail();
      res.json({ message: "Test email sent successfully" });
    } catch (error) {
      console.error("Error sending test email:", error);
      res.status(500).json({ message: "Failed to send test email", error: String(error) });
    }
  });

  app.get("/admin/test-reddit", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { searchRedditSubreddits } = await import('./services/feed-discovery/reddit-search');
      
      // Test with a simple query
      const testQuery = req.query.query as string || 'science';
      
      console.log(`[Reddit Test] Testing Reddit API with query: "${testQuery}"`);
      const results = await searchRedditSubreddits(testQuery);
      
      res.json({ 
        success: true,
        message: `Reddit API test completed successfully for query: "${testQuery}"`,
        resultsCount: results.length,
        results: results.slice(0, 3), // Return first 3 results
        note: 'Check server logs for detailed OAuth and API call information'
      });
    } catch (error) {
      console.error("[Reddit Test] Error testing Reddit API:", error);
      res.status(500).json({ 
        success: false,
        message: "Reddit API test failed", 
        error: String(error) 
      });
    }
  });

  app.post("/admin/run/ingest", isAuthenticated, isAdmin, async (req, res) => {
    try {
      // Validate request body with Zod
      const ingestRequestSchema = z.object({
        topics: z.array(z.enum(topics)).optional(),
        useSubscribedFeeds: z.boolean().optional(),
        feedIds: z.array(z.string()).optional(),
      });
      
      const validationResult = ingestRequestSchema.safeParse(req.body || {});
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid request", 
          details: validationResult.error.errors,
          validTopics: topics 
        });
      }
      
      const { topics: requestTopics, useSubscribedFeeds = true, feedIds } = validationResult.data;
      const options: any = { useSubscribedFeeds };
      
      if (requestTopics && requestTopics.length > 0) {
        options.topics = requestTopics;
      }
      if (feedIds && feedIds.length > 0) {
        options.feedIds = feedIds;
      }
      
      const result = await runIngestJob(options);
      res.json({
        success: true,
        message: requestTopics && requestTopics.length > 0 
          ? `Ingestion completed (filtered for ${requestTopics.length} topics)` 
          : "Ingestion completed",
        ...result,
      });
    } catch (error) {
      console.error("Error running ingest job:", error);
      res.status(500).json({ error: "Ingestion failed" });
    }
  });

  app.post("/admin/run/digest", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { itemCounts, windowDays } = req.body;
      
      const options: any = {};
      if (itemCounts) options.itemCounts = itemCounts;
      if (windowDays) options.windowDays = windowDays;
      
      const result = await generateWeeklyDigest(options);
      res.json({
        success: true,
        message: "Digest generated",
        ...result,
      });
    } catch (error) {
      console.error("Error generating digest:", error);
      res.status(500).json({ error: "Digest generation failed" });
    }
  });

  app.post("/admin/run/enrich", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { limit } = req.body;
      const maxItems = limit && typeof limit === 'number' ? limit : 50;
      
      console.log(`Starting enrichment for up to ${maxItems} items without quality scores...`);
      
      // Get items that don't have scoreBreakdown
      const items = await storage.getItemsWithoutQualityScores(maxItems);
      
      if (items.length === 0) {
        return res.json({
          success: true,
          message: "No items need enrichment",
          itemsEnriched: 0,
        });
      }
      
      console.log(`Found ${items.length} items to enrich`);
      
      // Enrich items with quality scores
      const enriched = await enrichContentBatch(items as any);
      
      // Update items in database
      let updated = 0;
      for (let i = 0; i < enriched.length; i++) {
        const originalItem = items[i];
        const enrichedItem = enriched[i];
        await storage.updateItem(originalItem.id, {
          fullText: enrichedItem.fullText,
          pdfUrl: enrichedItem.pdfUrl,
          qualityMetrics: enrichedItem.qualityMetrics as any,
          scoreBreakdown: enrichedItem.scoreBreakdown as any,
        });
        updated++;
      }
      
      console.log(`Successfully enriched ${updated} items`);
      
      res.json({
        success: true,
        message: `Enriched ${updated} items with quality scores`,
        itemsEnriched: updated,
      });
    } catch (error) {
      console.error("Error enriching items:", error);
      res.status(500).json({ error: "Enrichment failed" });
    }
  });

  // Export endpoints
  app.get("/export/weekly.json", async (req, res) => {
    try {
      const json = await exportDigestJSON();
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Disposition", "attachment; filename=weekly-digest.json");
      res.send(json);
    } catch (error) {
      console.error("Error exporting JSON:", error);
      res.status(500).json({ error: "Export failed" });
    }
  });

  app.get("/export/weekly.md", async (req, res) => {
    try {
      const markdown = await exportDigestMarkdown();
      res.setHeader("Content-Type", "text/markdown");
      res.setHeader("Content-Disposition", "attachment; filename=weekly-digest.md");
      res.send(markdown);
    } catch (error) {
      console.error("Error exporting Markdown:", error);
      res.status(500).json({ error: "Export failed" });
    }
  });

  app.get("/rss/weekly.xml", async (req, res) => {
    try {
      const rss = await exportDigestRSS();
      res.setHeader("Content-Type", "application/rss+xml");
      res.send(rss);
    } catch (error) {
      console.error("Error exporting RSS:", error);
      res.status(500).json({ error: "Export failed" });
    }
  });

  // Chat endpoints (protected)
  app.post("/api/chat", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { query, conversationHistory, digestId } = req.body;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: "Query is required" });
      }
      
      // Check tier limits for daily chat messages
      const tierCheck = await canSendChatMessage(storage, userId);
      if (!tierCheck.allowed) {
        return res.status(403).json({ 
          error: "CHAT_LIMIT_EXCEEDED",
          message: "Daily chat message limit reached",
          limit: tierCheck.limit,
          currentUsage: tierCheck.currentUsage,
          tier: tierCheck.tier
        });
      }
      
      const response = await chatWithDigest(query, conversationHistory || [], digestId);
      
      // Increment daily usage counter after successful chat
      const today = new Date().toISOString().split('T')[0];
      await storage.incrementDailyChatMessageCount(userId, today);
      
      res.json(response);
    } catch (error) {
      console.error("Error processing chat:", error);
      res.status(500).json({ error: "Chat failed" });
    }
  });

  // Feed catalog endpoints (public browse, protected submit)
  app.get("/api/feeds", async (req, res) => {
    try {
      const { domain, sourceType, search } = req.query;
      
      const filters: any = {};
      if (domain && typeof domain === 'string') filters.domain = domain;
      if (sourceType && typeof sourceType === 'string') filters.sourceType = sourceType;
      if (search && typeof search === 'string') filters.search = search;
      
      const feeds = await storage.getFeedCatalog(filters);
      res.json(feeds);
    } catch (error) {
      console.error("Error fetching feed catalog:", error);
      res.status(500).json({ error: "Failed to fetch feeds" });
    }
  });

  // Feed suggestions based on user preferences
  app.get("/api/feeds/suggestions", async (req, res) => {
    try {
      const { topics: topicsParam, sourceTypes: sourceTypesParam, limit: limitParam } = req.query;
      
      // Parse topics and sourceTypes from query params (expect comma-separated strings)
      const topics = typeof topicsParam === 'string' ? topicsParam.split(',').filter(Boolean) : [];
      const sourceTypes = typeof sourceTypesParam === 'string' ? sourceTypesParam.split(',').filter(Boolean) : [];
      const limit = typeof limitParam === 'string' ? parseInt(limitParam, 10) : 50; // Increased default from 12 to 50
      
      console.log("[GET /api/feeds/suggestions] topics:", topics, "sourceTypes:", sourceTypes, "limit:", limit);
      
      if (topics.length === 0 || sourceTypes.length === 0) {
        return res.status(400).json({ error: "topics and sourceTypes are required" });
      }
      
      const suggestedFeeds = await storage.getSuggestedFeeds(topics, sourceTypes, limit);
      console.log("[GET /api/feeds/suggestions] Found", suggestedFeeds.length, "feeds");
      res.json(suggestedFeeds);
    } catch (error) {
      console.error("Error fetching suggested feeds:", error);
      res.status(500).json({ error: "Failed to fetch suggested feeds" });
    }
  });

  app.post("/api/feeds/submit", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const validationResult = insertUserFeedSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid submission", 
          details: validationResult.error.errors 
        });
      }
      
      // Add userId and status after validation
      const submissionData = {
        ...validationResult.data,
        userId,
        status: 'pending' as const,
      } as InsertUserFeedSubmission;
      const submission = await storage.submitFeed(submissionData);
      res.json(submission);
    } catch (error) {
      console.error("Error submitting feed:", error);
      res.status(500).json({ error: "Failed to submit feed" });
    }
  });

  app.get("/api/feeds/submissions", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const submissions = await storage.getUserFeedSubmissions(userId);
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.get("/api/feeds/submissions/pending", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const pending = await storage.getPendingFeedSubmissions();
      res.json(pending);
    } catch (error) {
      console.error("Error fetching pending submissions:", error);
      res.status(500).json({ error: "Failed to fetch pending submissions" });
    }
  });

  app.patch("/api/feeds/submissions/:id/review", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const reviewerId = req.user.claims.sub;
      const { id } = req.params;
      const { status, reviewNotes } = req.body;
      
      if (!['approved', 'rejected'].includes(status)) {
        return res.status(400).json({ error: "Status must be 'approved' or 'rejected'" });
      }
      
      const reviewed = await storage.reviewFeedSubmission(id, reviewerId, status, reviewNotes);
      res.json(reviewed);
    } catch (error) {
      console.error("Error reviewing submission:", error);
      res.status(500).json({ error: "Failed to review submission" });
    }
  });

  // Feed request when search returns no results
  app.post("/api/feed-requests", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const userEmail = req.user.claims.email;
      
      const { searchQuery, topics } = req.body;
      
      if (!searchQuery || typeof searchQuery !== 'string') {
        return res.status(400).json({ error: "searchQuery is required" });
      }
      
      // Create feed request
      const requestData = {
        userId,
        email: userEmail,
        searchQuery,
        topics: topics || [],
        status: 'pending' as const,
      };
      
      const feedRequest = await storage.createFeedRequest(requestData);
      
      console.log(`[Feed Request] Created request ${feedRequest.id} for user ${userId}: "${searchQuery}"`);
      
      res.json(feedRequest);
    } catch (error) {
      console.error("Error creating feed request:", error);
      res.status(500).json({ error: "Failed to create feed request" });
    }
  });

  // Get user's feed requests
  app.get("/api/feed-requests", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const requests = await storage.getFeedRequestsByUser(userId);
      res.json(requests);
    } catch (error) {
      console.error("Error fetching feed requests:", error);
      res.status(500).json({ error: "Failed to fetch feed requests" });
    }
  });

  // Admin: Get all users for management
  app.get("/api/admin/users", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });

  // Admin: Toggle test account status
  app.patch("/api/admin/users/:userId/test-account", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const { userId } = req.params;
      const { isTestAccount } = req.body;
      
      if (typeof isTestAccount !== 'boolean') {
        return res.status(400).json({ error: "isTestAccount must be a boolean" });
      }
      
      const updatedUser = await storage.toggleTestAccount(userId, isTestAccount);
      
      console.log(`[Admin] Test account status for user ${userId} set to ${isTestAccount} by ${req.user.claims.sub}`);
      
      res.json(updatedUser);
    } catch (error) {
      console.error("Error toggling test account:", error);
      res.status(500).json({ error: "Failed to toggle test account status" });
    }
  });

  // Admin: Seed feed catalog (for production deployment)
  app.post("/api/admin/seed-feeds", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      // Dynamic import to avoid issues
      const { execSync } = await import('child_process');
      
      console.log(`[Admin] Feed catalog seeding initiated by ${req.user.claims.sub}`);
      
      // Run the seed script in background
      res.json({
        success: true,
        message: "Feed seeding started. Check server logs for progress.",
      });
      
      // Execute seeding in background
      setTimeout(async () => {
        try {
          const output = execSync('tsx server/scripts/seed-feeds.ts', {
            cwd: process.cwd(),
            encoding: 'utf-8'
          });
          console.log('[Admin] Seed output:', output);
        } catch (error: any) {
          console.error('[Admin] Seed error:', error.message);
        }
      }, 100);
      
    } catch (error) {
      console.error("Error seeding feeds:", error);
      res.status(500).json({ error: "Failed to seed feed catalog" });
    }
  });

  // Admin metrics endpoint - job observability
  app.get("/api/admin/metrics/jobs", isAuthenticated, isAdmin, async (req: any, res) => {
    try {
      const { days } = req.query;
      const daysFilter = days ? parseInt(days as string) : 7;
      
      const jobs = await storage.getJobRuns({ days: daysFilter });
      
      // Calculate summary stats
      const totalJobs = jobs.length;
      const successfulJobs = jobs.filter(j => j.status === 'success').length;
      const failedJobs = jobs.filter(j => j.status === 'error').length;
      const totalItemsIngested = jobs.reduce((sum, j) => sum + (j.itemsIngested || 0), 0);
      const totalDedupeHits = jobs.reduce((sum, j) => sum + (j.dedupeHits || 0), 0);
      const totalTokenSpend = jobs.reduce((sum, j) => sum + (j.tokenSpend || 0), 0);
      const avgDedupeRate = totalItemsIngested + totalDedupeHits > 0
        ? (totalDedupeHits / (totalItemsIngested + totalDedupeHits) * 100).toFixed(1)
        : 0;
      
      res.json({
        jobs,
        summary: {
          totalJobs,
          successfulJobs,
          failedJobs,
          totalItemsIngested,
          totalDedupeHits,
          totalTokenSpend,
          avgDedupeRate,
        },
      });
    } catch (error) {
      console.error("Error fetching job metrics:", error);
      res.status(500).json({ error: "Failed to fetch metrics" });
    }
  });

  // Admin feed health endpoint - monitor failing/degraded feeds
  app.get("/api/admin/feeds/health", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const allFeeds = await storage.getFeedCatalog({});
      
      // Categorize feeds by health status
      const healthy = allFeeds.filter(f => f.isActive && f.consecutiveFailures === 0);
      const degraded = allFeeds.filter(f => f.isActive && f.consecutiveFailures > 0 && f.consecutiveFailures < 5);
      const deactivated = allFeeds.filter(f => !f.isActive);
      
      // Get feeds with errors (sorted by failure count)
      const failingFeeds = allFeeds
        .filter(f => f.consecutiveFailures > 0)
        .sort((a, b) => b.consecutiveFailures - a.consecutiveFailures)
        .slice(0, 50); // Limit to top 50 for performance
      
      res.json({
        summary: {
          total: allFeeds.length,
          healthy: healthy.length,
          degraded: degraded.length,
          deactivated: deactivated.length,
          healthRate: ((healthy.length / allFeeds.length) * 100).toFixed(1),
        },
        failingFeeds: failingFeeds.map(f => ({
          id: f.id,
          name: f.name,
          url: f.url,
          sourceType: f.sourceType,
          isActive: f.isActive,
          consecutiveFailures: f.consecutiveFailures,
          lastFetchStatus: f.lastFetchStatus,
          lastErrorMessage: f.lastErrorMessage,
          lastFetchedAt: f.lastFetchedAt,
        })),
      });
    } catch (error) {
      console.error("Error fetching feed health:", error);
      res.status(500).json({ error: "Failed to fetch feed health" });
    }
  });

  // Admin endpoint to manually reactivate a feed
  app.post("/api/admin/feeds/:feedId/reactivate", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { feedId } = req.params;
      await storage.reactivateFeed(feedId);
      
      res.json({
        success: true,
        message: `Feed ${feedId} has been reactivated and failures reset`,
      });
    } catch (error) {
      console.error("Error reactivating feed:", error);
      res.status(500).json({ error: "Failed to reactivate feed" });
    }
  });

  // Admin endpoint to generate embeddings
  app.post("/admin/run/embeddings", async (req, res) => {
    try {
      const count = await generateMissingEmbeddings();
      res.json({
        success: true,
        message: `Generated ${count} embeddings`,
        count,
      });
    } catch (error) {
      console.error("Error generating embeddings:", error);
      res.status(500).json({ error: "Embedding generation failed" });
    }
  });

  // Admin: Bulk enrichment - process ALL items without scores in background
  app.post("/admin/run/enrich-all", isAuthenticated, isAdmin, async (req, res) => {
    try {
      // Count items needing enrichment
      const items = await storage.getItemsWithoutQualityScores(1000);
      const totalPending = items.length;
      
      // Start async background job
      res.json({
        success: true,
        message: `Bulk enrichment started for ~${totalPending}+ items. Check server logs for progress.`,
        itemsPending: totalPending,
      });
      
      // Process in background
      (async () => {
        try {
          let totalEnriched = 0;
          let batch = 0;
          const batchSize = 50;
          
          console.log(`\n🔬 Starting bulk enrichment for all items without scores...`);
          
          while (true) {
            batch++;
            console.log(`\nBatch ${batch}: Fetching next ${batchSize} items...`);
            
            const batchItems = await storage.getItemsWithoutQualityScores(batchSize);
            if (batchItems.length === 0) {
              console.log(`✅ Bulk enrichment complete! Enriched ${totalEnriched} total items.`);
              break;
            }
            
            console.log(`Processing ${batchItems.length} items...`);
            const enriched = await enrichContentBatch(batchItems as any);
            
            // Update database
            for (let i = 0; i < enriched.length; i++) {
              const originalItem = batchItems[i];
              const enrichedItem = enriched[i];
              await storage.updateItem(originalItem.id, {
                fullText: enrichedItem.fullText,
                pdfUrl: enrichedItem.pdfUrl,
                qualityMetrics: enrichedItem.qualityMetrics as any,
                scoreBreakdown: enrichedItem.scoreBreakdown as any,
              });
              totalEnriched++;
            }
            
            console.log(`Batch ${batch} complete. Total enriched: ${totalEnriched}`);
            
            // Rate limit between batches (5 second pause)
            await new Promise(resolve => setTimeout(resolve, 5000));
          }
        } catch (error) {
          console.error('❌ Error in bulk enrichment:', error);
        }
      })();
      
    } catch (error) {
      console.error("Error starting bulk enrichment:", error);
      res.status(500).json({ error: "Failed to start bulk enrichment" });
    }
  });

  // Admin: Migrate feed topics from catalog to database
  app.post("/admin/run/migrate-topics", isAuthenticated, isAdmin, async (req, res) => {
    try {
      console.log("🔄 Starting feed topic migration...");
      
      const result = await migrateFeedTopics();
      
      res.json({
        success: result.errors === 0,
        message: result.updated > 0 
          ? `Migration complete! Updated ${result.updated} feeds.`
          : "No feeds needed updating.",
        updated: result.updated,
        unchanged: result.unchanged,
        errors: result.errors,
        details: result.details,
      });
      
    } catch (error: any) {
      console.error("Error during migration:", error);
      res.status(500).json({ 
        success: false,
        error: "Migration failed",
        message: error.message 
      });
    }
  });

  // Healing Monitoring Endpoints
  
  // Get real-time healing dashboard
  app.get("/api/admin/healing/dashboard", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const dashboard = await healingMonitor.getHealingDashboard();
      res.json(dashboard);
    } catch (error: any) {
      console.error("Error fetching healing dashboard:", error);
      res.status(500).json({ 
        success: false,
        error: error.message || "Failed to fetch healing dashboard"
      });
    }
  });

  // Get comprehensive healing health report
  app.get("/api/admin/healing/report", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const report = await healingMonitor.generateHealthReport();
      res.json(report);
    } catch (error: any) {
      console.error("Error generating healing report:", error);
      res.status(500).json({ 
        success: false,
        error: error.message || "Failed to generate healing report"
      });
    }
  });

  // Get per-feed healing history
  app.get("/api/admin/healing/feed/:feedId", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { feedId } = req.params;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
      
      const history = await healingMonitor.getFeedHealingHistory(feedId, limit);
      res.json(history);
    } catch (error: any) {
      console.error(`Error fetching healing history for feed ${req.params.feedId}:`, error);
      res.status(500).json({ 
        success: false,
        error: error.message || "Failed to fetch feed healing history"
      });
    }
  });

  // Get healing success rate for a time range
  app.get("/api/admin/healing/success-rate", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const hours = req.query.hours ? parseInt(req.query.hours as string) : undefined;
      const days = req.query.days ? parseInt(req.query.days as string) : undefined;
      
      if (!hours && !days) {
        return res.status(400).json({ 
          success: false,
          error: "Please provide either 'hours' or 'days' query parameter" 
        });
      }
      
      const successRate = await healingMonitor.getHealingSuccessRate({ hours, days });
      res.json({
        success: true,
        successRate,
        timeRange: hours ? `${hours} hours` : `${days} days`,
      });
    } catch (error: any) {
      console.error("Error calculating healing success rate:", error);
      res.status(500).json({ 
        success: false,
        error: error.message || "Failed to calculate healing success rate"
      });
    }
  });

  // Get failure patterns analysis
  app.get("/api/admin/healing/failure-patterns", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const patterns = await healingMonitor.getFailurePatterns();
      res.json({
        success: true,
        patterns,
        totalPatterns: patterns.length,
      });
    } catch (error: any) {
      console.error("Error analyzing failure patterns:", error);
      res.status(500).json({ 
        success: false,
        error: error.message || "Failed to analyze failure patterns"
      });
    }
  });

  // Track a healing attempt (for manual testing)
  app.post("/api/admin/healing/track", isAuthenticated, isAdmin, async (req, res) => {
    try {
      const { feedId, success, tactic, duration, error, metadata } = req.body;
      
      if (!feedId || success === undefined || !tactic || duration === undefined) {
        return res.status(400).json({
          success: false,
          error: "Missing required fields: feedId, success, tactic, duration"
        });
      }
      
      await healingMonitor.trackHealingAttempt(feedId, {
        success,
        tactic,
        duration,
        error,
        metadata,
      });
      
      res.json({
        success: true,
        message: "Healing attempt tracked successfully",
      });
    } catch (error: any) {
      console.error("Error tracking healing attempt:", error);
      res.status(500).json({ 
        success: false,
        error: error.message || "Failed to track healing attempt"
      });
    }
  });

  // Mount marketing automation routes
  app.use(marketingRouter);

  const httpServer = createServer(app);
  return httpServer;
}
