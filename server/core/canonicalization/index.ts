import crypto from 'crypto';
import { URL } from 'url';

export interface CanonicalResult {
  canonicalId: string;
  canonicalUrl: string | null;
  doi: string | null;
  isPrimary: boolean;
}

/**
 * Normalize URL for canonical comparison
 * - Lowercase host
 * - Strip UTM params and fragments
 * - Drop trailing slash
 * - Normalize path
 */
export function normalizeUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    
    // Lowercase host
    parsed.hostname = parsed.hostname.toLowerCase();
    
    // Strip UTM parameters and other tracking params
    const paramsToRemove = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'fbclid', 'gclid'];
    paramsToRemove.forEach(param => parsed.searchParams.delete(param));
    
    // Remove fragment
    parsed.hash = '';
    
    // Normalize path
    let path = parsed.pathname;
    // Remove trailing slash unless it's the root path
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    parsed.pathname = path;
    
    return parsed.toString();
  } catch (error) {
    return null;
  }
}

/**
 * Extract DOI from various formats
 * - Direct DOI: 10.1234/example
 * - DOI URL: https://doi.org/10.1234/example
 * - DOI URL: https://dx.doi.org/10.1234/example
 */
export function extractDoi(text: string): string | null {
  if (!text) return null;
  
  // Match DOI patterns
  const doiPatterns = [
    /\b(10\.\d{4,}(?:\.\d+)*\/\S+?)(?=\s|$|[,;.](?:\s|$))/i,
    /doi\.org\/(10\.\d{4,}(?:\.\d+)*\/\S+?)(?=\s|$|[,;.](?:\s|$))/i,
    /dx\.doi\.org\/(10\.\d{4,}(?:\.\d+)*\/\S+?)(?=\s|$|[,;.](?:\s|$))/i,
  ];
  
  for (const pattern of doiPatterns) {
    const match = text.match(pattern);
    if (match) {
      return match[1] || match[0];
    }
  }
  
  return null;
}

/**
 * Generate canonical ID and determine if this is a primary source or reference
 * 
 * Rules:
 * - If DOI exists, DOI is canonical ID (primary source)
 * - Otherwise, use hash of normalized URL as canonical ID
 * - Social posts (Reddit, YouTube) that reference a DOI/URL become related_refs
 */
export function canonicalize(url: string, title: string, excerpt: string, sourceType: string): CanonicalResult {
  // Try to extract DOI from content
  const doiFromContent = extractDoi(`${title} ${excerpt}`);
  const doiFromUrl = extractDoi(url);
  const doi = doiFromContent || doiFromUrl;
  
  // If we have a DOI, use it as canonical ID
  if (doi) {
    return {
      canonicalId: `doi:${doi}`,
      canonicalUrl: null,
      doi,
      isPrimary: sourceType === 'journal', // Journals are primary sources
    };
  }
  
  // Otherwise, normalize URL and hash it
  const normalized = normalizeUrl(url);
  if (!normalized) {
    // Fallback to hashing the original URL if normalization fails
    const hash = crypto.createHash('sha256').update(url).digest('hex');
    return {
      canonicalId: `url:${hash}`,
      canonicalUrl: url,
      doi: null,
      isPrimary: true,
    };
  }
  
  const hash = crypto.createHash('sha256').update(normalized).digest('hex');
  
  return {
    canonicalId: `url:${hash}`,
    canonicalUrl: normalized,
    doi: null,
    isPrimary: true, // Normalized URLs are considered primary
  };
}

/**
 * Check if this item references another canonical item
 * Used to determine if we should create a related_ref or a new primary item
 */
export function extractReferencedCanonicalId(url: string, title: string, excerpt: string): string | null {
  // Check if content contains a DOI reference
  const doi = extractDoi(`${title} ${excerpt}`);
  if (doi) {
    return `doi:${doi}`;
  }
  
  // Check if content contains URLs that should be canonical
  const urlPattern = /(https?:\/\/[^\s<>"]+)/gi;
  const urls = `${title} ${excerpt}`.match(urlPattern);
  
  if (urls && urls.length > 0) {
    // Return the first normalized URL as potential canonical reference
    const normalized = normalizeUrl(urls[0]);
    if (normalized) {
      const hash = crypto.createHash('sha256').update(normalized).digest('hex');
      return `url:${hash}`;
    }
  }
  
  return null;
}
