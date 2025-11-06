/**
 * RedirectResolverStrategy: Follow redirect chain and save final URL
 */

import type { DiagnosticStrategy } from './diagnostic-strategy';
import type { HealingContext, DiagnosticResult } from '../types';

export class RedirectResolverStrategy implements DiagnosticStrategy {
  name = 'redirect_resolver';

  async diagnose(context: HealingContext): Promise<DiagnosticResult> {
    const { feed } = context;
    const result: DiagnosticResult = {
      type: this.name,
      passed: false,
      details: {
        originalUrl: feed.url,
        redirectChain: []
      },
      recommendedTactics: []
    };

    try {
      let currentUrl = feed.url;
      const maxRedirects = 5;
      let redirectCount = 0;

      while (redirectCount < maxRedirects) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        try {
          const response = await fetch(currentUrl, {
            method: 'HEAD',
            signal: controller.signal,
            redirect: 'manual'
          });
          
          clearTimeout(timeout);
          
          // Check if it's a redirect
          if ([301, 302, 303, 307, 308].includes(response.status)) {
            const location = response.headers.get('location');
            
            if (!location) {
              result.details.error = 'Redirect with no location header';
              break;
            }
            
            // Resolve relative URLs
            const nextUrl = new URL(location, currentUrl).toString();
            result.details.redirectChain.push({
              from: currentUrl,
              to: nextUrl,
              status: response.status
            });
            
            currentUrl = nextUrl;
            redirectCount++;
          } else {
            // Not a redirect, we found the final URL
            result.details.finalUrl = currentUrl;
            result.details.finalStatus = response.status;
            result.passed = response.status >= 200 && response.status < 300;
            
            if (currentUrl !== feed.url) {
              result.recommendedTactics = ['redirect_follow'];
            }
            
            break;
          }
        } catch (error: any) {
          result.details.error = error.message;
          result.details.failedAt = currentUrl;
          break;
        }
      }

      if (redirectCount >= maxRedirects) {
        result.details.error = 'Too many redirects';
        result.recommendedTactics = ['alternative_discovery'];
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content', 'alternative_discovery'];
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable when we suspect redirects or when feeds are failing with 3xx status
    return context.errorType === 'redirect' || 
           (context.lastError && context.lastError.includes('redirect'));
  }
}