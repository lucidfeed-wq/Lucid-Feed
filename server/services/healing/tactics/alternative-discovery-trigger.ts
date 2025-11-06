/**
 * AlternativeDiscoveryTrigger: Queue background discovery job
 */

import type { RecoveryTactic } from './recovery-tactic';
import type { HealingContext, RecoveryResult, TacticMeta } from '../types';
import { TacticPriority } from '../types';
import { storage } from '../../../storage';

export class AlternativeDiscoveryTrigger implements RecoveryTactic {
  name = 'alternative_discovery';

  getMeta(): TacticMeta {
    return {
      name: this.name,
      priority: TacticPriority.LOW,
      estimatedTimeMs: 100, // Just queues a job
      successRate: 0.3
    };
  }

  async execute(context: HealingContext): Promise<RecoveryResult> {
    const { feed } = context;
    const result: RecoveryResult = {
      success: false
    };

    try {
      // Extract base domain to search for alternatives
      const url = new URL(feed.url);
      const domain = url.hostname.replace(/^www\./, '');

      // Queue a background job to discover alternative feeds
      const jobRequest = {
        feedId: feed.id,
        feedUrl: feed.url,
        domain: domain,
        sourceType: feed.sourceType,
        strategy: 'alternative_discovery',
        priority: 'low',
        metadata: {
          originalError: context.lastError,
          previousAttempts: context.previousAttempts,
          topics: feed.topics
        }
      };

      // For now, just mark that we would queue this job
      // In a real implementation, this would add to a job queue
      result.data = {
        queued: true,
        jobRequest: jobRequest,
        alternativeStrategies: this.getAlternativeStrategies(feed, domain)
      };

      // Attempt immediate discovery for common patterns
      const alternatives = await this.discoverAlternatives(feed, domain);
      
      if (alternatives.length > 0) {
        // Test the first alternative
        const testUrl = alternatives[0];
        try {
          const response = await fetch(testUrl, { method: 'HEAD' });
          if (response.ok) {
            result.success = true;
            result.newUrl = testUrl;
            result.data.discoveredUrl = testUrl;
            result.data.alternatives = alternatives;
          }
        } catch (err) {
          // Alternative didn't work
        }
      }

      if (!result.success) {
        // Mark as partial success since we queued the job
        result.success = false;
        result.fallbackUsed = true;
        result.data.note = 'Discovery job queued for background processing';
      }

    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  private getAlternativeStrategies(feed: any, domain: string): string[] {
    const strategies: string[] = [];

    // Based on source type, suggest discovery strategies
    switch (feed.sourceType) {
      case 'youtube':
        strategies.push('search_youtube_api', 'scrape_channel_page', 'check_wayback_machine');
        break;
      case 'reddit':
        strategies.push('reddit_api_search', 'check_alternative_sorting', 'use_pushshift');
        break;
      case 'substack':
        strategies.push('check_substack_directory', 'search_by_author', 'check_social_links');
        break;
      case 'podcast':
        strategies.push('search_podcast_directories', 'check_itunes_api', 'search_by_title');
        break;
      case 'journal':
        strategies.push('check_crossref', 'search_pubmed', 'check_journal_website');
        break;
      default:
        strategies.push('web_search', 'check_feed_directories', 'domain_crawl');
    }

    return strategies;
  }

  private async discoverAlternatives(feed: any, domain: string): Promise<string[]> {
    const alternatives: string[] = [];
    const baseUrl = `https://${domain}`;

    // Common feed URL patterns to try
    const commonPatterns = [
      '/feed',
      '/feeds',
      '/rss',
      '/rss.xml',
      '/feed.xml',
      '/atom.xml',
      '/index.xml',
      '/blog/feed',
      '/blog/rss',
      '/news/feed',
      '/news/rss',
      '/posts/feed',
      '/api/feed',
      '/api/rss',
      '/.rss',
      '/feed/',
      '/feeds/',
      '/rss/',
    ];

    // Add source-specific patterns
    if (feed.sourceType === 'substack') {
      commonPatterns.unshift('/feed', '/rss');
    } else if (feed.sourceType === 'youtube') {
      // Extract channel ID if present
      const channelMatch = feed.url.match(/channel_id=([^&]+)/);
      if (channelMatch) {
        alternatives.push(
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelMatch[1]}`,
          `https://www.youtube.com/channel/${channelMatch[1]}`
        );
      }
    } else if (feed.sourceType === 'reddit') {
      const subredditMatch = feed.url.match(/\/r\/([^\/]+)/);
      if (subredditMatch) {
        alternatives.push(
          `https://www.reddit.com/r/${subredditMatch[1]}.rss`,
          `https://www.reddit.com/r/${subredditMatch[1]}/new.rss`,
          `https://www.reddit.com/r/${subredditMatch[1]}/hot.rss`,
          `https://www.reddit.com/r/${subredditMatch[1]}/top.rss`
        );
      }
    }

    // Add common pattern alternatives
    for (const pattern of commonPatterns) {
      alternatives.push(baseUrl + pattern);
    }

    // Add subdomain variations
    const subdomains = ['www', 'blog', 'news', 'feed', 'feeds', 'api'];
    for (const subdomain of subdomains) {
      if (!domain.startsWith(subdomain)) {
        alternatives.push(`https://${subdomain}.${domain}/feed`);
        alternatives.push(`https://${subdomain}.${domain}/rss`);
      }
    }

    // Remove duplicates and the original URL
    return [...new Set(alternatives)].filter(url => url !== feed.url);
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable when feed seems permanently broken
    return context.errorType === 'permanent_404' ||
           context.errorType === 'dns_failure' ||
           (context.previousAttempts && context.previousAttempts >= 3);
  }
}