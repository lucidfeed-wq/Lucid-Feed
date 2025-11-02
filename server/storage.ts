import { nanoid } from "nanoid";
import { db } from "./db";
import { items, summaries, digests, users, userPreferences, savedItems, feedCatalog, userFeedSubmissions, jobRuns, relatedRefs } from "@shared/schema";
import type { Item, InsertItem, Summary, InsertSummary, Digest, InsertDigest, User, UpsertUser, UserPreferences, InsertUserPreferences, SavedItem, InsertSavedItem, FeedCatalog, InsertFeedCatalog, UserFeedSubmission, InsertUserFeedSubmission, JobRun, InsertJobRun, RelatedRef, InsertRelatedRef } from "@shared/schema";
import { eq, and, gte, lte, desc, inArray, or, like, sql } from "drizzle-orm";

export interface IStorage {
  // Items
  createItem(item: InsertItem): Promise<Item>;
  getItemByHash(hash: string): Promise<Item | undefined>;
  getItemsInWindow(start: string, end: string): Promise<Item[]>;
  mergeItemEngagement(itemId: string, engagement: { comments: number; upvotes: number; views: number }): Promise<void>;
  
  // Summaries
  createSummary(summary: InsertSummary): Promise<Summary>;
  getSummaryByItemId(itemId: string): Promise<Summary | undefined>;
  getSummariesByItemIds(itemIds: string[]): Promise<Summary[]>;
  createBatchSummaries(summaries: InsertSummary[]): Promise<Summary[]>;
  
  // Digests
  createDigest(digest: InsertDigest): Promise<Digest>;
  getLatestDigest(): Promise<Digest | undefined>;
  getDigestBySlug(slug: string): Promise<Digest | undefined>;
  getAllDigests(): Promise<Digest[]>;
  
  // Users (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // User Preferences
  getUserPreferences(userId: string): Promise<UserPreferences | undefined>;
  upsertUserPreferences(prefs: InsertUserPreferences): Promise<UserPreferences>;
  
  // Saved Items
  saveItem(userId: string, itemId: string): Promise<SavedItem>;
  unsaveItem(userId: string, itemId: string): Promise<void>;
  getSavedItemsByUser(userId: string): Promise<Item[]>;
  isItemSaved(userId: string, itemId: string): Promise<boolean>;
  
  // Feed Catalog
  getFeedCatalog(filters?: { domain?: string; sourceType?: string; search?: string }): Promise<FeedCatalog[]>;
  submitFeed(submission: InsertUserFeedSubmission): Promise<UserFeedSubmission>;
  getUserFeedSubmissions(userId: string): Promise<UserFeedSubmission[]>;
  getPendingFeedSubmissions(): Promise<UserFeedSubmission[]>;
  reviewFeedSubmission(id: string, reviewerId: string, status: 'approved' | 'rejected', reviewNotes?: string): Promise<UserFeedSubmission>;
  
  // Job Runs (observability)
  createJobRun(jobRun: Omit<InsertJobRun, 'startedAt'>): Promise<JobRun>;
  finishJobRun(id: string, stats: { status: 'success' | 'error'; itemsIngested?: number; dedupeHits?: number; tokenSpend?: number; errorMessage?: string }): Promise<void>;
  getJobRuns(filters?: { jobName?: string; days?: number }): Promise<JobRun[]>;
  
  // Related Refs (cross-source linking)
  createRelatedRef(ref: InsertRelatedRef): Promise<RelatedRef>;
  getRelatedRefsByItemId(itemId: string): Promise<RelatedRef[]>;
  getItemByDOI(doi: string): Promise<Item | undefined>;
}

export class PostgresStorage implements IStorage {
  // Items
  async createItem(insertItem: InsertItem): Promise<Item> {
    const id = nanoid();
    const now = new Date().toISOString();
    const [item] = await db.insert(items).values({
      ...insertItem,
      id,
      ingestedAt: now,
    }).returning();
    return item;
  }

  async getItemByHash(hash: string): Promise<Item | undefined> {
    const [item] = await db.select().from(items).where(eq(items.hashDedupe, hash)).limit(1);
    return item;
  }

  async getItemsInWindow(start: string, end: string): Promise<Item[]> {
    const results = await db.select().from(items).where(
      and(
        gte(items.publishedAt, start),
        lte(items.publishedAt, end)
      )
    );
    return results;
  }

