/**
 * Reddit Subreddit Discovery
 * Discovers Reddit RSS feeds through search
 */

const USER_AGENT = 'LucidFeedBot/1.0 by u/lucid_feed_bot';

export interface RedditSubredditInfo {
  subreddit: string;
  displayName: string;
  description: string;
  rssFeedUrl: string;
  subscribers?: number;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get Reddit OAuth access token
 */
async function getRedditAccessToken(): Promise<string | null> {
  try {
    // Check if we have a valid cached token
    if (cachedToken && cachedToken.expiresAt > Date.now()) {
      return cachedToken.token;
    }

    const clientId = process.env.REDDIT_CLIENT_ID;
    const clientSecret = process.env.REDDIT_SECRET;
    const username = process.env.REDDIT_USERNAME;
    const password = process.env.REDDIT_PASSWORD;

    if (!clientId || !clientSecret || !username || !password) {
      console.log('[Reddit Auth] Missing credentials, falling back to unauthenticated search');
      return null;
    }

    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': USER_AGENT,
      },
      body: new URLSearchParams({
        grant_type: 'password',
        username,
        password,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Reddit Auth] Failed to get token (${response.status}):`, errorText);
      return null;
    }

    const data = await response.json();
    
    // Cache token (Reddit tokens expire in 1 hour)
    cachedToken = {
      token: data.access_token,
      expiresAt: Date.now() + (data.expires_in * 1000) - 60000, // Subtract 1 minute for safety
    };

    console.log('[Reddit Auth] Successfully obtained access token');
    return data.access_token;
  } catch (error) {
    console.error('[Reddit Auth] Error getting access token:', error);
    return null;
  }
}

/**
 * Search for relevant subreddits
 * Reddit provides RSS feeds at: https://www.reddit.com/r/{subreddit}/.rss
 */
export async function searchRedditSubreddits(query: string): Promise<RedditSubredditInfo[]> {
  try {
    // Try to get OAuth token first
    const token = await getRedditAccessToken();
    
    let searchUrl: string;
    let headers: Record<string, string>;
    
    if (token) {
      // Use OAuth endpoint
      searchUrl = `https://oauth.reddit.com/subreddits/search?q=${encodeURIComponent(query)}&limit=10`;
      headers = {
        'Authorization': `Bearer ${token}`,
        'User-Agent': USER_AGENT,
      };
    } else {
      // Fallback to public endpoint (may return 403)
      searchUrl = `https://www.reddit.com/subreddits/search.json?q=${encodeURIComponent(query)}&limit=10`;
      headers = {
        'User-Agent': USER_AGENT,
      };
    }
    
    const response = await fetch(searchUrl, { headers });
    
    if (!response.ok) {
      console.error(`[Reddit Search] Search failed: ${response.status}`);
      if (response.status === 403) {
        console.error('[Reddit Search] 403 Forbidden - OAuth credentials may be required or invalid');
      }
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
    
    console.log(`[Reddit Search] Found ${results.length} subreddits for "${query}"`);
    return results.slice(0, 5);
  } catch (error) {
    console.error('[Reddit Search] Error searching Reddit:', error);
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
    // Try to get OAuth token for authenticated request
    const token = await getRedditAccessToken();
    
    let aboutUrl: string;
    let headers: Record<string, string>;
    
    if (token) {
      aboutUrl = `https://oauth.reddit.com/r/${subreddit}/about`;
      headers = {
        'Authorization': `Bearer ${token}`,
        'User-Agent': USER_AGENT,
      };
    } else {
      aboutUrl = `https://www.reddit.com/r/${subreddit}/about.json`;
      headers = {
        'User-Agent': USER_AGENT,
      };
    }
    
    const response = await fetch(aboutUrl, { headers });
    
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