import OpenAI from 'openai';
import { db } from '../db';
import { itemEmbeddings, items, summaries } from '@shared/schema';
import { eq, isNull } from 'drizzle-orm';

// Use direct OpenAI API for embeddings (Replit AI Integration doesn't support embeddings)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const EMBEDDING_MODEL = 'text-embedding-3-small';
const EMBEDDING_DIMENSIONS = 1536; // Default for text-embedding-3-small

/**
 * Generates embedding for a single text string
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: text,
    });
    
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

/**
 * Generates embeddings for item summary (combines key insights + clinical takeaway)
 */
export async function generateItemEmbedding(itemId: string): Promise<void> {
  try {
    // Get item summary
    const [summary] = await db
      .select()
      .from(summaries)
      .where(eq(summaries.itemId, itemId))
      .limit(1);
    
    if (!summary) {
      console.log(`No summary found for item ${itemId}, skipping embedding`);
      return;
    }
    
    // Combine insights and takeaway for comprehensive embedding
    const textToEmbed = `${summary.keyInsights}\n\n${summary.clinicalTakeaway}`;
    
    // Generate embedding
    const embedding = await generateEmbedding(textToEmbed);
    
    // Store embedding as JSON string
    const embeddingJson = JSON.stringify(embedding);
    
    // Upsert embedding
    await db
      .insert(itemEmbeddings)
      .values({
        itemId,
        embedding: embeddingJson,
        model: EMBEDDING_MODEL,
      })
      .onConflictDoUpdate({
        target: itemEmbeddings.itemId,
        set: {
          embedding: embeddingJson,
          model: EMBEDDING_MODEL,
        },
      });
    
    console.log(`✓ Generated embedding for item ${itemId}`);
  } catch (error) {
    console.error(`Error generating embedding for item ${itemId}:`, error);
    throw error;
  }
}

/**
 * Generates embeddings for all items that have summaries but no embeddings
 */
export async function generateMissingEmbeddings(): Promise<number> {
  console.log('Checking for items missing embeddings...');
  
  // Find items with summaries but no embeddings
  const itemsWithSummaries = await db
    .select({ itemId: summaries.itemId })
    .from(summaries)
    .leftJoin(itemEmbeddings, eq(summaries.itemId, itemEmbeddings.itemId))
    .where(isNull(itemEmbeddings.itemId));
  
  console.log(`Found ${itemsWithSummaries.length} items missing embeddings`);
  
  if (itemsWithSummaries.length === 0) {
    return 0;
  }
  
  // Generate embeddings with rate limiting (10 concurrent, 1s delay between batches)
  const BATCH_SIZE = 10;
  const DELAY_MS = 1000;
  
  let processed = 0;
  
  for (let i = 0; i < itemsWithSummaries.length; i += BATCH_SIZE) {
    const batch = itemsWithSummaries.slice(i, i + BATCH_SIZE);
    
    await Promise.all(
      batch.map((item) => generateItemEmbedding(item.itemId))
    );
    
    processed += batch.length;
    console.log(`Progress: ${processed}/${itemsWithSummaries.length} embeddings generated`);
    
    // Rate limiting delay
    if (i + BATCH_SIZE < itemsWithSummaries.length) {
      await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
    }
  }
  
  console.log(`✓ Generated ${processed} embeddings`);
  return processed;
}

/**
 * Calculates cosine similarity between two embedding vectors
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same length');
  }
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export interface SearchScope {
  type: 'current_digest' | 'all_digests' | 'saved_items' | 'folder';
  digestId?: string; // For current_digest scope
  userId?: string; // For saved_items and folder scopes
  folderId?: string; // For folder scope
}

/**
 * Finds items most similar to query text with flexible scope filtering
 * @param queryText - The search query
 * @param limit - Maximum number of results to return
 * @param scope - Search scope configuration
 */
export async function semanticSearch(
  queryText: string,
  limit: number = 10,
  scope?: SearchScope
): Promise<Array<{ itemId: string; similarity: number }>> {
  // Generate embedding for query
  const queryEmbedding = await generateEmbedding(queryText);
  
  // Get all embeddings from database
  let allEmbeddings = await db.select().from(itemEmbeddings);
  
  // Apply scope filtering
  if (scope) {
    if (scope.type === 'current_digest' && scope.digestId) {
      // Filter to specific digest
      const { digests } = await import('@shared/schema');
      const { eq } = await import('drizzle-orm');
      
      const [digest] = await db.select().from(digests).where(eq(digests.id, scope.digestId)).limit(1);
      
      if (digest) {
        const sections = digest.sections as any;
        const digestItemIds = new Set<string>([
          ...(sections.researchHighlights || []).map((item: any) => item.itemId),
          ...(sections.communityTrends || []).map((item: any) => item.itemId),
          ...(sections.expertCommentary || []).map((item: any) => item.itemId),
        ]);
        
        allEmbeddings = allEmbeddings.filter(emb => digestItemIds.has(emb.itemId));
        console.log(`Filtered to ${allEmbeddings.length} items from digest ${scope.digestId}`);
      }
    } else if (scope.type === 'all_digests') {
      // No filtering - search all embeddings (default behavior)
      console.log(`Searching across all ${allEmbeddings.length} digest items`);
    } else if (scope.type === 'saved_items' && scope.userId) {
      // Filter to user's saved items
      const { savedItems } = await import('@shared/schema');
      const { eq } = await import('drizzle-orm');
      
      const userSavedItems = await db
        .select({ itemId: savedItems.itemId })
        .from(savedItems)
        .where(eq(savedItems.userId, scope.userId));
      
      const savedItemIds = new Set(userSavedItems.map(si => si.itemId));
      allEmbeddings = allEmbeddings.filter(emb => savedItemIds.has(emb.itemId));
      console.log(`Filtered to ${allEmbeddings.length} saved items for user ${scope.userId}`);
    } else if (scope.type === 'folder' && scope.folderId && scope.userId) {
      // Filter to items in specific folder
      const { itemFolders } = await import('@shared/schema');
      const { eq } = await import('drizzle-orm');
      
      const folderItems = await db
        .select({ itemId: itemFolders.itemId })
        .from(itemFolders)
        .where(eq(itemFolders.folderId, scope.folderId));
      
      const folderItemIds = new Set(folderItems.map(fi => fi.itemId));
      allEmbeddings = allEmbeddings.filter(emb => folderItemIds.has(emb.itemId));
      console.log(`Filtered to ${allEmbeddings.length} items from folder ${scope.folderId}`);
    }
  }
  
  if (allEmbeddings.length === 0) {
    console.warn('No embeddings found in database for the specified scope');
    return [];
  }
  
  // Calculate similarities
  const results = allEmbeddings.map((item) => {
    const embedding = JSON.parse(item.embedding) as number[];
    const similarity = cosineSimilarity(queryEmbedding, embedding);
    
    return {
      itemId: item.itemId,
      similarity,
    };
  });
  
  // Sort by similarity (descending) and limit
  results.sort((a, b) => b.similarity - a.similarity);
  
  return results.slice(0, limit);
}
