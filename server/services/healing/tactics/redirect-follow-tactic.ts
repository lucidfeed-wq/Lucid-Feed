/**
 * RedirectFollowTactic: Update feed URL to redirected location
 */

import type { RecoveryTactic } from './recovery-tactic';
import type { HealingContext, RecoveryResult, TacticMeta } from '../types';
import { TacticPriority } from '../types';
import { storage } from '../../../storage';

export class RedirectFollowTactic implements RecoveryTactic {
  name = 'redirect_follow';

  getMeta(): TacticMeta {
    return {
      name: this.name,
      priority: TacticPriority.HIGH,
      estimatedTimeMs: 500,
      successRate: 0.8
    };
  }

  async execute(context: HealingContext): Promise<RecoveryResult> {
    const { feed } = context;
    const result: RecoveryResult = {
      success: false
    };

    try {
      // Follow redirects to find the final URL
      let finalUrl = feed.url;
      const visitedUrls = new Set<string>();
      const maxRedirects = 5;

      for (let i = 0; i < maxRedirects; i++) {
        if (visitedUrls.has(finalUrl)) {
          result.error = 'Redirect loop detected';
          return result;
        }
        visitedUrls.add(finalUrl);

        const response = await fetch(finalUrl, {
          method: 'HEAD',
          redirect: 'manual'
        });

        if ([301, 302, 303, 307, 308].includes(response.status)) {
          const location = response.headers.get('location');
          if (!location) {
            result.error = 'Redirect without location header';
            return result;
          }
          
          // Resolve relative URLs
          finalUrl = new URL(location, finalUrl).toString();
        } else if (response.ok) {
          // Found the final URL
          if (finalUrl !== feed.url) {
            result.newUrl = finalUrl;
            result.success = true;
            result.data = {
              originalUrl: feed.url,
              redirectedUrl: finalUrl,
              redirectCount: i
            };
          } else {
            result.error = 'No redirect found';
          }
          break;
        } else {
          result.error = `Failed at ${finalUrl} with status ${response.status}`;
          break;
        }
      }

      if (!result.success && visitedUrls.size >= maxRedirects) {
        result.error = 'Too many redirects';
      }

    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable when redirects are suspected
    return context.errorType === 'redirect' ||
           context.errorType === 'dns_failure' ||
           (context.lastError && context.lastError.includes('301'));
  }
}