/**
 * Unified Feed Ingestion Pipeline
 * Handles all feed sources: manual, discovered, imported
 */

import RSSParser from 'rss-parser';
import { storage } from '../../storage';
import type { InsertFeedCatalog, FeedCatalog } from '@shared/schema';
import { fetchYouTubeTranscript } from '../youtube-transcript';
import { fetchOpenAccessPDF, extractPDFText } from '../unpaywall';
import { extractDOI } from '../crossref';

const parser = new RSSParser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; LucidFeed/1.0; +https://getlucidfeed.com)',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*'
  }
});

export interface FeedValidationResult {
  valid: boolean;
  feedType?: 'youtube' | 'reddit' | 'substack' | 'podcast' | 'journal' | 'blog' | 'unknown';
  title?: string;
  description?: string;
  url?: string;
  itemCount?: number;
  lastPublished?: Date;
  error?: string;
  metadata?: {
    author?: string;
    categories?: string[];
    language?: string;
    imageUrl?: string;
  };
}

export interface FeedIngestionResult {
  success: boolean;
  feedId?: string;
  validation?: FeedValidationResult;
  enrichment?: {
    transcriptsAvailable?: boolean;
    pdfsAvailable?: boolean;
    fullContentAvailable?: boolean;
  };
  error?: string;
}

/**
 * Validate an RSS feed URL
 */
export async function validateFeed(url: string): Promise<FeedValidationResult> {
  try {
    // Normalize URL
    url = url.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    // Fetch and parse feed
    const feed = await parser.parseURL(url);
    
    if (!feed || !feed.items || feed.items.length === 0) {
      return {
        valid: false,
        error: 'Feed is empty or has no items'
      };
    }

    // Detect feed type
    const feedType = detectFeedType(url, feed);
    
    // Get latest item date
    const lastPublished = feed.items[0]?.pubDate 
      ? new Date(feed.items[0].pubDate)
      : undefined;

    // Extract metadata
    const metadata = {
      author: feed.creator || feed.author || extractAuthor(feed),
      categories: extractCategories(feed),
      language: feed.language,
      imageUrl: feed.image?.url || feed.itunes?.image
    };

    return {
      valid: true,
      feedType,
      title: feed.title || 'Untitled Feed',
      description: feed.description,
      url,
      itemCount: feed.items.length,
      lastPublished,
      metadata
    };
  } catch (error: any) {
    return {
      valid: false,
      error: error.message || 'Failed to parse feed'
    };
  }
}

/**
 * Detect the type of feed based on URL and content
 */
function detectFeedType(url: string, feed: any): FeedValidationResult['feedType'] {
  const lowerUrl = url.toLowerCase();
  
  // YouTube
  if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) {
    return 'youtube';
  }
  
  // Reddit
  if (lowerUrl.includes('reddit.com')) {
    return 'reddit';
  }
  
  // Substack
  if (lowerUrl.includes('substack.com')) {
    return 'substack';
  }
  
  // Podcast (check iTunes namespace or audio enclosures)
  if (feed.itunes || feed.items?.some((item: any) => 
    item.enclosure?.type?.includes('audio'))) {
    return 'podcast';
  }
  
  // Journal (check for DOIs or academic publishers)
  const hasDoIs = feed.items?.some((item: any) => 
    item.link?.includes('doi.org') || 
    item.content?.includes('doi.org') ||
    item.description?.includes('doi.org')
  );
  
  const academicDomains = ['nature.com', 'science.org', 'cell.com', 'nejm.org', 
    'jamanetwork.com', 'bmj.com', 'thelancet.com', 'plos.org', 'frontiersin.org'];
  
  if (hasDoIs || academicDomains.some(domain => lowerUrl.includes(domain))) {
    return 'journal';
  }
  
  // Blog (generic)
  if (feed.items?.some((item: any) => item.content || item['content:encoded'])) {
    return 'blog';
  }
  
  return 'unknown';
}

/**
 * Extract author from feed
 */
function extractAuthor(feed: any): string | undefined {
  // Try various author fields
  if (feed.creator) return feed.creator;
  if (feed.author) return feed.author;
  if (feed.managingEditor) return feed.managingEditor;
  if (feed.webMaster) return feed.webMaster;
  
  // Check items for consistent author
  const authors = feed.items?.map((item: any) => 
    item.creator || item.author || item['dc:creator']
  ).filter(Boolean);
  
  if (authors?.length > 0) {
    // Return most common author
    const authorCounts = new Map<string, number>();
    authors.forEach((author: string) => {
      authorCounts.set(author, (authorCounts.get(author) || 0) + 1);
    });
    
    const sortedAuthors = [...authorCounts.entries()]
      .sort((a, b) => b[1] - a[1]);
    
    return sortedAuthors[0]?.[0];
  }
  
  return undefined;
}

