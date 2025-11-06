/**
 * SocialAPIDiscovery: Use Reddit/YouTube APIs to find channel/subreddit feeds
 */

import type { DiscoveryStrategy } from './discovery-strategy';
import type { FeedCatalog, FeedCandidate } from '@shared/schema';

export class SocialAPIDiscovery implements DiscoveryStrategy {
  name = 'social_api';

  isApplicable(feed: FeedCatalog): boolean {
    // Applicable for social media source types
    return ['youtube', 'reddit', 'podcast'].includes(feed.sourceType);
  }

  async discover(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    try {
      switch (feed.sourceType) {
        case 'youtube':
          candidates.push(...await this.discoverYouTube(feed));
          break;
        case 'reddit':
          candidates.push(...await this.discoverReddit(feed));
          break;
        case 'podcast':
          candidates.push(...await this.discoverPodcast(feed));
          break;
      }
    } catch (error) {
      console.error('SocialAPIDiscovery error:', error);
    }
    
    return candidates;
  }

  private async discoverYouTube(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    // Extract channel info from URL
    const channelIdMatch = feed.url.match(/channel_id=([^&]+)/);
    const channelNameMatch = feed.name.match(/^(.+?)(?:\s*-\s*YouTube)?$/);
    
    if (channelIdMatch) {
      const channelId = channelIdMatch[1];
      
      // Try different YouTube feed formats
      const feedUrls = [
        `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
        `https://youtube.com/feeds/videos.xml?channel_id=${channelId}`,
        `https://www.youtube.com/channel/${channelId}`,
      ];
      
      for (const url of feedUrls) {
        if (url !== feed.url) {
          candidates.push({
            url,
            title: feed.name,
            description: feed.description,
            sourceType: 'youtube',
            topics: feed.topics,
            confidence: 0,
            strategy: this.name,
            similarityScore: 0.95,
          });
        }
      }
    }
    
    // Try to find related channels (would need YouTube API key in production)
    if (channelNameMatch) {
      const channelName = channelNameMatch[1];
      
      // For MVP, suggest known related channels based on topics
      const relatedChannels = this.getRelatedYouTubeChannels(feed.topics || []);
      
      for (const channel of relatedChannels) {
        candidates.push({
          url: `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`,
          title: channel.name,
          description: channel.description,
          sourceType: 'youtube',
          topics: channel.topics as any,
          confidence: 0,
          strategy: this.name,
          similarityScore: 0.6,
        });
      }
    }
    
    return candidates;
  }

  private async discoverReddit(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    // Extract subreddit from URL
    const subredditMatch = feed.url.match(/\/r\/([^\/\.]+)/);
    
    if (subredditMatch) {
      const subreddit = subredditMatch[1];
      
      // Try different sorting options
      const sortOptions = ['hot', 'new', 'top', 'rising'];
      for (const sort of sortOptions) {
        const url = `https://www.reddit.com/r/${subreddit}/${sort}.rss`;
        if (url !== feed.url) {
          candidates.push({
            url,
            title: `r/${subreddit} (${sort})`,
            description: feed.description,
            sourceType: 'reddit',
            topics: feed.topics,
            confidence: 0,
            strategy: this.name,
            similarityScore: 0.9,
          });
        }
      }
      
      // Suggest related subreddits based on topics
      const relatedSubreddits = this.getRelatedSubreddits(feed.topics || []);
      
      for (const related of relatedSubreddits) {
        candidates.push({
          url: `https://www.reddit.com/r/${related.name}/.rss`,
          title: `r/${related.name}`,
          description: related.description,
          sourceType: 'reddit',
          topics: related.topics as any,
          confidence: 0,
          strategy: this.name,
          similarityScore: 0.5,
        });
      }
    }
    
    return candidates;
  }

  private async discoverPodcast(feed: FeedCatalog): Promise<FeedCandidate[]> {
    const candidates: FeedCandidate[] = [];
    
    // Try to extract podcast name for searching
    const podcastName = feed.name.replace(/\s*podcast\s*/gi, '').trim();
    
    // Suggest known alternative podcast platforms
    // In production, would use PodcastIndex API
    const alternativePlatforms = [
      { domain: 'feeds.megaphone.fm', prefix: 'https://feeds.megaphone.fm/' },
      { domain: 'feeds.libsyn.com', prefix: 'https://feeds.libsyn.com/' },
      { domain: 'feeds.soundcloud.com', prefix: 'https://feeds.soundcloud.com/users/soundcloud:users:' },
      { domain: 'anchor.fm', prefix: 'https://anchor.fm/s/' },
    ];
    
    // Check if current feed is from one platform, suggest others
    for (const platform of alternativePlatforms) {
      if (!feed.url.includes(platform.domain)) {
        // This is a simplified suggestion - in production would search the actual platform
        const slug = podcastName.toLowerCase().replace(/\s+/g, '');
        candidates.push({
          url: `${platform.prefix}${slug}/rss`,
          title: `${feed.name} (${platform.domain})`,
          description: feed.description,
          sourceType: 'podcast',
          topics: feed.topics,
          confidence: 0,
          strategy: this.name,
          similarityScore: 0.4,
        });
      }
    }
    
    return candidates;
  }

  private getRelatedYouTubeChannels(topics: string[]): Array<{id: string; name: string; description: string; topics: string[]}> {
    // Simplified related channel suggestions based on topics
    const channelDatabase = [
      {
        id: 'UCh7B1G75V9J8gfQRLsaB0Tw',
        name: 'FoundMyFitness',
        description: 'Dr. Rhonda Patrick - Health and longevity research',
        topics: ['longevity', 'nutrition_science', 'biohacking'],
      },
      {
        id: 'UCFk__lBKkAh-tBhl7YRo0Sg',
        name: 'Peter Attia MD',
        description: 'The Drive podcast - Longevity and health optimization',
        topics: ['longevity', 'metabolic', 'preventive_medicine'],
      },
      {
        id: 'UC6mZF3XOGYCfYRiJM8oCbOQ',
        name: 'Andrew Huberman',
        description: 'Huberman Lab - Neuroscience and health',
        topics: ['neuroscience', 'sleep_optimization', 'mental_health'],
      },
    ];
    
    // Filter channels that match at least one topic
    return channelDatabase.filter(channel =>
      channel.topics.some(t => topics.includes(t))
    );
  }

  private getRelatedSubreddits(topics: string[]): Array<{name: string; description: string; topics: string[]}> {
    // Simplified related subreddit suggestions
    const subredditDatabase = [
      {
        name: 'Biohackers',
        description: 'Biohacking and self-optimization',
        topics: ['biohacking', 'longevity', 'supplementation'],
      },
      {
        name: 'ScientificNutrition',
        description: 'Evidence-based nutrition discussion',
        topics: ['nutrition_science', 'metabolic', 'research'],
      },
      {
        name: 'Longevity',
        description: 'Longevity science and interventions',
        topics: ['longevity', 'preventive_medicine', 'autophagy'],
      },
      {
        name: 'Nootropics',
        description: 'Cognitive enhancement and brain health',
        topics: ['cognitive_science', 'supplementation', 'brain_fog'],
      },
    ];
    
    return subredditDatabase.filter(sub =>
      sub.topics.some(t => topics.includes(t))
    );
  }
}