/**
 * TopicBasedDiscovery: Find feeds with similar topics from feed catalog
 */

import type { DiscoveryStrategy } from './discovery-strategy';
import type { FeedCatalog, FeedCandidate } from '@shared/schema';
import { storage } from '../../../storage';

export class TopicBasedDiscovery implements DiscoveryStrategy {
  name = 'topic_based';

  isApplicable(feed: FeedCatalog): boolean {
    // Applicable if feed has topics defined
    return !!(feed.topics && feed.topics.length > 0);
  }

  async discover(feed: FeedCatalog): Promise<FeedCandidate[]> {
    if (!feed.topics || feed.topics.length === 0) {
      return [];
    }

    try {
      // Get suggested feeds based on topics
      const suggestedFeeds = await storage.getSuggestedFeeds(
        feed.topics,
        [feed.sourceType], // Prefer same source type
        50 // Get more candidates for better matching
      );

      // Filter out the original feed and convert to candidates
      const candidates: FeedCandidate[] = suggestedFeeds
        .filter(f => f.id !== feed.id && f.url !== feed.url)
        .map(suggestedFeed => {
          // Calculate topic similarity
          const matchingTopics = suggestedFeed.topics?.filter(t => 
            feed.topics?.includes(t)
          ) || [];
          
          const similarityScore = matchingTopics.length / Math.max(feed.topics!.length, 1);

          return {
            url: suggestedFeed.url,
            title: suggestedFeed.name,
            description: suggestedFeed.description || undefined,
            sourceType: suggestedFeed.sourceType,
            topics: suggestedFeed.topics,
            confidence: 0, // Will be calculated later
            strategy: this.name,
            similarityScore,
          };
        })
        .filter(c => c.similarityScore! > 0.3); // At least 30% topic match

      // Sort by similarity score
      candidates.sort((a, b) => (b.similarityScore || 0) - (a.similarityScore || 0));

      // Return top 10 candidates
      return candidates.slice(0, 10);
    } catch (error) {
      console.error('TopicBasedDiscovery error:', error);
      return [];
    }
  }
}