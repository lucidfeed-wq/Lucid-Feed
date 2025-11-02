import { marked } from "marked";
import { storage } from "../storage";
import type { Digest } from "@shared/schema";

export async function exportDigestJSON(): Promise<string> {
  const digest = await storage.getLatestDigest();
  if (!digest) {
    throw new Error("No digest available");
  }
  return JSON.stringify(digest, null, 2);
}

export async function exportDigestMarkdown(): Promise<string> {
  const digest = await storage.getLatestDigest();
  if (!digest) {
    throw new Error("No digest available");
  }

  let md = `# Functional Medicine Intelligence Feed\n\n`;
  md += `## Weekly Digest: ${new Date(digest.windowStart).toLocaleDateString()} - ${new Date(digest.windowEnd).toLocaleDateString()}\n\n`;
  md += `Generated: ${new Date(digest.generatedAt).toLocaleString()}\n\n`;
  md += `---\n\n`;

  // Research Highlights
  if (digest.sections.researchHighlights.length > 0) {
    md += `## Research Highlights\n\n`;
    for (const item of digest.sections.researchHighlights) {
      md += `### ${item.title}\n\n`;
      md += `**Source:** ${item.journalName || item.authorOrChannel} | `;
      md += `**Published:** ${new Date(item.publishedAt).toLocaleDateString()}\n\n`;
      if (item.keyInsights) md += `${item.keyInsights}\n\n`;
      if (item.clinicalTakeaway) md += `**Clinical Takeaway:** ${item.clinicalTakeaway}\n\n`;
      md += `[Read More](${item.url})\n\n`;
      md += `---\n\n`;
    }
  }

  // Community Trends
  if (digest.sections.communityTrends.length > 0) {
    md += `## Community Trends\n\n`;
    for (const item of digest.sections.communityTrends) {
      md += `### ${item.title}\n\n`;
      md += `**Source:** ${item.authorOrChannel} | `;
      md += `**Published:** ${new Date(item.publishedAt).toLocaleDateString()}\n\n`;
      if (item.keyInsights) md += `${item.keyInsights}\n\n`;
      md += `[View Discussion](${item.url})\n\n`;
      md += `---\n\n`;
    }
  }

  // Expert Commentary
  if (digest.sections.expertCommentary.length > 0) {
    md += `## Expert Commentary\n\n`;
    for (const item of digest.sections.expertCommentary) {
      md += `### ${item.title}\n\n`;
      md += `**Channel:** ${item.authorOrChannel} | `;
      md += `**Published:** ${new Date(item.publishedAt).toLocaleDateString()}\n\n`;
      if (item.keyInsights) md += `${item.keyInsights}\n\n`;
      md += `[Watch Video](${item.url})\n\n`;
      md += `---\n\n`;
    }
  }

  return md;
}

export async function exportDigestRSS(): Promise<string> {
  const digest = await storage.getLatestDigest();
  if (!digest) {
    throw new Error("No digest available");
  }

  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Functional Medicine Intelligence Feed</title>
    <link>https://fm-intelligence.replit.app</link>
    <description>Weekly digest of functional medicine research and insights</description>
    <lastBuildDate>${new Date(digest.generatedAt).toUTCString()}</lastBuildDate>
`;

  const allItems = [
    ...digest.sections.researchHighlights,
    ...digest.sections.communityTrends,
    ...digest.sections.expertCommentary,
  ];

  for (const item of allItems) {
    rss += `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${item.keyInsights || ''}]]></description>
    </item>
`;
  }

  rss += `  </channel>
</rss>`;

  return rss;
}
