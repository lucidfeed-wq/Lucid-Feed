/**
 * Transparent Multi-Signal Quality Scoring System
 * 
 * Combines multiple signals to create an unbiased, transparent quality score:
 * - Citation Metrics (30%): Citation count, influential citations, velocity
 * - Author Credibility (25%): H-index, author citation count
 * - Methodology Quality (25%): AI assessment of study design, bias detection
 * - Community Verification (10%): Practitioner ratings and flags
 * - Recency (10%): Time-decay factor for recent research
 * 
 * Final Score: 0-100 with full transparency and breakdown
 */

import type { Item } from '@shared/schema';

export interface QualityMetrics {
  citationCount?: number;
  influentialCitations?: number;
  citationVelocity?: number;
  authorHIndex?: number;
  authorCitationCount?: number;
  fundingSources?: string[];
  conflictOfInterest?: boolean;
  biasFlags?: string[];
  communityRating?: number;
  communityVoteCount?: number;
}

export interface ScoreBreakdown {
  citationScore: number;
  authorCredibility: number;
  methodologyQuality: number;
  communityVerification: number;
  recencyScore: number;
  totalScore: number;
  explanation: string;
}

/**
 * Calculate citation score (0-30 points)
 * Based on citation count, influential citations, and velocity
 */
function calculateCitationScore(metrics: QualityMetrics): number {
  const citationCount = metrics.citationCount || 0;
  const influentialCitations = metrics.influentialCitations || 0;
  const citationVelocity = metrics.citationVelocity || 0;
  
  // Normalize citation count (log scale to handle outliers)
  // 0 citations = 0, 10 = 33%, 100 = 67%, 1000+ = 100%
  const citationNormalized = Math.min(Math.log10(citationCount + 1) / 3, 1);
  
  // Influential citations worth more (0-50% of citations are typically influential)
  const influentialRatio = citationCount > 0 ? influentialCitations / citationCount : 0;
  const influentialBonus = influentialRatio * 0.3; // Up to 30% bonus
  
  // Citation velocity indicates trending impact
  // Velocity > 5 = trending, > 10 = hot topic
  const velocityBonus = Math.min(citationVelocity / 20, 0.2); // Up to 20% bonus
  
  const rawScore = citationNormalized + influentialBonus + velocityBonus;
  const score = Math.min(rawScore, 1) * 30; // Max 30 points
  
  return Math.round(score * 10) / 10;
}

/**
 * Calculate author credibility score (0-25 points)
 * Based on h-index and author citation count
 */
function calculateAuthorScore(metrics: QualityMetrics): number {
  const hIndex = metrics.authorHIndex || 0;
  const authorCitations = metrics.authorCitationCount || 0;
  
  // H-index scoring: 0 = 0%, 10 = 33%, 30 = 67%, 50+ = 100%
  const hIndexNormalized = Math.min(hIndex / 50, 1);
  
  // Author citation count (log scale)
  // 0 = 0%, 100 = 33%, 1000 = 67%, 10000+ = 100%
  const citationNormalized = Math.min(Math.log10(authorCitations + 1) / 4, 1);
  
  const rawScore = (hIndexNormalized * 0.6) + (citationNormalized * 0.4);
  const score = rawScore * 25; // Max 25 points
  
  return Math.round(score * 10) / 10;
}

/**
 * Calculate methodology quality score (0-25 points)
 * This will be enhanced by AI assessment, for now uses basic indicators
 */
function calculateMethodologyScore(
  metrics: QualityMetrics,
  sourceType: string,
  isPreprint: boolean
): number {
  let score = 25; // Start with max score
  
  // Deductions for quality concerns
  
  // Preprint penalty (not peer-reviewed)
  if (isPreprint) {
    score -= 5;
  }
  
  // Conflict of interest penalty
  if (metrics.conflictOfInterest) {
    score -= 8;
  }
  
  // Bias flags (pharma, ag, etc.)
  const biasFlags = metrics.biasFlags || [];
  score -= biasFlags.length * 3; // -3 per flag
  
  // Funding source bias detection
  const fundingSources = metrics.fundingSources || [];
  const suspiciousFunders = fundingSources.filter((funder) =>
    /pharmaceutical|pharma|pfizer|moderna|merck|bayer|monsanto|agriculture|agri|food industry/i.test(
      funder
    )
  );
  score -= suspiciousFunders.length * 4; // -4 per suspicious funder
  
  // Source type quality baseline
  const sourceQuality = {
    journal: 0, // No penalty
    substack: -2,
    youtube: -3,
    reddit: -5,
  };
  score += sourceQuality[sourceType as keyof typeof sourceQuality] || 0;
  
  // Ensure score stays in bounds
  return Math.max(0, Math.min(25, Math.round(score * 10) / 10));
}

/**
 * Calculate community verification score (0-10 points)
 * Based on practitioner ratings and vote count
 */
