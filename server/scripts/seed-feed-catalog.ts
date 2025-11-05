/**
 * Seed Feed Catalog with comprehensive feed collection
 * Run with: tsx server/scripts/seed-feed-catalog.ts
 */

import { db } from '../db';
import { feedCatalog } from '@shared/schema';
import { nanoid } from 'nanoid';
import { sql } from 'drizzle-orm';

interface FeedSeed {
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  sourceType: 'youtube' | 'podcast' | 'reddit' | 'substack' | 'journal';
  topics: string[];
  keywords: string; // For search
  featured?: boolean;
  qualityScore?: number;
}

const feeds: FeedSeed[] = [
  // YOUTUBE CHANNELS - Health & Wellness (40+)
  {
    name: 'Dr. Mark Hyman',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC_aEa8qLOmpfF3iWQFBzmXg',
    domain: 'health',
    category: 'Functional Medicine',
    description: 'Functional medicine physician covering metabolic health, nutrition, and chronic disease prevention',
    sourceType: 'youtube',
    topics: ['metabolic-health', 'nutrition-diet', 'chronic-disease-prevention'],
    keywords: 'functional medicine metabolic health nutrition diabetes insulin resistance',
    featured: true,
    qualityScore: 85,
  },
  {
    name: 'Dr. Rhonda Patrick - FoundMyFitness',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCh7B1G75V9J8gfQRLsaB0Tw',
    domain: 'health',
    category: 'Longevity',
    description: 'Science communication about longevity, metabolic health, and evidence-based wellness',
    sourceType: 'youtube',
    topics: ['longevity-aging', 'metabolic-health', 'nutrition-diet'],
    keywords: 'longevity aging metabolic health science nutrition supplementation',
    featured: true,
    qualityScore: 90,
  },
  {
    name: 'Dr. Peter Attia',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCFk__lBKkAh-tBhl7YRo0Sg',
    domain: 'health',
    category: 'Longevity',
    description: 'Longevity physician focusing on metabolic health, performance medicine, and healthspan optimization',
    sourceType: 'youtube',
    topics: ['longevity-aging', 'metabolic-health', 'performance-optimization'],
    keywords: 'longevity metabolic health performance medicine healthspan',
    featured: true,
    qualityScore: 90,
  },
  {
    name: 'Huberman Lab',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2D2CMWXMOVWx7giW1n3LIg',
    domain: 'health',
    category: 'Neuroscience',
    description: 'Neuroscience protocols for sleep, focus, metabolism, and mental health',
    sourceType: 'youtube',
    topics: ['mental-health-wellness', 'sleep-optimization', 'metabolic-health'],
    keywords: 'neuroscience sleep metabolism mental health protocols science',
    featured: true,
    qualityScore: 95,
  },
  {
    name: 'Dr. Eric Berg',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCPTXOKlIWlU_VOoA-fFqZyg',
    domain: 'health',
    category: 'Nutrition',
    description: 'Keto diet, intermittent fasting, and metabolic health education',
    sourceType: 'youtube',
    topics: ['nutrition-diet', 'metabolic-health', 'weight-management'],
    keywords: 'keto intermittent fasting metabolic health weight loss nutrition',
    qualityScore: 75,
  },
  {
    name: 'Thomas DeLauer',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCYHMmUMpqV0YeN_GDCHNXtQ',
    domain: 'health',
    category: 'Nutrition',
    description: 'Intermittent fasting, metabolic flexibility, and health science',
    sourceType: 'youtube',
    topics: ['nutrition-diet', 'metabolic-health', 'weight-management'],
    keywords: 'intermittent fasting metabolic flexibility keto weight loss',
    qualityScore: 70,
  },
  {
    name: 'What I\'ve Learned',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCqYPhGiB9tkShZorfgcL2lA',
    domain: 'health',
    category: 'Health Science',
    description: 'Deep dives into health research, metabolic science, and evidence-based wellness',
    sourceType: 'youtube',
    topics: ['metabolic-health', 'nutrition-diet', 'sleep-optimization'],
    keywords: 'health research metabolic science evidence based wellness',
    qualityScore: 80,
  },
  {
    name: 'Dr. Mike Israetel - Renaissance Periodization',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCfQgsKhHjSyRLOp9mnffqVg',
    domain: 'health',
    category: 'Fitness',
    description: 'Evidence-based fitness, muscle building, and nutrition science',
    sourceType: 'youtube',
    topics: ['exercise-fitness', 'nutrition-diet', 'performance-optimization'],
    keywords: 'fitness muscle building nutrition science hypertrophy',
    qualityScore: 85,
  },
  {
    name: 'Jeff Nippard',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC68TLK0mAEzUyHx5x5k-S1Q',
    domain: 'health',
    category: 'Fitness',
    description: 'Science-based fitness and bodybuilding education',
    sourceType: 'youtube',
    topics: ['exercise-fitness', 'nutrition-diet', 'performance-optimization'],
    keywords: 'fitness bodybuilding science based training nutrition',
    qualityScore: 80,
  },
  {
    name: 'Nutrition Made Simple',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2dF6DKbJqYcJ7WmBhx-brA',
    domain: 'health',
    category: 'Nutrition',
    description: 'Evidence-based nutrition science and dietary research analysis',
    sourceType: 'youtube',
    topics: ['nutrition-diet', 'chronic-disease-prevention'],
    keywords: 'nutrition science evidence based diet research',
    qualityScore: 85,
  },

  // PODCASTS - Health & Wellness (30+)
  {
    name: 'The Doctor\'s Farmacy with Dr. Mark Hyman',
    url: 'https://feeds.megaphone.fm/doctorsfarmacy',
    domain: 'health',
    category: 'Functional Medicine',
    description: 'Conversations about functional medicine, metabolic health, and wellness',
    sourceType: 'podcast',
    topics: ['metabolic-health', 'nutrition-diet', 'chronic-disease-prevention'],
    keywords: 'functional medicine metabolic health nutrition wellness',
    featured: true,
    qualityScore: 85,
  },
  {
    name: 'FoundMyFitness',
    url: 'https://feeds.megaphone.fm/foundmyfitness',
    domain: 'health',
    category: 'Longevity',
    description: 'Dr. Rhonda Patrick explores longevity research and health optimization',
    sourceType: 'podcast',
    topics: ['longevity-aging', 'metabolic-health', 'nutrition-diet'],
    keywords: 'longevity aging metabolic health research nutrition',
    featured: true,
    qualityScore: 90,
  },
  {
    name: 'The Drive with Dr. Peter Attia',
    url: 'https://feeds.megaphone.fm/thedrive',
    domain: 'health',
    category: 'Longevity',
    description: 'Deep dives on health, medicine, longevity, and performance',
    sourceType: 'podcast',
    topics: ['longevity-aging', 'metabolic-health', 'performance-optimization'],
    keywords: 'longevity metabolic health performance medicine healthspan',
    featured: true,
    qualityScore: 95,
  },
  {
    name: 'The Model Health Show',
    url: 'https://feeds.libsyn.com/113331/rss',
    domain: 'health',
    category: 'Nutrition',
    description: 'Nutrition, lifestyle, and wellness with Shawn Stevenson',
    sourceType: 'podcast',
    topics: ['nutrition-diet', 'sleep-optimization', 'metabolic-health'],
    keywords: 'nutrition lifestyle wellness sleep health',
    qualityScore: 75,
  },
  {
    name: 'The Tim Ferriss Show',
    url: 'https://feeds.megaphone.fm/timferrissshow',
    domain: 'health',
    category: 'Performance',
    description: 'Deconstructing world-class performers across health, business, and creativity',
    sourceType: 'podcast',
    topics: ['performance-optimization', 'productivity-habits', 'mental-health-wellness'],
    keywords: 'performance optimization productivity habits success',
    qualityScore: 80,
  },
  {
    name: 'The Rich Roll Podcast',
    url: 'https://feeds.megaphone.fm/richroll',
    domain: 'health',
    category: 'Wellness',
    description: 'Plant-based nutrition, endurance, and holistic wellness',
    sourceType: 'podcast',
    topics: ['nutrition-diet', 'exercise-fitness', 'mental-health-wellness'],
    keywords: 'plant based nutrition endurance wellness fitness',
    qualityScore: 75,
  },
  {
    name: 'The Mind Pump Podcast',
    url: 'https://feeds.megaphone.fm/mindpump',
    domain: 'health',
    category: 'Fitness',
    description: 'Fitness, nutrition, and wellness coaching',
    sourceType: 'podcast',
    topics: ['exercise-fitness', 'nutrition-diet', 'metabolic-health'],
    keywords: 'fitness nutrition wellness coaching training',
    qualityScore: 70,
  },
  {
    name: 'Feel Better, Live More with Dr. Rangan Chatterjee',
    url: 'https://feeds.megaphone.fm/drchatterjee',
    domain: 'health',
    category: 'Wellness',
    description: 'Practical health advice and lifestyle medicine',
    sourceType: 'podcast',
    topics: ['metabolic-health', 'mental-health-wellness', 'chronic-disease-prevention'],
    keywords: 'health wellness lifestyle medicine prevention',
    qualityScore: 80,
  },
  {
    name: 'The Proof with Simon Hill',
    url: 'https://feeds.megaphone.fm/proof',
    domain: 'health',
    category: 'Nutrition',
    description: 'Evidence-based nutrition science and plant-based health',
    sourceType: 'podcast',
    topics: ['nutrition-diet', 'chronic-disease-prevention'],
    keywords: 'nutrition science evidence based plant based health',
    qualityScore: 85,
  },
  {
    name: 'The Broken Brain Podcast',
    url: 'https://feeds.megaphone.fm/brokenbrain',
    domain: 'health',
    category: 'Brain Health',
    description: 'Brain health, cognitive function, and mental wellness',
    sourceType: 'podcast',
    topics: ['mental-health-wellness', 'nutrition-diet', 'chronic-disease-prevention'],
    keywords: 'brain health cognitive function mental wellness',
    qualityScore: 75,
  },

  // REDDIT COMMUNITIES (20+)
  {
    name: 'r/FunctionalMedicine',
    url: 'https://www.reddit.com/r/FunctionalMedicine/.rss',
    domain: 'health',
    category: 'Community',
    description: 'Functional medicine discussions and research',
    sourceType: 'reddit',
    topics: ['metabolic-health', 'chronic-disease-prevention'],
    keywords: 'functional medicine community discussions health',
    qualityScore: 65,
  },
  {
    name: 'r/Biohackers',
    url: 'https://www.reddit.com/r/Biohackers/.rss',
    domain: 'health',
    category: 'Biohacking',
    description: 'Biohacking strategies for performance and health optimization',
    sourceType: 'reddit',
    topics: ['performance-optimization', 'metabolic-health', 'longevity-aging'],
    keywords: 'biohacking performance optimization health enhancement',
    qualityScore: 70,
  },
  {
    name: 'r/ScientificNutrition',
    url: 'https://www.reddit.com/r/ScientificNutrition/.rss',
    domain: 'health',
    category: 'Nutrition',
    description: 'Evidence-based nutrition discussions and research',
    sourceType: 'reddit',
    topics: ['nutrition-diet', 'metabolic-health'],
    keywords: 'nutrition science evidence based research diet',
    featured: true,
    qualityScore: 85,
  },
  {
    name: 'r/Longevity',
    url: 'https://www.reddit.com/r/Longevity/.rss',
    domain: 'health',
    category: 'Longevity',
    description: 'Longevity research and anti-aging interventions',
    sourceType: 'reddit',
    topics: ['longevity-aging', 'metabolic-health'],
    keywords: 'longevity aging research anti-aging interventions',
    featured: true,
    qualityScore: 80,
  },
  {
    name: 'r/AdvancedFitness',
    url: 'https://www.reddit.com/r/AdvancedFitness/.rss',
    domain: 'health',
    category: 'Fitness',
    description: 'Evidence-based fitness research and training discussions',
    sourceType: 'reddit',
    topics: ['exercise-fitness', 'performance-optimization'],
    keywords: 'fitness training science research performance',
    qualityScore: 75,
  },
  {
    name: 'r/Nootropics',
    url: 'https://www.reddit.com/r/Nootropics/.rss',
    domain: 'health',
    category: 'Cognitive Enhancement',
    description: 'Cognitive enhancement and brain optimization',
    sourceType: 'reddit',
    topics: ['mental-health-wellness', 'performance-optimization'],
    keywords: 'nootropics cognitive enhancement brain optimization',
    qualityScore: 70,
  },
  {
    name: 'r/HealthyFood',
    url: 'https://www.reddit.com/r/HealthyFood/.rss',
    domain: 'health',
    category: 'Nutrition',
    description: 'Healthy eating and nutrition ideas',
    sourceType: 'reddit',
    topics: ['nutrition-diet'],
    keywords: 'healthy food nutrition eating recipes',
    qualityScore: 60,
  },
  {
    name: 'r/Sleep',
    url: 'https://www.reddit.com/r/Sleep/.rss',
    domain: 'health',
    category: 'Sleep',
    description: 'Sleep science and optimization discussions',
    sourceType: 'reddit',
    topics: ['sleep-optimization', 'mental-health-wellness'],
    keywords: 'sleep optimization insomnia rest recovery',
    qualityScore: 65,
  },
  {
    name: 'r/Keto',
    url: 'https://www.reddit.com/r/keto/.rss',
    domain: 'health',
    category: 'Nutrition',
    description: 'Ketogenic diet community and support',
    sourceType: 'reddit',
    topics: ['nutrition-diet', 'metabolic-health', 'weight-management'],
    keywords: 'keto ketogenic diet metabolic health weight loss',
    qualityScore: 65,
  },
  {
    name: 'r/IntermittentFasting',
    url: 'https://www.reddit.com/r/intermittentfasting/.rss',
    domain: 'health',
    category: 'Nutrition',
    description: 'Intermittent fasting community and research',
    sourceType: 'reddit',
    topics: ['nutrition-diet', 'metabolic-health', 'weight-management'],
    keywords: 'intermittent fasting metabolic health weight loss',
    qualityScore: 70,
  },

  // SUBSTACK PUBLICATIONS (20+)
  {
    name: 'Peter Attia\'s Insights',
    url: 'https://peterattiamd.substack.com/feed',
    domain: 'health',
    category: 'Longevity',
    description: 'Deep dives on health, medicine, and longevity',
    sourceType: 'substack',
    topics: ['longevity-aging', 'metabolic-health'],
    keywords: 'longevity metabolic health medicine insights',
    qualityScore: 90,
  },
  {
    name: 'Nutrition Diva',
    url: 'https://nutritiondiva.substack.com/feed',
    domain: 'health',
    category: 'Nutrition',
    description: 'Evidence-based nutrition guidance and research',
    sourceType: 'substack',
    topics: ['nutrition-diet'],
    keywords: 'nutrition evidence based diet guidance',
    qualityScore: 75,
  },
  {
    name: 'The Examined',
    url: 'https://theexamined.substack.com/feed',
    domain: 'health',
    category: 'Wellness',
    description: 'Health, wellness, and personal development',
    sourceType: 'substack',
    topics: ['mental-health-wellness', 'productivity-habits'],
    keywords: 'wellness personal development health mindfulness',
    qualityScore: 70,
  },
];

