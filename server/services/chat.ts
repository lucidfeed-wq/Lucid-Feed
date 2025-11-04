import OpenAI from 'openai';
import { db } from '../db';
import { items, summaries } from '@shared/schema';
import { eq, inArray } from 'drizzle-orm';
import { semanticSearch, SearchScope } from './embeddings';

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
  mode: 'rag' | 'hybrid' | 'general'; // Indicates which mode was used
}

/**
 * Processes a chat query using hybrid RAG approach:
 * - RAG-first: If sources found, answer primarily from digest with optional general context
 * - Informed fallback: If no sources, provide helpful general knowledge with clear disclaimers
 * @param scope - Search scope configuration
 */
export async function chatWithDigest(
  query: string,
  conversationHistory: ChatMessage[] = [],
  scope?: SearchScope
): Promise<ChatResponse> {
  const scopeDesc = scope ? `${scope.type}` : 'all items';
  console.log(`Processing chat query: "${query}" (scope: ${scopeDesc})`);
  
  // Step 1: Semantic search to find relevant items
  const searchResults = await semanticSearch(query, 10, scope);
  
  // Step 2: Determine chat mode based on search results
  const hasStrongMatch = searchResults.length > 0 && searchResults[0].similarity > 0.7;
  const hasWeakMatch = searchResults.length > 0 && searchResults[0].similarity > 0.4;
  
  // Mode 1: RAG mode - Strong sources found
  if (hasStrongMatch) {
    console.log(`Using RAG mode - found ${searchResults.length} relevant items (best: ${searchResults[0].similarity.toFixed(2)})`);
    return await generateRAGResponse(query, searchResults, conversationHistory);
  }
  
  // Mode 2: Hybrid mode - Weak sources, supplement with general knowledge
  if (hasWeakMatch) {
    console.log(`Using HYBRID mode - weak match (${searchResults[0].similarity.toFixed(2)}), supplementing with general knowledge`);
    return await generateHybridResponse(query, searchResults, conversationHistory);
  }
  
  // Mode 3: General mode - No relevant sources, provide informed fallback
  console.log('Using GENERAL mode - no relevant sources found');
  return await generateGeneralResponse(query, conversationHistory);
}

/**
 * RAG Mode: Answer primarily from digest sources
 */
async function generateRAGResponse(
  query: string,
  searchResults: Array<{ itemId: string; similarity: number }>,
  conversationHistory: ChatMessage[]
): Promise<ChatResponse> {
  // Fetch full item and summary data for top results
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
  
  // Build context from top relevant items
  const context = itemsWithSummaries
    .slice(0, 5)
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
  
  const systemPrompt = `You are an expert functional medicine assistant with access to curated research and expert commentary.

ANSWER USING THE PROVIDED SOURCES FIRST, then optionally add brief general context if helpful for understanding.

Rules:
- Base your answer primarily on the provided sources
- Always cite sources by number (e.g., "According to Source 1...")
- If adding general context, clearly label it: "As general context..."
- Provide specific, actionable information (doses, protocols, mechanisms)
- Maintain professional medical tone suitable for practitioners

Sources from the digest:
${context}`;

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory,
    { role: 'user', content: query },
  ];
  
  try {
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
    
    const sources = itemsWithSummaries.slice(0, 5).map((item) => ({
      itemId: item.id,
      title: item.title,
      url: item.url,
      similarity: searchResults.find((r) => r.itemId === item.id)?.similarity || 0,
    }));
    
    return { response, sources, mode: 'rag' };
  } catch (error) {
    console.error('Error generating RAG response:', error);
    throw error;
  }
}

/**
 * Hybrid Mode: Weak sources, supplement with general knowledge
 */
async function generateHybridResponse(
  query: string,
  searchResults: Array<{ itemId: string; similarity: number }>,
  conversationHistory: ChatMessage[]
): Promise<ChatResponse> {
  const itemIds = searchResults.slice(0, 3).map((r) => r.itemId);
  
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
    })
    .from(items)
    .innerJoin(summaries, eq(items.id, summaries.itemId))
    .where(inArray(items.id, itemIds));
  
  const partialContext = itemsWithSummaries.map((item, idx) => {
    const sourceInfo = item.journalName || item.authorOrChannel;
    return `[Source ${idx + 1}: "${item.title}" - ${sourceInfo}]\n${item.keyInsights}`;
  }).join('\n\n');
  
  const systemPrompt = `You are an expert functional medicine assistant.

The digest has limited relevant content for this question, but here's what we found:

${partialContext}

Provide a helpful answer that:
1. References the digest sources above if relevant (label: "From your digest...")
2. Supplements with general medical knowledge (label: "As general context...")
3. Clearly distinguishes between sourced and general information
4. Maintains professional medical tone

Be transparent about what comes from the digest vs. general knowledge.`;

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory,
    { role: 'user', content: query },
  ];
  
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any,
      temperature: 0.5,
      max_tokens: 1000,
    });
    
    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response from OpenAI');
    }
    
    const sources = itemsWithSummaries.map((item) => ({
      itemId: item.id,
      title: item.title,
      url: item.url,
      similarity: searchResults.find((r) => r.itemId === item.id)?.similarity || 0,
    }));
    
    return { response, sources, mode: 'hybrid' };
  } catch (error) {
    console.error('Error generating hybrid response:', error);
    throw error;
  }
}

/**
 * General Mode: No relevant sources, provide informed fallback
 */
async function generateGeneralResponse(
  query: string,
  conversationHistory: ChatMessage[]
): Promise<ChatResponse> {
  const systemPrompt = `You are an expert functional medicine assistant.

The user's digest doesn't contain specific research on this topic, so provide helpful general knowledge.

Guidelines:
- Start with: "I don't have specific research from your digest on this topic, but..."
- Provide accurate, evidence-based general medical knowledge
- Include relevant context and explanations
- Suggest related topics they might find in their digest
- Maintain professional medical tone
- Add disclaimer: "For specific research and protocols, check if your digest includes..."`;

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...conversationHistory,
    { role: 'user', content: query },
  ];
  
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages as any,
      temperature: 0.6,
      max_tokens: 800,
    });
    
    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response from OpenAI');
    }
    
    return { response, sources: [], mode: 'general' };
  } catch (error) {
    console.error('Error generating general response:', error);
    throw error;
  }
}
