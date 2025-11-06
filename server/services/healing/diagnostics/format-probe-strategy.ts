/**
 * FormatProbeStrategy: Detect RSS/Atom/JSON format changes
 */

import type { DiagnosticStrategy } from './diagnostic-strategy';
import type { HealingContext, DiagnosticResult } from '../types';

export class FormatProbeStrategy implements DiagnosticStrategy {
  name = 'format_probe';

  async diagnose(context: HealingContext): Promise<DiagnosticResult> {
    const { feed } = context;
    const result: DiagnosticResult = {
      type: this.name,
      passed: false,
      details: {
        detectedFormats: []
      },
      recommendedTactics: []
    };

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(feed.url, {
        signal: controller.signal
      });
      
      clearTimeout(timeout);
      
      if (!response.ok) {
        result.details.httpStatus = response.status;
        result.details.error = `HTTP ${response.status}: ${response.statusText}`;
        result.recommendedTactics = ['cached_content'];
        return result;
      }

      const contentType = response.headers.get('content-type')?.toLowerCase() || '';
      const text = await response.text();
      
      result.details.contentType = contentType;
      result.details.contentLength = text.length;

      // Detect RSS format
      if (text.includes('<rss') || text.includes('<?xml')) {
        result.details.detectedFormats.push('rss');
        
        // Check RSS version
        if (text.includes('<rss version="2.0"')) {
          result.details.rssVersion = '2.0';
        } else if (text.includes('<rss version="0.91"')) {
          result.details.rssVersion = '0.91';
        } else if (text.includes('<rss version="0.92"')) {
          result.details.rssVersion = '0.92';
        }
      }

      // Detect Atom format
      if (text.includes('<feed xmlns') && text.includes('atom')) {
        result.details.detectedFormats.push('atom');
      }

      // Detect RDF/RSS 1.0
      if (text.includes('<rdf:RDF')) {
        result.details.detectedFormats.push('rdf');
        result.details.rssVersion = '1.0';
      }

      // Detect JSON Feed
      if (contentType.includes('json') || text.trim().startsWith('{')) {
        try {
          const json = JSON.parse(text);
          if (json.version && json.version.startsWith('https://jsonfeed.org')) {
            result.details.detectedFormats.push('json-feed');
            result.details.jsonFeedVersion = json.version;
          } else if (Array.isArray(json.items) || Array.isArray(json.posts)) {
            // Generic JSON API
            result.details.detectedFormats.push('json-api');
          }
        } catch (jsonError) {
          // Not valid JSON
        }
      }

      // Check for HTML (feed might have been replaced with a webpage)
      if (text.includes('<!DOCTYPE html') || text.includes('<html')) {
        result.details.detectedFormats.push('html');
        
        // Look for feed autodiscovery links
        const feedLinkMatch = text.match(/<link[^>]+type=["']application\/(rss|atom)\+xml["'][^>]*>/gi);
        if (feedLinkMatch) {
          const hrefMatch = feedLinkMatch[0].match(/href=["']([^"']+)["']/i);
          if (hrefMatch) {
            result.details.discoveredFeedUrl = new URL(hrefMatch[1], feed.url).toString();
            result.recommendedTactics = ['redirect_follow'];
          }
        }
      }

      // Determine recommendations based on detected formats
      if (result.details.detectedFormats.length > 0) {
        result.passed = true;
        
        if (result.details.detectedFormats.includes('html')) {
          if (result.details.discoveredFeedUrl) {
            result.recommendedTactics = ['redirect_follow'];
          } else {
            result.recommendedTactics = ['alternative_discovery'];
          }
        } else {
          result.recommendedTactics = ['format_fallback', 'source_adapter'];
        }
      } else {
        result.details.error = 'No recognized feed format detected';
        result.recommendedTactics = ['alternative_discovery', 'cached_content'];
      }

      // Check for common format issues
      if (text.includes('<?xml') && !text.trim().startsWith('<?xml')) {
        result.details.warning = 'XML declaration not at start of document';
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content', 'alternative_discovery'];
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable when format issues are suspected
    return context.errorType === 'format_change' || 
           (context.lastError && (
             context.lastError.includes('parse') ||
             context.lastError.includes('format') ||
             context.lastError.includes('XML')
           ));
  }
}