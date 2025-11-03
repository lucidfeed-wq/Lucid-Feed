import OpenAI from 'openai';
import type { Item, InsertSummary, Methodology, EvidenceLevel } from '@shared/schema';

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

export async function generateSummary(item: Item): Promise<InsertSummary> {
  const systemPrompt = `You are a functional medicine expert who summarizes scientific articles and health content for medical practitioners.

Your task: Extract comprehensive insights and detailed clinical takeaways from content, and classify the methodology and evidence level.

Response format (JSON):
{
  "keyInsights": "Provide 5-7 distinct, actionable insights as a detailed paragraph (150-200 words). Include: main findings, mechanisms of action, population studied, effect sizes, clinical relevance, limitations, and future directions.",
  "clinicalTakeaway": "Provide 2-3 sentences (50-75 words) with specific, actionable recommendations for clinicians. Include: patient selection criteria, dosing/protocol details where applicable, monitoring parameters, and potential contraindications or precautions.",
  "methodology": "RCT|Cohort|Case|Review|Meta|Preprint|NA",
  "levelOfEvidence": "A|B|C"
}

Evidence levels:
- A: High-quality RCTs, meta-analyses, systematic reviews
- B: Cohort studies, case-control studies, moderate quality evidence
- C: Case reports, expert opinions, preliminary findings, social media discussions

Methodology types:
- RCT: Randomized controlled trial
- Cohort: Cohort or observational study
- Case: Case study or case report
- Review: Literature review or systematic review
- Meta: Meta-analysis
- Preprint: Preprint (not yet peer-reviewed)
- NA: Not applicable (for social media, YouTube, general discussions)

Focus on extracting maximum clinical value from the content.`;

  // Use full text if available, otherwise use excerpt
  // For journal articles, this will be the complete PDF text (if open access)
  // For YouTube, this will be the full transcript
  // For Reddit/Substack, this will be the full post
  const contentToAnalyze = item.fullText || item.rawExcerpt;
  
  // Truncate very long content (>10k chars) to manage token limits
  const truncatedContent = contentToAnalyze.length > 10000 
    ? contentToAnalyze.slice(0, 10000) + '\n\n[Content truncated - full text analyzed]'
    : contentToAnalyze;

  const userPrompt = `Source: ${item.sourceType}
Title: ${item.title}
Author/Channel: ${item.authorOrChannel}
${item.journalName ? `Journal: ${item.journalName}` : ''}
${item.doi ? `DOI: ${item.doi}` : ''}
Is Preprint: ${item.isPreprint}
${item.fullText ? '**Full content available for analysis**' : 'Content excerpt:'}

Content:
${truncatedContent}

Generate a summary with key insights, clinical takeaway, methodology classification, and evidence level. ${item.fullText ? 'This is the complete content - provide comprehensive analysis.' : ''}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
      max_tokens: 800, // Increased for more detailed insights
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const parsed = JSON.parse(content);
    
    return {
      itemId: item.id,
      keyInsights: parsed.keyInsights || fallbackKeyInsights(item.rawExcerpt),
      clinicalTakeaway: parsed.clinicalTakeaway || fallbackClinicalTakeaway(item.rawExcerpt),
      methodology: (parsed.methodology || fallbackMethodology(item)) as Methodology,
      levelOfEvidence: (parsed.levelOfEvidence || 'C') as EvidenceLevel,
    };
  } catch (error) {
    console.error(`Error generating summary for item ${item.id}:`, error);
    
    // Fallback to simple extraction if OpenAI fails
    return {
      itemId: item.id,
      keyInsights: fallbackKeyInsights(item.rawExcerpt),
      clinicalTakeaway: fallbackClinicalTakeaway(item.rawExcerpt),
      methodology: fallbackMethodology(item),
      levelOfEvidence: fallbackEvidenceLevel(item),
    };
  }
}

function fallbackKeyInsights(excerpt: string): string {
  const words = excerpt.split(/\s+/).slice(0, 30).join(' ');
  return words + (excerpt.split(/\s+/).length > 30 ? '...' : '');
}

function fallbackClinicalTakeaway(excerpt: string): string {
  const words = excerpt.split(/\s+/).slice(0, 15).join(' ');
  return words + (excerpt.split(/\s+/).length > 15 ? '...' : '');
}

function fallbackMethodology(item: Item): Methodology {
  const excerpt = item.rawExcerpt.toLowerCase();
  
  if (item.isPreprint) return 'Preprint';
  if (item.sourceType === 'reddit' || item.sourceType === 'youtube') return 'NA';
  if (/randomized|rct/i.test(excerpt)) return 'RCT';
  if (/cohort/i.test(excerpt)) return 'Cohort';
  if (/meta-analysis|meta analysis/i.test(excerpt)) return 'Meta';
  if (/case study|case report/i.test(excerpt)) return 'Case';
  if (/review/i.test(excerpt)) return 'Review';
  
  return 'NA';
}

function fallbackEvidenceLevel(item: Item): EvidenceLevel {
  const excerpt = item.rawExcerpt.toLowerCase();
  
  if (item.sourceType === 'reddit' || item.sourceType === 'youtube') return 'C';
  if (/high quality|strong evidence|rct|meta-analysis/i.test(excerpt)) return 'A';
  if (/moderate|cohort|case-control/i.test(excerpt)) return 'B';
  
  return 'C';
}

export async function generateBatchSummaries(items: Item[], batchSize: number = 5): Promise<InsertSummary[]> {
  const summaries: InsertSummary[] = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchPromises = batch.map(item => generateSummary(item));
    const batchResults = await Promise.all(batchPromises);
    summaries.push(...batchResults);
    
    // Small delay to avoid rate limiting
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return summaries;
}

interface CategorySummary {
  category: string;
  summary: string;
  keyThemes: string[];
  clinicalImplications: string;
}

export async function generateCategorySummary(
  categoryName: string,
  items: Array<{ title: string; authorOrChannel: string; rawExcerpt: string }>,
  existingSummaries?: Array<{ keyInsights: string; clinicalTakeaway: string } | undefined>
): Promise<CategorySummary> {
  const systemPrompt = `You are a functional medicine expert analyzing trends across multiple research articles, community discussions, or expert content.

Your task: Synthesize key themes and clinical implications across a collection of content from the same source category.

Response format (JSON):
{
  "summary": "2-3 sentence overview of the main patterns and trends across all items (75-100 words)",
  "keyThemes": ["Theme 1", "Theme 2", "Theme 3", "Theme 4", "Theme 5"],
  "clinicalImplications": "2-3 sentences describing how these collective insights inform clinical practice, what practitioners should pay attention to, and emerging patterns worth monitoring (75-100 words)"
}

Focus on: emerging patterns, contradictory findings, consensus areas, and practical clinical relevance.`;

  // Build content summary from items (maintain index alignment)
  const contentSummary = items.slice(0, 10).map((item, idx) => {
    const summary = existingSummaries?.[idx]; // Aligned index - may be undefined
    return `${idx + 1}. "${item.title}" by ${item.authorOrChannel}
${summary ? `Insights: ${summary.keyInsights.slice(0, 200)}` : `Excerpt: ${item.rawExcerpt.slice(0, 200)}`}`;
  }).join('\n\n');

  const userPrompt = `Category: ${categoryName}
Number of items: ${items.length}

Items in this category:
${contentSummary}

Analyze these items collectively and identify the key themes, patterns, and clinical implications across this category.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.4,
      max_tokens: 600,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const parsed = JSON.parse(content);
    
    return {
      category: categoryName,
      summary: parsed.summary || `Analysis of ${items.length} items in ${categoryName}`,
      keyThemes: parsed.keyThemes || [],
      clinicalImplications: parsed.clinicalImplications || 'See individual items for detailed insights.',
    };
  } catch (error) {
    console.error(`Error generating category summary for ${categoryName}:`, error);
    
    // Fallback
    return {
      category: categoryName,
      summary: `This section includes ${items.length} items covering various topics in functional medicine.`,
      keyThemes: [],
      clinicalImplications: 'Review individual items for specific insights and recommendations.',
    };
  }
}
