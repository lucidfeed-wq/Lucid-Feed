/**
 * Crossref API Integration
 * Free API for fetching citation counts and metadata
 * No rate limit, but use polite pool with email
 */

const CROSSREF_BASE_URL = 'https://api.crossref.org';
const CROSSREF_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';

export interface CrossrefWork {
  DOI: string;
  title?: string[];
  'is-referenced-by-count': number;
  published?: {
    'date-parts': number[][];
  };
  author?: Array<{
    given?: string;
    family?: string;
    affiliation?: Array<{ name: string }>;
  }>;
  funder?: Array<{
    name: string;
    doi?: string;
    award?: string[];
  }>;
}

/**
 * Fetch citation count and metadata for a DOI
 */
export async function fetchCitationMetrics(doi: string): Promise<{
  citationCount: number;
  fundingSources: string[];
}> {
  try {
    const url = `${CROSSREF_BASE_URL}/works/${encodeURIComponent(doi)}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': `FunctionalMedicineIntelligence/1.0 (mailto:${CROSSREF_EMAIL})`,
      },
    });
    
    if (!response.ok) {
      console.warn(`Crossref API error for DOI ${doi}: ${response.status}`);
      return { citationCount: 0, fundingSources: [] };
    }
    
    const data = await response.json();
    const work: CrossrefWork = data.message;
    
    const citationCount = work['is-referenced-by-count'] || 0;
    const fundingSources = work.funder?.map((f) => f.name) || [];
    
    console.log(`Crossref: ${doi} has ${citationCount} citations, ${fundingSources.length} funding sources`);
    
    return {
      citationCount,
      fundingSources,
    };
  } catch (error) {
    console.error(`Error fetching from Crossref for DOI ${doi}:`, error);
    return { citationCount: 0, fundingSources: [] };
  }
}
