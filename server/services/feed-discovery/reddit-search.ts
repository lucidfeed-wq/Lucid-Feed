/**
 * Reddit Subreddit Discovery
 * Discovers Reddit RSS feeds through search
 */

export interface RedditSubredditInfo {
  subreddit: string;
  displayName: string;
  description: string;
  rssFeedUrl: string;
  subscribers?: number;
}

/**
 * Search for relevant subreddits
 * Reddit provides RSS feeds at: https://www.reddit.com/r/{subreddit}/.rss
 */
export async function searchRedditSubreddits(query: string): Promise<RedditSubredditInfo[]> {
  try {
    // Reddit's search API is public and doesn't require authentication for basic searches
    const searchUrl = `https://www.reddit.com/subreddits/search.json?q=${encodeURIComponent(query)}&limit=10`;
    
    const response = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'LucidFeed/1.0 (Feed Discovery Bot)',
      },
    });
    
    if (!response.ok) {
      console.error(`Reddit search failed: ${response.status}`);
      return getFallbackSubreddits(query);
    }
    
    const data = await response.json();
    const results: RedditSubredditInfo[] = [];
    
    if (data.data?.children) {
      for (const child of data.data.children) {
        const subreddit = child.data;
        if (subreddit.subreddit_type === 'public') {
          results.push({
            subreddit: subreddit.display_name,
            displayName: subreddit.display_name_prefixed,
            description: subreddit.public_description || subreddit.description || '',
            rssFeedUrl: `https://www.reddit.com/r/${subreddit.display_name}/.rss`,
            subscribers: subreddit.subscribers,
          });
        }
      }
    }
    
    // Sort by subscriber count (popularity)
    results.sort((a, b) => (b.subscribers || 0) - (a.subscribers || 0));
    
    return results.slice(0, 5);
  } catch (error) {
    console.error('Error searching Reddit:', error);
    return getFallbackSubreddits(query);
  }
}

/**
 * Get fallback subreddits if API fails
 */
function getFallbackSubreddits(query: string): RedditSubredditInfo[] {
  const queryLower = query.toLowerCase();
  
  const knownSubreddits: Record<string, RedditSubredditInfo[]> = {
    'health': [
      {
        subreddit: 'Health',
        displayName: 'r/Health',
        description: 'Health discussions and news',
        rssFeedUrl: 'https://www.reddit.com/r/Health/.rss',
      },
      {
        subreddit: 'nutrition',
        displayName: 'r/nutrition',
        description: 'Nutrition science and discussion',
        rssFeedUrl: 'https://www.reddit.com/r/nutrition/.rss',
      },
      {
        subreddit: 'longevity',
        displayName: 'r/longevity',
        description: 'Science of aging and longevity',
        rssFeedUrl: 'https://www.reddit.com/r/longevity/.rss',
      },
    ],
    'science': [
      {
        subreddit: 'science',
        displayName: 'r/science',
        description: 'Scientific research and discussion',
        rssFeedUrl: 'https://www.reddit.com/r/science/.rss',
      },
      {
        subreddit: 'AskScience',
        displayName: 'r/AskScience',
        description: 'Ask science questions',
        rssFeedUrl: 'https://www.reddit.com/r/AskScience/.rss',
      },
    ],
    'technology': [
      {
        subreddit: 'technology',
        displayName: 'r/technology',
        description: 'Technology news and discussion',
        rssFeedUrl: 'https://www.reddit.com/r/technology/.rss',
      },
      {
        subreddit: 'programming',
        displayName: 'r/programming',
        description: 'Programming discussions',
        rssFeedUrl: 'https://www.reddit.com/r/programming/.rss',
      },
    ],
    'finance': [
      {
        subreddit: 'personalfinance',
        displayName: 'r/personalfinance',
        description: 'Personal finance advice',
        rssFeedUrl: 'https://www.reddit.com/r/personalfinance/.rss',
      },
      {
        subreddit: 'investing',
        displayName: 'r/investing',
        description: 'Investment discussion',
        rssFeedUrl: 'https://www.reddit.com/r/investing/.rss',
      },
    ],
  };
  
  // Find matching subreddits
  for (const [category, subreddits] of Object.entries(knownSubreddits)) {
    if (queryLower.includes(category) || category.includes(queryLower)) {
      return subreddits;
    }
  }
  
  return [];
}

/**
 * Verify if a subreddit exists and is accessible
 */
export async function verifySubredditExists(subreddit: string): Promise<boolean> {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`, {
      headers: {
        'User-Agent': 'LucidFeed/1.0 (Feed Discovery Bot)',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.kind === 't5' && data.data?.subreddit_type === 'public';
    }
    
    return false;
  } catch (error) {
    console.error(`Error verifying subreddit ${subreddit}:`, error);
    return false;
  }
}