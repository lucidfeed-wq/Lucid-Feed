/**
 * CachedContentTactic: Use last known good items
 */

import type { RecoveryTactic } from './recovery-tactic';
import type { HealingContext, RecoveryResult, TacticMeta } from '../types';
import { TacticPriority } from '../types';
import { storage } from '../../../storage';

export class CachedContentTactic implements RecoveryTactic {
  name = 'cached_content';

  getMeta(): TacticMeta {
    return {
      name: this.name,
      priority: TacticPriority.LOW,
      estimatedTimeMs: 200,
      successRate: 1.0 // Always succeeds but with stale data
    };
  }

  async execute(context: HealingContext): Promise<RecoveryResult> {
    const { feed } = context;
    const result: RecoveryResult = {
      success: false,
      fallbackUsed: true
    };

    try {
      // Get the last successfully fetched items for this feed
      const recentItems = await storage.getItemsByFeedUrl(feed.url, 10);

      if (recentItems && recentItems.length > 0) {
        result.success = true;
        result.data = {
          itemCount: recentItems.length,
          oldestItem: recentItems[recentItems.length - 1].publishedAt,
          newestItem: recentItems[0].publishedAt,
          cacheAge: this.calculateAge(recentItems[0].ingestedAt),
          items: recentItems
        };
      } else {
        result.error = 'No cached content available';
      }

    } catch (error: any) {
      result.error = `Failed to retrieve cached content: ${error.message}`;
    }

    return result;
  }

  private calculateAge(ingestedAt: string): string {
    const now = new Date();
    const ingested = new Date(ingestedAt);
    const diffMs = now.getTime() - ingested.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''}`;
    } else {
      return 'less than an hour';
    }
  }

  isApplicable(context: HealingContext): boolean {
    // Always applicable as a last resort
    return true;
  }
}