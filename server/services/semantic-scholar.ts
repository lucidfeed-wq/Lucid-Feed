/**
 * Semantic Scholar API Integration
 * Free API for author metrics, influential citations, citation velocity
 * Rate limit: 1 req/sec with API key (recommended)
 */

const SEMANTIC_SCHOLAR_BASE_URL = 'https://api.semanticscholar.org/graph/v1';
const API_KEY = process.env.SEMANTIC_SCHOLAR_API_KEY;

export interface SemanticScholarPaper {
  paperId: string;
  title: string;
  citationCount: number;
  influentialCitationCount: number;
  citationVelocity?: number;
  authors: Array<{
    authorId: string;
    name: string;
  }>;
}

export interface SemanticScholarAuthor {
  authorId: string;
  name: string;
  hIndex: number;
  citationCount: number;
  paperCount: number;
  affiliations?: string[];
}

/**
 * Fetch paper metrics from Semantic Scholar by DOI
 */
export async function fetchPaperMetrics(doi: string): Promise<{
  influentialCitations: number;
  citationVelocity: number;
  authorIds: string[];
} | null> {
  try {
    const url = `${SEMANTIC_SCHOLAR_BASE_URL}/paper/DOI:${encodeURIComponent(doi)}?fields=citationCount,influentialCitationCount,citationVelocity,authors`;
    
    const headers: Record<string, string> = {};
    if (API_KEY) {
      headers['x-api-key'] = API_KEY;
    }
    
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Paper not found in Semantic Scholar: ${doi}`);
      } else {
        console.warn(`Semantic Scholar API error for DOI ${doi}: ${response.status}`);
      }
      return null;
    }
    
    const paper: SemanticScholarPaper = await response.json();
    
    const influentialCitations = paper.influentialCitationCount || 0;
    const citationVelocity = paper.citationVelocity || 0;
    const authorIds = paper.authors.map((a) => a.authorId);
    
    console.log(`Semantic Scholar: ${doi} has ${influentialCitations} influential citations, velocity ${citationVelocity}`);
    
    return {
      influentialCitations,
      citationVelocity,
      authorIds,
    };
  } catch (error) {
    console.error(`Error fetching from Semantic Scholar for DOI ${doi}:`, error);
    return null;
  }
}

/**
 * Fetch author h-index and metrics
 */
export async function fetchAuthorMetrics(authorId: string): Promise<{
  hIndex: number;
  citationCount: number;
} | null> {
  try {
    const url = `${SEMANTIC_SCHOLAR_BASE_URL}/author/${authorId}?fields=hIndex,citationCount,paperCount`;
    
    const headers: Record<string, string> = {};
    if (API_KEY) {
      headers['x-api-key'] = API_KEY;
    }
    
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      console.warn(`Semantic Scholar API error for author ${authorId}: ${response.status}`);
      return null;
    }
    
    const author: SemanticScholarAuthor = await response.json();
    
    console.log(`Semantic Scholar: Author ${author.name} has h-index ${author.hIndex}`);
    
    return {
      hIndex: author.hIndex || 0,
      citationCount: author.citationCount || 0,
    };
  } catch (error) {
    console.error(`Error fetching author metrics for ${authorId}:`, error);
    return null;
  }
}
