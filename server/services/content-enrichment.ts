/**
 * Content Enrichment Service
 * 
 * Orchestrates full content ingestion and quality metric collection:
 * 1. Fetches full content (PDFs, transcripts, full posts)
 * 2. Collects quality metrics from multiple APIs
 * 3. Calculates transparent quality scores
 * 4. Returns enriched item data
 */

import type { InsertItem } from '@shared/schema';
import type { QualityMetrics, ScoreBreakdown } from '../core/quality-scoring';
import { calculateQualityScore } from '../core/quality-scoring';
import { fetchOpenAccessPDF, extractPDFText } from './unpaywall';
import { fetchCitationMetrics } from './crossref';
import { fetchPaperMetrics, fetchAuthorMetrics } from './semantic-scholar';
import { fetchYouTubeTranscript } from './youtube-transcript';

// EnrichedItem is just InsertItem with the new fields populated
export type EnrichedItem = InsertItem;

/**
 * Enrich a journal article with full content and quality metrics
 */
async function enrichJournalArticle(item: InsertItem): Promise<EnrichedItem> {
  const enriched: EnrichedItem = { ...item };
  const metrics: QualityMetrics = {};

  // Only process if DOI is available
  if (!item.doi) {
    console.log(`No DOI for journal article: ${item.title}`);
    return enriched;
  }

  console.log(`Enriching journal article: ${item.title} (DOI: ${item.doi})`);

  // Fetch full text PDF (if open access)
  try {
    const { pdfUrl, isOpenAccess } = await fetchOpenAccessPDF(item.doi);
    
    if (isOpenAccess && pdfUrl) {
      enriched.pdfUrl = pdfUrl;
      
      // Extract PDF text
      const fullText = await extractPDFText(pdfUrl);
      if (fullText) {
        enriched.fullText = fullText;
        console.log(`✓ Extracted ${fullText.length} characters from PDF`);
      }
    }
  } catch (error) {
    console.error(`Error fetching PDF for ${item.doi}:`, error);
  }

  // Fetch citation metrics from Crossref
  try {
    const crossrefData = await fetchCitationMetrics(item.doi);
    metrics.citationCount = crossrefData.citationCount;
    metrics.fundingSources = crossrefData.fundingSources;
    
    // Detect conflicts of interest from funding
    const suspiciousFunders = crossrefData.fundingSources.filter((funder) =>
      /pharmaceutical|pharma|pfizer|moderna|merck|bayer|monsanto|agriculture|agri/i.test(funder)
    );
    
    if (suspiciousFunders.length > 0) {
      metrics.conflictOfInterest = true;
      metrics.biasFlags = suspiciousFunders.map((f) => `Funded by ${f}`);
    }
  } catch (error) {
    console.error(`Error fetching Crossref data for ${item.doi}:`, error);
  }

  // Fetch advanced metrics from Semantic Scholar
  try {
    const paperData = await fetchPaperMetrics(item.doi);
    
    if (paperData) {
      metrics.influentialCitations = paperData.influentialCitations;
      metrics.citationVelocity = paperData.citationVelocity;
      
      // Fetch author metrics (use first author)
      if (paperData.authorIds.length > 0) {
        const authorData = await fetchAuthorMetrics(paperData.authorIds[0]);
        
        if (authorData) {
          metrics.authorHIndex = authorData.hIndex;
          metrics.authorCitationCount = authorData.citationCount;
        }
      }
    }
  } catch (error) {
    console.error(`Error fetching Semantic Scholar data for ${item.doi}:`, error);
  }

  // Calculate quality score
  enriched.qualityMetrics = metrics;
  enriched.scoreBreakdown = calculateQualityScore(item as any, metrics);
  enriched.score = Math.round(enriched.scoreBreakdown.totalScore);

  console.log(
    `✓ Quality score: ${enriched.score}/100 (citations: ${metrics.citationCount || 0}, h-index: ${
      metrics.authorHIndex || 0
    })`
  );

  return enriched;
}

