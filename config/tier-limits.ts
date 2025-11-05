/**
 * Tier limits configuration built from environment variables
 * Replaces hardcoded server/tierLimits.ts with configurable values
 */

import { env } from './env';
import type { SubscriptionTier } from '@shared/schema';

export interface TierLimits {
  digestFrequency: 'weekly' | 'daily' | 'realtime';
  maxFeeds: number;
  dailyChatMessages: number;
  rpm: number; // Requests per minute
  maxDigestItems: number;
  realtimeOptIn?: boolean;
  analytics: boolean;
  exportFormats: string[];
}

export const tierLimits: Record<SubscriptionTier, TierLimits> = {
  free: {
    digestFrequency: env.freeDigestFreq,
    maxFeeds: env.freeMaxFeeds,
    dailyChatMessages: env.freeDailyChat,
    rpm: env.freeRPM,
    maxDigestItems: env.freeItemsPerDigest,
    analytics: false,
    exportFormats: ['json'],
  },
  premium: {
    digestFrequency: env.premiumDigestFreq,
    maxFeeds: env.premiumMaxFeeds,
    dailyChatMessages: env.premiumDailyChat,
    rpm: env.premiumRPM,
    maxDigestItems: env.premiumItemsPerDigest,
    analytics: false,
    exportFormats: ['json', 'markdown'],
  },
  pro: {
    digestFrequency: env.proDigestFreq,
    maxFeeds: env.proMaxFeeds,
    dailyChatMessages: env.proDailyChat,
    rpm: env.proRPM,
    maxDigestItems: env.proItemsPerDigest,
    realtimeOptIn: env.proRealtimeOptIn,
    analytics: true,
    exportFormats: ['json', 'markdown', 'rss'],
  },
};

export const TOKENS_PER_MSG = {
  inputMax: env.msgInputTokensMax,
  outputMax: env.msgOutputTokensMax,
};

export function getTierLimits(tier: SubscriptionTier): TierLimits {
  return tierLimits[tier];
}

export function canExceedLimit(limit: number, current: number): boolean {
  return current < limit;
}

export function formatLimit(limit: number): string {
  return String(limit);
}
