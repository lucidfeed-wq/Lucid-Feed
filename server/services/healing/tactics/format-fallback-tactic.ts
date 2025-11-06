/**
 * FormatFallbackTactic: Try alternative parsers
 */

import Parser from 'rss-parser';
import type { RecoveryTactic } from './recovery-tactic';
import type { HealingContext, RecoveryResult, TacticMeta } from '../types';
import { TacticPriority } from '../types';

export class FormatFallbackTactic implements RecoveryTactic {
  name = 'format_fallback';
  private parsers: Map<string, Parser>;

  constructor() {
    // Initialize different parser configurations
    this.parsers = new Map();
    
    // Standard parser
    this.parsers.set('standard', new Parser());
    
    // Lenient parser
    this.parsers.set('lenient', new Parser({
      customFields: {
        item: [
          ['content:encoded', 'contentEncoded'],
          ['media:content', 'mediaContent'],
          ['media:thumbnail', 'mediaThumbnail'],
          ['enclosure', 'enclosure'],
        ],
        feed: [
          ['subtitle', 'subtitle'],
          ['icon', 'icon']
        ]
      },
      timeout: 10000,
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml',
      }
    }));

    // Atom-specific parser
    this.parsers.set('atom', new Parser({
      defaultRSS: 2.0,
      xml2js: {
        emptyTag: ''
      }
    }));
  }

  getMeta(): TacticMeta {
    return {
      name: this.name,
      priority: TacticPriority.MEDIUM,
      estimatedTimeMs: 1000,
      successRate: 0.6
    };
  }

  async execute(context: HealingContext): Promise<RecoveryResult> {
    const { feed } = context;
    const result: RecoveryResult = {
      success: false,
      fallbackUsed: true
    };

    const errors: string[] = [];

    // Try different parsers in order
    for (const [parserName, parser] of this.parsers.entries()) {
      try {
        const parsedFeed = await parser.parseURL(feed.url);
        
        // Validate that we got some items
        if (parsedFeed.items && parsedFeed.items.length > 0) {
          result.success = true;
          result.data = {
            parserUsed: parserName,
            itemCount: parsedFeed.items.length,
            feedTitle: parsedFeed.title,
            feedDescription: parsedFeed.description,
            sample: parsedFeed.items[0]
          };
          break;
        } else {
          errors.push(`${parserName}: No items found`);
        }
      } catch (error: any) {
        errors.push(`${parserName}: ${error.message}`);
      }
    }

    // If standard parsers fail, try JSON parsing
    if (!result.success) {
      try {
        const response = await fetch(feed.url);
        const text = await response.text();
        
        // Try parsing as JSON Feed
        if (text.trim().startsWith('{')) {
          const json = JSON.parse(text);
          
          if (json.version && json.version.includes('jsonfeed.org')) {
            // It's a JSON Feed
            result.success = true;
            result.data = {
              parserUsed: 'json-feed',
              itemCount: json.items?.length || 0,
              feedTitle: json.title,
              version: json.version
            };
          } else if (Array.isArray(json.items) || Array.isArray(json.posts)) {
            // Generic JSON API
            result.success = true;
            result.data = {
              parserUsed: 'json-api',
              itemCount: (json.items || json.posts)?.length || 0
            };
          }
        }
      } catch (jsonError: any) {
        errors.push(`json: ${jsonError.message}`);
      }
    }

    if (!result.success) {
      result.error = `All parsers failed: ${errors.join('; ')}`;
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable when format issues are suspected
    return context.errorType === 'format_change' ||
           (context.lastError && (
             context.lastError.includes('parse') ||
             context.lastError.includes('XML') ||
             context.lastError.includes('invalid')
           ));
  }
}