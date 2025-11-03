import { z } from "zod";
import { sql } from 'drizzle-orm';
import { pgTable, varchar, text, timestamp, json, integer, boolean, index, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const sourceTypes = ['journal', 'reddit', 'substack', 'youtube'] as const;
export const methodologies = ['RCT', 'Cohort', 'Case', 'Review', 'Meta', 'Preprint', 'NA'] as const;
export const evidenceLevels = ['A', 'B', 'C'] as const;

export const topics = [
  'metabolic', 'chronic_fatigue', 'chronic_EBV', 'autoimmune', 'leaky_gut',
  'carnivore', 'keto', 'IV_therapy', 'HRT', 'TRT', 'mold_CIRS', 'weight_loss',
  'PANS_PANDAS', 'insulin_resistance', 'gut_health', 'hormone_optimization',
  'biohacking', 'mitochondrial_health', 'thyroid_health', 'adrenal_fatigue',
  'brain_fog', 'inflammation', 'SIBO', 'candida', 'histamine_DAO', 'NAD_therapy',
  'ozone_therapy', 'red_light_therapy', 'cold_exposure', 'sauna_therapy',
  'fasting', 'autophagy'
] as const;

export type SourceType = typeof sourceTypes[number];
export type Methodology = typeof methodologies[number];
export type EvidenceLevel = typeof evidenceLevels[number];
export type Topic = typeof topics[number];

// Drizzle table definitions
export const items = pgTable('items', {
  id: varchar('id', { length: 255 }).primaryKey(),
  sourceType: varchar('source_type', { length: 50 }).notNull(),
  sourceId: text('source_id').notNull(),
  doi: text('doi'),
  url: text('url').notNull(),
  title: text('title').notNull(),
  authorOrChannel: text('author_or_channel').notNull(),
  publishedAt: text('published_at').notNull(),
  ingestedAt: text('ingested_at').notNull(),
  rawExcerpt: text('raw_excerpt').notNull(),
  fullText: text('full_text'), // Full content: PDF text, transcript, or full post
  pdfUrl: text('pdf_url'), // Unpaywall PDF URL for open access papers
  engagement: json('engagement').$type<{ comments: number; upvotes: number; views: number }>().notNull(),
  topics: json('topics').$type<Topic[]>().notNull(),
  isPreprint: boolean('is_preprint').notNull().default(false),
  journalName: text('journal_name'),
  hashDedupe: varchar('hash_dedupe', { length: 64 }).notNull().unique(),
  score: integer('score'),
  // Quality metrics for unified transparent scoring
  qualityMetrics: json('quality_metrics').$type<{
    // Content Quality (from AI)
    contentQualityScore?: number;
    evidenceQuality?: number;
    clinicalValue?: number;
    clarityStructure?: number;
    practicalApplicability?: number;
    contentQualityReasoning?: string;
    
    // Engagement Signals
    upvotes?: number;
    comments?: number;
    views?: number;
    likes?: number;
    
    // Source Credibility
    journalTier?: 'high' | 'mid' | 'low';
    subredditQuality?: number;
    channelSubscribers?: number;
    authorReputation?: number;
    
    // Traditional metrics (journals only - shown separately)
    citationCount?: number;
    influentialCitations?: number;
    citationVelocity?: number;
    authorHIndex?: number;
    authorCitationCount?: number;
    
    // Quality flags
    fundingSources?: string[];
    conflictOfInterest?: boolean;
    biasFlags?: string[];
    
    // Community
    communityRating?: number;
    communityVoteCount?: number;
  }>(),
  // Unified score breakdown (works for ALL sources)
  scoreBreakdown: json('score_breakdown').$type<{
    contentQuality: number; // 0-40
    engagementSignals: number; // 0-20
    sourceCredibility: number; // 0-20
    recencyScore: number; // 0-10
    communityValidation: number; // 0-10
    totalScore: number; // 0-100
    explanation: string;
  }>(),
}, (table) => ({
  hashIdx: index('items_hash_idx').on(table.hashDedupe),
  sourceTypeIdx: index('items_source_type_idx').on(table.sourceType),
  publishedAtIdx: index('items_published_at_idx').on(table.publishedAt),
  doiIdx: index('items_doi_idx').on(table.doi),
}));

export const summaries = pgTable('summaries', {
  itemId: varchar('item_id', { length: 255 }).primaryKey().references(() => items.id, { onDelete: 'cascade' }),
  keyInsights: text('key_insights').notNull(),
  clinicalTakeaway: text('clinical_takeaway').notNull(),
  methodology: varchar('methodology', { length: 20 }).notNull(),
  levelOfEvidence: varchar('level_of_evidence', { length: 1 }).notNull(),
});

export const digests = pgTable('digests', {
  id: varchar('id', { length: 255 }).primaryKey(),
  slug: varchar('slug', { length: 50 }).notNull().unique(),
  windowStart: text('window_start').notNull(),
  windowEnd: text('window_end').notNull(),
  generatedAt: text('generated_at').notNull(),
  sections: json('sections').notNull(),
}, (table) => ({
  slugIdx: index('digests_slug_idx').on(table.slug),
  generatedAtIdx: index('digests_generated_at_idx').on(table.generatedAt),
}));

// Zod schemas for validation
export const itemSchema = z.object({
  id: z.string(),
  sourceType: z.enum(sourceTypes),
  sourceId: z.string(),
  doi: z.string().nullable(),
  url: z.string().url(),
  title: z.string(),
  authorOrChannel: z.string(),
  publishedAt: z.string(),
  ingestedAt: z.string(),
  rawExcerpt: z.string(),
  engagement: z.object({
    comments: z.number().default(0),
    upvotes: z.number().default(0),
    views: z.number().default(0),
  }),
  topics: z.array(z.enum(topics)),
  isPreprint: z.boolean().default(false),
  journalName: z.string().nullable(),
  hashDedupe: z.string(),
  score: z.number().optional(),
});

export const insertItemSchema = createInsertSchema(items).omit({ id: true, ingestedAt: true });

export type Item = typeof items.$inferSelect;
export type InsertItem = z.infer<typeof insertItemSchema>;

export const summarySchema = z.object({
  itemId: z.string(),
  keyInsights: z.string(),
  clinicalTakeaway: z.string(),
  methodology: z.enum(methodologies),
  levelOfEvidence: z.enum(evidenceLevels),
});

export const insertSummarySchema = createInsertSchema(summaries);

export type Summary = typeof summaries.$inferSelect;
export type InsertSummary = z.infer<typeof insertSummarySchema>;

export const digestSectionItemSchema = z.object({
  itemId: z.string(),
  title: z.string(),
  url: z.string(),
  sourceType: z.enum(sourceTypes),
  publishedAt: z.string(),
  topics: z.array(z.enum(topics)),
  keyInsights: z.string().optional(),
  clinicalTakeaway: z.string().optional(),
  methodology: z.enum(methodologies).optional(),
  levelOfEvidence: z.enum(evidenceLevels).optional(),
  journalName: z.string().nullable().optional(),
  authorOrChannel: z.string().optional(),
  engagement: z.object({
    comments: z.number(),
    upvotes: z.number(),
    views: z.number(),
  }).optional(),
  scoreBreakdown: z.object({
    contentQuality: z.number(),
    engagementSignals: z.number(),
    sourceCredibility: z.number(),
    recencyScore: z.number(),
    communityValidation: z.number(),
    totalScore: z.number(),
    explanation: z.string(),
  }).optional(),
});

export const categorySummarySchema = z.object({
  category: z.string(),
  summary: z.string(),
  keyThemes: z.array(z.string()),
  clinicalImplications: z.string(),
});

export const digestSchema = z.object({
  id: z.string(),
  slug: z.string(),
  windowStart: z.string(),
  windowEnd: z.string(),
  generatedAt: z.string(),
  sections: z.object({
    researchHighlights: z.array(digestSectionItemSchema),
    communityTrends: z.array(digestSectionItemSchema),
    expertCommentary: z.array(digestSectionItemSchema),
    researchHighlightsSummary: categorySummarySchema.optional(),
    communityTrendsSummary: categorySummarySchema.optional(),
    expertCommentarySummary: categorySummarySchema.optional(),
  }),
});

export const insertDigestSchema = createInsertSchema(digests).omit({ id: true, generatedAt: true });

export type Digest = typeof digests.$inferSelect;
export type InsertDigest = z.infer<typeof insertDigestSchema>;
export type DigestSectionItem = z.infer<typeof digestSectionItemSchema>;
export type CategorySummary = z.infer<typeof categorySummarySchema>;

// Session storage table (required for Replit Auth)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => ({
    expireIdx: index("IDX_session_expire").on(table.expire),
  })
);

