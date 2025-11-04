import OpenAI from 'openai';
import { db } from '../db';
import { items, summaries, savedItems, itemFolders, folders, digests } from '@shared/schema';
import { eq, inArray, and } from 'drizzle-orm';
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
  
  // Check if this is a meta-query about the digest itself
  const isDigestMetaQuery = /\b(summarize|summary|overview|what'?s in|tell me about|show me)\s+(the\s+)?digest\b/i.test(query) ||
    /\b(digest\s+)?(summary|overview|highlights?|topics?|content)\b/i.test(query);
  
  if (isDigestMetaQuery) {
    console.log('Detected digest meta-query - providing overview');
    return await generateDigestOverview(query, conversationHistory, scope);
  }
  
  // Step 1: Semantic search to find relevant items
  const searchResults = await semanticSearch(query, 10, scope);
  
  // Step 2: Determine chat mode based on search results
  const hasStrongMatch = searchResults.length > 0 && searchResults[0].similarity > 0.7;
  const hasWeakMatch = searchResults.length > 0 && searchResults[0].similarity > 0.4;
  
  // Mode 1: RAG mode - Strong sources found
  if (hasStrongMatch) {
    console.log(`Using RAG mode - found ${searchResults.length} relevant items (best: ${searchResults[0].similarity.toFixed(2)})`);
    return await generateRAGResponse(query, searchResults, conversationHistory, scope);
  }
  
  // Mode 2: Hybrid mode - Weak sources, supplement with general knowledge
  if (hasWeakMatch) {
    console.log(`Using HYBRID mode - weak match (${searchResults[0].similarity.toFixed(2)}), supplementing with general knowledge`);
    return await generateHybridResponse(query, searchResults, conversationHistory, scope);
  }
  
  // Mode 3: General mode - No relevant sources, provide informed fallback
  console.log('Using GENERAL mode - no relevant sources found');
  return await generateGeneralResponse(query, conversationHistory, scope);
}

/**
 * Digest Overview Mode: Provide summary of digest contents
 */
