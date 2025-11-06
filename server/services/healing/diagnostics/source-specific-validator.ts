/**
 * SourceSpecificValidator: Validate YouTube/Reddit/Substack APIs
 */

import type { DiagnosticStrategy } from './diagnostic-strategy';
import type { HealingContext, DiagnosticResult } from '../types';

export class SourceSpecificValidator implements DiagnosticStrategy {
  name = 'source_specific_validator';

  async diagnose(context: HealingContext): Promise<DiagnosticResult> {
    const { feed } = context;
    const result: DiagnosticResult = {
      type: this.name,
      passed: false,
      details: {
        sourceType: feed.sourceType
      },
      recommendedTactics: []
    };

    try {
      // Determine source type from URL or feed metadata
      const url = new URL(feed.url);
      const hostname = url.hostname.toLowerCase();

      if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
        return this.validateYouTube(feed.url, result);
      } else if (hostname.includes('reddit.com')) {
        return this.validateReddit(feed.url, result);
      } else if (hostname.includes('substack.com')) {
        return this.validateSubstack(feed.url, result);
      } else if (feed.sourceType === 'podcast') {
        return this.validatePodcast(feed.url, result);
      } else if (feed.sourceType === 'journal') {
        return this.validateJournal(feed.url, result);
      } else {
        result.details.error = 'Unknown source type';
        result.recommendedTactics = ['format_fallback'];
        return result;
      }
    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content', 'alternative_discovery'];
      return result;
    }
  }

  private async validateYouTube(url: string, result: DiagnosticResult): Promise<DiagnosticResult> {
    try {
      // YouTube RSS feed patterns
      const channelIdMatch = url.match(/channel_id=([^&]+)/);
      const playlistIdMatch = url.match(/playlist_id=([^&]+)/);
      const userMatch = url.match(/user=([^&]+)/);

      if (channelIdMatch) {
        result.details.channelId = channelIdMatch[1];
        result.details.feedType = 'channel';
      } else if (playlistIdMatch) {
        result.details.playlistId = playlistIdMatch[1];
        result.details.feedType = 'playlist';
      } else if (userMatch) {
        result.details.username = userMatch[1];
        result.details.feedType = 'user';
      }

      // Check if feed is accessible
      const response = await fetch(url, { method: 'HEAD' });
      result.details.httpStatus = response.status;

      if (response.status === 404) {
        // Channel might have been deleted or renamed
        result.recommendedTactics = ['alternative_discovery'];
      } else if (response.status === 403) {
        // Feed might be private
        result.details.error = 'Feed is private or restricted';
        result.recommendedTactics = ['cached_content'];
      } else if (response.ok) {
        result.passed = true;
        result.recommendedTactics = ['source_adapter'];
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content'];
    }

    return result;
  }

  private async validateReddit(url: string, result: DiagnosticResult): Promise<DiagnosticResult> {
    try {
      // Reddit RSS patterns
      const subredditMatch = url.match(/\/r\/([^\/]+)/);
      const userMatch = url.match(/\/user\/([^\/]+)/);

      if (subredditMatch) {
        result.details.subreddit = subredditMatch[1];
        result.details.feedType = 'subreddit';
      } else if (userMatch) {
        result.details.username = userMatch[1];
        result.details.feedType = 'user';
      }

      // Check if we need to use .json endpoint
      const jsonUrl = url.replace('.rss', '.json');
      const response = await fetch(jsonUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; FeedReader/1.0)'
        }
      });

      result.details.httpStatus = response.status;

      if (response.status === 429) {
        result.details.error = 'Rate limited by Reddit';
        result.recommendedTactics = ['cached_content'];
      } else if (response.status === 404) {
        result.details.error = 'Subreddit or user not found';
        result.recommendedTactics = ['alternative_discovery'];
      } else if (response.status === 403) {
        result.details.error = 'Private subreddit or banned';
        result.recommendedTactics = ['cached_content'];
      } else if (response.ok) {
        result.passed = true;
        result.recommendedTactics = ['source_adapter', 'format_fallback'];
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content', 'source_adapter'];
    }

    return result;
  }

  private async validateSubstack(url: string, result: DiagnosticResult): Promise<DiagnosticResult> {
    try {
      // Substack RSS is typically at /feed
      const feedUrl = url.includes('/feed') ? url : url.replace(/\/$/, '') + '/feed';
      
      const response = await fetch(feedUrl, { method: 'HEAD' });
      result.details.httpStatus = response.status;
      result.details.feedUrl = feedUrl;

      if (response.status === 404) {
        // Try alternative feed URL
        const altFeedUrl = url.replace(/\/feed$/, '') + '/rss';
        const altResponse = await fetch(altFeedUrl, { method: 'HEAD' });
        
        if (altResponse.ok) {
          result.details.alternativeFeedUrl = altFeedUrl;
          result.recommendedTactics = ['redirect_follow'];
          result.passed = true;
        } else {
          result.recommendedTactics = ['alternative_discovery'];
        }
      } else if (response.ok) {
        result.passed = true;
        result.recommendedTactics = ['format_fallback'];
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content'];
    }

    return result;
  }

  private async validatePodcast(url: string, result: DiagnosticResult): Promise<DiagnosticResult> {
    try {
      // Podcast feeds are typically standard RSS
      const response = await fetch(url, { method: 'HEAD' });
      result.details.httpStatus = response.status;

      if (response.ok) {
        // Check if iTunes/Apple Podcasts redirect
        if (url.includes('itunes.apple.com') || url.includes('podcasts.apple.com')) {
          result.details.warning = 'Apple Podcasts URL detected, may need special handling';
          result.recommendedTactics = ['source_adapter', 'redirect_follow'];
        } else {
          result.passed = true;
          result.recommendedTactics = ['format_fallback'];
        }
      } else if (response.status === 404) {
        result.recommendedTactics = ['alternative_discovery'];
      } else {
        result.recommendedTactics = ['cached_content'];
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content'];
    }

    return result;
  }

  private async validateJournal(url: string, result: DiagnosticResult): Promise<DiagnosticResult> {
    try {
      // Journal feeds may require special headers or authentication
      const response = await fetch(url, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; AcademicReader/1.0)'
        }
      });

      result.details.httpStatus = response.status;

      if (response.status === 403 || response.status === 401) {
        result.details.error = 'Authentication required';
        result.recommendedTactics = ['cached_content'];
      } else if (response.ok) {
        result.passed = true;
        result.recommendedTactics = ['format_fallback', 'source_adapter'];
      } else {
        result.recommendedTactics = ['alternative_discovery'];
      }

    } catch (error: any) {
      result.details.error = error.message;
      result.recommendedTactics = ['cached_content'];
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Always applicable for source-specific feeds
    return ['youtube', 'reddit', 'substack', 'podcast', 'journal'].includes(context.feed.sourceType);
  }
}