#!/usr/bin/env node
/**
 * Validates that all topics in feed-catalog.json are valid according to shared/schema.ts
 * Run this before committing changes to feed-catalog.json
 */

const fs = require('fs');
const path = require('path');

// Valid topics from shared/schema.ts
const VALID_TOPICS = new Set([
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
]);

function validateCatalog() {
  const catalogPath = path.join(__dirname, '..', 'seeds', 'feed-catalog.json');
  
  if (!fs.existsSync(catalogPath)) {
    console.error('❌ feed-catalog.json not found at:', catalogPath);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  const feeds = data.feeds || [];

  const invalidTopicsMap = new Map(); // topic -> feed names
  let totalInvalidCount = 0;

  feeds.forEach(feed => {
    if (feed.topics) {
      feed.topics.forEach(topic => {
        if (!VALID_TOPICS.has(topic)) {
          if (!invalidTopicsMap.has(topic)) {
            invalidTopicsMap.set(topic, []);
          }
          invalidTopicsMap.get(topic).push(feed.name);
          totalInvalidCount++;
        }
      });
    }
  });

  if (invalidTopicsMap.size === 0) {
    console.log('✅ All topics are valid!');
    console.log(`   Validated ${feeds.length} feeds with no issues.`);
    return true;
  } else {
    console.error('❌ VALIDATION FAILED: Found invalid topics\n');
    console.error(`   Total invalid topic assignments: ${totalInvalidCount}`);
    console.error(`   Unique invalid topics: ${invalidTopicsMap.size}\n`);
    
    const sortedInvalid = Array.from(invalidTopicsMap.entries())
      .sort((a, b) => b[1].length - a[1].length);
    
    sortedInvalid.forEach(([topic, feedNames]) => {
      console.error(`   ❌ "${topic}" (used in ${feedNames.length} feed${feedNames.length > 1 ? 's' : ''})`);
      if (feedNames.length <= 3) {
        feedNames.forEach(name => console.error(`      - ${name}`));
      } else {
        feedNames.slice(0, 3).forEach(name => console.error(`      - ${name}`));
        console.error(`      ... and ${feedNames.length - 3} more`);
      }
    });
    
    console.error('\n   💡 Valid topics are defined in shared/schema.ts');
    console.error('   💡 Run "node server/scripts/fix-catalog-topics.cjs" to auto-fix common issues\n');
    
    return false;
  }
}

const isValid = validateCatalog();
process.exit(isValid ? 0 : 1);
