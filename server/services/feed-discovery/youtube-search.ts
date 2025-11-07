/**
 * YouTube Channel Discovery
 * Discovers YouTube channel RSS feeds through search
 */

export interface YouTubeChannelInfo {
  channelId: string;
  channelName: string;
  rssFeedUrl: string;
  channelUrl: string;
}

/**
 * Search for YouTube channels related to a topic
 * Uses YouTube Data API when available, fallback to curated list
 */
export async function searchYouTubeChannels(query: string): Promise<YouTubeChannelInfo[]> {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY || process.env.GOOGLE_API_KEY;
    
    // Try real YouTube Data API if key is available
    if (apiKey) {
      console.log('[YouTube Search] Using YouTube Data API for:', query);
      
      const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
      searchUrl.searchParams.append('part', 'snippet');
      searchUrl.searchParams.append('q', query);
      searchUrl.searchParams.append('type', 'channel');
      searchUrl.searchParams.append('maxResults', '5');
      searchUrl.searchParams.append('key', apiKey);
      searchUrl.searchParams.append('fields', 'items(snippet(channelId,channelTitle,title))');
      
      const response = await fetch(searchUrl.toString());
      
      if (response.ok) {
        const data = await response.json();
        const results: YouTubeChannelInfo[] = [];
        
        for (const item of data.items || []) {
          const channelId = item.snippet.channelId;
          const channelName = item.snippet.channelTitle || item.snippet.title || 'Unknown Channel';
          
          results.push({
            channelId,
            channelName,
            rssFeedUrl: `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
            channelUrl: `https://www.youtube.com/channel/${channelId}`,
          });
        }
        
        console.log(`[YouTube Search] Found ${results.length} channels via API`);
        if (results.length > 0) {
          return results;
        }
      } else {
        const errorText = await response.text();
        console.warn(`[YouTube Search] API error (${response.status}):`, errorText);
        
        if (response.status === 403) {
          console.warn('[YouTube Search] Quota exceeded or invalid key, falling back to curated list');
        }
      }
    } else {
      console.log('[YouTube Search] No API key found, using fallback list');
    }
    
    // Fallback: Use curated list when API unavailable
    const knownChannels: Record<string, { id: string; name: string }[]> = {
      'health': [
        { id: 'UC2D2CMWXMOVWx7giW1n3LIg', name: 'Andrew Huberman' },
        { id: 'UCiP6wD_tYlYLYh3agzbByWQ', name: 'Doctor Mike' },
        { id: 'UC3w193M5tYPJqF0Hi-7U-2g', name: 'Dr. Eric Berg' },
      ],
      'science': [
        { id: 'UC7_gcs09iThXybpVgjHZ_7g', name: 'PBS Space Time' },
        { id: 'UCZYTClx2T1of7BRZ86-8fow', name: 'SciShow' },
        { id: 'UC6nSFpj9HTCZ5t-N3Rm3-HA', name: 'Vsauce' },
      ],
      'technology': [
        { id: 'UCBJycsmduvYEL83R_U4JriQ', name: 'Marques Brownlee' },
        { id: 'UCXuqSBlHAE6Xw-yeJA0Tunw', name: 'Linus Tech Tips' },
        { id: 'UC9-y-6csu5WGm29I7JiwpnA', name: 'Computerphile' },
      ],
      'finance': [
        { id: 'UCV6KDgJskWaEckne5aPA0aQ', name: 'Graham Stephan' },
        { id: 'UCbta0n8i6Rljh0obO7HzG9A', name: 'Two Cents' },
        { id: 'UCL8w_A8p8P1HWI3k6PR5Z6w', name: 'Ben Felix' },
      ],
      'nutrition': [
        { id: 'UCWF8SqJVNlx-ctXbLswcTcA', name: 'FoundMyFitness' },
        { id: 'UC70SrI3VkT1MXALRtf0pcHg', name: 'Thomas DeLauer' },
        { id: 'UCoyL4iGArWn5Hu0V_sAhK2w', name: 'Dr. Jason Fung' },
      ],
    };
    
    // Search fallback list
    const queryLower = query.toLowerCase();
    const results: YouTubeChannelInfo[] = [];
    
    // Check categories
    for (const [category, channels] of Object.entries(knownChannels)) {
      if (queryLower.includes(category) || category.includes(queryLower)) {
        for (const channel of channels) {
          results.push({
            channelId: channel.id,
            channelName: channel.name,
            rssFeedUrl: `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`,
            channelUrl: `https://www.youtube.com/channel/${channel.id}`,
          });
        }
      }
    }
    
    // Check channel names
    for (const channels of Object.values(knownChannels)) {
      for (const channel of channels) {
        if (channel.name.toLowerCase().includes(queryLower) && 
            !results.find(r => r.channelId === channel.id)) {
          results.push({
            channelId: channel.id,
            channelName: channel.name,
            rssFeedUrl: `https://www.youtube.com/feeds/videos.xml?channel_id=${channel.id}`,
            channelUrl: `https://www.youtube.com/channel/${channel.id}`,
          });
        }
      }
    }
    
    console.log(`[YouTube Search] Found ${results.length} channels via fallback`);
    return results.slice(0, 5); // Return top 5 matches
  } catch (error) {
    console.error('[YouTube Search] Critical error:', error);
    return [];
  }
}

/**
 * Extract channel ID from YouTube URL
 */
export function extractChannelId(url: string): string | null {
  const patterns = [
    /youtube\.com\/channel\/([^\/\?]+)/,
    /youtube\.com\/c\/([^\/\?]+)/,
    /youtube\.com\/@([^\/\?]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

/**
 * Get RSS feed URL for a YouTube channel
 */
export async function getYouTubeChannelRssFeed(channelUrl: string): Promise<string | null> {
  try {
    const channelId = extractChannelId(channelUrl);
    if (!channelId) return null;
    
    // YouTube provides RSS feeds in this format
    return `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  } catch (error) {
    console.error('Error getting YouTube RSS feed:', error);
    return null;
  }
}