import { nanoid } from "nanoid";
import { db } from "./db";
import { items, summaries, digests, users, userPreferences } from "@shared/schema";
import type { Item, InsertItem, Summary, InsertSummary, Digest, InsertDigest, User, UpsertUser, UserPreferences, InsertUserPreferences } from "@shared/schema";
import { eq, and, gte, lte, desc, inArray } from "drizzle-orm";

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
}

export const storage = new PostgresStorage();
