import { createHash } from "crypto";

/**
 * Generate deduplication hash from URL and title.
 * This ensures cross-source deduplication works by using canonical identifiers.
 * 
 * @param url - The canonical URL of the content
 * @param title - The title of the content
 * @returns SHA-256 hash for deduplication
 */
export function generateHashDedupe(url: string, title: string): string {
  // Extract DOI if present in URL (journals often link to doi.org)
  const doi = extractDOI(url) || extractDOI(title);
  
  // Normalize URL for consistent hashing
  let canonicalUrl = url.toLowerCase().trim();
  
  // Remove query parameters and fragments first
  canonicalUrl = canonicalUrl.split('?')[0].split('#')[0];
  
  // Remove protocol variations (http vs https)
  canonicalUrl = canonicalUrl.replace(/^https?:\/\//, '');
  
  // Remove www prefix
  canonicalUrl = canonicalUrl.replace(/^www\./, '');
  
  // Remove trailing slashes after query/fragment removal
  canonicalUrl = canonicalUrl.replace(/\/+$/, '');
  
  // Use DOI if available (most canonical), otherwise normalized URL
  const canonicalId = doi || canonicalUrl;
  
  // Normalize title
  const normalizedTitle = title.toLowerCase().trim().replace(/\s+/g, ' ');
  
  // Generate hash from canonical identifier + title
  const normalized = `${canonicalId}|${normalizedTitle}`;
  
  return createHash('sha256').update(normalized).digest('hex');
}

export function extractDOI(text: string): string | null {
  // Match DOI patterns like 10.xxxx/xxxxx
  const doiMatch = text.match(/10\.\d{4,}\/[^\s\])]+/);
  if (!doiMatch) return null;
  
  // Normalize DOI to lowercase
  return doiMatch[0].toLowerCase();
}

export function extractURL(text: string): string | null {
  // Extract first URL from text
  const urlMatch = text.match(/https?:\/\/[^\s]+/);
  return urlMatch ? urlMatch[0] : null;
}
