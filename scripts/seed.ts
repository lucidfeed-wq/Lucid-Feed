import { storage } from "../server/storage";
import { nanoid } from "nanoid";
import type { InsertItem, InsertDigest } from "../shared/schema";

async function seed() {
  console.log("Seeding database with demo data...");

  // Create demo items
  const items: InsertItem[] = [
    {
      sourceType: "journal",
      sourceId: "10.1038/s41586-024-07123-x",
      url: "https://www.nature.com/articles/s41586-024-07123-x",
      title: "Metabolic reprogramming in mitochondrial dysfunction improves insulin sensitivity",
      authorOrChannel: "Nature",
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      ingestedAt: new Date().toISOString(),
      rawExcerpt: "This randomized controlled trial demonstrates significant improvements in insulin resistance through mitochondrial-targeted interventions. Results show a 40% reduction in fasting glucose levels.",
      engagement: { comments: 0, upvotes: 0, views: 0 },
      topics: ["metabolic", "insulin_resistance", "mitochondrial_health"],
      isPreprint: false,
      journalName: "Nature",
      hashDedupe: "hash1",
    },
    {
      sourceType: "journal",
      sourceId: "10.1016/j.cell.2024.02.045",
      url: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(24)00045-2",
      title: "Gut microbiome modulation reduces chronic inflammation in autoimmune conditions",
      authorOrChannel: "Cell Metabolism",
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      ingestedAt: new Date().toISOString(),
      rawExcerpt: "Cohort study examining the relationship between gut microbiome diversity and inflammatory markers in patients with autoimmune disorders. Significant correlations found.",
      engagement: { comments: 0, upvotes: 0, views: 0 },
      topics: ["gut_health", "autoimmune", "inflammation"],
      isPreprint: false,
      journalName: "Cell Metabolism",
      hashDedupe: "hash2",
    },
    {
      sourceType: "reddit",
      sourceId: "https://reddit.com/r/FunctionalMedicine/abc123",
      url: "https://reddit.com/r/FunctionalMedicine/comments/abc123",
      title: "Success story: Reversed insulin resistance with keto and fasting",
      authorOrChannel: "r/FunctionalMedicine",
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      ingestedAt: new Date().toISOString(),
      rawExcerpt: "After 6 months on ketogenic diet with 16:8 intermittent fasting, my HbA1c dropped from 6.8 to 5.2. Doctor confirmed reversal of pre-diabetes.",
      engagement: { comments: 45, upvotes: 234, views: 0 },
      topics: ["keto", "fasting", "insulin_resistance", "weight_loss"],
      isPreprint: false,
      journalName: null,
      hashDedupe: "hash3",
    },
    {
      sourceType: "youtube",
      sourceId: "https://youtube.com/watch?v=xyz789",
      url: "https://youtube.com/watch?v=xyz789",
      title: "The Role of NAD+ in Longevity and Cellular Energy",
      authorOrChannel: "Dr. Mark Hyman",
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      ingestedAt: new Date().toISOString(),
      rawExcerpt: "In this video, we explore the science behind NAD+ supplementation and its effects on mitochondrial function, aging, and metabolic health.",
      engagement: { comments: 156, upvotes: 1200, views: 45000 },
      topics: ["NAD_therapy", "mitochondrial_health", "biohacking"],
      isPreprint: false,
      journalName: null,
      hashDedupe: "hash4",
    },
    {
      sourceType: "substack",
      sourceId: "https://chriskresser.substack.com/p/thyroid-optimization",
      url: "https://chriskresser.substack.com/p/thyroid-optimization",
      title: "Thyroid Optimization: Beyond TSH Testing",
      authorOrChannel: "Chris Kresser",
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      ingestedAt: new Date().toISOString(),
      rawExcerpt: "Most doctors only test TSH, but optimal thyroid function requires looking at Free T3, Free T4, reverse T3, and thyroid antibodies. Here's my comprehensive approach.",
      engagement: { comments: 28, upvotes: 89, views: 0 },
      topics: ["thyroid_health", "hormone_optimization"],
      isPreprint: false,
      journalName: null,
      hashDedupe: "hash5",
    },
  ];

  for (const item of items) {
    await storage.createItem(item);
  }

  console.log(`Created ${items.length} demo items`);

  // Create a demo digest
  const digest: InsertDigest = {
    windowStart: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    windowEnd: new Date().toISOString(),
    generatedAt: new Date().toISOString(),
    sections: {
      researchHighlights: [
        {
          itemId: "1",
          title: "Metabolic reprogramming in mitochondrial dysfunction improves insulin sensitivity",
          url: "https://www.nature.com/articles/s41586-024-07123-x",
          sourceType: "journal",
          publishedAt: items[0].publishedAt,
          topics: ["metabolic", "insulin_resistance", "mitochondrial_health"],
          keyInsights: "This RCT demonstrates significant improvements in insulin resistance through mitochondrial-targeted interventions, with a 40% reduction in fasting glucose levels.",
          clinicalTakeaway: "Mitochondrial support may offer novel therapeutic approach for insulin resistance management.",
          methodology: "RCT",
          levelOfEvidence: "A",
          journalName: "Nature",
          authorOrChannel: "Nature",
        },
        {
          itemId: "2",
          title: "Gut microbiome modulation reduces chronic inflammation in autoimmune conditions",
          url: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(24)00045-2",
          sourceType: "journal",
          publishedAt: items[1].publishedAt,
          topics: ["gut_health", "autoimmune", "inflammation"],
          keyInsights: "Cohort study shows strong correlation between gut microbiome diversity and reduced inflammatory markers in autoimmune patients.",
          clinicalTakeaway: "Probiotic interventions may complement standard autoimmune treatments.",
          methodology: "Cohort",
          levelOfEvidence: "B",
          journalName: "Cell Metabolism",
          authorOrChannel: "Cell Metabolism",
        },
      ],
      communityTrends: [
        {
          itemId: "3",
          title: "Success story: Reversed insulin resistance with keto and fasting",
          url: "https://reddit.com/r/FunctionalMedicine/comments/abc123",
          sourceType: "reddit",
          publishedAt: items[2].publishedAt,
          topics: ["keto", "fasting", "insulin_resistance", "weight_loss"],
          keyInsights: "Patient reports HbA1c reduction from 6.8 to 5.2 after 6 months of ketogenic diet combined with 16:8 intermittent fasting.",
          authorOrChannel: "r/FunctionalMedicine",
          engagement: { comments: 45, upvotes: 234, views: 0 },
        },
        {
          itemId: "5",
          title: "Thyroid Optimization: Beyond TSH Testing",
          url: "https://chriskresser.substack.com/p/thyroid-optimization",
          sourceType: "substack",
          publishedAt: items[4].publishedAt,
          topics: ["thyroid_health", "hormone_optimization"],
          keyInsights: "Comprehensive thyroid assessment requires Free T3, Free T4, reverse T3, and antibody testing beyond standard TSH.",
          authorOrChannel: "Chris Kresser",
          engagement: { comments: 28, upvotes: 89, views: 0 },
        },
      ],
      expertCommentary: [
        {
          itemId: "4",
          title: "The Role of NAD+ in Longevity and Cellular Energy",
          url: "https://youtube.com/watch?v=xyz789",
          sourceType: "youtube",
          publishedAt: items[3].publishedAt,
          topics: ["NAD_therapy", "mitochondrial_health", "biohacking", "fasting"],
          keyInsights: "Explores NAD+ supplementation effects on mitochondrial function, aging processes, and metabolic health optimization.",
          authorOrChannel: "Dr. Mark Hyman",
          engagement: { comments: 156, upvotes: 1200, views: 45000 },
        },
      ],
    },
    publicSlug: "2025w05",
    version: 1,
  };

  await storage.createDigest(digest);
  console.log("Created demo digest");

  console.log("Seeding complete!");
}

seed().catch(console.error);
