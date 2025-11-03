/**
 * Unified Quality Scoring System (Works for ALL sources)
 * 
 * 5 transparent components:
 * - Content Quality (40%): AI-assessed content depth and clinical value
 * - Engagement Signals (20%): Normalized engagement across sources
 * - Source Credibility (20%): Domain/author reputation
 * - Recency (10%): Time-decay factor
 * - Community Validation (10%): Practitioner ratings
 * 
 * Traditional metrics (citations, h-index) shown separately for journals
 */

import type { Item } from '@shared/schema';

export interface QualityMetrics {
  // Content Quality (from AI)
  contentQualityScore?: number; // 0-40
  evidenceQuality?: number; // 0-10
  clinicalValue?: number; // 0-10
  clarityStructure?: number; // 0-10
  practicalApplicability?: number; // 0-10
  contentQualityReasoning?: string;
  
  // Engagement Signals (source-specific)
  upvotes?: number;
  comments?: number;
  views?: number;
  likes?: number;
  
  // Source Credibility
  journalTier?: 'high' | 'mid' | 'low'; // For journals
  subredditQuality?: number; // For Reddit (0-10)
  channelSubscribers?: number; // For YouTube
  authorReputation?: number; // For Substack (0-10)
  
  // Traditional metrics (for journals - shown separately)
  citationCount?: number;
  influentialCitations?: number;
  citationVelocity?: number;
  authorHIndex?: number;
  authorCitationCount?: number;
  
  // Quality flags
  fundingSources?: string[];
  conflictOfInterest?: boolean;
  biasFlags?: string[];
  
  // Community
  communityRating?: number;
  communityVoteCount?: number;
}

export interface ScoreBreakdown {
  contentQuality: number; // 0-40
  engagementSignals: number; // 0-20
  sourceCredibility: number; // 0-20
  recencyScore: number; // 0-10
  communityValidation: number; // 0-10
  totalScore: number; // 0-100
  explanation: string;
}

/**
 * Calculate engagement score (0-20 points)
 * Normalized across different source types
 */
function calculateEngagementScore(
  metrics: QualityMetrics,
  sourceType: string
): number {
  const upvotes = metrics.upvotes || 0;
  const comments = metrics.comments || 0;
  const views = metrics.views || 0;
  
  let normalized = 0;
  
  switch (sourceType) {
    case 'journal':
      // Use citation count if available
      const citations = metrics.citationCount || 0;
      // 0 citations = 0, 10 = 33%, 50 = 67%, 100+ = 100%
      normalized = Math.min(Math.log10(citations + 1) / 2, 1);
      break;
      
    case 'reddit':
      // Upvotes + engagement ratio
      // 0-10 upvotes = 0-33%, 10-100 = 33-67%, 100+ = 67-100%
      const upvoteScore = Math.min(Math.log10(upvotes + 1) / 2, 1);
      
      // Comments indicate engagement quality
      const commentRatio = upvotes > 0 ? Math.min(comments / upvotes, 0.5) : 0;
      
      normalized = Math.min(upvoteScore + commentRatio, 1);
      break;
      
    case 'youtube':
      // Views and likes
      // 0-1k views = 0-33%, 1k-10k = 33-67%, 10k+ = 67-100%
      const viewScore = Math.min(Math.log10(views + 1) / 4, 0.7);
      
      // Like ratio (5% is good, 10% is excellent)
      const likeRatio = views > 0 ? Math.min((metrics.likes || 0) / views * 10, 0.3) : 0;
      
      normalized = Math.min(viewScore + likeRatio, 1);
      break;
      
    case 'substack':
      // Likes and comments
      // Similar to Reddit but adjusted for Substack scale
      const substackScore = Math.min(Math.log10((metrics.likes || 0) + 1) / 2, 0.8);
      const substackComments = Math.min(comments / 20, 0.2);
      
      normalized = Math.min(substackScore + substackComments, 1);
      break;
      
    default:
      normalized = 0.3; // Baseline
  }
  
  const score = normalized * 20;
  return Math.round(score * 10) / 10;
}

