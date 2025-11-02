import OpenAI from 'openai';
import type { Item, InsertSummary, Methodology, EvidenceLevel } from '@shared/schema';

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

export async function generateSummary(item: Item): Promise<InsertSummary> {
  const systemPrompt = `You are a functional medicine expert who summarizes scientific articles and health content for medical practitioners.

Your task: Extract key insights and clinical takeaways from content, and classify the methodology and evidence level.

Response format (JSON):
{
  "keyInsights": "2-3 sentence summary of the main findings or discussion points",
  "clinicalTakeaway": "1 sentence actionable insight for clinicians",
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
- NA: Not applicable (for social media, YouTube, general discussions)`;

  const userPrompt = `Source: ${item.sourceType}
Title: ${item.title}
Author/Channel: ${item.authorOrChannel}
${item.journalName ? `Journal: ${item.journalName}` : ''}
Is Preprint: ${item.isPreprint}

Content excerpt:
${item.rawExcerpt.slice(0, 2000)}

Generate a summary with key insights, clinical takeaway, methodology classification, and evidence level.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
      max_tokens: 500,
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