  async mergeItemEngagement(
    itemId: string,
    engagement: { comments: number; upvotes: number; views: number }
  ): Promise<void> {
    const [item] = await db.select().from(items).where(eq(items.id, itemId)).limit(1);
    if (item) {
      const currentEngagement = item.engagement as { comments: number; upvotes: number; views: number };
      await db.update(items).set({
        engagement: {
          comments: currentEngagement.comments + engagement.comments,
          upvotes: currentEngagement.upvotes + engagement.upvotes,
          views: currentEngagement.views + engagement.views,
        }
      }).where(eq(items.id, itemId));
    }
  }

  // Summaries
  async createSummary(insertSummary: InsertSummary): Promise<Summary> {
    const [summary] = await db.insert(summaries).values(insertSummary).returning();
    return summary;
  }

  async getSummaryByItemId(itemId: string): Promise<Summary | undefined> {
    const [summary] = await db.select().from(summaries).where(eq(summaries.itemId, itemId)).limit(1);
    return summary;
  }

  async getSummariesByItemIds(itemIds: string[]): Promise<Summary[]> {
    if (itemIds.length === 0) return [];
    return await db.select().from(summaries).where(inArray(summaries.itemId, itemIds));
  }

  async createBatchSummaries(insertSummaries: InsertSummary[]): Promise<Summary[]> {
    if (insertSummaries.length === 0) return [];
    return await db.insert(summaries).values(insertSummaries).returning();
  }

  // Digests
  async createDigest(insertDigest: InsertDigest): Promise<Digest> {
    const id = nanoid();
    const now = new Date().toISOString();
    const [digest] = await db.insert(digests).values({
      ...insertDigest,
      id,
      generatedAt: now,
    }).returning();
    return digest;
  }

  async getLatestDigest(): Promise<Digest | undefined> {
    const [digest] = await db.select().from(digests).orderBy(desc(digests.generatedAt)).limit(1);
    return digest;
  }

  async getDigestBySlug(slug: string): Promise<Digest | undefined> {
    const [digest] = await db.select().from(digests).where(eq(digests.slug, slug)).limit(1);
    return digest;
  }

  async getAllDigests(): Promise<Digest[]> {
    return await db.select().from(digests).orderBy(desc(digests.generatedAt));
  }

  // Users (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // User Preferences
  async getUserPreferences(userId: string): Promise<UserPreferences | undefined> {
    const [prefs] = await db.select().from(userPreferences).where(eq(userPreferences.userId, userId)).limit(1);
    return prefs;
  }

  async upsertUserPreferences(prefsData: InsertUserPreferences): Promise<UserPreferences> {
    const [prefs] = await db
      .insert(userPreferences)
      .values(prefsData)
      .onConflictDoUpdate({
        target: userPreferences.userId,
        set: {
          favoriteTopics: prefsData.favoriteTopics,
          updatedAt: new Date(),
        },
      })
      .returning();
    return prefs;
  }

  // Saved Items
  async saveItem(userId: string, itemId: string): Promise<SavedItem> {
    const id = nanoid();
    const [saved] = await db
      .insert(savedItems)
      .values({ id, userId, itemId })
      .returning();
    return saved;
  }

  async unsaveItem(userId: string, itemId: string): Promise<void> {
    await db
      .delete(savedItems)
      .where(
        and(
          eq(savedItems.userId, userId),
          eq(savedItems.itemId, itemId)
        )
      );
  }

  async getSavedItemsByUser(userId: string): Promise<Item[]> {
    const results = await db
      .select({
        id: items.id,
        sourceType: items.sourceType,
        sourceId: items.sourceId,
        doi: items.doi,
        url: items.url,
        title: items.title,
        authorOrChannel: items.authorOrChannel,
        publishedAt: items.publishedAt,
        ingestedAt: items.ingestedAt,
        rawExcerpt: items.rawExcerpt,
        engagement: items.engagement,
        topics: items.topics,
        isPreprint: items.isPreprint,
        journalName: items.journalName,
        hashDedupe: items.hashDedupe,
        score: items.score,
      })
      .from(savedItems)
      .innerJoin(items, eq(savedItems.itemId, items.id))
      .where(eq(savedItems.userId, userId))
      .orderBy(desc(savedItems.savedAt));
    
    return results;
  }

  async isItemSaved(userId: string, itemId: string): Promise<boolean> {
    const [result] = await db
      .select()
      .from(savedItems)
      .where(
        and(
          eq(savedItems.userId, userId),
          eq(savedItems.itemId, itemId)
        )
      )
      .limit(1);
    return !!result;
  }

