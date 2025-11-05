import type { Request, Response, NextFunction } from 'express';
import type { IStorage } from './storage';
import { getTierLimits, canExceedLimit } from './tierLimits';
import type { SubscriptionTier } from '@shared/schema';

export interface TierCheckResult {
  allowed: boolean;
  reason?: string;
  currentUsage?: number;
  limit?: number | 'unlimited';
  tier?: SubscriptionTier;
}

/**
 * Get user's current subscription tier
 * Test accounts are automatically treated as Pro tier
 */
export async function getUserTier(storage: IStorage, userId: string): Promise<SubscriptionTier> {
  // Check if user is a test account first
  const user = await storage.getUser(userId);
  if (user?.isTestAccount) {
    return 'pro';
  }
  
  const subscription = await storage.getUserSubscription(userId);
  return (subscription?.tier as SubscriptionTier) || 'free';
}

/**
 * Check if user can subscribe to more feeds
 */
export async function canSubscribeToFeed(
  storage: IStorage,
  userId: string
): Promise<TierCheckResult> {
  const tier = await getUserTier(storage, userId);
  const limits = getTierLimits(tier);
  const currentCount = await storage.getUserFeedCount(userId);
  
  const allowed = canExceedLimit(limits.maxFeeds, currentCount);
  
  return {
    allowed,
    currentUsage: currentCount,
    limit: limits.maxFeeds,
    tier,
    reason: allowed ? undefined : `You've reached your ${tier} tier limit of ${limits.maxFeeds} feeds. Upgrade to subscribe to more feeds.`,
  };
}

/**
 * Check if user can send more chat messages today
 */
export async function canSendChatMessage(
  storage: IStorage,
  userId: string
): Promise<TierCheckResult> {
  const tier = await getUserTier(storage, userId);
  const limits = getTierLimits(tier);
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const currentCount = await storage.getDailyChatMessageCount(userId, today);
  
  const allowed = canExceedLimit(limits.dailyChatMessages, currentCount);
  
  return {
    allowed,
    currentUsage: currentCount,
    limit: limits.dailyChatMessages,
    tier,
    reason: allowed ? undefined : `You've reached your ${tier} tier limit of ${limits.dailyChatMessages} messages per day. Upgrade for more messages.`,
  };
}

/**
 * Check if user can generate digest at requested frequency
 */
export async function canGenerateDigest(
  storage: IStorage,
  userId: string,
  requestedFrequency: 'weekly' | 'daily' | 'realtime'
): Promise<TierCheckResult> {
  const tier = await getUserTier(storage, userId);
  const limits = getTierLimits(tier);
  
  const frequencyHierarchy = { weekly: 1, daily: 2, realtime: 3 };
  const userLevel = frequencyHierarchy[limits.digestFrequency];
  const requestedLevel = frequencyHierarchy[requestedFrequency];
  
  const allowed = requestedLevel <= userLevel;
  
  return {
    allowed,
    tier,
    reason: allowed ? undefined : `${requestedFrequency} digests require ${requestedFrequency === 'daily' ? 'Premium' : 'Pro'} tier. Your ${tier} tier supports ${limits.digestFrequency} digests.`,
  };
}

/**
 * Middleware to check feed subscription limits before allowing subscription
 */
export function checkFeedSubscriptionLimit(storage: IStorage) {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.claims?.sub;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const check = await canSubscribeToFeed(storage, userId);
      
      if (!check.allowed) {
        return res.status(403).json({
          message: check.reason,
          error: 'TIER_LIMIT_EXCEEDED',
          tierInfo: {
            currentTier: check.tier,
            currentUsage: check.currentUsage,
            limit: check.limit,
          },
        });
      }

      next();
    } catch (error) {
      console.error('Error checking feed subscription limit:', error);
      res.status(500).json({ message: 'Failed to check subscription limit' });
    }
  };
}

/**
 * Middleware to check chat message limits before allowing message
 */
export function checkChatMessageLimit(storage: IStorage) {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.claims?.sub;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const check = await canSendChatMessage(storage, userId);
      
      if (!check.allowed) {
        return res.status(403).json({
          message: check.reason,
          error: 'TIER_LIMIT_EXCEEDED',
          tierInfo: {
            currentTier: check.tier,
            currentUsage: check.currentUsage,
            limit: check.limit,
          },
        });
      }

      next();
    } catch (error) {
      console.error('Error checking chat message limit:', error);
      res.status(500).json({ message: 'Failed to check message limit' });
    }
  };
}

/**
 * Get tier information and usage stats for a user
 */
export async function getUserTierInfo(storage: IStorage, userId: string) {
  const tier = await getUserTier(storage, userId);
  const limits = getTierLimits(tier);
  const today = new Date().toISOString().split('T')[0];
  
  const [feedCount, chatMessages] = await Promise.all([
    storage.getUserFeedCount(userId),
    storage.getDailyChatMessageCount(userId, today),
  ]);

  return {
    tier,
    limits,
    usage: {
      feeds: {
        current: feedCount,
        limit: limits.maxFeeds,
        remaining: limits.maxFeeds === 'unlimited' ? 'unlimited' : Math.max(0, limits.maxFeeds - feedCount),
      },
      chatMessages: {
        current: chatMessages,
        limit: limits.dailyChatMessages,
        remaining: limits.dailyChatMessages === 'unlimited' ? 'unlimited' : Math.max(0, limits.dailyChatMessages - chatMessages),
      },
    },
  };
}
