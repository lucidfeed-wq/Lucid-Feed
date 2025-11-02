import { z } from "zod";

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

export const insertItemSchema = itemSchema.omit({ id: true });

export type Item = z.infer<typeof itemSchema>;
export type InsertItem = z.infer<typeof insertItemSchema>;
export type SourceType = typeof sourceTypes[number];
export type Methodology = typeof methodologies[number];
export type EvidenceLevel = typeof evidenceLevels[number];
export type Topic = typeof topics[number];

export const summarySchema = z.object({
  itemId: z.string(),
  keyInsights: z.string(),
  clinicalTakeaway: z.string(),
  methodology: z.enum(methodologies),
  levelOfEvidence: z.enum(evidenceLevels),
});

export const insertSummarySchema = summarySchema;

export type Summary = z.infer<typeof summarySchema>;
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
  windowStart: z.string(),
  windowEnd: z.string(),
  generatedAt: z.string(),
  sections: z.object({
    researchHighlights: z.array(digestSectionItemSchema),
    communityTrends: z.array(digestSectionItemSchema),
    expertCommentary: z.array(digestSectionItemSchema),
  }),
  publicSlug: z.string(),
  version: z.number(),
});

export const insertDigestSchema = digestSchema.omit({ id: true });

export type Digest = z.infer<typeof digestSchema>;
export type InsertDigest = z.infer<typeof insertDigestSchema>;
export type DigestSectionItem = z.infer<typeof digestSectionItemSchema>;