/**
 * Extract categories from feed
 */
function extractCategories(feed: any): string[] {
  const categories = new Set<string>();
  
  // Feed-level categories
  if (feed.categories) {
    feed.categories.forEach((cat: any) => {
      if (typeof cat === 'string') categories.add(cat);
      else if (cat.term) categories.add(cat.term);
    });
  }
  
  // iTunes categories (for podcasts)
  if (feed.itunes?.categories) {
    feed.itunes.categories.forEach((cat: any) => {
      if (typeof cat === 'string') categories.add(cat);
      else if (cat.text) categories.add(cat.text);
    });
  }
  
  // Item-level categories (sample first 10)
  feed.items?.slice(0, 10).forEach((item: any) => {
    if (item.categories) {
      item.categories.forEach((cat: any) => {
        if (typeof cat === 'string') categories.add(cat);
      });
    }
  });
  
  return Array.from(categories);
}

/**
 * Check enrichment capabilities for a feed
 */
async function checkEnrichmentCapabilities(
  feedType: FeedValidationResult['feedType'],
  feed: any
): Promise<FeedIngestionResult['enrichment']> {
  const enrichment: FeedIngestionResult['enrichment'] = {
    transcriptsAvailable: false,
    pdfsAvailable: false,
    fullContentAvailable: false
  };

  switch (feedType) {
    case 'youtube':
      // Check if transcripts are available (sample first item)
      if (feed.items?.[0]?.link) {
        try {
          const transcript = await fetchYouTubeTranscript(feed.items[0].link);
          enrichment.transcriptsAvailable = !!transcript;
        } catch {
          // Transcripts not available
        }
      }
      break;
      
    case 'journal':
      // Check if PDFs are available via Unpaywall
      const doi = extractDOI(feed.items?.[0]?.link || '');
      if (doi) {
        try {
          const { isOpenAccess } = await fetchOpenAccessPDF(doi);
          enrichment.pdfsAvailable = isOpenAccess;
        } catch {
          // PDFs not available
        }
      }
      break;
      
    case 'reddit':
    case 'substack':
    case 'blog':
      // These usually have full content in the feed
      enrichment.fullContentAvailable = feed.items?.some((item: any) => 
        item.content || item['content:encoded']
      );
      break;
  }

  return enrichment;
}

/**
 * Ingest a feed into the catalog
 */
export async function ingestFeed(
  url: string,
  options?: {
    source?: 'manual' | 'discovered' | 'imported';
    userId?: string;
    autoApprove?: boolean;
    overrideName?: string;
    overrideTopics?: string[];
  }
): Promise<FeedIngestionResult> {
  try {
    // Step 1: Validate feed
    const validation = await validateFeed(url);
    
    if (!validation.valid) {
      return {
        success: false,
        validation,
        error: validation.error
      };
    }

    // Step 2: Check if feed already exists
    const existingFeed = await storage.getFeedByUrl(url);
    if (existingFeed) {
      return {
        success: true,
        feedId: existingFeed.id,
        validation,
        error: 'Feed already exists in catalog'
      };
    }

    // Step 3: Parse full feed for enrichment check
    const feed = await parser.parseURL(url);
    
    // Step 4: Check enrichment capabilities
    const enrichment = await checkEnrichmentCapabilities(validation.feedType, feed);

    // Step 5: Auto-categorize based on content
    const topics = options?.overrideTopics || await autoCategorizeFeed(validation, feed);

    // Step 6: Create feed catalog entry
    const feedData: InsertFeedCatalog = {
      id: crypto.randomUUID(),
      name: options?.overrideName || validation.title || 'Unknown Feed',
      url,
      sourceType: validation.feedType || 'blog',
      topics,
      category: mapFeedTypeToCategory(validation.feedType),
      description: validation.description,
      author: validation.metadata?.author,
      language: validation.metadata?.language || 'en',
      imageUrl: validation.metadata?.imageUrl,
      isActive: true,
      isPremium: false,
      subscriptionTier: 'free',
      addedBy: options?.userId,
      addedMethod: options?.source || 'manual',
      approvalStatus: options?.autoApprove ? 'approved' : 'pending',
      lastSuccessfulFetch: new Date(),
      consecutiveFailures: 0,
      averageItemsPerFetch: validation.itemCount,
      enrichmentCapabilities: enrichment,
      metadata: {
        categories: validation.metadata?.categories,
        lastPublished: validation.lastPublished?.toISOString(),
        itemCount: validation.itemCount,
        validatedAt: new Date().toISOString()
      }
    };

    // Step 7: Save to database
    await storage.createFeed(feedData);

    return {
      success: true,
      feedId: feedData.id,
      validation,
      enrichment
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Failed to ingest feed'
    };
  }
}

