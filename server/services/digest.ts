import { nanoid } from "nanoid";
import { format, subDays } from "date-fns";
import { storage } from "../storage";
import { rankItems } from "../core/ranking";
import type { InsertDigest, DigestSectionItem } from "@shared/schema";

export async function generateWeeklyDigest(): Promise<{ id: string; slug: string }> {
  console.log("Starting weekly digest generation...");

  // Define 7-day window
  const windowEnd = new Date();
  const windowStart = subDays(windowEnd, 7);

  // Fetch items from the past week
  const items = await storage.getItemsInWindow(
    windowStart.toISOString(),
    windowEnd.toISOString()
  );

  console.log(`Found ${items.length} items in window`);

  // Rank all items
  const rankedItems = rankItems(items);

  // Separate by source type
  const journalItems = rankedItems.filter(i => i.sourceType === 'journal');
  const redditItems = rankedItems.filter(i => i.sourceType === 'reddit');
  const substackItems = rankedItems.filter(i => i.sourceType === 'substack');
  const youtubeItems = rankedItems.filter(i => i.sourceType === 'youtube');

  // Build digest sections
  const researchHighlights: DigestSectionItem[] = journalItems.slice(0, 10).map(item => ({
    itemId: item.id,
    title: item.title,
    url: item.url,
    sourceType: item.sourceType,
    publishedAt: item.publishedAt,
    topics: item.topics,
    keyInsights: generateKeyInsights(item.rawExcerpt),
    clinicalTakeaway: generateClinicalTakeaway(item.rawExcerpt),
    methodology: selectMethodology(item.rawExcerpt, item.isPreprint),
    levelOfEvidence: selectEvidenceLevel(item.rawExcerpt),
    journalName: item.journalName,
    authorOrChannel: item.authorOrChannel,
  }));

  const communityTrends: DigestSectionItem[] = [...redditItems, ...substackItems]
    .slice(0, 10)
    .map(item => ({
      itemId: item.id,
      title: item.title,
      url: item.url,
      sourceType: item.sourceType,
      publishedAt: item.publishedAt,
      topics: item.topics,
      keyInsights: generateKeyInsights(item.rawExcerpt),
      authorOrChannel: item.authorOrChannel,
      engagement: item.engagement,
    }));

  const expertCommentary: DigestSectionItem[] = youtubeItems.slice(0, 8).map(item => ({
    itemId: item.id,
    title: item.title,
    url: item.url,
    sourceType: item.sourceType,
    publishedAt: item.publishedAt,
    topics: item.topics,
    keyInsights: generateKeyInsights(item.rawExcerpt),
    authorOrChannel: item.authorOrChannel,
    engagement: item.engagement,
  }));

  // Generate public slug (format: 2025w05)
  const year = windowEnd.getFullYear();
  const week = Math.ceil((windowEnd.getDate() - windowStart.getDate() + 1) / 7);
  const publicSlug = `${year}w${String(week).padStart(2, '0')}`;

  const digest: InsertDigest = {
    windowStart: windowStart.toISOString(),
    windowEnd: windowEnd.toISOString(),
    generatedAt: new Date().toISOString(),
    sections: {
      researchHighlights,
      communityTrends,
      expertCommentary,
    },
    publicSlug,
    version: 1,
  };

  const created = await storage.createDigest(digest);
  console.log(`Digest created: ${created.id} (${publicSlug})`);

  return { id: created.id, slug: publicSlug };
}

function generateKeyInsights(excerpt: string): string {
  // Simple extraction - take first 120 words
  const words = excerpt.split(/\s+/).slice(0, 20).join(' ');
  return words + (excerpt.split(/\s+/).length > 20 ? '...' : '');
}

function generateClinicalTakeaway(excerpt: string): string {
  // Simple extraction - take a snippet
  const words = excerpt.split(/\s+/).slice(0, 12).join(' ');
  return words + (excerpt.split(/\s+/).length > 12 ? '...' : '');
}

function selectMethodology(excerpt: string, isPreprint: boolean): any {
  if (isPreprint) return 'Preprint';
  if (/randomized|RCT/i.test(excerpt)) return 'RCT';
  if (/cohort/i.test(excerpt)) return 'Cohort';
  if (/meta-analysis|meta analysis/i.test(excerpt)) return 'Meta';
  if (/case study|case report/i.test(excerpt)) return 'Case';
  if (/review/i.test(excerpt)) return 'Review';
  return 'NA';
}

function selectEvidenceLevel(excerpt: string): any {
  if (/high quality|strong evidence|RCT|meta-analysis/i.test(excerpt)) return 'A';
  if (/moderate|cohort|case-control/i.test(excerpt)) return 'B';
  return 'C';
}
