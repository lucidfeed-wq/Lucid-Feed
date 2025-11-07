/**
 * AI-Powered Content Quality Analyzer
 * 
 * Uses OpenAI to assess content quality based on:
 * - Evidence quality (citations, data, studies)
 * - Clinical value and actionability
 * - Writing clarity and structure
 * - Practical applicability
 * 
 * Returns: 0-40 quality score (40% of total score)
 */

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ContentQualityAssessment {
  score: number; // 0-40
  evidenceQuality: number; // 0-10
  clinicalValue: number; // 0-10
  clarityStructure: number; // 0-10
  practicalApplicability: number; // 0-10
  reasoning: string;
}

/**
 * Analyze content quality using AI with retry logic for rate limits
 */
export async function analyzeContentQuality(
  content: string,
  sourceType: string,
  retries: number = 2
): Promise<ContentQualityAssessment> {
  const truncatedContent = content.substring(0, 5000);
  
  const prompt = `You are a functional medicine research quality analyst. Assess this ${sourceType} content on 4 dimensions (0-10 each):

1. Evidence Quality (0-10):
   - Are claims backed by citations, data, or studies?
   - Are sources credible and verifiable?
   - Is there proper scientific rigor?

2. Clinical Value (0-10):
   - Is this actionable for practitioners?
   - Does it provide clear clinical insights?
   - Would this help patient outcomes?

3. Clarity & Structure (0-10):
   - Is it well-written and organized?
   - Are concepts explained clearly?
   - Is it accessible to practitioners?

4. Practical Applicability (0-10):
   - Can this be implemented in practice?
   - Are recommendations specific and realistic?
   - Does it address real clinical challenges?

Content to analyze:
${truncatedContent}

Respond ONLY with valid JSON in this format:
{
  "evidenceQuality": <number 0-10>,
  "clinicalValue": <number 0-10>,
  "clarityStructure": <number 0-10>,
  "practicalApplicability": <number 0-10>,
  "reasoning": "<brief 1-2 sentence explanation>"
}`;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a functional medicine research quality analyst. Respond only with valid JSON.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.3,
        max_tokens: 300,
      });

      const result = response.choices[0].message.content?.trim();
      if (!result) {
        throw new Error('Empty response from OpenAI');
      }

      // Parse JSON response
      const parsed = JSON.parse(result);
      
      // Calculate total score (0-40)
      const score = Math.round(
        (parsed.evidenceQuality + 
         parsed.clinicalValue + 
         parsed.clarityStructure + 
         parsed.practicalApplicability)
      );

      return {
        score,
        evidenceQuality: parsed.evidenceQuality,
        clinicalValue: parsed.clinicalValue,
        clarityStructure: parsed.clarityStructure,
        practicalApplicability: parsed.practicalApplicability,
        reasoning: parsed.reasoning,
      };
      
    } catch (error: any) {
      // Check if it's a rate limit error (429) and we have retries left
      if (error.status === 429 && attempt < retries) {
        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff: 1s, 2s, 4s
        console.log(`⚠️ Rate limit hit, retrying in ${waitTime}ms (attempt ${attempt + 1}/${retries + 1})`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      // If final attempt or non-rate-limit error, use fallback
      console.error('Error analyzing content quality:', error.message || error);
      
      // Fallback: baseline score based on source type and content length
      const baselineScores = {
        journal: 25,
        substack: 22,
        youtube: 20,
        reddit: 18,
      };
      
      const baseline = baselineScores[sourceType as keyof typeof baselineScores] || 20;
      
      // Adjust based on content length (longer = likely more detailed)
      const lengthBonus = Math.min(content.length / 1000, 5);
      const score = Math.min(40, baseline + lengthBonus);
      
      return {
        score: Math.round(score),
        evidenceQuality: Math.round(score / 4),
        clinicalValue: Math.round(score / 4),
        clarityStructure: Math.round(score / 4),
        practicalApplicability: Math.round(score / 4),
        reasoning: 'AI analysis unavailable, using baseline assessment',
      };
    }
  }
  
  // This should never be reached due to fallback in catch block
  throw new Error('Failed to analyze content quality after retries');
}
