import { nanoid } from "nanoid";
import { db } from "./db";
import { items, summaries, digests, users, userPreferences, savedItems, readItems, feedCatalog, userFeedSubmissions, jobRuns, relatedRefs, userRatings, userFeedSubscriptions, userSubscriptions, dailyUsage, folders, itemFolders, chatConversations, chatSettings } from "@shared/schema";
import type { Item, InsertItem, Summary, InsertSummary, Digest, InsertDigest, User, UpsertUser, UserPreferences, InsertUserPreferences, SavedItem, InsertSavedItem, ReadItem, InsertReadItem, FeedCatalog, InsertFeedCatalog, UserFeedSubmission, InsertUserFeedSubmission, JobRun, InsertJobRun, RelatedRef, InsertRelatedRef, UserRating, InsertUserRating, UserFeedSubscription, InsertUserFeedSubscription, UserSubscription, InsertUserSubscription, DailyUsage, InsertDailyUsage, Folder, InsertFolder, ItemFolder, InsertItemFolder, ChatConversation, InsertChatConversation, ChatSettings, InsertChatSettings } from "@shared/schema";
import { eq, and, gte, lte, desc, inArray, or, like, sql, avg, count } from "drizzle-orm";

export interface IStorage {
  // Items
  createItem(item: InsertItem): Promise<Item>;
  getItemByHash(hash: string): Promise<Item | undefined>;
  getItemsInWindow(start: string, end: string): Promise<Item[]>;
  mergeItemEngagement(itemId: string, engagement: { comments: number; upvotes: number; views: number }): Promise<void>;
  getItemsWithoutQualityScores(limit: number): Promise<Item[]>;
  updateItem(itemId: string, updates: Partial<Item>): Promise<void>;
  
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
  deleteDigest(id: string): Promise<void>;
  
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
  
  // Read Items
  markItemAsRead(userId: string, itemId: string): Promise<ReadItem>;
  markItemAsUnread(userId: string, itemId: string): Promise<void>;
  isItemRead(userId: string, itemId: string): Promise<boolean>;
  getReadItemIds(userId: string, itemIds: string[]): Promise<string[]>;
  
  // Folders
  createFolder(userId: string, folder: Omit<InsertFolder, 'userId'>): Promise<Folder>;
  getUserFolders(userId: string): Promise<Folder[]>;
  updateFolder(folderId: string, userId: string, updates: Partial<InsertFolder>): Promise<Folder>;
  deleteFolder(folderId: string, userId: string): Promise<void>;
  addItemToFolder(userId: string, itemId: string, folderId: string): Promise<ItemFolder>;
  removeItemFromFolder(userId: string, itemId: string, folderId: string): Promise<void>;
  getItemFolders(userId: string, itemId: string): Promise<Folder[]>;
  getFolderItems(userId: string, folderId: string): Promise<Item[]>;
  
  // Feed Catalog
  getFeedCatalog(filters?: { domain?: string; sourceType?: string; search?: string }): Promise<FeedCatalog[]>;
  getSuggestedFeeds(topics: string[], sourceTypes: string[], limit?: number): Promise<FeedCatalog[]>;
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
  
  // User Ratings (community quality assessment)
  upsertUserRating(rating: InsertUserRating): Promise<UserRating>;
  getUserRating(userId: string, itemId: string): Promise<UserRating | undefined>;
  getRatingStats(itemId: string): Promise<{ averageRating: number; totalRatings: number }>;
  
  // User Feed Subscriptions (multi-tenant feed management)
  subscribeFeed(userId: string, feedId: string): Promise<UserFeedSubscription>;
  unsubscribeFeed(userId: string, feedId: string): Promise<void>;
  getUserFeedSubscriptions(userId: string): Promise<(UserFeedSubscription & { feed: FeedCatalog })[]>;
  isSubscribedToFeed(userId: string, feedId: string): Promise<boolean>;
  
  // User Subscription Management (Stripe tiers)
  getUserSubscription(userId: string): Promise<UserSubscription | undefined>;
  upsertUserSubscription(subscription: InsertUserSubscription): Promise<UserSubscription>;
  
  // Tier limit checks
  getUserFeedCount(userId: string): Promise<number>;
  getDailyChatMessageCount(userId: string, date: string): Promise<number>;
  incrementDailyChatMessageCount(userId: string, date: string): Promise<void>;
  