/**
 * Auto-categorize feed based on content
 */
async function autoCategorizeFeed(validation: FeedValidationResult, feed: any): Promise<string[]> {
  const topics = new Set<string>();
  
  // Map feed type to default topics
  const typeTopics: Record<string, string[]> = {
    youtube: ['health/nutrition', 'health/fitness'],
    podcast: ['health/wellness', 'science/medicine'],
    journal: ['science/research', 'health/medical'],
    reddit: ['community/discussion', 'health/community'],
    substack: ['health/newsletter', 'science/analysis'],
    blog: ['health/general', 'lifestyle/wellness']
  };
  
  if (validation.feedType && typeTopics[validation.feedType]) {
    typeTopics[validation.feedType].forEach(t => topics.add(t));
  }
  
  // Analyze content for health-related keywords
  const healthKeywords = {
    'health/nutrition': ['nutrition', 'diet', 'food', 'eating', 'nutrient', 'vitamin'],
    'health/fitness': ['exercise', 'fitness', 'workout', 'training', 'muscle', 'strength'],
    'health/medical': ['medical', 'clinical', 'treatment', 'therapy', 'patient', 'disease'],
    'science/research': ['study', 'research', 'trial', 'evidence', 'data', 'findings'],
    'health/longevity': ['longevity', 'aging', 'lifespan', 'healthspan', 'anti-aging'],
    'health/biohacking': ['biohacking', 'optimization', 'performance', 'tracking', 'quantified'],
    'health/mental': ['mental', 'anxiety', 'depression', 'stress', 'mindfulness', 'meditation'],
    'health/gut': ['gut', 'microbiome', 'digestive', 'probiotic', 'intestinal']
  };
  
  // Check title and description
  const textToAnalyze = [
    validation.title,
    validation.description,
    ...feed.items?.slice(0, 5).map((item: any) => item.title + ' ' + item.description)
  ].join(' ').toLowerCase();
  
  for (const [topic, keywords] of Object.entries(healthKeywords)) {
    if (keywords.some(keyword => textToAnalyze.includes(keyword))) {
      topics.add(topic);
    }
  }
  
  // Limit to top 3 topics
  return Array.from(topics).slice(0, 3);
}

/**
 * Map feed type to display category
 */
function mapFeedTypeToCategory(feedType?: FeedValidationResult['feedType']): string {
  const mapping: Record<string, string> = {
    youtube: 'Videos',
    podcast: 'Podcasts',
    journal: 'Research',
    reddit: 'Community',
    substack: 'Newsletters',
    blog: 'Blogs'
  };
  
  return mapping[feedType || 'unknown'] || 'Other';
}

/**
 * Bulk import feeds from OPML
 */
export async function importOPML(
  opmlContent: string,
  userId: string
): Promise<{ total: number; success: number; failed: number; results: FeedIngestionResult[] }> {
  const results: FeedIngestionResult[] = [];
  let total = 0;
  let success = 0;
  let failed = 0;

  try {
    // Parse OPML (basic parser - could use a library for more robust parsing)
    const outlines = extractOPMLFeeds(opmlContent);
    total = outlines.length;

    // Process feeds in batches to avoid overload
    const batchSize = 5;
    for (let i = 0; i < outlines.length; i += batchSize) {
      const batch = outlines.slice(i, i + batchSize);
      
      const batchResults = await Promise.all(
        batch.map(outline => 
          ingestFeed(outline.xmlUrl, {
            source: 'imported',
            userId,
            autoApprove: false,
            overrideName: outline.text || outline.title
          })
        )
      );
      
      batchResults.forEach(result => {
        results.push(result);
        if (result.success) success++;
        else failed++;
      });
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error: any) {
    console.error('OPML import error:', error);
  }

  return { total, success, failed, results };
}

/**
 * Extract feeds from OPML content
 */
function extractOPMLFeeds(opmlContent: string): Array<{ xmlUrl: string; text?: string; title?: string }> {
  const feeds: Array<{ xmlUrl: string; text?: string; title?: string }> = [];
  
  // Simple regex extraction (consider using xml2js for more robust parsing)
  const outlineRegex = /<outline[^>]+xmlUrl=["']([^"']+)["'][^>]*>/gi;
  let match;
  
  while ((match = outlineRegex.exec(opmlContent)) !== null) {
    const xmlUrl = match[1];
    
    // Extract text/title attributes
    const fullMatch = match[0];
    const textMatch = fullMatch.match(/text=["']([^"']+)["']/);
    const titleMatch = fullMatch.match(/title=["']([^"']+)["']/);
    
    feeds.push({
      xmlUrl,
      text: textMatch?.[1],
      title: titleMatch?.[1]
    });
  }
  
  return feeds;
}