import type { SubscriptionTier } from "@shared/schema";

export interface TierLimits {
  digestFrequency: 'weekly' | 'daily' | 'realtime';
  maxFeeds: number | 'unlimited';
  dailyChatMessages: number | 'unlimited';
  analytics: boolean;
  exportFormats: string[];
}

export const TIER_LIMITS: Record<SubscriptionTier, TierLimits> = {
  free: {
    digestFrequency: 'weekly',
    maxFeeds: 10,
    dailyChatMessages: 10,
    analytics: false,
    exportFormats: ['json'],
  },
  premium: {
    digestFrequency: 'daily',
    maxFeeds: 50,
    dailyChatMessages: 100,
    analytics: false,
    exportFormats: ['json', 'markdown'],
  },
  pro: {
    digestFrequency: 'realtime',
    maxFeeds: 'unlimited',
    dailyChatMessages: 'unlimited',
    analytics: true,
    exportFormats: ['json', 'markdown', 'rss'],
  },
};

export function getTierLimits(tier: SubscriptionTier): TierLimits {
  return TIER_LIMITS[tier];
}

export function canExceedLimit(limit: number | 'unlimited', current: number): boolean {
  if (limit === 'unlimited') return true;
  return current < limit;
}

export function formatLimit(limit: number | 'unlimited'): string {
  return limit === 'unlimited' ? 'Unlimited' : String(limit);
}
