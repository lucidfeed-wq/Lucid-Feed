import Parser from 'rss-parser';
import { nanoid } from 'nanoid';
import type { FeedCatalog } from '@shared/schema';

export interface FeedSearchResult {
  id: string;
  title: string;
  url: string;
  description: string;
  sourceType: 'youtube' | 'podcast' | 'reddit' | 'substack' | 'journal';
  category?: string;
  subscriberCount?: number;
  itemCount?: number;
}

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'LucidFeed/1.0 (RSS Reader)',
  },
});

/**
 * Search for YouTube channels via RSS
 * YouTube channel RSS: https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
 */
export async function searchYouTubeFeeds(query: string): Promise<FeedSearchResult[]> {
  // For MVP, return curated YouTube channels related to functional medicine
  // TODO: Implement YouTube Data API search later if needed
  
  const curatedChannels = [
    {
      id: 'UC_aEa8qLOmpfF3iWQFBzmXg',
      title: 'Dr. Mark Hyman',
      description: 'Functional medicine, metabolic health, and nutrition physician',
      category: 'Functional Medicine',
    },
    {
      id: 'UCh7B1G75V9J8gfQRLsaB0Tw',
      title: 'Dr. Rhonda Patrick',
      description: 'Science communication, longevity, metabolic health research',
      category: 'Longevity',
    },
    {
      id: 'UCFk__lBKkAh-tBhl7YRo0Sg',
      title: 'Dr. Peter Attia',
      description: 'Longevity, metabolic health, and performance medicine',
      category: 'Longevity',
    },
    {
      id: 'UC6mZF3XOGYCfYRiJM8oCbOQ',
      title: 'Huberman Lab',
      description: 'Neuroscience, health optimization, sleep, metabolism',
      category: 'Neuroscience',
    },
    {
      id: 'UCPTXOKlIWlU_VOoA-fFqZyg',
      title: 'Dr. Eric Berg',
      description: 'Keto diet, metabolic health, and nutrition education',
      category: 'Nutrition',
    },
    {
      id: 'UCYHMmUMpqV0YeN_GDCHNXtQ',
      title: 'Thomas DeLauer',
      description: 'Intermittent fasting, metabolic flexibility, and health science',
      category: 'Nutrition',
    },
    {
      id: 'UCXZCJLdBC09xxGZ6gcdrc6A',
      title: 'What I\'ve Learned',
      description: 'Health research, metabolic science, and evidence-based wellness',
      category: 'Health Science',
    },
  ];
  
  const lowerQuery = query.toLowerCase();
  const filtered = curatedChannels.filter(ch => 
    ch.title.toLowerCase().includes(lowerQuery) || 
    ch.description.toLowerCase().includes(lowerQuery) ||
    ch.category.toLowerCase().includes(lowerQuery)
  );
  
  return filtered.map(ch => ({
    id: nanoid(),
    title: ch.title,
    url: `https://www.youtube.com/feeds/videos.xml?channel_id=${ch.id}`,
    description: ch.description,
    sourceType: 'youtube' as const,
    category: ch.category,
  }));
}

/**
 * Search for podcasts via PodcastIndex API (returns RSS feeds)
 * For MVP, using curated list. Can integrate PodcastIndex API later.
 */
export async function searchPodcastFeeds(query: string): Promise<FeedSearchResult[]> {
  // Curated functional medicine podcasts
  const curatedPodcasts = [
    {
      title: 'The Doctor\'s Farmacy',
      url: 'https://feeds.megaphone.fm/doctorsfarmacy',
      description: 'Dr. Mark Hyman discusses functional medicine',
      category: 'Functional Medicine',
    },
    {
      title: 'FoundMyFitness',
      url: 'https://feeds.megaphone.fm/foundmyfitness',
      description: 'Dr. Rhonda Patrick explores health and longevity',
      category: 'Longevity',
    },
    {
      title: 'The Drive',
      url: 'https://feeds.megaphone.fm/thedrive',
      description: 'Dr. Peter Attia on health, medicine, and longevity',
      category: 'Longevity',
    },
    {
      title: 'The Model Health Show',
      url: 'https://feeds.libsyn.com/113331/rss',
      description: 'Shawn Stevenson on nutrition and lifestyle',
      category: 'Nutrition',
    },
  ];
  
  const lowerQuery = query.toLowerCase();
  const filtered = curatedPodcasts.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) || 
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
  
  return filtered.map(p => ({
    id: nanoid(),
    title: p.title,
    url: p.url,
    description: p.description,
    sourceType: 'podcast' as const,
    category: p.category,
  }));
}

/**
 * Search for Reddit subreddit RSS feeds
 * Reddit RSS format: https://www.reddit.com/r/SUBREDDIT/.rss
 */
export async function searchRedditFeeds(query: string): Promise<FeedSearchResult[]> {
  // Curated functional medicine subreddits
  const curatedSubreddits = [
    {
      name: 'FunctionalMedicine',
      description: 'Functional medicine discussions and research',
      category: 'Functional Medicine',
    },
    {
      name: 'Biohackers',
      description: 'Biohacking and performance optimization',
      category: 'Biohacking',
    },
    {
      name: 'ScientificNutrition',
      description: 'Evidence-based nutrition discussions',
      category: 'Nutrition',
    },
    {
      name: 'Longevity',
      description: 'Longevity research and interventions',
      category: 'Longevity',
    },
    {
      name: 'AdvancedFitness',
      description: 'Evidence-based fitness and performance',
      category: 'Fitness',
    },
  ];
  
  const lowerQuery = query.toLowerCase();
  const filtered = curatedSubreddits.filter(sr => 
    sr.name.toLowerCase().includes(lowerQuery) || 
    sr.description.toLowerCase().includes(lowerQuery) ||
    sr.category.toLowerCase().includes(lowerQuery)
  );
  
  return filtered.map(sr => ({
    id: nanoid(),
    title: `r/${sr.name}`,
    url: `https://www.reddit.com/r/${sr.name}/.rss`,
    description: sr.description,
    sourceType: 'reddit' as const,
    category: sr.category,
  }));
}