  // Feed Catalog
  async getFeedCatalog(filters?: { domain?: string; sourceType?: string; search?: string }): Promise<FeedCatalog[]> {
    let query = db.select().from(feedCatalog);
    
    const conditions = [];
    
    if (filters?.domain) {
      conditions.push(eq(feedCatalog.domain, filters.domain));
    }
    
    if (filters?.sourceType) {
      conditions.push(eq(feedCatalog.sourceType, filters.sourceType));
    }
    
    if (filters?.search) {
      conditions.push(
        or(
          like(feedCatalog.name, `%${filters.search}%`),
          like(feedCatalog.description, `%${filters.search}%`)
        )
      );
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const results = await query.orderBy(feedCatalog.name);
    return results;
  }

  async submitFeed(submission: InsertUserFeedSubmission): Promise<UserFeedSubmission> {
    const id = nanoid();
    const now = new Date();
    
    const [result] = await db
      .insert(userFeedSubmissions)
      .values({
        ...submission,
        id,
        submittedAt: now,
      })
      .returning();
    
    return result;
  }

  async getUserFeedSubmissions(userId: string): Promise<UserFeedSubmission[]> {
    const results = await db
      .select()
      .from(userFeedSubmissions)
      .where(eq(userFeedSubmissions.userId, userId))
      .orderBy(desc(userFeedSubmissions.submittedAt));
    
    return results;
  }

  async getPendingFeedSubmissions(): Promise<UserFeedSubmission[]> {
    const results = await db
      .select()
      .from(userFeedSubmissions)
      .where(eq(userFeedSubmissions.status, 'pending'))
      .orderBy(userFeedSubmissions.submittedAt);
    
    return results;
  }

  async reviewFeedSubmission(
    id: string,
    reviewerId: string,
    status: 'approved' | 'rejected',
    reviewNotes?: string
  ): Promise<UserFeedSubmission> {
    const now = new Date();
    
    const [result] = await db
      .update(userFeedSubmissions)
      .set({
        status,
        reviewedBy: reviewerId,
        reviewedAt: now,
        reviewNotes,
      })
      .where(eq(userFeedSubmissions.id, id))
      .returning();
    
    if (!result) {
      throw new Error(`Feed submission not found: ${id}`);
    }
    
    // If approved, add to feed catalog
    if (status === 'approved') {
      const catalogId = nanoid();
      await db.insert(feedCatalog).values({
        id: catalogId,
        name: result.feedName,
        url: result.feedUrl,
        domain: result.domain,
        category: result.category,
        sourceType: result.sourceType,
        description: result.description || '',
        isApproved: true,
        submittedBy: result.userId,
      });
    }
    
    return result;
  }

  // Job Runs (observability)
  async createJobRun(insertJobRun: Omit<InsertJobRun, 'startedAt'>): Promise<JobRun> {
    const id = nanoid();
    const [jobRun] = await db
      .insert(jobRuns)
      .values({
        ...insertJobRun,
        id,
        startedAt: new Date(),
      })
      .returning();
    return jobRun;
  }

  async finishJobRun(
    id: string,
    stats: { status: 'success' | 'error'; itemsIngested?: number; dedupeHits?: number; tokenSpend?: number; errorMessage?: string }
  ): Promise<void> {
    await db
      .update(jobRuns)
      .set({
        finishedAt: new Date(),
        status: stats.status,
        itemsIngested: stats.itemsIngested ?? 0,
        dedupeHits: stats.dedupeHits ?? 0,
        tokenSpend: stats.tokenSpend ?? 0,
        errorMessage: stats.errorMessage,
      })
      .where(eq(jobRuns.id, id));
  }

  async getJobRuns(filters?: { jobName?: string; days?: number }): Promise<JobRun[]> {
    let query = db.select().from(jobRuns);
    
    const conditions = [];
    
    if (filters?.jobName) {
      conditions.push(eq(jobRuns.jobName, filters.jobName));
    }
    
    if (filters?.days) {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - filters.days);
      conditions.push(gte(jobRuns.startedAt, cutoffDate));
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const results = await query.orderBy(desc(jobRuns.startedAt));
    return results;
  }

  // Related Refs (cross-source linking)
  async createRelatedRef(insertRef: InsertRelatedRef): Promise<RelatedRef> {
    const id = nanoid();
    const [ref] = await db
      .insert(relatedRefs)
      .values({
        ...insertRef,
        id,
      })
      .returning();
    return ref;
  }

  async getRelatedRefsByItemId(itemId: string): Promise<RelatedRef[]> {
    return await db
      .select()
      .from(relatedRefs)
      .where(eq(relatedRefs.itemId, itemId));
  }

  async getItemByDOI(doi: string): Promise<Item | undefined> {
    if (!doi) return undefined;
    const [item] = await db
      .select()
      .from(items)
      .where(eq(items.doi, doi))
      .limit(1);
    return item;
  }
}

export const storage = new PostgresStorage();
