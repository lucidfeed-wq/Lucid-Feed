import OpenAI from 'openai';
import { db } from '../db';
import { items, summaries } from '@shared/schema';
import { eq, inArray } from 'drizzle-orm';
import { semanticSearch } from './embeddings';

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  response: string;
  sources: Array<{
    itemId: string;
    title: string;
    url: string;
    similarity: number;
  }>;
}

/**
 * Processes a chat query using RAG (Retrieval Augmented Generation)
 */
export async function chatWithDigest(
  query: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> {
  console.log(`Processing chat query: "${query}"`);
  
  // Step 1: Semantic search to find relevant items
  const searchResults = await semanticSearch(query, 10);
  
  if (searchResults.length === 0) {
    return {
      response: "I couldn't find any relevant content in the digest to answer your question. Try asking about specific topics like metabolic health, gut health, hormone optimization, or other functional medicine topics covered in the feed.",
      sources: [],
    };
  }
  
  console.log(`Found ${searchResults.length} relevant items`);
  
  // Step 2: Fetch full item and summary data for top results
  const itemIds = searchResults.map((r) => r.itemId);
  
  const itemsWithSummaries = await db
    .select({
      id: items.id,
      title: items.title,
      url: items.url,
      sourceType: items.sourceType,
      authorOrChannel: items.authorOrChannel,
      journalName: items.journalName,
      keyInsights: summaries.keyInsights,
      clinicalTakeaway: summaries.clinicalTakeaway,
      methodology: summaries.methodology,
      levelOfEvidence: summaries.levelOfEvidence,
    })
    .from(items)
    .innerJoin(summaries, eq(items.id, summaries.itemId))
    .where(inArray(items.id, itemIds));
  
  // Step 3: Build context from top relevant items
  const context = itemsWithSummaries
    .slice(0, 5) // Use top 5 most relevant items
    .map((item, idx) => {
      const sourceInfo = item.journalName || item.authorOrChannel;
      return `
[Source ${idx + 1}: "${item.title}" - ${sourceInfo}]
${item.keyInsights}

Clinical Takeaway: ${item.clinicalTakeaway}
Evidence Level: ${item.levelOfEvidence}
`.trim();
    })
    .join('\n\n---\n\n');
  
  // Step 4: Construct RAG prompt
  const systemPrompt = `You are an expert functional medicine assistant with access to curated research, community discussions, and expert commentary.

Your task: Answer the user's question using ONLY the provided sources. Be specific, cite sources by number (e.g., "According to Source 1..."), and provide actionable clinical insights.

Rules:
- Base your answer entirely on the provided sources
- Always cite which source(s) you're referencing
- If the sources don't fully answer the question, acknowledge what's missing
- Provide specific, actionable information (doses, protocols, mechanisms)
- Maintain professional medical tone suitable for practitioners
- If sources contradict, present both viewpoints

Sources available:
${context}`;

  const userPrompt = query;
  
  // Step 5: Generate AI response
  try {
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userPrompt },
    ];
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any,
      temperature: 0.4,
      max_tokens: 1000,
    });
    
    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response from OpenAI');
    }
    
    // Step 6: Prepare sources with similarity scores
    const sources = itemsWithSummaries.slice(0, 5).map((item) => ({
      itemId: item.id,
      title: item.title,
      url: item.url,
      similarity: searchResults.find((r) => r.itemId === item.id)?.similarity || 0,
    }));
    
    return {
      response,
      sources,
    };
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
}