// User storage table (required for Replit Auth)
export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// User preferences table
export const userPreferences = pgTable("user_preferences", {
  userId: varchar("user_id").primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  favoriteTopics: json("favorite_topics").$type<Topic[]>().notNull().default(sql`'[]'::json`),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserPreferencesSchema = createInsertSchema(userPreferences);

export type UserPreferences = typeof userPreferences.$inferSelect;
export type InsertUserPreferences = z.infer<typeof insertUserPreferencesSchema>;

// Saved items table
export const savedItems = pgTable("saved_items", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  itemId: varchar("item_id", { length: 255 }).notNull().references(() => items.id, { onDelete: 'cascade' }),
  savedAt: timestamp("saved_at").defaultNow(),
}, (table) => ({
  userItemIdx: index("saved_items_user_item_idx").on(table.userId, table.itemId),
}));

export const insertSavedItemSchema = createInsertSchema(savedItems).omit({ id: true, savedAt: true });

export type SavedItem = typeof savedItems.$inferSelect;
export type InsertSavedItem = z.infer<typeof insertSavedItemSchema>;

// User ratings table for community quality assessment
export const userRatings = pgTable("user_ratings", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  itemId: varchar("item_id", { length: 255 }).notNull().references(() => items.id, { onDelete: 'cascade' }),
  rating: integer("rating").notNull(), // 1-5 stars
  comment: text("comment"), // Optional feedback
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  userItemIdx: index("user_ratings_user_item_idx").on(table.userId, table.itemId),
  itemIdx: index("user_ratings_item_idx").on(table.itemId),
}));

