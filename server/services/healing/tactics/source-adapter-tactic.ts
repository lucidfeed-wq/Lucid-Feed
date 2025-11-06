/**
 * SourceAdapterTactic: Use specialized fetchers
 */

import type { RecoveryTactic } from './recovery-tactic';
import type { HealingContext, RecoveryResult, TacticMeta } from '../types';
import { TacticPriority } from '../types';

export class SourceAdapterTactic implements RecoveryTactic {
  name = 'source_adapter';

  getMeta(): TacticMeta {
    return {
      name: this.name,
      priority: TacticPriority.MEDIUM,
      estimatedTimeMs: 1500,
      successRate: 0.7
    };
  }

  async execute(context: HealingContext): Promise<RecoveryResult> {
    const { feed } = context;
    const result: RecoveryResult = {
      success: false
    };

    try {
      const url = new URL(feed.url);
      const hostname = url.hostname.toLowerCase();

      // Route to appropriate adapter based on source type
      if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
        return await this.fetchYouTube(feed.url, result);
      } else if (hostname.includes('reddit.com')) {
        return await this.fetchReddit(feed.url, result);
      } else if (hostname.includes('substack.com')) {
        return await this.fetchSubstack(feed.url, result);
      } else if (feed.sourceType === 'podcast') {
        return await this.fetchPodcast(feed.url, result);
      } else if (feed.sourceType === 'journal') {
        return await this.fetchJournal(feed.url, result);
      } else {
        result.error = 'No specialized adapter available for this source';
        return result;
      }
    } catch (error: any) {
      result.error = error.message;
      return result;
    }
  }

  private async fetchYouTube(url: string, result: RecoveryResult): Promise<RecoveryResult> {
    try {
      // Try alternative YouTube RSS endpoints
      const channelIdMatch = url.match(/channel_id=([^&]+)/);
      
      if (channelIdMatch) {
        const channelId = channelIdMatch[1];
        
        // Try different YouTube RSS formats
        const alternativeUrls = [
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}&orderby=published`,
          `https://www.youtube.com/channel/${channelId}/videos`
        ];

        for (const altUrl of alternativeUrls) {
          try {
            const response = await fetch(altUrl);
            if (response.ok) {
              const text = await response.text();
              if (text.includes('<feed') || text.includes('<rss')) {
                result.success = true;
                result.newUrl = altUrl;
                result.data = {
                  adapter: 'youtube',
                  originalUrl: url,
                  workingUrl: altUrl
                };
                break;
              }
            }
          } catch (err) {
            // Try next URL
          }
        }
      }

      if (!result.success) {
        result.error = 'Failed to find working YouTube feed URL';
      }
    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  private async fetchReddit(url: string, result: RecoveryResult): Promise<RecoveryResult> {
    try {
      // Convert RSS URL to JSON API
      const jsonUrl = url.replace('.rss', '.json').replace('/new.rss', '/new.json');
      
      const response = await fetch(jsonUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; FeedHealer/1.0)'
        }
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data && data.data && data.data.children) {
          // Successfully fetched via JSON API
          result.success = true;
          result.data = {
            adapter: 'reddit-json',
            originalUrl: url,
            jsonUrl: jsonUrl,
            postCount: data.data.children.length,
            posts: data.data.children.map((child: any) => ({
              title: child.data.title,
              author: child.data.author,
              created: child.data.created_utc,
              url: child.data.url,
              permalink: `https://reddit.com${child.data.permalink}`,
              score: child.data.score,
              numComments: child.data.num_comments
            }))
          };
        }
      } else if (response.status === 429) {
        result.error = 'Reddit rate limit exceeded';
        result.fallbackUsed = true;
      } else {
        result.error = `Reddit API returned ${response.status}`;
      }
    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  private async fetchSubstack(url: string, result: RecoveryResult): Promise<RecoveryResult> {
    try {
      // Try multiple Substack feed patterns
      const baseUrl = url.replace(/\/feed\/?$/, '').replace(/\/rss\/?$/, '');
      const alternativeUrls = [
        `${baseUrl}/feed`,
        `${baseUrl}/rss`,
        `${baseUrl}/api/v1/posts/public`,
        baseUrl // Sometimes the main page has feed autodiscovery
      ];

      for (const altUrl of alternativeUrls) {
        try {
          const response = await fetch(altUrl);
          if (response.ok) {
            const contentType = response.headers.get('content-type');
            
            if (contentType?.includes('xml') || contentType?.includes('rss')) {
              result.success = true;
              result.newUrl = altUrl;
              result.data = {
                adapter: 'substack',
                workingUrl: altUrl
              };
              break;
            } else if (contentType?.includes('json')) {
              // Handle JSON API response
              const data = await response.json();
              if (Array.isArray(data) || data.posts) {
                result.success = true;
                result.data = {
                  adapter: 'substack-json',
                  jsonUrl: altUrl,
                  posts: Array.isArray(data) ? data : data.posts
                };
                break;
              }
            }
          }
        } catch (err) {
          // Try next URL
        }
      }

      if (!result.success) {
        result.error = 'Failed to find working Substack feed';
      }
    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  private async fetchPodcast(url: string, result: RecoveryResult): Promise<RecoveryResult> {
    try {
      // Podcast feeds often need special headers
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/rss+xml, application/xml, text/xml',
          'User-Agent': 'Mozilla/5.0 (compatible; PodcastReader/1.0)'
        }
      });

      if (response.ok) {
        const text = await response.text();
        
        // Check for podcast-specific elements
        if (text.includes('<itunes:') || text.includes('<podcast:')) {
          result.success = true;
          result.data = {
            adapter: 'podcast',
            hasiTunesNamespace: text.includes('<itunes:'),
            hasPodcastNamespace: text.includes('<podcast:')
          };
        } else if (text.includes('<rss') || text.includes('<feed')) {
          // Generic RSS/Atom feed
          result.success = true;
          result.data = {
            adapter: 'podcast-generic'
          };
        }
      } else {
        result.error = `Podcast feed returned ${response.status}`;
      }
    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  private async fetchJournal(url: string, result: RecoveryResult): Promise<RecoveryResult> {
    try {
      // Journal feeds may require academic user agent
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/rss+xml, application/xml, text/xml',
          'User-Agent': 'Mozilla/5.0 (compatible; AcademicCrawler/1.0; +http://example.edu/bot)'
        }
      });

      if (response.ok) {
        result.success = true;
        result.data = {
          adapter: 'journal',
          contentType: response.headers.get('content-type')
        };
      } else if (response.status === 403) {
        // Try with different user agent
        const retryResponse = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        if (retryResponse.ok) {
          result.success = true;
          result.data = {
            adapter: 'journal-retry',
            note: 'Required standard browser user agent'
          };
        } else {
          result.error = 'Journal feed requires authentication or is blocked';
        }
      } else {
        result.error = `Journal feed returned ${response.status}`;
      }
    } catch (error: any) {
      result.error = error.message;
    }

    return result;
  }

  isApplicable(context: HealingContext): boolean {
    // Applicable to known source types
    return ['youtube', 'reddit', 'substack', 'podcast', 'journal'].includes(context.feed.sourceType) ||
           context.feed.url.includes('youtube.com') ||
           context.feed.url.includes('reddit.com') ||
           context.feed.url.includes('substack.com');
  }
}