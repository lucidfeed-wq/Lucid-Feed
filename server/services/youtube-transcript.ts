/**
 * YouTube Transcript Extraction
 * Uses youtube-transcript package (free, no API key needed)
 */

import { YoutubeTranscript } from 'youtube-transcript';

export interface TranscriptSegment {
  text: string;
  offset: number;
  duration: number;
}

/**
 * Extract video ID from YouTube URL
 */
function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

/**
 * Fetch full transcript for a YouTube video
 */
export async function fetchYouTubeTranscript(url: string): Promise<string | null> {
  try {
    const videoId = extractVideoId(url);
    
    if (!videoId) {
      console.warn(`Invalid YouTube URL: ${url}`);
      return null;
    }
    
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    
    if (!transcript || transcript.length === 0) {
      console.log(`No transcript available for video: ${videoId}`);
      return null;
    }
    
    // Combine all text segments
    const fullText = transcript.map((segment: TranscriptSegment) => segment.text).join(' ');
    
    console.log(`Extracted transcript for ${videoId}: ${fullText.length} characters`);
    
    return fullText;
  } catch (error) {
    console.error(`Error fetching YouTube transcript for ${url}:`, error);
    return null;
  }
}
