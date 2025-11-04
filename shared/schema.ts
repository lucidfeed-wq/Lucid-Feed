import { z } from "zod";
import { sql } from 'drizzle-orm';
import { pgTable, varchar, text, timestamp, json, integer, boolean, index, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const sourceTypes = ['journal', 'reddit', 'substack', 'youtube', 'podcast'] as const;
export const methodologies = ['RCT', 'Cohort', 'Case', 'Review', 'Meta', 'Preprint', 'NA'] as const;
export const evidenceLevels = ['A', 'B', 'C'] as const;

export const topics = [
  // Health & Wellness
  'metabolic', 'chronic_fatigue', 'chronic_EBV', 'autoimmune', 'leaky_gut',
  'carnivore', 'keto', 'IV_therapy', 'HRT', 'TRT', 'mold_CIRS', 'weight_loss',
  'PANS_PANDAS', 'insulin_resistance', 'gut_health', 'hormone_optimization',
  'biohacking', 'mitochondrial_health', 'thyroid_health', 'adrenal_fatigue',
  'brain_fog', 'inflammation', 'SIBO', 'candida', 'histamine_DAO', 'NAD_therapy',
  'ozone_therapy', 'red_light_therapy', 'cold_exposure', 'sauna_therapy',
  'fasting', 'autophagy', 'longevity', 'nutrition_science', 'fitness_recovery',
  'sleep_optimization', 'mindfulness', 'mental_health', 'preventive_medicine',
  'supplementation',
  
  // Science & Nature
  'neuroscience', 'psychology', 'genetics', 'space_exploration', 'physics',
  'biology', 'ecology', 'chemistry', 'cognitive_science',
  
  // Technology & AI
  'artificial_intelligence', 'machine_learning', 'automation', 'robotics',
  'data_science', 'cybersecurity', 'software_development', 'tech_policy',
  'emerging_tech',
  
  // Productivity & Self-Improvement
  'focus_flow', 'habit_building', 'learning_techniques', 'time_management',
  'stoicism', 'motivation', 'journaling', 'decision_making', 'systems_thinking',
  
  // Finance & Business
  'investing', 'personal_finance', 'startups', 'entrepreneurship', 'economics',
  'real_estate', 'crypto_web3', 'marketing', 'productivity_founders',
  
  // Society & Culture
  'politics', 'ethics', 'media_studies', 'philosophy', 'education_reform',
  'gender_identity', 'sociology', 'global_affairs', 'history',
  
  // Environment & Sustainability
  'climate_change', 'renewable_energy', 'agriculture_food_systems',
  'conservation', 'environmental_policy', 'urban_design', 'sustainable_living',
  
  // Creativity & Media
  'writing', 'art_design', 'storytelling', 'film_tv', 'music', 'photography',
  'branding', 'digital_creation', 'creative_process',
  
  // Education & Learning
  'teaching', 'online_learning', 'skill_development', 'learning_technology',
  'critical_thinking', 'memory_optimization',
  
  // Lifestyle & Travel
  'minimalism', 'relationships', 'parenting', 'adventure_travel', 'outdoor_life',
  'work_life_balance', 'home_design', 'spirituality'
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
  preferredSourceTypes: json("preferred_source_types").$type<SourceType[]>().notNull().default(sql`'[]'::json`),
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

// Read items table - track which items users have marked as read
export const readItems = pgTable("read_items", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  itemId: varchar("item_id", { length: 255 }).notNull().references(() => items.id, { onDelete: 'cascade' }),
  readAt: timestamp("read_at").defaultNow(),
}, (table) => ({
  userItemIdx: index("read_items_user_item_idx").on(table.userId, table.itemId),
}));

export const insertReadItemSchema = createInsertSchema(readItems).omit({ id: true, readAt: true });

export type ReadItem = typeof readItems.$inferSelect;
export type InsertReadItem = z.infer<typeof insertReadItemSchema>;

// User folders table - custom organizational folders
export const folders = pgTable("folders", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text("name").notNull(),
  color: varchar("color", { length: 20 }).default('#6366f1'), // Hex color for visual distinction
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  userIdIdx: index("folders_user_id_idx").on(table.userId),
}));

export const insertFolderSchema = createInsertSchema(folders).omit({ id: true, createdAt: true, updatedAt: true });

export type Folder = typeof folders.$inferSelect;
export type InsertFolder = z.infer<typeof insertFolderSchema>;