/**
 * Calculate source credibility score (0-20 points)
 * Based on platform-specific reputation signals
 */
function calculateSourceCredibility(
  metrics: QualityMetrics,
  sourceType: string,
  journalName?: string | null,
  authorOrChannel?: string
): number {
  let score = 10; // Baseline
  
  switch (sourceType) {
    case 'journal':
      // Journal tier (high-impact vs lower-impact)
      const tier = metrics.journalTier || inferJournalTier(journalName);
      
      if (tier === 'high') {
        score = 20; // Nature, Science, NEJM, Lancet, JAMA, BMJ
      } else if (tier === 'mid') {
        score = 15; // PLoS, Frontiers, specialty journals
      } else {
        score = 12; // Other journals
      }
      
      // Deduct for preprint
      // (already handled in content quality, but could add small penalty)
      break;
      
    case 'reddit':
      // Subreddit quality
      const subredditQuality = metrics.subredditQuality || 5;
      score = Math.min(subredditQuality * 2, 20); // 0-10 scale → 0-20
      break;
      
    case 'youtube':
      // Channel subscribers (log scale)
      const subscribers = metrics.channelSubscribers || 0;
      // 0 = 5, 1k = 10, 10k = 15, 100k+ = 20
      score = 5 + Math.min(Math.log10(subscribers + 1) / 5 * 15, 15);
      break;
      
    case 'substack':
      // Author reputation (if tracked)
      const reputation = metrics.authorReputation || 5;
      score = Math.min(reputation * 2, 20); // 0-10 scale → 0-20
      break;
  }
  
  // Quality deductions (apply to all sources)
  if (metrics.conflictOfInterest) score -= 3;
  if (metrics.biasFlags && metrics.biasFlags.length > 0) {
    score -= metrics.biasFlags.length * 2;
  }
  
  return Math.max(0, Math.min(20, Math.round(score * 10) / 10));
}

/**
 * Infer journal tier from journal name
 */
function inferJournalTier(journalName?: string | null): 'high' | 'mid' | 'low' {
  if (!journalName) return 'low';
  
  const name = journalName.toLowerCase();
  
  // High-impact journals
  const highImpact = [
    'nature', 'science', 'cell', 'lancet', 'nejm', 'jama', 'bmj',
    'pnas', 'immunity', 'neuron', 'annual review'
  ];
  
  if (highImpact.some(j => name.includes(j))) {
    return 'high';
  }
  
  // Mid-tier journals
  const midTier = [
    'plos', 'frontiers', 'nutrients', 'journal of', 'european',
    'american journal', 'clinical', 'metabolism', 'diabetes'
  ];
  
  if (midTier.some(j => name.includes(j))) {
    return 'mid';
  }
  
  return 'low';
}

/**
 * Calculate recency score (0-10 points)
 */
function calculateRecencyScore(publishedAt: string): number {
  const now = new Date();
  const published = new Date(publishedAt);
  const daysSince = (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24);
  
  if (daysSince < 7) return 10; // <1 week
  if (daysSince < 30) return 9; // <1 month
  if (daysSince < 90) return 7; // <3 months
  if (daysSince < 180) return 5; // <6 months
  if (daysSince < 365) return 3; // <1 year
  return Math.max(0, 1 - (daysSince - 365) / 1825); // Decay over 5 years
}

/**
 * Calculate community validation score (0-10 points)
 */
function calculateCommunityScore(metrics: QualityMetrics): number {
  const rating = metrics.communityRating || 0;
  const voteCount = metrics.communityVoteCount || 0;
  
  if (voteCount === 0) {
    return 5; // Neutral baseline (no ratings yet)
  }
  
  // Confidence increases with vote count
  const confidence = Math.min(voteCount / 10, 1);
  
  // Convert 0-5 rating to 0-10 score
  const score = (rating / 5) * 10 * confidence;
  
  // Blend with neutral score if few votes
  if (voteCount < 5) {
    const weight = voteCount / 5;
    return Math.round((score * weight + 5 * (1 - weight)) * 10) / 10;
  }
  
  return Math.round(score * 10) / 10;
}

/**
 * Generate human-readable explanation
 */