  // Chat Conversations
  createChatConversation(userId: string, conversation: Omit<InsertChatConversation, 'userId'>): Promise<ChatConversation>;
  getUserChatConversations(userId: string): Promise<ChatConversation[]>;
  getChatConversation(conversationId: string, userId: string): Promise<ChatConversation | undefined>;
  updateChatConversation(conversationId: string, userId: string, updates: Partial<InsertChatConversation>): Promise<ChatConversation>;
  deleteChatConversation(conversationId: string, userId: string): Promise<void>;
  
  // Chat Settings
  getChatSettings(userId: string): Promise<ChatSettings | undefined>;
  upsertChatSettings(userId: string, settings: Partial<InsertChatSettings>): Promise<ChatSettings>;
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
    } as any).returning();
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

  async getItemsWithoutQualityScores(limit: number): Promise<Item[]> {
    return await db
      .select()
      .from(items)
      .where(sql`${items.scoreBreakdown} IS NULL`)
      .limit(limit);
  }

  async updateItem(itemId: string, updates: Partial<Item>): Promise<void> {
    await db.update(items).set(updates).where(eq(items.id, itemId));
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

  async deleteDigest(id: string): Promise<void> {
    await db.delete(digests).where(eq(digests.id, id));
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
      .values(prefsData as any)
      .onConflictDoUpdate({
        target: userPreferences.userId,
        set: {
          favoriteTopics: prefsData.favoriteTopics as any,
          preferredSourceTypes: prefsData.preferredSourceTypes as any,
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
        title: items.title,
        sourceType: items.sourceType,
        sourceId: items.sourceId,
        doi: items.doi,
        url: items.url,
        authorOrChannel: items.authorOrChannel,
        publishedAt: items.publishedAt,
        ingestedAt: items.ingestedAt,
        rawExcerpt: items.rawExcerpt,
        fullText: items.fullText,
        pdfUrl: items.pdfUrl,
        engagement: items.engagement,
        topics: items.topics,
        isPreprint: items.isPreprint,
        journalName: items.journalName,
        hashDedupe: items.hashDedupe,
        qualityMetrics: items.qualityMetrics,
        score: items.score,
        scoreBreakdown: items.scoreBreakdown,
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

  // Read Items
  async markItemAsRead(userId: string, itemId: string): Promise<ReadItem> {
    const id = nanoid();
    const [read] = await db
      .insert(readItems)
      .values({ id, userId, itemId })
      .onConflictDoNothing()
      .returning();
    return read;
  }

  async markItemAsUnread(userId: string, itemId: string): Promise<void> {
    await db
      .delete(readItems)
      .where(
        and(
          eq(readItems.userId, userId),
          eq(readItems.itemId, itemId)
        )
      );
  }

  async isItemRead(userId: string, itemId: string): Promise<boolean> {
    const [result] = await db
      .select()
      .from(readItems)
      .where(
        and(
          eq(readItems.userId, userId),
          eq(readItems.itemId, itemId)
        )
      )
      .limit(1);
    return !!result;
  }

  async getReadItemIds(userId: string, itemIds: string[]): Promise<string[]> {
    if (itemIds.length === 0) return [];
    const results = await db
      .select({ itemId: readItems.itemId })
      .from(readItems)
      .where(
        and(
          eq(readItems.userId, userId),
          inArray(readItems.itemId, itemIds)
        )
      );
    return results.map(r => r.itemId);
  }

  // Folders
  async createFolder(userId: string, folder: Omit<InsertFolder, 'userId'>): Promise<Folder> {
    const id = nanoid();
    const [newFolder] = await db
      .insert(folders)
      .values({ id, userId, ...folder })
      .returning();
    return newFolder;
  }

  async getUserFolders(userId: string): Promise<Folder[]> {
    return await db
      .select()
      .from(folders)
      .where(eq(folders.userId, userId))
      .orderBy(folders.createdAt);
  }

  async updateFolder(folderId: string, userId: string, updates: Partial<InsertFolder>): Promise<Folder> {
    const [updated] = await db
      .update(folders)
      .set({ ...updates, updatedAt: new Date() })
      .where(and(eq(folders.id, folderId), eq(folders.userId, userId)))
      .returning();
    return updated;
  }

  async deleteFolder(folderId: string, userId: string): Promise<void> {
    await db
      .delete(folders)
      .where(and(eq(folders.id, folderId), eq(folders.userId, userId)));
  }

  async addItemToFolder(userId: string, itemId: string, folderId: string): Promise<ItemFolder> {
    const id = nanoid();
    const [itemFolder] = await db
      .insert(itemFolders)
      .values({ id, userId, itemId, folderId })
      .onConflictDoNothing()
      .returning();
    return itemFolder;
  }

  async removeItemFromFolder(userId: string, itemId: string, folderId: string): Promise<void> {
    await db
      .delete(itemFolders)
      .where(
        and(
          eq(itemFolders.userId, userId),
          eq(itemFolders.itemId, itemId),
          eq(itemFolders.folderId, folderId)
        )
      );
  }

  async getItemFolders(userId: string, itemId: string): Promise<Folder[]> {
    const results = await db
      .select({
        id: folders.id,
        userId: folders.userId,
        name: folders.name,
        color: folders.color,
        createdAt: folders.createdAt,
        updatedAt: folders.updatedAt,
      })
      .from(itemFolders)
      .innerJoin(folders, eq(itemFolders.folderId, folders.id))
      .where(
        and(
          eq(itemFolders.userId, userId),
          eq(itemFolders.itemId, itemId)
        )
      );
    return results;
  }

  async getFolderItems(userId: string, folderId: string): Promise<Item[]> {
    const results = await db
      .select({
        id: items.id,
        title: items.title,
        sourceType: items.sourceType,
        sourceId: items.sourceId,
        doi: items.doi,
        url: items.url,
        authorOrChannel: items.authorOrChannel,
        publishedAt: items.publishedAt,
        ingestedAt: items.ingestedAt,
        rawExcerpt: items.rawExcerpt,
        fullText: items.fullText,
        pdfUrl: items.pdfUrl,
        engagement: items.engagement,
        topics: items.topics,
        isPreprint: items.isPreprint,
        journalName: items.journalName,
        hashDedupe: items.hashDedupe,
        qualityMetrics: items.qualityMetrics,
        score: items.score,
        scoreBreakdown: items.scoreBreakdown,
      })
      .from(itemFolders)
      .innerJoin(items, eq(itemFolders.itemId, items.id))
      .where(
        and(
          eq(itemFolders.userId, userId),
          eq(itemFolders.folderId, folderId)
        )
      )
      .orderBy(desc(itemFolders.addedAt));
    return results;
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

  async getSuggestedFeeds(topics: string[], sourceTypes: string[], limit: number = 12): Promise<FeedCatalog[]> {
    // Strategy: Prioritize featured feeds that match user preferences, then high-quality non-featured feeds
    
    // First get featured feeds matching topics and source types
    const featuredFeeds = await db
      .select()
      .from(feedCatalog)
      .where(
        and(
          eq(feedCatalog.isApproved, true),
          eq(feedCatalog.isActive, true),
          eq(feedCatalog.featured, true),
          inArray(feedCatalog.sourceType, sourceTypes)
        )
      )
      .orderBy(feedCatalog.starterRank, desc(feedCatalog.qualityScore))
      .limit(limit);
    
    // Filter featured feeds to only those that have at least one matching topic
    const matchingFeatured = featuredFeeds.filter((feed) => {
      const feedTopics = feed.topics as string[];
      return feedTopics.some((t: string) => topics.includes(t));
    });
    
    // If we have enough featured feeds, return them
    if (matchingFeatured.length >= limit) {
      return matchingFeatured.slice(0, limit);
    }
    
    // Otherwise, supplement with high-quality non-featured feeds
    const remainingLimit = limit - matchingFeatured.length;
    const nonFeaturedFeeds = await db
      .select()
      .from(feedCatalog)
      .where(
        and(
          eq(feedCatalog.isApproved, true),
          eq(feedCatalog.isActive, true),
          eq(feedCatalog.featured, false),
          inArray(feedCatalog.sourceType, sourceTypes)
        )
      )
      .orderBy(desc(feedCatalog.qualityScore))
      .limit(remainingLimit * 2); // Get more to filter
    
    // Filter non-featured feeds by topics
    const matchingNonFeatured = nonFeaturedFeeds
      .filter((feed) => {
        const feedTopics = feed.topics as string[];
        return feedTopics.some((t: string) => topics.includes(t));
      })
      .slice(0, remainingLimit);
    
    return [...matchingFeatured, ...matchingNonFeatured];
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
      } as any)
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
      } as any)
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

  // User Ratings (community quality assessment)
  async upsertUserRating(insertRating: InsertUserRating): Promise<UserRating> {
    const id = nanoid();
    const now = new Date();
    
    // Check if rating already exists
    const [existing] = await db
      .select()
      .from(userRatings)
      .where(
        and(
          eq(userRatings.userId, insertRating.userId),
          eq(userRatings.itemId, insertRating.itemId)
        )
      )
      .limit(1);
    
    if (existing) {
      // Update existing rating
      const [updated] = await db
        .update(userRatings)
        .set({
          rating: insertRating.rating,
          comment: insertRating.comment,
          updatedAt: now,
        })
        .where(eq(userRatings.id, existing.id))
        .returning();
      return updated;
    } else {
      // Insert new rating
      const [created] = await db
        .insert(userRatings)
        .values({
          ...insertRating,
          id,
          createdAt: now,
          updatedAt: now,
        })
        .returning();
      return created;
    }
  }

  async getUserRating(userId: string, itemId: string): Promise<UserRating | undefined> {
    const [rating] = await db
      .select()
      .from(userRatings)
      .where(
        and(
          eq(userRatings.userId, userId),
          eq(userRatings.itemId, itemId)
        )
      )
      .limit(1);
    return rating;
  }

  async getRatingStats(itemId: string): Promise<{ averageRating: number; totalRatings: number }> {
    const result = await db
      .select({
        avgRating: avg(userRatings.rating),
        totalCount: count(userRatings.id),
      })
      .from(userRatings)
      .where(eq(userRatings.itemId, itemId));
    
    const avgRating = result[0]?.avgRating ? parseFloat(result[0].avgRating as string) : 0;
    const totalCount = result[0]?.totalCount ? Number(result[0].totalCount) : 0;
    
    return {
      averageRating: Math.round(avgRating * 10) / 10, // Round to 1 decimal
      totalRatings: totalCount,
    };
  }

  // User Feed Subscriptions
  async subscribeFeed(userId: string, feedId: string): Promise<UserFeedSubscription> {
    const id = nanoid();
    
    // Check if subscription already exists
    const [existing] = await db
      .select()
      .from(userFeedSubscriptions)
      .where(
        and(
          eq(userFeedSubscriptions.userId, userId),
          eq(userFeedSubscriptions.feedId, feedId)
        )
      )
      .limit(1);
    
    if (existing) {
      // Reactivate if inactive
      if (!existing.isActive) {
        const [updated] = await db
          .update(userFeedSubscriptions)
          .set({ isActive: true })
          .where(eq(userFeedSubscriptions.id, existing.id))
          .returning();
        return updated;
      }
      return existing;
    }
    
    // Create new subscription
    const [subscription] = await db
      .insert(userFeedSubscriptions)
      .values({
        id,
        userId,
        feedId,
        isActive: true,
      })
      .returning();
    
    return subscription;
  }

  async unsubscribeFeed(userId: string, feedId: string): Promise<void> {
    await db
      .update(userFeedSubscriptions)
      .set({ isActive: false })
      .where(
        and(
          eq(userFeedSubscriptions.userId, userId),
          eq(userFeedSubscriptions.feedId, feedId)
        )
      );
  }

  async getUserFeedSubscriptions(userId: string): Promise<(UserFeedSubscription & { feed: FeedCatalog })[]> {
    const results = await db
      .select({
        id: userFeedSubscriptions.id,
        userId: userFeedSubscriptions.userId,
        feedId: userFeedSubscriptions.feedId,
        subscribedAt: userFeedSubscriptions.subscribedAt,
        isActive: userFeedSubscriptions.isActive,
        feed: feedCatalog,
      })
      .from(userFeedSubscriptions)
      .innerJoin(feedCatalog, eq(userFeedSubscriptions.feedId, feedCatalog.id))
      .where(
        and(
          eq(userFeedSubscriptions.userId, userId),
          eq(userFeedSubscriptions.isActive, true)
        )
      )
      .orderBy(desc(userFeedSubscriptions.subscribedAt));
    
    return results;
  }

  async isSubscribedToFeed(userId: string, feedId: string): Promise<boolean> {
    const [result] = await db
      .select()
      .from(userFeedSubscriptions)
      .where(
        and(
          eq(userFeedSubscriptions.userId, userId),
          eq(userFeedSubscriptions.feedId, feedId),
          eq(userFeedSubscriptions.isActive, true)
        )
      )
      .limit(1);
    return !!result;
  }

  // User Subscription Management (Stripe tiers)
  async getUserSubscription(userId: string): Promise<UserSubscription | undefined> {
    const [subscription] = await db
      .select()
      .from(userSubscriptions)
      .where(eq(userSubscriptions.userId, userId))
      .limit(1);
    return subscription;
  }

  async upsertUserSubscription(insertSubscription: InsertUserSubscription): Promise<UserSubscription> {
    const id = nanoid();
    const now = new Date();
    
    const [existing] = await db
      .select()
      .from(userSubscriptions)
      .where(eq(userSubscriptions.userId, insertSubscription.userId))
      .limit(1);
    
    if (existing) {
      const [updated] = await db
        .update(userSubscriptions)
        .set({
          ...insertSubscription,
          updatedAt: now,
        })
        .where(eq(userSubscriptions.id, existing.id))
        .returning();
      return updated;
    } else {
      const [created] = await db
        .insert(userSubscriptions)
        .values({
          ...insertSubscription,
          id,
          createdAt: now,
          updatedAt: now,
        })
        .returning();
      return created;
    }
  }

  // Tier limit checks
  async getUserFeedCount(userId: string): Promise<number> {
    const subscriptions = await db
      .select()
      .from(userFeedSubscriptions)
      .where(
        and(
          eq(userFeedSubscriptions.userId, userId),
          eq(userFeedSubscriptions.isActive, true)
        )
      );
    return subscriptions.length;
  }

  async getDailyChatMessageCount(userId: string, date: string): Promise<number> {
    const [usage] = await db
      .select()
      .from(dailyUsage)
      .where(
        and(
          eq(dailyUsage.userId, userId),
          eq(dailyUsage.date, date)
        )
      )
      .limit(1);
    return usage?.chatMessages || 0;
  }

  async incrementDailyChatMessageCount(userId: string, date: string): Promise<void> {
    const id = nanoid();
    const now = new Date();
    
    const [existing] = await db
      .select()
      .from(dailyUsage)
      .where(
        and(
          eq(dailyUsage.userId, userId),
          eq(dailyUsage.date, date)
        )
      )
      .limit(1);
    
    if (existing) {
      await db
        .update(dailyUsage)
        .set({
          chatMessages: existing.chatMessages + 1,
          updatedAt: now,
        })
        .where(eq(dailyUsage.id, existing.id));
    } else {
      await db
        .insert(dailyUsage)
        .values({
          id,
          userId,
          date,
          chatMessages: 1,
          createdAt: now,
          updatedAt: now,
        });
    }
  }
  
  // Chat Conversations
  async createChatConversation(userId: string, conversation: Omit<InsertChatConversation, 'userId'>): Promise<ChatConversation> {
    const id = nanoid();
    const now = new Date();
    
    const [created] = await db
      .insert(chatConversations)
      .values({
        ...conversation,
        id,
        userId,
        createdAt: now,
        updatedAt: now,
      } as any)
      .returning();
    
    return created;
  }
  
  async getUserChatConversations(userId: string): Promise<ChatConversation[]> {
    return await db
      .select()
      .from(chatConversations)
      .where(eq(chatConversations.userId, userId))
      .orderBy(desc(chatConversations.updatedAt));
  }
  
  async getChatConversation(conversationId: string, userId: string): Promise<ChatConversation | undefined> {
    const [conversation] = await db
      .select()
      .from(chatConversations)
      .where(
        and(
          eq(chatConversations.id, conversationId),
          eq(chatConversations.userId, userId)
        )
      )
      .limit(1);
    
    return conversation;
  }
  
  async updateChatConversation(conversationId: string, userId: string, updates: Partial<InsertChatConversation>): Promise<ChatConversation> {
    const now = new Date();
    
    const [updated] = await db
      .update(chatConversations)
      .set({
        ...updates,
        updatedAt: now,
      } as any)
      .where(
        and(
          eq(chatConversations.id, conversationId),
          eq(chatConversations.userId, userId)
        )
      )
      .returning();
    
    return updated;
  }
  
  async deleteChatConversation(conversationId: string, userId: string): Promise<void> {
    await db
      .delete(chatConversations)
      .where(
        and(
          eq(chatConversations.id, conversationId),
          eq(chatConversations.userId, userId)
        )
      );
  }
  
  // Chat Settings
  async getChatSettings(userId: string): Promise<ChatSettings | undefined> {
    const [settings] = await db
      .select()
      .from(chatSettings)
      .where(eq(chatSettings.userId, userId))
      .limit(1);
    
    return settings;
  }
  
  async upsertChatSettings(userId: string, settings: Partial<InsertChatSettings>): Promise<ChatSettings> {
    const id = nanoid();
    const now = new Date();
    
    const existing = await this.getChatSettings(userId);
    
    if (existing) {
      const [updated] = await db
        .update(chatSettings)
        .set({
          ...settings,
          updatedAt: now,
        })
        .where(eq(chatSettings.userId, userId))
        .returning();
      
      return updated;
    } else {
      const [created] = await db
        .insert(chatSettings)
        .values({
          ...settings,
          id,
          userId,
          createdAt: now,
          updatedAt: now,
        } as any)
        .returning();
      
      return created;
    }
  }
}

export const storage = new PostgresStorage();