/**
 * Search for Substack publications (RSS feeds)
 * Substack RSS format: https://PUBLICATION.substack.com/feed
 */
export async function searchSubstackFeeds(query: string): Promise<FeedSearchResult[]> {
  // Curated functional medicine Substacks
  const curatedSubstacks = [
    {
      name: 'FoundMyFitness',
      subdomain: 'foundmyfitness',
      description: 'Dr. Rhonda Patrick\'s health and longevity newsletter',
      category: 'Longevity',
    },
    {
      name: 'Peter Attia\'s Insights',
      subdomain: 'peterattiamd',
      description: 'Deep dives on health, medicine, and longevity',
      category: 'Longevity',
    },
    {
      name: 'The ChronicIllness',
      subdomain: 'chronicillness',
      description: 'Functional medicine and chronic disease',
      category: 'Functional Medicine',
    },
  ];
  
  const lowerQuery = query.toLowerCase();
  const filtered = curatedSubstacks.filter(ss => 
    ss.name.toLowerCase().includes(lowerQuery) || 
    ss.description.toLowerCase().includes(lowerQuery) ||
    ss.category.toLowerCase().includes(lowerQuery)
  );
  
  return filtered.map(ss => ({
    id: nanoid(),
    title: ss.name,
    url: `https://${ss.subdomain}.substack.com/feed`,
    description: ss.description,
    sourceType: 'substack' as const,
    category: ss.category,
  }));
}

/**
 * Verify that an RSS feed is valid and accessible
 */
export async function verifyRssFeed(url: string): Promise<{ valid: boolean; title?: string; error?: string }> {
  try {
    const feed = await parser.parseURL(url);
    return {
      valid: true,
      title: feed.title,
    };
  } catch (error) {
    return {
      valid: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Universal feed discovery - searches feed catalog database
 * Now searches from database instead of hardcoded lists
 */
export async function discoverFeeds(query: string, sourceTypes?: string[], catalogFeeds?: FeedCatalog[]): Promise<FeedSearchResult[]> {
  // If catalogFeeds not provided, use old hardcoded search (fallback)
  if (!catalogFeeds) {
    const types = sourceTypes || ['youtube', 'podcast', 'reddit', 'substack'];
    const results: FeedSearchResult[] = [];
    
    if (types.includes('youtube')) {
      const youtubeResults = await searchYouTubeFeeds(query);
      results.push(...youtubeResults);
    }
    
    if (types.includes('podcast')) {
      const podcastResults = await searchPodcastFeeds(query);
      results.push(...podcastResults);
    }
    
    if (types.includes('reddit')) {
      const redditResults = await searchRedditFeeds(query);
      results.push(...redditResults);
    }
    
    if (types.includes('substack')) {
      const substackResults = await searchSubstackFeeds(query);
      results.push(...substackResults);
    }
    
    return results;
  }
  
  // Filter by query (case-insensitive search across name, description, category, topics)
  const queryLower = query.toLowerCase().trim();
  console.log(`[Discovery] Filtering ${catalogFeeds.length} feeds for query: "${query}"`);
  
  // Debug first feed
  if (catalogFeeds.length > 0) {
    const sample = catalogFeeds[0];
    console.log(`[Discovery] Sample feed:`, {
      name: sample.name,
      description: sample.description,
      category: sample.category,
      topics: sample.topics,
      topicsType: typeof sample.topics,
      isArray: Array.isArray(sample.topics)
    });
  }
  
  let filtered = catalogFeeds.filter((feed: FeedCatalog) => {
    const nameMatch = feed.name.toLowerCase().includes(queryLower);
    const descMatch = (feed.description ?? '').toLowerCase().includes(queryLower);
    const categoryMatch = (feed.category ?? '').toLowerCase().includes(queryLower);
    const topicsMatch = Array.isArray(feed.topics) && feed.topics.some((topic: string) => topic.toLowerCase().includes(queryLower));
    
    const matches = nameMatch || descMatch || categoryMatch || topicsMatch;
    
    if (matches) {
      console.log(`[Discovery] ✓ Match: ${feed.name} (name:${nameMatch}, desc:${descMatch}, cat:${categoryMatch}, topics:${topicsMatch})`);
    }
    
    return matches;
  });
  
  console.log(`[Discovery] Found ${filtered.length} matches for "${query}"`);
  
  // Filter by source types if specified (convert 'all' to undefined)
  if (sourceTypes && sourceTypes.length > 0 && !sourceTypes.includes('all')) {
    filtered = filtered.filter((feed: FeedCatalog) => 
      sourceTypes.some(type => feed.sourceType === type)
    );
  }
  
  // Convert to FeedSearchResult format
  const results: FeedSearchResult[] = filtered.map((feed: FeedCatalog) => ({
    id: feed.id,
    title: feed.name,
    url: feed.url,
    description: feed.description || '',
    sourceType: feed.sourceType as any,
    category: feed.category,
    subscriberCount: undefined,
    itemCount: undefined,
  }));
  
  // Track search miss if no results found (for self-improving catalog)
  if (results.length === 0) {
    console.log(`🔍 Search miss: "${query}" - Consider adding relevant feeds to catalog`);
    // TODO: Implement background job queue to fetch feeds based on this query
  }
  
  return results;
}