function generateExplanation(
  breakdown: Omit<ScoreBreakdown, 'explanation'>,
  metrics: QualityMetrics,
  sourceType: string
): string {
  const parts: string[] = [];
  
  // Content quality
  if (metrics.contentQualityReasoning) {
    parts.push(metrics.contentQualityReasoning);
  }
  
  // Engagement
  if (sourceType === 'reddit' && metrics.upvotes) {
    parts.push(`${metrics.upvotes} upvotes, ${metrics.comments || 0} comments`);
  } else if (sourceType === 'youtube' && metrics.views) {
    parts.push(`${metrics.views} views`);
  } else if (sourceType === 'journal' && metrics.citationCount) {
    parts.push(`${metrics.citationCount} citations`);
  }
  
  // Community
  if (metrics.communityRating && metrics.communityVoteCount && metrics.communityVoteCount > 0) {
    parts.push(`Community: ${metrics.communityRating.toFixed(1)}/5 (${metrics.communityVoteCount} votes)`);
  }
  
  // Source type
  parts.push(`Source: ${sourceType}`);
  
  return parts.join(' | ');
}

/**
 * Calculate unified quality score (works for ALL sources)
 */
export function calculateQualityScore(
  item: Partial<Item>,
  metrics: QualityMetrics
): ScoreBreakdown {
  // Content Quality (40%) - from AI analyzer or baseline
  const contentQuality = metrics.contentQualityScore || getBaselineContentScore(item.sourceType || 'journal');
  
  // Engagement Signals (20%)
  const engagementSignals = calculateEngagementScore(metrics, item.sourceType || 'journal');
  
  // Source Credibility (20%)
  const sourceCredibility = calculateSourceCredibility(
    metrics,
    item.sourceType || 'journal',
    item.journalName,
    item.authorOrChannel
  );
  
  // Recency (10%)
  const recencyScore = calculateRecencyScore(item.publishedAt || new Date().toISOString());
  
  // Community Validation (10%)
  const communityValidation = calculateCommunityScore(metrics);
  
  const totalScore = Math.round(
    (contentQuality + engagementSignals + sourceCredibility + recencyScore + communityValidation) * 10
  ) / 10;
  
  const breakdown: ScoreBreakdown = {
    contentQuality,
    engagementSignals,
    sourceCredibility,
    recencyScore,
    communityValidation,
    totalScore,
    explanation: '',
  };
  
  breakdown.explanation = generateExplanation(breakdown, metrics, item.sourceType || 'journal');
  
  return breakdown;
}

/**
 * Get baseline content score when AI analysis unavailable
 */
function getBaselineContentScore(sourceType: string): number {
  const baselines = {
    journal: 25,
    substack: 22,
    youtube: 20,
    reddit: 18,
  };
  
  return baselines[sourceType as keyof typeof baselines] || 20;
}

/**
 * Calculate traditional citation-based score for journals (shown separately)
 * This is NOT part of the unified score, but displayed alongside it
 */
export function calculateTraditionalCitationMetrics(metrics: QualityMetrics): {
  citationScore: number;
  authorCredibility: number;
  description: string;
} {
  const citationCount = metrics.citationCount || 0;
  const hIndex = metrics.authorHIndex || 0;
  const influentialCitations = metrics.influentialCitations || 0;
  
  // Citation score (0-100 scale)
  const citationNormalized = Math.min(Math.log10(citationCount + 1) / 3, 1);
  const influentialRatio = citationCount > 0 ? influentialCitations / citationCount : 0;
  const citationScore = Math.round((citationNormalized + influentialRatio * 0.3) * 100);
  
  // Author credibility (0-100 scale)
  const hIndexNormalized = Math.min(hIndex / 50, 1);
  const authorCredibility = Math.round(hIndexNormalized * 100);
  
  let description = `${citationCount} citations`;
  if (influentialCitations > 0) {
    description += ` (${influentialCitations} influential)`;
  }
  if (hIndex > 0) {
    description += `, Author h-index: ${hIndex}`;
  }
  
  return {
    citationScore,
    authorCredibility,
    description,
  };
}
