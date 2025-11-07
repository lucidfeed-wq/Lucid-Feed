/**
 * Feed Discovery Engine
 * Discovers alternative feeds using various strategies per source type
 */

import type { FeedCatalog } from '@shared/schema';
import { validateFeed, ingestFeed } from '../feed-ingestion/unified-pipeline';
import type { FeedValidationResult } from '../feed-ingestion/unified-pipeline';

export interface DiscoveryResult {
  url: string;
  name: string;
  confidence: number; // 0-1 score
  method: string; // How it was discovered
  validation?: FeedValidationResult;
}

export class FeedDiscoveryEngine {
  
  /**
   * Discover alternative feed for a failing feed
   */
  async discoverAlternative(feed: FeedCatalog): Promise<DiscoveryResult | null> {
    console.log(`🔍 Discovering alternative for ${feed.name} (${feed.sourceType})`);
    
    // Choose strategy based on source type
    let alternatives: DiscoveryResult[] = [];
    
    switch (feed.sourceType) {
      case 'youtube':
        alternatives = await this.discoverYouTubeAlternatives(feed);
        break;
      case 'podcast':
        alternatives = await this.discoverPodcastAlternatives(feed);
        break;
      case 'journal':
        alternatives = await this.discoverJournalAlternatives(feed);
        break;
      case 'reddit':
        alternatives = await this.discoverRedditAlternatives(feed);
        break;
      case 'substack':
        alternatives = await this.discoverSubstackAlternatives(feed);
        break;
      default:
        alternatives = await this.discoverGenericAlternatives(feed);
    }
    
    // Sort by confidence and validate top candidates
    alternatives.sort((a, b) => b.confidence - a.confidence);
    
    for (const alt of alternatives.slice(0, 3)) {
      const validation = await validateFeed(alt.url);
      if (validation.valid) {
        alt.validation = validation;
        return alt;
      }
    }
    
    return null;
  }
  
