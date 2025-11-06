/**
 * Base interface for feed discovery strategies
 */

import type { FeedCatalog, FeedCandidate } from '@shared/schema';

export interface DiscoveryStrategy {
  name: string;
  
  /**
   * Check if this strategy is applicable for the given feed
   */
  isApplicable(feed: FeedCatalog): boolean;
  
  /**
   * Discover alternative feeds using this strategy
   */
  discover(feed: FeedCatalog): Promise<FeedCandidate[]>;
}