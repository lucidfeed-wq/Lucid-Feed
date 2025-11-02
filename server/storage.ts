import { nanoid } from "nanoid";
import type { Item, InsertItem, Summary, InsertSummary, Digest, InsertDigest } from "@shared/schema";

export interface IStorage {
  // Items
  createItem(item: InsertItem): Promise<Item>;
  getItemByHash(hash: string): Promise<Item | undefined>;
  getItemsInWindow(start: string, end: string): Promise<Item[]>;
  mergeItemEngagement(itemId: string, engagement: { comments: number; upvotes: number; views: number }): Promise<void>;
  
  // Summaries
  createSummary(summary: InsertSummary): Promise<Summary>;
  getSummaryByItemId(itemId: string): Promise<Summary | undefined>;
  
  // Digests
  createDigest(digest: InsertDigest): Promise<Digest>;
  getLatestDigest(): Promise<Digest | undefined>;
  getDigestBySlug(slug: string): Promise<Digest | undefined>;
  getAllDigests(): Promise<Digest[]>;
}

export class MemStorage implements IStorage {
  private items: Map<string, Item>;
  private itemsByHash: Map<string, string>; // hash -> item id
  private summaries: Map<string, Summary>;
  private digests: Map<string, Digest>;

  constructor() {
    this.items = new Map();
    this.itemsByHash = new Map();
    this.summaries = new Map();
    this.digests = new Map();
  }

  // Items
  async createItem(insertItem: InsertItem): Promise<Item> {
    const id = nanoid();
    const item: Item = { ...insertItem, id };
    this.items.set(id, item);
    this.itemsByHash.set(item.hashDedupe, id);
    return item;
  }

  async getItemByHash(hash: string): Promise<Item | undefined> {
    const itemId = this.itemsByHash.get(hash);
    return itemId ? this.items.get(itemId) : undefined;
  }

  async getItemsInWindow(start: string, end: string): Promise<Item[]> {
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();

    return Array.from(this.items.values()).filter(item => {
      const publishedTime = new Date(item.publishedAt).getTime();
      return publishedTime >= startTime && publishedTime <= endTime;
    });
  }

  async mergeItemEngagement(
    itemId: string,
    engagement: { comments: number; upvotes: number; views: number }
  ): Promise<void> {
    const item = this.items.get(itemId);
    if (item) {
      item.engagement.comments += engagement.comments;
      item.engagement.upvotes += engagement.upvotes;
      item.engagement.views += engagement.views;
      this.items.set(itemId, item);
    }
  }

  // Summaries
  async createSummary(insertSummary: InsertSummary): Promise<Summary> {
    const summary: Summary = { ...insertSummary };
    this.summaries.set(summary.itemId, summary);
    return summary;
  }

  async getSummaryByItemId(itemId: string): Promise<Summary | undefined> {
    return this.summaries.get(itemId);
  }

  // Digests
  async createDigest(insertDigest: InsertDigest): Promise<Digest> {
    const id = nanoid();
    const digest: Digest = { ...insertDigest, id };
    this.digests.set(id, digest);
    return digest;
  }

  async getLatestDigest(): Promise<Digest | undefined> {
    const digests = Array.from(this.digests.values());
    if (digests.length === 0) return undefined;

    return digests.sort((a, b) =>
      new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
    )[0];
  }

  async getDigestBySlug(slug: string): Promise<Digest | undefined> {
    return Array.from(this.digests.values()).find(d => d.publicSlug === slug);
  }

  async getAllDigests(): Promise<Digest[]> {
    return Array.from(this.digests.values()).sort((a, b) =>
      new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
    );
  }
}

export const storage = new MemStorage();
