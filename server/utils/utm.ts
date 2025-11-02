/**
 * UTM tracking utilities for creator-friendly traffic attribution
 * Adds UTM parameters to outbound links so creators can see traffic from our digest
 */

export function addUTM(
  rawUrl: string,
  campaign: string,
  source: string = 'funcmed-digest',
  medium: string = 'referral'
): string {
  try {
    const url = new URL(rawUrl);
    url.searchParams.set('utm_source', source);
    url.searchParams.set('utm_medium', medium);
    url.searchParams.set('utm_campaign', campaign);
    return url.toString();
  } catch (error) {
    // If URL parsing fails, return original URL
    console.warn(`Failed to add UTM parameters to URL: ${rawUrl}`, error);
    return rawUrl;
  }
}

/**
 * Add UTM parameters for digest campaign tracking
 * @param url - Original URL
 * @param digestSlug - Digest identifier (e.g., "2024-w45")
 */
export function addDigestUTM(url: string, digestSlug: string): string {
  return addUTM(url, `weekly-${digestSlug}`);
}
