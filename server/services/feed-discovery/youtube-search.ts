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
 * Uses web scraping since YouTube Data API requires quota management
 */
export async function searchYouTubeChannels(query: string): Promise<YouTubeChannelInfo[]> {
  try {
    // Search using a public YouTube RSS discovery service
    // YouTube provides RSS feeds at: https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
    
    const searchUrl = `https://www.googleapis.com/youtube/v3/search`;
    
    // For now, we'll use a curated list based on common health/science channels
    // In production, this would use the YouTube Data API with proper key management
    const knownChannels: Record<string, { id: string; name: string }[]> = {
      'health': [
        { id: 'UCddiUEpeqJcYeBxX1IVBKvQ', name: 'The Infographics Show' },
        { id: 'UC0uTPqBCFIpZxlz_Lv1tk_g', name: 'Healthline' },
        { id: 'UCiP6wD_tYlYLYh3agzbByWQ', name: 'Doctor Mike' },
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
    };
    
    // Find matching channels based on query
    const queryLower = query.toLowerCase();
    const results: YouTubeChannelInfo[] = [];
    
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
    
    // Also check if query matches specific channel names
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
    
    return results.slice(0, 5); // Return top 5 matches
  } catch (error) {
    console.error('Error searching YouTube channels:', error);
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