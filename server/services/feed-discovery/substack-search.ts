/**
 * Substack Newsletter Discovery
 * Discovers Substack RSS feeds through search
 */

export interface SubstackNewsletterInfo {
  subdomain: string;
  name: string;
  description: string;
  rssFeedUrl: string;
  author?: string;
  categories?: string[];
}

/**
 * Search for Substack newsletters
 * Substack provides RSS feeds at: https://{subdomain}.substack.com/feed
 */
export async function searchSubstackNewsletters(query: string): Promise<SubstackNewsletterInfo[]> {
  try {
    // Substack doesn't have a public search API, but we can use their internal endpoints
    // or fall back to a curated list of known newsletters
    
    const results: SubstackNewsletterInfo[] = [];
    
    // Try to search using Substack's internal API (may require updates)
    try {
      const searchUrl = `https://substack.com/api/v1/publication/search?query=${encodeURIComponent(query)}&limit=10`;
      const response = await fetch(searchUrl, {
        headers: {
          'User-Agent': 'LucidFeed/1.0 (Feed Discovery Bot)',
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.results) {
          for (const pub of data.results) {
            results.push({
              subdomain: pub.subdomain,
              name: pub.name,
              description: pub.description || '',
              rssFeedUrl: `https://${pub.subdomain}.substack.com/feed`,
              author: pub.author_name,
              categories: pub.categories || [],
            });
          }
        }
      }
    } catch (apiError) {
      console.log('Substack API search failed, using fallback:', apiError);
    }
    
    // If API fails or returns no results, use curated list
    if (results.length === 0) {
      return getFallbackNewsletters(query);
    }
    
    return results.slice(0, 5);
  } catch (error) {
    console.error('Error searching Substack:', error);
    return getFallbackNewsletters(query);
  }
}

/**
 * Get fallback newsletters if API fails
 */
function getFallbackNewsletters(query: string): SubstackNewsletterInfo[] {
  const queryLower = query.toLowerCase();
  
  const knownNewsletters: Record<string, SubstackNewsletterInfo[]> = {
    'health': [
      {
        subdomain: 'peterattiamd',
        name: 'Peter Attia MD',
        description: 'Translating the science of longevity',
        rssFeedUrl: 'https://peterattiamd.substack.com/feed',
        author: 'Peter Attia',
        categories: ['health', 'longevity', 'medicine'],
      },
      {
        subdomain: 'thenutritionsource',
        name: 'The Nutrition Source',
        description: 'Evidence-based nutrition information',
        rssFeedUrl: 'https://thenutritionsource.substack.com/feed',
        categories: ['health', 'nutrition'],
      },
    ],
    'science': [
      {
        subdomain: 'astralcodexten',
        name: 'Astral Codex Ten',
        description: 'Science, psychiatry, medicine, philosophy',
        rssFeedUrl: 'https://astralcodexten.substack.com/feed',
        author: 'Scott Alexander',
        categories: ['science', 'medicine', 'philosophy'],
      },
      {
        subdomain: 'thesequencedecoded',
        name: 'The Sequence Decoded',
        description: 'Genomics and biotechnology',
        rssFeedUrl: 'https://thesequencedecoded.substack.com/feed',
        categories: ['science', 'genomics', 'biotech'],
      },
    ],
    'technology': [
      {
        subdomain: 'platformer',
        name: 'Platformer',
        description: 'Tech platforms and democracy',
        rssFeedUrl: 'https://platformer.substack.com/feed',
        author: 'Casey Newton',
        categories: ['technology', 'platforms', 'society'],
      },
      {
        subdomain: 'stratechery',
        name: 'Stratechery',
        description: 'Technology and strategy analysis',
        rssFeedUrl: 'https://stratechery.substack.com/feed',
        author: 'Ben Thompson',
        categories: ['technology', 'business', 'strategy'],
      },
    ],
    'finance': [
      {
        subdomain: 'thebearcase',
        name: 'The Bear Case',
        description: 'Contrarian market analysis',
        rssFeedUrl: 'https://thebearcase.substack.com/feed',
        categories: ['finance', 'markets', 'investing'],
      },
      {
        subdomain: 'notboring',
        name: 'Not Boring',
        description: 'Business strategy and innovation',
        rssFeedUrl: 'https://notboring.substack.com/feed',
        author: 'Packy McCormick',
        categories: ['finance', 'business', 'innovation'],
      },
    ],
  };
  
  // Find matching newsletters
  for (const [category, newsletters] of Object.entries(knownNewsletters)) {
    if (queryLower.includes(category) || category.includes(queryLower)) {
      return newsletters;
    }
  }
  
  // Search by newsletter name or author
  const allNewsletters = Object.values(knownNewsletters).flat();
  const matches = allNewsletters.filter(newsletter => 
    newsletter.name.toLowerCase().includes(queryLower) ||
    newsletter.author?.toLowerCase().includes(queryLower) ||
    newsletter.description.toLowerCase().includes(queryLower)
  );
  
  return matches.slice(0, 5);
}

/**
 * Verify if a Substack newsletter exists
 */
export async function verifySubstackExists(subdomain: string): Promise<boolean> {
  try {
    const response = await fetch(`https://${subdomain}.substack.com/api/v1/publication`, {
      headers: {
        'User-Agent': 'LucidFeed/1.0 (Feed Discovery Bot)',
      },
    });
    
    return response.ok;
  } catch (error) {
    console.error(`Error verifying Substack ${subdomain}:`, error);
    return false;
  }
}

/**
 * Get Substack newsletter info from subdomain
 */
export async function getSubstackInfo(subdomain: string): Promise<SubstackNewsletterInfo | null> {
  try {
    const response = await fetch(`https://${subdomain}.substack.com/api/v1/publication`, {
      headers: {
        'User-Agent': 'LucidFeed/1.0 (Feed Discovery Bot)',
      },
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    
    return {
      subdomain: data.subdomain,
      name: data.name,
      description: data.description || '',
      rssFeedUrl: `https://${subdomain}.substack.com/feed`,
      author: data.author_name,
      categories: data.categories || [],
    };
  } catch (error) {
    console.error(`Error getting Substack info for ${subdomain}:`, error);
    return null;
  }
}