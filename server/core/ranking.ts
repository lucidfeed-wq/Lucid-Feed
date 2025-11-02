import type { Item, SourceType } from "@shared/schema";

const QUALITY_SCORES: Record<SourceType, number> = {
  journal: 1.0,
  substack: 0.7,
  youtube: 0.6,
  reddit: 0.5,
};

export function calculateScore(item: Item, allItems: Item[]): number {
  // Quality component
  const quality = QUALITY_SCORES[item.sourceType];

  // Recency component (inverse days since publication)
  const now = new Date();
  const published = new Date(item.publishedAt);
  const daysSince = Math.max(1, (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24));
  const recency = 1 / daysSince;

  // Engagement z-score
  const totalEngagement = item.engagement.comments + item.engagement.upvotes + (item.engagement.views / 100);
  const engagements = allItems.map(i => i.engagement.comments + i.engagement.upvotes + (i.engagement.views / 100));
  const mean = engagements.reduce((a, b) => a + b, 0) / engagements.length;
  const variance = engagements.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / engagements.length;
  const stdDev = Math.sqrt(variance);
  const engagementZ = stdDev > 0 ? (totalEngagement - mean) / stdDev : 0;

  // Topic weight (more topics = slightly higher weight)
  const topicWeight = Math.min(item.topics.length / 5, 1);

  // Calculate final score
  let score = (0.35 * quality) + (0.25 * recency) + (0.25 * engagementZ) + (0.15 * topicWeight);

  // Penalty for preprints
  if (item.isPreprint) {
    score -= 0.1;
  }

  return Math.max(0, score);
}

export function rankItems(items: Item[]): Item[] {
  const rankedItems = items.map(item => ({
    ...item,
    score: calculateScore(item, items),
  }));

  return rankedItems.sort((a, b) => (b.score || 0) - (a.score || 0));
}
