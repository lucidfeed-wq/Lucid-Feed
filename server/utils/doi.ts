/**
 * DOI (Digital Object Identifier) parsing utilities
 * Extracts DOIs from various formats (URLs, text, metadata)
 */

/**
 * Extract DOI from text or URL
 * Supports formats:
 * - https://doi.org/10.1234/example
 * - doi:10.1234/example
 * - 10.1234/example
 */
export function extractDOI(text: string): string | null {
  if (!text) return null;

  // DOI pattern: 10.xxxx/yyyy (minimum valid DOI structure)
  const doiPattern = /\b(10\.\d{4,}(?:\.\d+)*\/\S+)/i;
  
  // Try to extract from DOI URL
  const doiUrlPattern = /doi\.org\/(10\.\d{4,}(?:\.\d+)*\/[^\s<>"]+)/i;
  const urlMatch = text.match(doiUrlPattern);
  if (urlMatch) {
    return cleanDOI(urlMatch[1]);
  }

  // Try to extract from doi: prefix
  const doiPrefixPattern = /doi:\s*(10\.\d{4,}(?:\.\d+)*\/[^\s<>"]+)/i;
  const prefixMatch = text.match(doiPrefixPattern);
  if (prefixMatch) {
    return cleanDOI(prefixMatch[1]);
  }

  // Try direct DOI pattern
  const directMatch = text.match(doiPattern);
  if (directMatch) {
    return cleanDOI(directMatch[1]);
  }

  return null;
}

/**
 * Clean DOI by removing trailing punctuation and normalizing
 */
function cleanDOI(doi: string): string {
  // Remove trailing punctuation that might be part of markdown/html
  return doi.replace(/[.,;)\]]+$/, '').trim();
}

/**
 * Convert DOI to canonical URL
 */
export function doiToURL(doi: string): string {
  const cleanedDOI = doi.replace(/^doi:/i, '').trim();
  return `https://doi.org/${cleanedDOI}`;
}

/**
 * Check if a URL or text contains a DOI
 */
export function containsDOI(text: string): boolean {
  return extractDOI(text) !== null;
}

/**
 * Normalize DOI for deduplication (lowercase, remove whitespace)
 */
export function normalizeDOI(doi: string): string {
  return doi.toLowerCase().replace(/\s+/g, '');
}
