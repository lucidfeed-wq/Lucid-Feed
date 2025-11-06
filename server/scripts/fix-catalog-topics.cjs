const fs = require('fs');

// Comprehensive mapping of invalid topics to valid topics
const topicMapping = {
  'ai_ethics': 'ethics',
  'biochemistry': 'chemistry',
  'business-strategy': 'entrepreneurship',
  'business_strategy': 'entrepreneurship',
  'career_development': 'skill_development',
  'chronic-disease-prevention': 'preventive_medicine',
  'climate_science': 'climate_change',
  'consumer-products': 'marketing',
  'design-creativity': 'art_design',
  'digital-tools-apps': 'software_development',
  'entrepreneurship-startups': 'entrepreneurship',
  'environmental-sustainability': 'sustainable_living',
  'evolution': 'biology',
  'exercise_science': 'fitness_recovery',
  'focus_deep_work': 'focus_flow',
  'food-cooking': 'nutrition_science',
  'futurism': 'emerging_tech',
  'general-discussion': 'sociology',
  'history-culture': 'history',
  'investing-markets': 'investing',
  'learning-education': 'online_learning',
  'longevity-aging': 'longevity',
  'market_analysis': 'investing',
  'mathematics-statistics': 'mathematics',
  'metabolic-health': 'metabolic',
  'neural_networks': 'machine_learning',
  'nutrition-diet': 'nutrition_science',
  'performance-optimization': 'fitness_recovery',
  'personal-finance': 'personal_finance',
  'philosophy-ethics': 'philosophy',
  'physics-engineering': 'physics',
  'politics-society': 'politics',
  'productivity': 'habit_building',
  'productivity-habits': 'habit_building',
  'scientific-research': 'research',
  'sleep-optimization': 'sleep_optimization',
  'sleep_science': 'sleep_optimization',
  'space-astronomy': 'space_exploration',
  'trading': 'investing',
  'travel-adventure': 'adventure_travel',
  'weight-management': 'weight_loss'
};

// Read feed catalog
const catalogPath = 'server/seeds/feed-catalog.json';
const data = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

// Track changes
let totalChanges = 0;
const changesPerTopic = {};

// Fix all feeds
data.feeds.forEach(feed => {
  if (feed.topics) {
    feed.topics = feed.topics.map(topic => {
      if (topicMapping[topic]) {
        if (!changesPerTopic[topic]) changesPerTopic[topic] = 0;
        changesPerTopic[topic]++;
        totalChanges++;
        return topicMapping[topic];
      }
      return topic;
    });
  }
});

// Write back
fs.writeFileSync(catalogPath, JSON.stringify(data, null, 2));

console.log(`✅ Fixed ${totalChanges} topic mappings in ${data.feeds.length} feeds`);
console.log('\nChanges by topic:');
Object.entries(changesPerTopic)
  .sort((a, b) => b[1] - a[1])
  .forEach(([invalid, count]) => {
    console.log(`  ${invalid} → ${topicMapping[invalid]} (${count} occurrences)`);
  });