  /**
   * Discover YouTube channel alternatives
   */
  private async discoverYouTubeAlternatives(feed: FeedCatalog): Promise<DiscoveryResult[]> {
    const alternatives: DiscoveryResult[] = [];
    const channelName = feed.name;
    
    // Strategy 1: Search by channel name (would use YouTube API in production)
    // For now, we'll use known working channels as examples
    const knownWorkingChannels = {
      'Andrew Huberman': 'UC2D2CMWXMOVWx7giW1n3LIg',
      'Thomas DeLauer': 'UC70SrI3VkT1MXALRtf0pcHg',
      'FoundMyFitness': 'UCWF8SqJVNlx-ctXbLswcTcA',
      'Ben Greenfield': 'UCbf7EccRGBLwbKmWgJ9FYHw'
    };
    
    // Check if we have a known working channel ID
    for (const [name, channelId] of Object.entries(knownWorkingChannels)) {
      if (feed.name.toLowerCase().includes(name.toLowerCase()) || 
          name.toLowerCase().includes(feed.name.toLowerCase())) {
        alternatives.push({
          url: `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
          name: name,
          confidence: 0.9,
          method: 'known_mapping'
        });
      }
    }
    
    // Strategy 2: Try extracting from current URL and fixing it
    const urlMatch = feed.url.match(/channel_id=([^&]+)/);
    if (urlMatch) {
      const channelId = urlMatch[1];
      
      // Try different YouTube feed formats
      alternatives.push({
        url: `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
        name: channelName,
        confidence: 0.7,
        method: 'url_reconstruction'
      });
    }
    
    // Strategy 3: Search by channel handle (in production, would use YouTube API)
    // Example: Convert "Dr. Mark Hyman" to potential handles
    const potentialHandles = [
      channelName.replace(/\s+/g, ''),
      channelName.replace(/\s+/g, '_'),
      channelName.replace(/^Dr\.?\s*/i, '').replace(/\s+/g, '')
    ];
    
    for (const handle of potentialHandles) {
      alternatives.push({
        url: `https://www.youtube.com/@${handle}`,
        name: channelName,
        confidence: 0.5,
        method: 'handle_guess'
      });
    }
    
    return alternatives;
  }
  
  /**
   * Discover podcast alternatives
   */
  private async discoverPodcastAlternatives(feed: FeedCatalog): Promise<DiscoveryResult[]> {
    const alternatives: DiscoveryResult[] = [];
    const podcastName = feed.name;
    
    // Strategy 1: Known podcast feed mappings
    const knownPodcastFeeds = {
      'Huberman Lab': 'https://feeds.megaphone.fm/hubermanlab',
      'The Tim Ferriss Show': 'https://rss.art19.com/tim-ferriss-show',
      'FoundMyFitness': 'https://podcast.foundmyfitness.com/rss.xml',
      'Ben Greenfield Life': 'https://bengreenfieldfitness.libsyn.com/rss'
    };
    
    for (const [name, url] of Object.entries(knownPodcastFeeds)) {
      if (podcastName.toLowerCase().includes(name.toLowerCase()) ||
          name.toLowerCase().includes(podcastName.toLowerCase())) {
        alternatives.push({
          url,
          name,
          confidence: 0.9,
          method: 'known_mapping'
        });
      }
    }
    
    // Strategy 2: Common podcast hosting platforms
    const hostingPatterns = [
      { pattern: 'libsyn', url: (name: string) => `https://${name.toLowerCase().replace(/\s+/g, '')}.libsyn.com/rss` },
      { pattern: 'megaphone', url: (name: string) => `https://feeds.megaphone.fm/${name.toLowerCase().replace(/\s+/g, '-')}` },
      { pattern: 'anchor', url: (name: string) => `https://anchor.fm/s/${name}/podcast/rss` },
      { pattern: 'buzzsprout', url: (name: string) => `https://feeds.buzzsprout.com/${name}.rss` }
    ];
    
    for (const { pattern, url } of hostingPatterns) {
      alternatives.push({
        url: url(podcastName),
        name: podcastName,
        confidence: 0.5,
        method: `${pattern}_platform`
      });
    }
    
    // Strategy 3: Try fixing the existing URL
    if (feed.url.includes('podcast') || feed.url.includes('feed')) {
      const baseUrl = feed.url.replace(/\/feed.*$/, '').replace(/\/rss.*$/, '');
      alternatives.push(
        {
          url: `${baseUrl}/feed`,
          name: podcastName,
          confidence: 0.6,
          method: 'url_fix'
        },
        {
          url: `${baseUrl}/rss`,
          name: podcastName,
          confidence: 0.6,
          method: 'url_fix'
        },
        {
          url: `${baseUrl}/podcast/rss`,
          name: podcastName,
          confidence: 0.5,
          method: 'url_fix'
        }
      );
    }
    
    return alternatives;
  }
  
  /**
   * Discover journal alternatives
   */
  private async discoverJournalAlternatives(feed: FeedCatalog): Promise<DiscoveryResult[]> {
    const alternatives: DiscoveryResult[] = [];
    const journalName = feed.name;
    
    // Strategy 1: Known journal RSS feeds
    const knownJournalFeeds = {
      'Nature': 'https://www.nature.com/nature.rss',
      'Science': 'https://www.science.org/rss/news_current.xml',
      'Cell': 'https://www.cell.com/cell/rss/current',
      'NEJM': 'https://www.nejm.org/action/showFeed?jc=nejm&type=etoc&feed=rss',
      'The Lancet': 'https://www.thelancet.com/rssfeed/lancet_current.xml',
      'PLOS ONE': 'https://journals.plos.org/plosone/feed/atom',
      'BMC Medicine': 'https://bmcmedicine.biomedcentral.com/rss',
      'Frontiers in Neuroscience': 'https://www.frontiersin.org/journals/neuroscience/rss'
    };
    
    for (const [name, url] of Object.entries(knownJournalFeeds)) {
      if (journalName.toLowerCase().includes(name.toLowerCase()) ||
          name.toLowerCase().includes(journalName.toLowerCase())) {
        alternatives.push({
          url,
          name,
          confidence: 0.95,
          method: 'known_journal'
        });
      }
    }
    
    // Strategy 2: Common journal RSS patterns
    const urlBase = feed.url.replace(/\/rss.*$/, '').replace(/\/feed.*$/, '');
    const journalPatterns = [
      '/rss/current',
      '/rss/recent',
      '/feed/atom',
      '/feed/rss',
      '/rssfeed',
      '/action/showFeed?type=etoc&feed=rss',
      '/rss',
      '.rss'
    ];
    
    for (const pattern of journalPatterns) {
      alternatives.push({
        url: urlBase + pattern,
        name: journalName,
        confidence: 0.6,
        method: 'pattern_matching'
      });
    }
    
    // Strategy 3: Try HTTPS if using HTTP
    if (feed.url.startsWith('http://')) {
      alternatives.push({
        url: feed.url.replace('http://', 'https://'),
        name: journalName,
        confidence: 0.8,
        method: 'https_upgrade'
      });
    }
    
    return alternatives;
  }
  
  /**
   * Discover Reddit alternatives
   */
  private async discoverRedditAlternatives(feed: FeedCatalog): Promise<DiscoveryResult[]> {
    const alternatives: DiscoveryResult[] = [];
    
    // Extract subreddit name
    const subredditMatch = feed.url.match(/\/r\/([^\/\.]+)/);
    if (!subredditMatch) return alternatives;
    
    const subreddit = subredditMatch[1];
    
    // Reddit RSS feed patterns
    const sortOptions = ['hot', 'new', 'top', 'rising'];
    
    for (const sort of sortOptions) {
      alternatives.push({
        url: `https://www.reddit.com/r/${subreddit}/${sort}.rss`,
        name: `r/${subreddit} (${sort})`,
        confidence: 0.9,
        method: 'reddit_sort'
      });
    }
    
    // Also try without sort
    alternatives.push({
      url: `https://www.reddit.com/r/${subreddit}.rss`,
      name: `r/${subreddit}`,
      confidence: 0.95,
      method: 'reddit_standard'
    });
    
    return alternatives;
  }
  
  /**
   * Discover Substack alternatives
   */
  private async discoverSubstackAlternatives(feed: FeedCatalog): Promise<DiscoveryResult[]> {
    const alternatives: DiscoveryResult[] = [];
    
    // Extract publication name from URL
    const urlMatch = feed.url.match(/https?:\/\/([^\.]+)\.substack\.com/);
    if (!urlMatch) return alternatives;
    
    const publication = urlMatch[1];
    
    // Substack RSS patterns
    alternatives.push(
      {
        url: `https://${publication}.substack.com/feed`,
        name: feed.name,
        confidence: 0.95,
        method: 'substack_feed'
      },
      {
        url: `https://${publication}.substack.com/rss`,
        name: feed.name,
        confidence: 0.9,
        method: 'substack_rss'
      },
      {
        url: `https://www.${publication}.substack.com/feed`,
        name: feed.name,
        confidence: 0.8,
        method: 'substack_www'
      }
    );
    
    return alternatives;
  }
  
  /**
   * Discover generic blog/website alternatives
   */
  private async discoverGenericAlternatives(feed: FeedCatalog): Promise<DiscoveryResult[]> {
    const alternatives: DiscoveryResult[] = [];
    
    try {
      const url = new URL(feed.url);
      const baseUrl = `${url.protocol}//${url.host}`;
      
      // Common RSS feed locations
      const commonPaths = [
        '/feed',
        '/rss',
        '/feed.xml',
        '/rss.xml',
        '/atom.xml',
        '/index.xml',
        '/blog/feed',
        '/blog/rss',
        '/news/feed',
        '/posts/feed',
        '/articles/feed',
        '/feed/',
        '/rss/',
        '/.rss'
      ];
      
      for (const path of commonPaths) {
        alternatives.push({
          url: baseUrl + path,
          name: feed.name,
          confidence: 0.5,
          method: 'common_path'
        });
      }
      
      // Try with/without www
      if (url.host.startsWith('www.')) {
        const noWww = baseUrl.replace('://www.', '://');
        alternatives.push({
          url: `${noWww}/feed`,
          name: feed.name,
          confidence: 0.4,
          method: 'no_www'
        });
      } else {
        const withWww = baseUrl.replace('://', '://www.');
        alternatives.push({
          url: `${withWww}/feed`,
          name: feed.name,
          confidence: 0.4,
          method: 'with_www'
        });
      }
    } catch (error) {
      console.error('Error parsing URL:', error);
    }
    
    return alternatives;
  }
  
  /**
   * Search for new feeds by topic/keyword
   */
  async searchFeeds(query: string, sourceType?: string): Promise<DiscoveryResult[]> {
    const results: DiscoveryResult[] = [];
    
    // In production, this would use various APIs and web scraping
    // For now, return example results based on query
    
    if (query.toLowerCase().includes('nutrition')) {
      results.push(
        {
          url: 'https://chriskresser.com/feed/',
          name: 'Chris Kresser',
          confidence: 0.8,
          method: 'search'
        },
        {
          url: 'https://www.marksdailyapple.com/feed/',
          name: "Mark's Daily Apple",
          confidence: 0.7,
          method: 'search'
        }
      );
    }
    
    if (query.toLowerCase().includes('longevity')) {
      results.push(
        {
          url: 'https://peterattiamd.com/feed/',
          name: 'Peter Attia MD',
          confidence: 0.9,
          method: 'search'
        },
        {
          url: 'https://www.foundmyfitness.com/rss',
          name: 'FoundMyFitness',
          confidence: 0.85,
          method: 'search'
        }
      );
    }
    
    // Validate all results
    for (const result of results) {
      result.validation = await validateFeed(result.url);
    }
    
    return results.filter(r => r.validation?.valid);
  }
}