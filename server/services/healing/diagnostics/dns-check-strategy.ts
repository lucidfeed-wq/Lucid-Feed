/**
 * DNSCheckStrategy: Check if domain resolves and test HEAD request
 */

import * as dns from 'dns';
import { promisify } from 'util';
import type { DiagnosticStrategy } from './diagnostic-strategy';
import type { HealingContext, DiagnosticResult } from '../types';

const dnsResolve = promisify(dns.resolve);

export class DNSCheckStrategy implements DiagnosticStrategy {
  name = 'dns_check';

  async diagnose(context: HealingContext): Promise<DiagnosticResult> {
    const { feed } = context;
    const result: DiagnosticResult = {
      type: this.name,
      passed: false,
      details: {},
      recommendedTactics: []
    };

    try {
      // Extract domain from feed URL
      const url = new URL(feed.url);
      const domain = url.hostname;
      
      // Check DNS resolution
      try {
        const addresses = await dnsResolve(domain);
        result.details.dnsResolved = true;
        result.details.ipAddresses = addresses;
      } catch (dnsError: any) {
        result.details.dnsResolved = false;
        result.details.dnsError = dnsError.message;
        result.recommendedTactics = ['alternative_discovery'];
        return result;
      }

      // Test HEAD request
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(feed.url, {
          method: 'HEAD',
          signal: controller.signal,
          redirect: 'manual'
        });
        
        clearTimeout(timeout);
        
        result.details.headStatus = response.status;
        result.details.headStatusText = response.statusText;
        
        // Check for redirects
        if ([301, 302, 303, 307, 308].includes(response.status)) {
          result.details.redirectLocation = response.headers.get('location');
          result.recommendedTactics = ['redirect_follow'];
          result.passed = true;
        } else if (response.status >= 200 && response.status < 300) {
          result.passed = true;
          result.recommendedTactics = ['format_fallback', 'source_adapter'];
        } else if (response.status === 404) {
          result.recommendedTactics = ['alternative_discovery'];
        } else if (response.status >= 500) {
          result.recommendedTactics = ['cached_content'];
        }
      } catch (fetchError: any) {
        result.details.headRequestFailed = true;
        result.details.headRequestError = fetchError.message;
        
        if (fetchError.name === 'AbortError') {
          result.details.timeout = true;
          result.recommendedTactics = ['cached_content'];
        } else {
          result.recommendedTactics = ['format_fallback', 'cached_content'];
        }
      }
    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content', 'alternative_discovery'];
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable to all feed types with HTTP(S) URLs
    return context.feed.url.startsWith('http://') || context.feed.url.startsWith('https://');
  }
}