// Item folders junction table - assigns items to folders
export const itemFolders = pgTable("item_folders", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  itemId: varchar("item_id", { length: 255 }).notNull().references(() => items.id, { onDelete: 'cascade' }),
  folderId: varchar("folder_id", { length: 255 }).notNull().references(() => folders.id, { onDelete: 'cascade' }),
  addedAt: timestamp("added_at").defaultNow(),
}, (table) => ({
  userItemFolderIdx: index("item_folders_user_item_folder_idx").on(table.userId, table.itemId, table.folderId),
  folderIdIdx: index("item_folders_folder_id_idx").on(table.folderId),
}));

export const insertItemFolderSchema = createInsertSchema(itemFolders).omit({ id: true, addedAt: true });

export type ItemFolder = typeof itemFolders.$inferSelect;
export type InsertItemFolder = z.infer<typeof insertItemFolderSchema>;

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
  topics: json("topics").$type<Topic[]>().notNull().default(sql`'[]'::json`), // Topics this feed covers
  featured: boolean("featured").notNull().default(false), // Curated starter feed
  starterRank: integer("starter_rank"), // Order for featured feeds (lower = higher priority)
  qualityScore: integer("quality_score").default(50), // Quality metric 0-100 for ranking
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
  featuredIdx: index("feed_catalog_featured_idx").on(table.featured),
}));

export const feedCatalogSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().url(),
  domain: z.enum(feedDomains),
  category: z.string(),
  description: z.string().optional(),
  sourceType: z.enum(sourceTypes),
  topics: z.array(z.enum(topics)),
  featured: z.boolean(),
  starterRank: z.number().nullable().optional(),
  qualityScore: z.number().nullable().optional(),
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

// ========================================
// MULTI-TENANT SAAS TABLES
// ========================================

// Subscription tiers for Lucid Feed
export const subscriptionTiers = ['free', 'premium', 'pro'] as const;
export type SubscriptionTier = typeof subscriptionTiers[number];

// User subscriptions table - Stripe subscription data
export const userSubscriptions = pgTable("user_subscriptions", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().unique().references(() => users.id, { onDelete: 'cascade' }),
  tier: varchar("tier", { length: 20 }).notNull().default('free'),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  stripePriceId: varchar("stripe_price_id", { length: 255 }),
  status: varchar("status", { length: 20 }).notNull().default('active'), // active, canceled, past_due
  currentPeriodStart: timestamp("current_period_start"),
  currentPeriodEnd: timestamp("current_period_end"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").notNull().default(false),
  digestFrequency: varchar("digest_frequency", { length: 20 }).notNull().default('weekly'), // weekly, daily
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  userIdIdx: index("user_subscriptions_user_id_idx").on(table.userId),
  tierIdx: index("user_subscriptions_tier_idx").on(table.tier),
  stripeCustomerIdx: index("user_subscriptions_stripe_customer_idx").on(table.stripeCustomerId),
}));

export const userSubscriptionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  tier: z.enum(subscriptionTiers),
  stripeCustomerId: z.string().nullable().optional(),
  stripeSubscriptionId: z.string().nullable().optional(),
  stripePriceId: z.string().nullable().optional(),
  status: z.string(),
  currentPeriodStart: z.date().nullable().optional(),
  currentPeriodEnd: z.date().nullable().optional(),
  cancelAtPeriodEnd: z.boolean(),
  digestFrequency: z.enum(['weekly', 'daily']),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const insertUserSubscriptionSchema = createInsertSchema(userSubscriptions).omit({ id: true, createdAt: true, updatedAt: true });

export type UserSubscription = typeof userSubscriptions.$inferSelect;
export type InsertUserSubscription = z.infer<typeof insertUserSubscriptionSchema>;

// User feed subscriptions - which feeds each user follows
export const userFeedSubscriptions = pgTable("user_feed_subscriptions", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  feedId: varchar("feed_id", { length: 255 }).notNull().references(() => feedCatalog.id, { onDelete: 'cascade' }),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
  isActive: boolean("is_active").notNull().default(true),
}, (table) => ({
  userFeedIdx: index("user_feed_subscriptions_user_feed_idx").on(table.userId, table.feedId),
  userIdIdx: index("user_feed_subscriptions_user_id_idx").on(table.userId),
  uniqueSubscription: index("user_feed_subscriptions_unique_idx").on(table.userId, table.feedId),
}));

export const userFeedSubscriptionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  feedId: z.string(),
  subscribedAt: z.date().optional(),
  isActive: z.boolean(),
});