async function generateDigestOverview(
  query: string,
  conversationHistory: ChatMessage[],
  scope?: SearchScope
): Promise<ChatResponse> {
  // Get filtered item IDs based on scope
  let filteredItemIds: string[] | null = null;
  
  if (scope) {
    if (scope.type === 'current_digest' && scope.digestId) {
      // Extract item IDs from digest sections
      const [digest] = await db
        .select()
        .from(digests)
        .where(eq(digests.id, scope.digestId))
        .limit(1);
      
      if (digest) {
        const sections = digest.sections as any;
        filteredItemIds = [
          ...(sections.researchHighlights || []).map((item: any) => item.itemId),
          ...(sections.communityTrends || []).map((item: any) => item.itemId),
          ...(sections.expertCommentary || []).map((item: any) => item.itemId),
        ];
      }
    } else if (scope.type === 'saved_items' && scope.userId) {
      // Get saved item IDs
      const savedItemsList = await db
        .select({ itemId: savedItems.itemId })
        .from(savedItems)
        .where(eq(savedItems.userId, scope.userId));
      
      filteredItemIds = savedItemsList.map(si => si.itemId);
    } else if (scope.type === 'folder' && scope.folderId && scope.userId) {
      // Get folder item IDs with ownership validation
      const folderItemsList = await db
        .select({ itemId: itemFolders.itemId })
        .from(itemFolders)
        .innerJoin(folders, eq(itemFolders.folderId, folders.id))
        .where(
          and(
            eq(itemFolders.folderId, scope.folderId),
            eq(folders.userId, scope.userId)
          )
        );
      
      filteredItemIds = folderItemsList.map(fi => fi.itemId);
    }
    // For 'all_digests', filteredItemIds remains null (no filtering)
  }
  
  // Build and execute final query with optional filtering
  let itemsQuery = db
    .select({
      id: items.id,
      title: items.title,
      url: items.url,
      sourceType: items.sourceType,
      topics: items.topics,
      authorOrChannel: items.authorOrChannel,
      journalName: items.journalName,
      keyInsights: summaries.keyInsights,
      clinicalTakeaway: summaries.clinicalTakeaway,
      publishedAt: items.publishedAt,
    })
    .from(items)
    .innerJoin(summaries, eq(items.id, summaries.itemId));
  
  if (filteredItemIds && filteredItemIds.length > 0) {
    itemsQuery = itemsQuery.where(inArray(items.id, filteredItemIds)) as any;
  }
  
  // Retrieve items with scope filtering applied
  const digestItemsResult = await itemsQuery
    .orderBy(items.publishedAt)
    .limit(20);
  
  // Build a comprehensive overview
  const topicCounts: Record<string, number> = {};
  const sourceTypeCounts: Record<string, number> = {};
  
  digestItemsResult.forEach(item => {
    item.topics?.forEach((topic: string) => {
      topicCounts[topic] = (topicCounts[topic] || 0) + 1;
    });
    sourceTypeCounts[item.sourceType] = (sourceTypeCounts[item.sourceType] || 0) + 1;
  });
  
  const topTopics = Object.entries(topicCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([topic]) => topic);
  
  const itemSummaries = digestItemsResult.slice(0, 10).map((item, idx) => {
    const sourceInfo = item.journalName || item.authorOrChannel;
    return `${idx + 1}. "${item.title}" (${item.sourceType}) - ${sourceInfo}\n   ${item.clinicalTakeaway}`;
  }).join('\n\n');
  
  const systemPrompt = `You are a digest assistant for Lucid Feed, a personalized content curation platform.

CONTEXT: Your digest is a curated collection of research articles, expert commentary, podcasts, and other content tailored to the user's interests. Each digest contains high-quality items with AI-generated summaries focusing on key insights and clinical takeaways.

The current digest contains ${digestItemsResult.length} items covering these main topics: ${topTopics.join(', ')}.

Source breakdown: ${Object.entries(sourceTypeCounts).map(([type, count]) => `${count} ${type}`).join(', ')}.

Here are the top items in the digest:

${itemSummaries}

Provide a helpful overview based on what the user asked. You can:
- Summarize key themes and topics
- Highlight notable research or insights
- Organize by topic or source type
- Point out standout items worth reading

Be conversational and helpful in your overview.`;

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
      max_tokens: 1200,
    });
    
    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response from OpenAI');
    }
    
    const sources = digestItemsResult.slice(0, 5).map((item) => ({
      itemId: item.id,
      title: item.title,
      url: item.url,
      similarity: 1.0, // Perfect match for overview
    }));
    
    return { response, sources, mode: 'rag' };
  } catch (error) {
    console.error('Error generating digest overview:', error);
    throw error;
  }
}

/**
 * RAG Mode: Answer primarily from digest sources
 */
async function generateRAGResponse(
  query: string,
  searchResults: Array<{ itemId: string; similarity: number }>,
  conversationHistory: ChatMessage[],
  scope?: SearchScope
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
  
  const systemPrompt = `You are a digest assistant for Lucid Feed, a personalized content curation platform.

CONTEXT: The user's digest is a curated collection of research articles, expert commentary, podcasts, and other content tailored to their interests. Each item has AI-generated summaries with key insights and clinical takeaways.

ANSWER USING THE PROVIDED SOURCES FIRST, then optionally add brief general context if helpful for understanding.

Rules:
- Base your answer primarily on the provided sources from their digest
- Always cite sources by number (e.g., "According to Source 1...")
- If adding general context, clearly label it: "As general context..."
- Provide specific, actionable information (doses, protocols, mechanisms)
- Maintain professional medical tone suitable for practitioners

Sources from your digest:
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
  conversationHistory: ChatMessage[],
  scope?: SearchScope
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
  
  const systemPrompt = `You are a digest assistant for Lucid Feed, a personalized content curation platform.

CONTEXT: The user's digest is a curated collection of research articles, expert commentary, podcasts, and other content tailored to their interests. For this question, we found some potentially relevant content, but it's not a strong match.

Limited digest sources found:

${partialContext}

Provide a helpful answer that:
1. References the digest sources above if relevant (label: "From your digest...")
2. Supplements with general medical knowledge (label: "As general context...")
3. Clearly distinguishes between what comes from their digest vs. general information
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
  conversationHistory: ChatMessage[],
  scope?: SearchScope
): Promise<ChatResponse> {
  const systemPrompt = `You are a digest assistant for Lucid Feed, a personalized content curation platform.

CONTEXT: The user's digest is a curated collection of research articles, expert commentary, podcasts, and other content tailored to their interests. However, for this particular question, we didn't find any relevant content in their current digest.

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