export const insertUserRatingSchema = createInsertSchema(userRatings).omit({ id: true, createdAt: true, updatedAt: true });

export type UserRating = typeof userRatings.$inferSelect;
export type InsertUserRating = z.infer<typeof insertUserRatingSchema>;

// Feed catalog domains and categories
export const feedDomains = ['health', 'technology', 'finance', 'science', 'climate', 'general'] as const;
export type FeedDomain = typeof feedDomains[number];

// Feed catalog table - master list of all available RSS feeds
export const feedCatalog = pgTable("feed_catalog", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull().unique(),
  domain: varchar("domain", { length: 50 }).notNull(), // health, tech, finance, etc.
  category: text("category").notNull(), // More specific: journals, reddit, substack, youtube
  description: text("description"),
  sourceType: varchar("source_type", { length: 50 }).notNull(), // journal, reddit, substack, youtube
  isApproved: boolean("is_approved").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  submittedBy: varchar("submitted_by").references(() => users.id, { onDelete: 'set null' }),
  approvedBy: varchar("approved_by").references(() => users.id, { onDelete: 'set null' }),
  createdAt: timestamp("created_at").defaultNow(),
  approvedAt: timestamp("approved_at"),
}, (table) => ({
  domainIdx: index("feed_catalog_domain_idx").on(table.domain),
  isApprovedIdx: index("feed_catalog_is_approved_idx").on(table.isApproved),
  sourceTypeIdx: index("feed_catalog_source_type_idx").on(table.sourceType),
}));

export const feedCatalogSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().url(),
  domain: z.enum(feedDomains),
  category: z.string(),
  description: z.string().optional(),
  sourceType: z.enum(sourceTypes),
  isApproved: z.boolean(),
  isActive: z.boolean(),
  submittedBy: z.string().nullable().optional(),
  approvedBy: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  approvedAt: z.date().nullable().optional(),
});

export const insertFeedCatalogSchema = createInsertSchema(feedCatalog).omit({ id: true, createdAt: true });

export type FeedCatalog = typeof feedCatalog.$inferSelect;
export type InsertFeedCatalog = z.infer<typeof insertFeedCatalogSchema>;

// User feed submissions - pending approval
export const userFeedSubmissions = pgTable("user_feed_submissions", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  feedUrl: text("feed_url").notNull(),
  feedName: text("feed_name").notNull(),
  domain: varchar("domain", { length: 50 }).notNull(),
  category: text("category").notNull(),
  description: text("description"),
  sourceType: varchar("source_type", { length: 50 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default('pending'), // pending, approved, rejected
  reviewedBy: varchar("reviewed_by").references(() => users.id, { onDelete: 'set null' }),
  reviewNotes: text("review_notes"),
  submittedAt: timestamp("submitted_at").defaultNow(),
  reviewedAt: timestamp("reviewed_at"),
}, (table) => ({
  userIdIdx: index("user_feed_submissions_user_id_idx").on(table.userId),
  statusIdx: index("user_feed_submissions_status_idx").on(table.status),
}));

export const userFeedSubmissionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  feedUrl: z.string().url(),
  feedName: z.string(),
  domain: z.enum(feedDomains),
  category: z.string(),
  description: z.string().optional(),
  sourceType: z.enum(sourceTypes),
  status: z.enum(['pending', 'approved', 'rejected']),
  reviewedBy: z.string().nullable().optional(),
  reviewNotes: z.string().optional(),
  submittedAt: z.date().optional(),
  reviewedAt: z.date().nullable().optional(),
});

