/**
 * Unpaywall API Integration
 * Free API for finding open access versions of research papers
 * Rate limit: 100,000 calls/day
 */

const UNPAYWALL_BASE_URL = 'https://api.unpaywall.org/v2';
const UNPAYWALL_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';

export interface UnpaywallResponse {
  doi: string;
  is_oa: boolean;
  best_oa_location?: {
    url_for_pdf?: string;
    url_for_landing_page?: string;
    version: 'publishedVersion' | 'acceptedVersion' | 'submittedVersion';
    license?: string;
    host_type?: string;
  };
  oa_status?: 'gold' | 'hybrid' | 'green' | 'bronze' | 'closed';
}

/**
 * Fetch open access PDF URL for a given DOI
 */
export async function fetchOpenAccessPDF(doi: string): Promise<{ pdfUrl: string | null; isOpenAccess: boolean }> {
  try {
    const url = `${UNPAYWALL_BASE_URL}/${encodeURIComponent(doi)}?email=${UNPAYWALL_EMAIL}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn(`Unpaywall API error for DOI ${doi}: ${response.status}`);
      return { pdfUrl: null, isOpenAccess: false };
    }
    
    const data: UnpaywallResponse = await response.json();
    
    if (!data.is_oa) {
      return { pdfUrl: null, isOpenAccess: false };
    }
    
    const pdfUrl = data.best_oa_location?.url_for_pdf || null;
    
    console.log(`Found open access PDF for ${doi}: ${pdfUrl ? 'YES' : 'NO (landing page only)'}`);
    
    return {
      pdfUrl,
      isOpenAccess: true,
    };
  } catch (error) {
    console.error(`Error fetching from Unpaywall for DOI ${doi}:`, error);
    return { pdfUrl: null, isOpenAccess: false };
  }
}

/**
 * Download and extract text from PDF
 * Note: This requires pdf-parse package
 */
export async function extractPDFText(pdfUrl: string): Promise<string | null> {
  try {
    // Dynamic import to handle optional dependency
    const pdfParse = (await import('pdf-parse')).default;
    
    // Download PDF
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      console.warn(`Failed to download PDF from ${pdfUrl}: ${response.status}`);
      return null;
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Parse PDF
    const data = await pdfParse(buffer);
    
    console.log(`Extracted ${data.text.length} characters from PDF`);
    
    return data.text;
  } catch (error) {
    console.error(`Error extracting PDF text from ${pdfUrl}:`, error);
    return null;
  }
}
