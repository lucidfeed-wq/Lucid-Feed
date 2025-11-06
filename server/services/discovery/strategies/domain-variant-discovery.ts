/**
 * DomainVariantDiscovery: Try www/non-www, http/https variations
 */

import type { DiscoveryStrategy } from './discovery-strategy';
import type { FeedCatalog, FeedCandidate } from '@shared/schema';
import Parser from 'rss-parser';

const parser = new Parser({
  timeout: 5000,
  headers: {
    'User-Agent': 'LucidFeed/1.0 (Feed Discovery)',
  },
});

export class DomainVariantDiscovery implements DiscoveryStrategy {
  name = 'domain_variant';

  isApplicable(feed: FeedCatalog): boolean {
    // Always applicable for web feeds
    return true;
  }

  async discover(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    try {
      const originalUrl = new URL(feed.url);
      const domain = originalUrl.hostname;
      const pathname = originalUrl.pathname;
      
      // Generate URL variations
      const variations = this.generateUrlVariations(originalUrl);
      
      // Test each variation
      const testPromises = variations.map(async (url) => {
        try {
          // Quick HEAD request to check if URL exists
          const response = await fetch(url, { 
            method: 'HEAD',
            timeout: 3000 as any,
          });
          
          if (response.ok) {
            // Try to parse as RSS
            const feedData = await parser.parseURL(url);
            
            if (feedData && feedData.items && feedData.items.length > 0) {
              return {
                url,
                title: feedData.title,
                description: feedData.description,
                sourceType: feed.sourceType,
                topics: feed.topics,
                confidence: 0,
                strategy: this.name,
                similarityScore: 0.9, // High similarity for same domain
              };
            }
          }
        } catch (error) {
          // This variation doesn't work, skip it
        }
        return null;
      });
      
      const results = await Promise.allSettled(testPromises);
      
      for (const result of results) {
        if (result.status === 'fulfilled' && result.value) {
          candidates.push(result.value);
        }
      }
      
      // Also try common feed paths if original path was specific
      if (pathname !== '/feed' && pathname !== '/rss' && pathname !== '/') {
        const commonPaths = await this.tryCommonFeedPaths(originalUrl);
        candidates.push(...commonPaths);
      }
      
    } catch (error) {
      console.error('DomainVariantDiscovery error:', error);
    }
    
    return candidates;
  }

  private generateUrlVariations(originalUrl: URL): string[] {
    const variations: string[] = [];
    const hostname = originalUrl.hostname;
    const pathname = originalUrl.pathname;
    const isHttps = originalUrl.protocol === 'https:';
    const hasWww = hostname.startsWith('www.');
    
    // Base domain without www
    const baseDomain = hostname.replace(/^www\./, '');
    
    // Protocol variations
    const protocols = ['https:', 'http:'];
    
    // Subdomain variations
    const subdomains = ['', 'www.', 'feed.', 'feeds.', 'blog.', 'news.'];
    
    // Generate all combinations
    for (const protocol of protocols) {
      for (const subdomain of subdomains) {
        const url = `${protocol}//${subdomain}${baseDomain}${pathname}`;
        if (url !== originalUrl.href) {
          variations.push(url);
        }
      }
    }
    
    // If original URL has query params, also try without them
    if (originalUrl.search) {
      variations.push(originalUrl.origin + originalUrl.pathname);
    }
    
    return variations;
  }

  private async tryCommonFeedPaths(originalUrl: URL): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    const baseUrl = originalUrl.origin;
    
    const commonPaths = [
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
      '/feed.rss',
      '/feed.atom',
    ];
    
    // For YouTube specifically
    if (originalUrl.hostname.includes('youtube')) {
      const channelMatch = originalUrl.href.match(/channel[_\/]([A-Za-z0-9_-]+)/);
      if (channelMatch) {
        commonPaths.push(
          `/feeds/videos.xml?channel_id=${channelMatch[1]}`,
          `/channel/${channelMatch[1]}`
        );
      }
    }
    
    // For Reddit specifically
    if (originalUrl.hostname.includes('reddit')) {
      const subredditMatch = originalUrl.href.match(/\/r\/([^\/]+)/);
      if (subredditMatch) {
        commonPaths.push(
          `/r/${subredditMatch[1]}.rss`,
          `/r/${subredditMatch[1]}/new.rss`,
          `/r/${subredditMatch[1]}/hot.rss`,
          `/r/${subredditMatch[1]}/top.rss`
        );
      }
    }
    
    // Test paths in batches to avoid overwhelming the server
    const batchSize = 5;
    for (let i = 0; i < commonPaths.length; i += batchSize) {
      const batch = commonPaths.slice(i, i + batchSize);
      const batchPromises = batch.map(async (path) => {
        const url = baseUrl + path;
        try {
          const response = await fetch(url, { 
            method: 'HEAD',
            timeout: 2000 as any,
          });
          
          if (response.ok) {
            return {
              url,
              confidence: 0,
              strategy: this.name,
              similarityScore: 0.8,
            };
          }
        } catch (error) {
          // Path doesn't work
        }
        return null;
      });
      
      const results = await Promise.all(batchPromises);
      for (const result of results) {
        if (result) {
          candidates.push(result as FeedCandidate);
        }
      }
      
      // Small delay between batches
      if (i + batchSize < commonPaths.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    return candidates;
  }
}