export const insertUserFeedSubscriptionSchema = createInsertSchema(userFeedSubscriptions).omit({ id: true, subscribedAt: true });

export type UserFeedSubscription = typeof userFeedSubscriptions.$inferSelect;
export type InsertUserFeedSubscription = z.infer<typeof insertUserFeedSubscriptionSchema>;

// User digests - per-user digest history
export const userDigests = pgTable("user_digests", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  slug: varchar("slug", { length: 100 }).notNull(),
  windowStart: text("window_start").notNull(),
  windowEnd: text("window_end").notNull(),
  generatedAt: text("generated_at").notNull(),
  sections: json("sections").notNull(),
  itemCount: integer("item_count").notNull().default(0),
}, (table) => ({
  userSlugIdx: index("user_digests_user_slug_idx").on(table.userId, table.slug),
  userIdIdx: index("user_digests_user_id_idx").on(table.userId),
  generatedAtIdx: index("user_digests_generated_at_idx").on(table.generatedAt),
}));

export const userDigestSchema = z.object({
  id: z.string(),
  userId: z.string(),
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
  itemCount: z.number(),
});

export const insertUserDigestSchema = createInsertSchema(userDigests).omit({ id: true, generatedAt: true });

export type UserDigest = typeof userDigests.$inferSelect;
export type InsertUserDigest = z.infer<typeof insertUserDigestSchema>;

// Chat conversations - persist chat history
export const chatConversations = pgTable("chat_conversations", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: text("title"), // Optional conversation title
  messages: json("messages").$type<Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: string;
  }>>().notNull().default(sql`'[]'::json`),
  scope: json("scope").$type<{
    type: 'current_digest' | 'all_digests' | 'saved_items' | 'folder';
    digestId?: string;
    userId?: string;
    folderId?: string;
  } | null>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  userIdIdx: index("chat_conversations_user_id_idx").on(table.userId),
  createdAtIdx: index("chat_conversations_created_at_idx").on(table.createdAt),
}));

export const chatConversationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string().nullable().optional(),
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string(),
    timestamp: z.string(),
  })),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const insertChatConversationSchema = createInsertSchema(chatConversations).omit({ id: true, createdAt: true, updatedAt: true });

export type ChatConversation = typeof chatConversations.$inferSelect;
export type InsertChatConversation = z.infer<typeof insertChatConversationSchema>;

// Chat settings - user privacy preferences for chat
export const chatSettings = pgTable("chat_settings", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().unique().references(() => users.id, { onDelete: 'cascade' }),
  enableHistoryTracking: boolean("enable_history_tracking").notNull().default(false), // Pro tier feature
  enableHistoryLearning: boolean("enable_history_learning").notNull().default(false), // Pro tier feature - use history to improve responses
  defaultScope: varchar("default_scope", { length: 50 }).notNull().default('current_digest'), // current_digest, all_digests, saved_items, folder
  defaultFolderId: varchar("default_folder_id", { length: 255 }).references(() => folders.id, { onDelete: 'set null' }), // If scope is 'folder'
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  userIdIdx: index("chat_settings_user_id_idx").on(table.userId),
}));

export const chatSettingsSchema = z.object({
  id: z.string(),
  userId: z.string(),
  enableHistoryTracking: z.boolean(),
  enableHistoryLearning: z.boolean(),
  defaultScope: z.enum(['current_digest', 'all_digests', 'saved_items', 'folder']),
  defaultFolderId: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const insertChatSettingsSchema = createInsertSchema(chatSettings).omit({ id: true, createdAt: true, updatedAt: true });

export type ChatSettings = typeof chatSettings.$inferSelect;
export type InsertChatSettings = z.infer<typeof insertChatSettingsSchema>;

// Daily usage tracking - track message counts for tier limits
export const dailyUsage = pgTable("daily_usage", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: 'cascade' }),
  date: varchar("date", { length: 10 }).notNull(), // YYYY-MM-DD format
  chatMessages: integer("chat_messages").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  userDateIdx: index("daily_usage_user_date_idx").on(table.userId, table.date),
  dateIdx: index("daily_usage_date_idx").on(table.date),
}));

