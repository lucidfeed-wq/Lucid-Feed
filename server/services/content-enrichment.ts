/**
 * Unified Content Enrichment Service
 * 
 * Orchestrates content quality assessment for ALL sources:
 * 1. Analyzes content quality using AI (40%)
 * 2. Collects engagement metrics (20%)
 * 3. Assesses source credibility (20%)
 * 4. Calculates unified quality score (0-100)
 * 
 * Traditional metrics (citations, h-index) collected separately for journals
 */

import type { InsertItem } from '@shared/schema';
import type { QualityMetrics, ScoreBreakdown } from '../core/quality-scoring';
import { calculateQualityScore, calculateTraditionalCitationMetrics, inferJournalTier } from '../core/quality-scoring';
import { analyzeContentQuality } from './content-quality-analyzer';
import { fetchOpenAccessPDF, extractPDFText } from './unpaywall';
import { fetchCitationMetrics } from './crossref';
import { fetchPaperMetrics, fetchAuthorMetrics } from './semantic-scholar';
import { fetchYouTubeTranscript } from './youtube-transcript';

export type EnrichedItem = InsertItem;

/**
 * Enrich ANY item with unified quality score
 */
export async function enrichItem(item: InsertItem): Promise<EnrichedItem> {
  const enriched: EnrichedItem = { ...item };
  const metrics: QualityMetrics = {};

  console.log(`Enriching ${item.sourceType}: ${item.title}`);

  // Step 1: Get full content for analysis
  let contentForAnalysis = item.rawExcerpt;

  if (item.sourceType === 'journal' && item.doi) {
    // Try to get full text from PDF
    try {
      const { pdfUrl, isOpenAccess } = await fetchOpenAccessPDF(item.doi);
      if (isOpenAccess && pdfUrl) {
        enriched.pdfUrl = pdfUrl;
        const fullText = await extractPDFText(pdfUrl);
        if (fullText) {
          enriched.fullText = fullText;
          contentForAnalysis = fullText;
          console.log(`✓ Extracted ${fullText.length} chars from PDF`);
        }
      }
    } catch (error) {
      console.log(`Could not fetch PDF for ${item.doi}`);
    }
  } else if (item.sourceType === 'youtube') {
    // Get full transcript
    try {
      const transcript = await fetchYouTubeTranscript(item.url);
      if (transcript) {
        enriched.fullText = transcript;
        contentForAnalysis = transcript;
        console.log(`✓ Extracted ${transcript.length} char transcript`);
      }
    } catch (error) {
      console.log(`Could not fetch transcript for ${item.url}`);
    }
  }
  // For Reddit/Substack, rawExcerpt is usually the full content

  // Step 2: AI Content Quality Analysis (40% of score)
  try {
    const contentQuality = await analyzeContentQuality(contentForAnalysis, item.sourceType);
    
    metrics.contentQualityScore = contentQuality.score;
    metrics.evidenceQuality = contentQuality.evidenceQuality;
    metrics.clinicalValue = contentQuality.clinicalValue;
    metrics.clarityStructure = contentQuality.clarityStructure;
    metrics.practicalApplicability = contentQuality.practicalApplicability;
    metrics.contentQualityReasoning = contentQuality.reasoning;
    
    console.log(`✓ Content quality: ${contentQuality.score}/40 - ${contentQuality.reasoning}`);
  } catch (error) {
    console.error('Error analyzing content quality:', error);
    // Fallback to baseline handled by scoring system
  }

  // Step 3: Collect Engagement Metrics (20% of score)
  metrics.upvotes = item.engagement?.upvotes || 0;
  metrics.comments = item.engagement?.comments || 0;
  metrics.views = item.engagement?.views || 0;

  // Step 4: Source Credibility (20% of score)
  // Infer from existing data
  if (item.sourceType === 'journal') {
    // Journal tier will be inferred from journal name in scoring
    metrics.journalTier = inferJournalTier(item.journalName);
  } else if (item.sourceType === 'reddit') {
    // Could track subreddit quality - for now use engagement as proxy
    metrics.subredditQuality = 5; // Baseline
  } else if (item.sourceType === 'youtube') {
    // Could extract from channel - for now use engagement as proxy
    metrics.channelSubscribers = 0;
  }

  // Step 5: Collect Traditional Metrics (journals only - shown separately)
  if (item.sourceType === 'journal' && item.doi) {
    // Crossref citations
    try {
      const crossrefData = await fetchCitationMetrics(item.doi);
      metrics.citationCount = crossrefData.citationCount;
      metrics.fundingSources = crossrefData.fundingSources;
      
      // Detect conflicts of interest
      const suspiciousFunders = crossrefData.fundingSources.filter((funder) =>
        /pharmaceutical|pharma|pfizer|moderna|merck|bayer|monsanto|agriculture|agri/i.test(funder)
      );
      
      if (suspiciousFunders.length > 0) {
        metrics.conflictOfInterest = true;
        metrics.biasFlags = suspiciousFunders.map((f) => `Funded by ${f}`);
      }
      
      console.log(`✓ Citations: ${metrics.citationCount}`);
    } catch (error) {
      console.log(`Could not fetch Crossref data for ${item.doi}`);
    }

    // Semantic Scholar advanced metrics
    try {
      const paperData = await fetchPaperMetrics(item.doi);
      
      if (paperData) {
        metrics.influentialCitations = paperData.influentialCitations;
        metrics.citationVelocity = paperData.citationVelocity;
        
        // Author metrics
        if (paperData.authorIds.length > 0) {
          const authorData = await fetchAuthorMetrics(paperData.authorIds[0]);
          if (authorData) {
            metrics.authorHIndex = authorData.hIndex;
            metrics.authorCitationCount = authorData.citationCount;
            console.log(`✓ Author h-index: ${authorData.hIndex}`);
          }
        }
      }
    } catch (error) {
      console.log(`Could not fetch Semantic Scholar data for ${item.doi}`);
    }
  }

  // Step 6: Calculate Unified Quality Score
  enriched.qualityMetrics = metrics;
  enriched.scoreBreakdown = calculateQualityScore(item as any, metrics);
  enriched.score = Math.round(enriched.scoreBreakdown.totalScore);

  console.log(
    `✓ Unified Score: ${enriched.score}/100 ` +
    `(Content: ${enriched.scoreBreakdown.contentQuality}, ` +
    `Engagement: ${enriched.scoreBreakdown.engagementSignals}, ` +
    `Credibility: ${enriched.scoreBreakdown.sourceCredibility})`
  );

  return enriched;
}

/**
 * Enrich multiple items in parallel with concurrency control
 */
export async function enrichContentBatch(
  items: InsertItem[],
  concurrency: number = 3
): Promise<EnrichedItem[]> {
  console.log(`📊 Enriching ${items.length} items (concurrency: ${concurrency})...`);
  
  const results: EnrichedItem[] = [];
  
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map((item) => enrichItem(item).catch((err) => {
        console.error(`Error enriching ${item.title}:`, err);
        return item; // Return original if enrichment fails
      }))
    );
    
    results.push(...batchResults);
    
    // Progress indicator
    if ((i + concurrency) % 50 === 0 || i + concurrency >= items.length) {
      console.log(`Progress: ${Math.min(i + concurrency, items.length)}/${items.length}`);
    }
  }
  
  console.log(`✓ Enrichment complete: ${items.length} items processed`);
  return results;
}