export const insertUserFeedSubmissionSchema = createInsertSchema(userFeedSubmissions).omit({ 
  id: true, 
  userId: true,
  status: true,
  submittedAt: true,
  reviewedBy: true,
  reviewNotes: true,
  reviewedAt: true,
});

export type UserFeedSubmission = typeof userFeedSubmissions.$inferSelect;
export type InsertUserFeedSubmission = z.infer<typeof insertUserFeedSubmissionSchema>;

// Item embeddings table - stores vector representations for semantic search
// Note: Requires pgvector extension (CREATE EXTENSION IF NOT EXISTS vector;)
export const itemEmbeddings = pgTable("item_embeddings", {
  itemId: varchar("item_id", { length: 255 }).primaryKey().references(() => items.id, { onDelete: 'cascade' }),
  embedding: text("embedding").notNull(), // Stored as JSON array, queried with pgvector
  model: varchar("model", { length: 100 }).notNull().default('text-embedding-3-small'),
  createdAt: timestamp("created_at").defaultNow(),
});

export const itemEmbeddingSchema = z.object({
  itemId: z.string(),
  embedding: z.string(), // JSON stringified array of floats
  model: z.string(),
  createdAt: z.date().optional(),
});

export const insertItemEmbeddingSchema = createInsertSchema(itemEmbeddings).omit({ createdAt: true });

export type ItemEmbedding = typeof itemEmbeddings.$inferSelect;
export type InsertItemEmbedding = z.infer<typeof insertItemEmbeddingSchema>;

// Job runs table - tracks ingestion and digest generation metrics
export const jobRuns = pgTable("job_runs", {
  id: varchar("id", { length: 255 }).primaryKey(),
  jobName: varchar("job_name", { length: 100 }).notNull(),
  startedAt: timestamp("started_at").notNull().defaultNow(),
  finishedAt: timestamp("finished_at"),
  status: varchar("status", { length: 20 }).notNull().default('success'),
  itemsIngested: integer("items_ingested").notNull().default(0),
  dedupeHits: integer("dedupe_hits").notNull().default(0),
  tokenSpend: integer("token_spend").notNull().default(0),
  errorMessage: text("error_message"),
}, (table) => ({
  jobNameIdx: index("job_runs_job_name_idx").on(table.jobName),
  startedAtIdx: index("job_runs_started_at_idx").on(table.startedAt),
}));

export const jobRunSchema = z.object({
  id: z.string(),
  jobName: z.string(),
  startedAt: z.date(),
  finishedAt: z.date().nullable().optional(),
  status: z.enum(['success', 'error']),
  itemsIngested: z.number(),
  dedupeHits: z.number(),
  tokenSpend: z.number(),
  errorMessage: z.string().nullable().optional(),
});

export const insertJobRunSchema = createInsertSchema(jobRuns).omit({ id: true });

export type JobRun = typeof jobRuns.$inferSelect;
export type InsertJobRun = z.infer<typeof insertJobRunSchema>;

// Related refs table - links social/expert discussions to primary research items
export const relatedRefs = pgTable("related_refs", {
  id: varchar("id", { length: 255 }).primaryKey(),
  itemId: varchar("item_id", { length: 255 }).notNull().references(() => items.id, { onDelete: 'cascade' }),
  platform: varchar("platform", { length: 50 }).notNull(),
  label: text("label").notNull(),
  url: text("url").notNull(),
  counts: json("counts").$type<{ comments?: number; upvotes?: number; views?: number }>().notNull().default(sql`'{}'::json`),
}, (table) => ({
  itemIdIdx: index("related_refs_item_id_idx").on(table.itemId),
  uniqueRef: index("related_refs_unique_idx").on(table.itemId, table.platform, table.url),
}));

export const relatedRefSchema = z.object({
  id: z.string(),
  itemId: z.string(),
  platform: z.string(),
  label: z.string(),
  url: z.string(),
  counts: z.object({
    comments: z.number().optional(),
    upvotes: z.number().optional(),
    views: z.number().optional(),
  }),
});

export const insertRelatedRefSchema = createInsertSchema(relatedRefs).omit({ id: true });

export type RelatedRef = typeof relatedRefs.$inferSelect;
export type InsertRelatedRef = z.infer<typeof insertRelatedRefSchema>;
