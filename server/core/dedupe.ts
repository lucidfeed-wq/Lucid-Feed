import { createHash } from "crypto";
import type { SourceType } from "@shared/schema";

export function generateHashDedupe(
  sourceType: SourceType,
  sourceId: string,
  title: string
): string {
  // Normalize DOI/URL for cross-source deduplication
  // Extract canonical identifier (DOI takes precedence)
  const doi = extractDOI(sourceId) || extractDOI(title);
  const url = extractURL(sourceId);
  
  // Use canonical identifier without source type for cross-source matching
  const canonicalId = doi || url || sourceId.toLowerCase();
  const normalized = `${canonicalId}|${title.toLowerCase().trim()}`;
  
  return createHash('sha256').update(normalized).digest('hex');
}

export function extractDOI(text: string): string | null {
  // Match DOI patterns like 10.xxxx/xxxxx
  const doiMatch = text.match(/10\.\d{4,}\/[^\s]+/);
  return doiMatch ? doiMatch[0].toLowerCase() : null;
}

export function extractURL(text: string): string | null {
  // Extract and normalize URL from text
  const urlMatch = text.match(/https?:\/\/[^\s]+/);
  if (!urlMatch) return null;
  
  // Normalize URL (remove trailing slashes, query params for comparison)
  let url = urlMatch[0].toLowerCase();
  url = url.replace(/\/$/, ''); // Remove trailing slash
  url = url.split('?')[0]; // Remove query params for deduplication
  
  return url;
}

export function getCanonicalIdentifier(sourceId: string, title: string): string {
  // Helper to get canonical identifier for an item
  const doi = extractDOI(sourceId) || extractDOI(title);
  const url = extractURL(sourceId);
  return doi || url || sourceId;
}