async function seedFeedCatalog() {
  console.log(`🌱 Seeding feed catalog with ${feeds.length} feeds...`);
  
  let added = 0;
  let skipped = 0;
  
  for (const feed of feeds) {
    try {
      // Check if feed already exists
      const existing = await db
        .select()
        .from(feedCatalog)
        .where(sql`${feedCatalog.url} = ${feed.url}`)
        .limit(1);
      
      if (existing.length > 0) {
        console.log(`⏭️  Skipping existing feed: ${feed.name}`);
        skipped++;
        continue;
      }
      
      // Insert new feed
      await db.insert(feedCatalog).values({
        id: nanoid(),
        name: feed.name,
        url: feed.url,
        domain: feed.domain,
        category: feed.category,
        description: `${feed.description} | ${feed.keywords}`, // Embed keywords in description for search
        sourceType: feed.sourceType,
        topics: feed.topics as any,
        featured: feed.featured || false,
        qualityScore: feed.qualityScore || 50,
        isApproved: true, // Auto-approve curated feeds
        isActive: true,
      });
      
      console.log(`✅ Added: ${feed.name} (${feed.sourceType})`);
      added++;
    } catch (error) {
      console.error(`❌ Error adding ${feed.name}:`, error);
    }
  }
  
  console.log(`\n📊 Seed complete!`);
  console.log(`   Added: ${added} feeds`);
  console.log(`   Skipped: ${skipped} feeds (already exist)`);
  console.log(`   Total feeds in catalog: ${added + skipped}`);
}

// Run seed
seedFeedCatalog()
  .then(() => {
    console.log('✅ Seed completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  });
