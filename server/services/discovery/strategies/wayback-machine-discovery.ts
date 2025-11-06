/**
 * WaybackMachineDiscovery: Check if feed URL changed using archive.org
 */

import type { DiscoveryStrategy } from './discovery-strategy';
import type { FeedCatalog, FeedCandidate } from '@shared/schema';

export class WaybackMachineDiscovery implements DiscoveryStrategy {
  name = 'wayback_machine';
  private readonly waybackApiUrl = 'https://archive.org/wayback/available';

  isApplicable(feed: FeedCatalog): boolean {
    // Applicable when feed returns 404 or domain changes
    return feed.lastFetchStatus === 'permanent_error' || 
           feed.lastErrorMessage?.includes('404') ||
           feed.lastErrorMessage?.includes('ENOTFOUND');
  }

  async discover(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    try {
      // Check Wayback Machine for the original URL
      const archivedData = await this.checkWaybackMachine(feed.url);
      
      if (archivedData) {
        // Extract potential new URLs from archived content
        const newUrls = await this.extractNewUrls(archivedData, feed);
        
        for (const newUrl of newUrls) {
          candidates.push({
            url: newUrl,
            title: feed.name + ' (Archived)',
            description: feed.description,
            sourceType: feed.sourceType,
            topics: feed.topics,
            confidence: 0,
            strategy: this.name,
            similarityScore: 0.85,
          });
        }
      }
      
      // Also check if the domain itself has moved
      const domainCandidates = await this.checkDomainMove(feed);
      candidates.push(...domainCandidates);
      
    } catch (error) {
      console.error('WaybackMachineDiscovery error:', error);
    }
    
    return candidates;
  }

  private async checkWaybackMachine(url: string): Promise<any> {
    try {
      // Query Wayback Machine API
      const response = await fetch(`${this.waybackApiUrl}?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        return null;
      }
      
      const data = await response.json();
      
      if (data.archived_snapshots?.closest) {
        return data.archived_snapshots.closest;
      }
      
      return null;
    } catch (error) {
      console.error('Wayback Machine API error:', error);
      return null;
    }
  }

  private async extractNewUrls(archivedData: any, feed: FeedCatalog): Promise<string[]> {
    const newUrls: string[] = [];
    
    try {
      // Get the archived page URL
      const archivedUrl = archivedData.url;
      
      if (!archivedUrl) {
        return newUrls;
      }
      
      // Fetch the archived page content (simplified for MVP)
      // In production, would parse the HTML and extract feed links
      const response = await fetch(archivedUrl, {
        timeout: 10000 as any,
      });
      
      if (!response.ok) {
        return newUrls;
      }
      
      const html = await response.text();
      
      // Extract feed URLs from HTML
      const feedUrls = this.extractFeedUrlsFromHtml(html);
      
      // Convert Wayback URLs to current URLs
      for (const waybackUrl of feedUrls) {
        const currentUrl = this.convertWaybackUrl(waybackUrl);
        if (currentUrl && currentUrl !== feed.url) {
          newUrls.push(currentUrl);
        }
      }
      
      // Also look for redirects or new domain mentions
      const domainMentions = this.extractDomainMentions(html);
      for (const domain of domainMentions) {
        const potentialUrl = this.constructFeedUrl(domain, feed);
        if (potentialUrl && potentialUrl !== feed.url) {
          newUrls.push(potentialUrl);
        }
      }
      
    } catch (error) {
      console.error('Error extracting URLs from archive:', error);
    }
    
    return newUrls;
  }

  private extractFeedUrlsFromHtml(html: string): string[] {
    const feedUrls: string[] = [];
    
    // Simple regex patterns to find feed URLs
    const patterns = [
      /<link[^>]+type=["']application\/rss\+xml["'][^>]+href=["']([^"']+)["']/gi,
      /<link[^>]+type=["']application\/atom\+xml["'][^>]+href=["']([^"']+)["']/gi,
      /<a[^>]+href=["']([^"']*\.rss)["']/gi,
      /<a[^>]+href=["']([^"']*\/feed\/?[^"']*)["']/gi,
      /<a[^>]+href=["']([^"']*\/rss\/?[^"']*)["']/gi,
    ];
    
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        if (match[1]) {
          feedUrls.push(match[1]);
        }
      }
    }
    
    return [...new Set(feedUrls)]; // Deduplicate
  }

  private convertWaybackUrl(waybackUrl: string): string | null {
    // Convert Wayback Machine URL to current URL
    // Example: https://web.archive.org/web/20230101000000/https://example.com/feed
    // To: https://example.com/feed
    
    const match = waybackUrl.match(/\/web\/\d+\/(https?:\/\/.+)/);
    if (match && match[1]) {
      return match[1];
    }
    
    // If it's already a normal URL
    if (waybackUrl.startsWith('http://') || waybackUrl.startsWith('https://')) {
      return waybackUrl;
    }
    
    return null;
  }

  private extractDomainMentions(html: string): string[] {
    const domains: string[] = [];
    
    // Look for domain mentions in common patterns
    const patterns = [
      /moved to ([a-z0-9.-]+\.[a-z]{2,})/gi,
      /new (?:site|website|domain|url).*?([a-z0-9.-]+\.[a-z]{2,})/gi,
      /now at ([a-z0-9.-]+\.[a-z]{2,})/gi,
      /relocated to ([a-z0-9.-]+\.[a-z]{2,})/gi,
    ];
    
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        if (match[1]) {
          domains.push(match[1]);
        }
      }
    }
    
    return [...new Set(domains)];
  }

  private constructFeedUrl(domain: string, originalFeed: FeedCatalog): string | null {
    // Construct a feed URL based on the domain and original feed type
    
    if (!domain) return null;
    
    // Ensure domain has protocol
    if (!domain.startsWith('http')) {
      domain = `https://${domain}`;
    }
    
    try {
      const url = new URL(domain);
      const originalPath = new URL(originalFeed.url).pathname;
      
      // Try to preserve the original path structure
      if (originalPath && originalPath !== '/') {
        return url.origin + originalPath;
      }
      
      // Otherwise, use common feed paths
      switch (originalFeed.sourceType) {
        case 'youtube':
          return null; // YouTube feeds don't move domains
        case 'reddit':
          return null; // Reddit feeds don't move domains
        case 'substack':
          return `${url.origin}/feed`;
        case 'podcast':
          return `${url.origin}/rss`;
        default:
          return `${url.origin}/feed`;
      }
    } catch (error) {
      return null;
    }
  }

  private async checkDomainMove(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    try {
      const originalDomain = new URL(feed.url).hostname;
      
      // Check if the main domain redirects
      const response = await fetch(`https://${originalDomain}`, {
        method: 'HEAD',
        redirect: 'manual', // Don't follow redirects automatically
        timeout: 5000 as any,
      });
      
      if (response.status >= 300 && response.status < 400) {
        const redirectUrl = response.headers.get('location');
        
        if (redirectUrl) {
          const newDomain = new URL(redirectUrl).hostname;
          
          if (newDomain !== originalDomain) {
            // Domain has moved, construct new feed URL
            const newFeedUrl = this.constructFeedUrl(newDomain, feed);
            
            if (newFeedUrl) {
              candidates.push({
                url: newFeedUrl,
                title: feed.name + ' (New Domain)',
                description: `Feed moved to ${newDomain}`,
                sourceType: feed.sourceType,
                topics: feed.topics,
                confidence: 0,
                strategy: this.name,
                similarityScore: 0.9,
              });
            }
          }
        }
      }
    } catch (error) {
      // Domain check failed, that's okay
    }
    
    return candidates;
  }
}