function calculateCommunityScore(metrics: QualityMetrics): number {
  const rating = metrics.communityRating || 0; // 0-5 scale
  const voteCount = metrics.communityVoteCount || 0;
  
  if (voteCount === 0) {
    return 5; // Neutral score if no ratings yet
  }
  
  // Weight rating by vote count (more votes = more reliable)
  const confidence = Math.min(voteCount / 10, 1); // Full confidence at 10+ votes
  
  // Convert 0-5 rating to 0-10 score
  const score = (rating / 5) * 10 * confidence;
  
  // If very few votes, blend with neutral score
  if (voteCount < 5) {
    const neutral = 5;
    const weight = voteCount / 5;
    return Math.round((score * weight + neutral * (1 - weight)) * 10) / 10;
  }
  
  return Math.round(score * 10) / 10;
}

/**
 * Calculate recency score (0-10 points)
 * Recent research weighted higher to reflect scientific progress
 */
function calculateRecencyScore(publishedAt: string): number {
  const now = new Date();
  const published = new Date(publishedAt);
  const daysSince = (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24);
  
  // Scoring curve:
  // 0-30 days = 10 points (peak freshness)
  // 30-90 days = 8-10 points (very recent)
  // 90-365 days = 5-8 points (recent)
  // 1-2 years = 3-5 points (moderately recent)
  // 2-5 years = 1-3 points (older)
  // 5+ years = 0-1 points (dated)
  
  if (daysSince < 30) return 10;
  if (daysSince < 90) return 8 + (90 - daysSince) / 30;
  if (daysSince < 365) return 5 + (365 - daysSince) / 91.67;
  if (daysSince < 730) return 3 + (730 - daysSince) / 182.5;
  if (daysSince < 1825) return 1 + (1825 - daysSince) / 546.75;
  return Math.max(0, 1 - (daysSince - 1825) / 1825);
}

/**
 * Generate human-readable explanation of the score
 */
function generateExplanation(
  breakdown: Omit<ScoreBreakdown, 'explanation'>,
  metrics: QualityMetrics,
  sourceType: string
): string {
  const parts: string[] = [];
  
  // Citation analysis
  if (metrics.citationCount && metrics.citationCount > 0) {
    parts.push(
      `${metrics.citationCount} citations${
        metrics.influentialCitations
          ? ` (${metrics.influentialCitations} influential)`
          : ''
      }`
    );
  }
  
  // Author credibility
  if (metrics.authorHIndex && metrics.authorHIndex > 0) {
    parts.push(`Author h-index: ${metrics.authorHIndex}`);
  }
  
  // Quality concerns
  const concerns: string[] = [];
  if (metrics.conflictOfInterest) concerns.push('declared conflicts of interest');
  if (metrics.biasFlags && metrics.biasFlags.length > 0) {
    concerns.push(`bias flags: ${metrics.biasFlags.join(', ')}`);
  }
  if (metrics.fundingSources && metrics.fundingSources.length > 0) {
    const suspicious = metrics.fundingSources.filter((f) =>
      /pharmaceutical|pharma|monsanto|agriculture/i.test(f)
    );
    if (suspicious.length > 0) {
      concerns.push(`funding from ${suspicious.join(', ')}`);
    }
  }
  
  if (concerns.length > 0) {
    parts.push(`Quality concerns: ${concerns.join('; ')}`);
  }
  
  // Community input
  if (metrics.communityRating && metrics.communityVoteCount && metrics.communityVoteCount > 0) {
    parts.push(
      `Community rating: ${metrics.communityRating.toFixed(1)}/5.0 (${
        metrics.communityVoteCount
      } votes)`
    );
  }
  
  // Source type
  parts.push(`Source: ${sourceType}`);
  
  return parts.join(' | ');
}

/**
 * Calculate comprehensive quality score with full transparency
 */
export function calculateQualityScore(
  item: Partial<Item>,
  metrics: QualityMetrics
): ScoreBreakdown {
  const citationScore = calculateCitationScore(metrics);
  const authorCredibility = calculateAuthorScore(metrics);
  const methodologyQuality = calculateMethodologyScore(
    metrics,
    item.sourceType || 'journal',
    item.isPreprint || false
  );
  const communityVerification = calculateCommunityScore(metrics);
  const recencyScore = calculateRecencyScore(item.publishedAt || new Date().toISOString());
  
  const totalScore = Math.round(
    (citationScore + authorCredibility + methodologyQuality + communityVerification + recencyScore) *
      10
  ) / 10;
  
  const breakdown: ScoreBreakdown = {
    citationScore,
    authorCredibility,
    methodologyQuality,
    communityVerification,
    recencyScore,
    totalScore,
    explanation: '',
  };
  
  breakdown.explanation = generateExplanation(breakdown, metrics, item.sourceType || 'journal');
  
  return breakdown;
}