export const dailyUsageSchema = z.object({
  id: z.string(),
  userId: z.string(),
  date: z.string(),
  chatMessages: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const insertDailyUsageSchema = createInsertSchema(dailyUsage).omit({ id: true, createdAt: true, updatedAt: true });

export type DailyUsage = typeof dailyUsage.$inferSelect;
export type InsertDailyUsage = z.infer<typeof insertDailyUsageSchema>;

// Feed discovery cache - cache search results for performance
export const feedDiscoveryCache = pgTable("feed_discovery_cache", {
  id: varchar("id", { length: 255 }).primaryKey(),
  query: text("query").notNull(),
  sourceType: varchar("source_type", { length: 50 }).notNull(), // podcast, youtube, reddit, etc.
  results: json("results").notNull(), // Cached search results
  createdAt: timestamp("created_at").defaultNow(),
  expiresAt: timestamp("expires_at").notNull(), // Cache expiry (typically 24 hours)
}, (table) => ({
  querySourceIdx: index("feed_discovery_cache_query_source_idx").on(table.query, table.sourceType),
  expiresAtIdx: index("feed_discovery_cache_expires_at_idx").on(table.expiresAt),
}));

export const feedDiscoveryCacheSchema = z.object({
  id: z.string(),
  query: z.string(),
  sourceType: z.string(),
  results: z.any(),
  createdAt: z.date().optional(),
  expiresAt: z.date(),
});

export const insertFeedDiscoveryCacheSchema = createInsertSchema(feedDiscoveryCache).omit({ id: true, createdAt: true });

export type FeedDiscoveryCache = typeof feedDiscoveryCache.$inferSelect;
export type InsertFeedDiscoveryCache = z.infer<typeof insertFeedDiscoveryCacheSchema>;

// Job queue table - PostgreSQL-based lightweight queue (replaces BullMQ for MVP)
export const jobQueue = pgTable("job_queue", {
  id: varchar("id", { length: 255 }).primaryKey(),
  type: varchar("type", { length: 100 }).notNull(), // rssFetch, ytTranscript, metadataEnrich, summaryBuild, digestBuild
  payload: json("payload").notNull(), // Job-specific data
  status: varchar("status", { length: 20 }).notNull().default('pending'), // pending, processing, completed, failed, dead_letter
  priority: integer("priority").notNull().default(5), // 1-10, lower = higher priority
  retries: integer("retries").notNull().default(0),
  maxRetries: integer("max_retries").notNull().default(5),
  nextRunAt: timestamp("next_run_at").notNull().defaultNow(),
  processingStartedAt: timestamp("processing_started_at"),
  completedAt: timestamp("completed_at"),
  failReason: text("fail_reason"),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  typeStatusIdx: index("job_queue_type_status_idx").on(table.type, table.status),
  nextRunAtIdx: index("job_queue_next_run_at_idx").on(table.nextRunAt),
  statusIdx: index("job_queue_status_idx").on(table.status),
}));

export const jobQueueSchema = z.object({
  id: z.string(),
  type: z.string(),
  payload: z.any(),
  status: z.enum(['pending', 'processing', 'completed', 'failed', 'dead_letter']),
  priority: z.number(),
  retries: z.number(),
  maxRetries: z.number(),
  nextRunAt: z.date(),
  processingStartedAt: z.date().nullable().optional(),
  completedAt: z.date().nullable().optional(),
  failReason: z.string().nullable().optional(),
  createdAt: z.date().optional(),
});

export const insertJobQueueSchema = createInsertSchema(jobQueue).omit({ id: true, createdAt: true });

export type JobQueue = typeof jobQueue.$inferSelect;
export type InsertJobQueue = z.infer<typeof insertJobQueueSchema>;

// Metrics table - daily aggregated metrics (replaces PostHog for MVP)
export const metricsDaily = pgTable("metrics_daily", {
  id: varchar("id", { length: 255 }).primaryKey(),
  metric: varchar("metric", { length: 100 }).notNull(), // rss_items_fetched, items_merged, transcripts_ok, etc.
  value: integer("value").notNull(),
  metadata: json("metadata"), // Additional context (userId, sourceType, etc.)
  day: varchar("day", { length: 10 }).notNull(), // YYYY-MM-DD
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  metricDayIdx: index("metrics_daily_metric_day_idx").on(table.metric, table.day),
  dayIdx: index("metrics_daily_day_idx").on(table.day),
}));

export const metricsDailySchema = z.object({
  id: z.string(),
  metric: z.string(),
  value: z.number(),
  metadata: z.any().optional(),
  day: z.string(),
  createdAt: z.date().optional(),
});

export const insertMetricsDailySchema = createInsertSchema(metricsDaily).omit({ id: true, createdAt: true });

export type MetricsDaily = typeof metricsDaily.$inferSelect;
export type InsertMetricsDaily = z.infer<typeof insertMetricsDailySchema>;