/**
 * Enrich a YouTube video with full transcript
 */
async function enrichYouTubeVideo(item: InsertItem): Promise<EnrichedItem> {
  const enriched: EnrichedItem = { ...item };
  const metrics: QualityMetrics = {};

  console.log(`Enriching YouTube video: ${item.title}`);

  // Fetch full transcript
  try {
    const transcript = await fetchYouTubeTranscript(item.url);
    
    if (transcript) {
      enriched.fullText = transcript;
      console.log(`✓ Extracted ${transcript.length} character transcript`);
    }
  } catch (error) {
    console.error(`Error fetching YouTube transcript for ${item.url}:`, error);
  }

  // YouTube uses engagement metrics for quality
  metrics.communityRating = 0;
  metrics.communityVoteCount = 0;

  // Calculate quality score (YouTube has lower baseline due to source type)
  enriched.qualityMetrics = metrics;
  enriched.scoreBreakdown = calculateQualityScore(item, metrics);
  enriched.score = Math.round(enriched.scoreBreakdown.totalScore);

  console.log(`✓ Quality score: ${enriched.score}/100`);

  return enriched;
}

/**
 * Enrich Reddit post (full content already in rawExcerpt)
 */
async function enrichRedditPost(item: InsertItem): Promise<EnrichedItem> {
  const enriched: EnrichedItem = { ...item };
  
  // Reddit posts come with full text in rawExcerpt
  enriched.fullText = item.rawExcerpt;
  
  const metrics: QualityMetrics = {
    communityRating: 0,
    communityVoteCount: 0,
  };

  // Calculate quality score
  enriched.qualityMetrics = metrics;
  enriched.scoreBreakdown = calculateQualityScore(item as any, metrics);
  enriched.score = Math.round(enriched.scoreBreakdown.totalScore);

  return enriched;
}

/**
 * Enrich Substack post (full content already in rawExcerpt)
 */
async function enrichSubstackPost(item: InsertItem): Promise<EnrichedItem> {
  const enriched: EnrichedItem = { ...item };
  
  // Substack posts come with full text in rawExcerpt
  enriched.fullText = item.rawExcerpt;
  
  const metrics: QualityMetrics = {
    communityRating: 0,
    communityVoteCount: 0,
  };

  // Calculate quality score
  enriched.qualityMetrics = metrics;
  enriched.scoreBreakdown = calculateQualityScore(item as any, metrics);
  enriched.score = Math.round(enriched.scoreBreakdown.totalScore);

  return enriched;
}

/**
 * Main enrichment function - routes to appropriate handler
 */
export async function enrichContent(item: InsertItem): Promise<EnrichedItem> {
  try {
    switch (item.sourceType) {
      case 'journal':
        return await enrichJournalArticle(item);
      case 'youtube':
        return await enrichYouTubeVideo(item);
      case 'reddit':
        return await enrichRedditPost(item);
      case 'substack':
        return await enrichSubstackPost(item);
      default:
        console.warn(`Unknown source type: ${item.sourceType}`);
        return item;
    }
  } catch (error) {
    console.error(`Error enriching content for ${item.title}:`, error);
    return item;
  }
}

/**
 * Batch enrich items with rate limiting
 */
export async function enrichContentBatch(
  items: InsertItem[],
  concurrency: number = 3
): Promise<EnrichedItem[]> {
  const enriched: EnrichedItem[] = [];
  
  console.log(`\n📊 Enriching ${items.length} items (concurrency: ${concurrency})...`);
  
  // Process in batches to respect API rate limits
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(enrichContent));
    enriched.push(...batchResults);
    
    console.log(`Progress: ${Math.min(i + concurrency, items.length)}/${items.length}`);
    
    // Rate limit: wait 1 second between batches (Semantic Scholar requires 1 req/sec)
    if (i + concurrency < items.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`✓ Enrichment complete: ${enriched.length} items processed\n`);
  
  return enriched;
}
