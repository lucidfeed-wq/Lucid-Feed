import { z } from "zod";
import { pgTable, varchar, text, timestamp, json, integer, boolean, index } from "drizzle-orm/pg-core";
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
  url: text('url').notNull(),
  title: text('title').notNull(),
  authorOrChannel: text('author_or_channel').notNull(),
  publishedAt: text('published_at').notNull(),
  ingestedAt: text('ingested_at').notNull(),
  rawExcerpt: text('raw_excerpt').notNull(),
  engagement: json('engagement').$type<{ comments: number; upvotes: number; views: number }>().notNull(),
  topics: json('topics').$type<Topic[]>().notNull(),
  isPreprint: boolean('is_preprint').notNull().default(false),
  journalName: text('journal_name'),
  hashDedupe: varchar('hash_dedupe', { length: 64 }).notNull().unique(),
  score: integer('score'),
}, (table) => ({
  hashIdx: index('items_hash_idx').on(table.hashDedupe),
  sourceTypeIdx: index('items_source_type_idx').on(table.sourceType),
  publishedAtIdx: index('items_published_at_idx').on(table.publishedAt),
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
  sections: json('sections').$type<{
    researchHighlights: DigestSectionItem[];
    communityTrends: DigestSectionItem[];
    expertCommentary: DigestSectionItem[];
  }>().notNull(),
}, (table) => ({
  slugIdx: index('digests_slug_idx').on(table.slug),
  generatedAtIdx: index('digests_generated_at_idx').on(table.generatedAt),
}));

// Zod schemas for validation
export const itemSchema = z.object({
  id: z.string(),
  sourceType: z.enum(sourceTypes),
  sourceId: z.string(),
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
  }),
});

export const insertDigestSchema = createInsertSchema(digests).omit({ id: true, generatedAt: true });

export type Digest = typeof digests.$inferSelect;
export type InsertDigest = z.infer<typeof insertDigestSchema>;
export type DigestSectionItem = z.infer<typeof digestSectionItemSchema>;
