// RSS Feed Sources Configuration

export const journalFeeds = [
  // Core Medical & Metabolic Journals
  { name: "Nature", url: "https://www.nature.com/nature.rss" },
  { name: "Cell Metabolism", url: "https://www.cell.com/cell-metabolism/current.rss" },
  { name: "The Lancet Metabolism", url: "https://www.thelancet.com/rssfeed/lancet_current.xml" },
  { name: "JAMA Network Open", url: "https://jamanetwork.com/rss/site_35/245.xml" },
  { name: "BMJ", url: "https://www.bmj.com/rss/latest.xml" },
  { name: "Science Advances", url: "https://www.science.org/action/showFeed?type=etoc&feed=rss&jc=sciadv" },
  { name: "Cell Reports", url: "https://www.cell.com/cell-reports/current.rss" },
  { name: "Nature Medicine", url: "https://www.nature.com/nm.rss" },
  { name: "Nature Metabolism", url: "https://www.nature.com/natmetab.rss" },
  
  // Endocrinology & Hormones
  { name: "Frontiers in Endocrinology", url: "https://www.frontiersin.org/journals/endocrinology/rss" },
  { name: "Journal of Clinical Endocrinology", url: "https://academic.oup.com/rss/site_5581/3896.xml" },
  { name: "Endocrine Reviews", url: "https://academic.oup.com/rss/site_5582/3897.xml" },
  
  // Nutrition & Diet
  { name: "Nutrients", url: "https://www.mdpi.com/rss/journal/nutrients" },
  { name: "American Journal of Clinical Nutrition", url: "https://academic.oup.com/rss/site_5511/3798.xml" },
  { name: "Journal of Nutrition", url: "https://academic.oup.com/rss/site_5598/3925.xml" },
  { name: "Frontiers in Nutrition", url: "https://www.frontiersin.org/journals/nutrition/rss" },
  
  // Gut Health & Microbiome
  { name: "Gut", url: "https://gut.bmj.com/rss/current.xml" },
  { name: "Gut Microbes", url: "https://www.tandfonline.com/feed/rss/kgmi20" },
  { name: "Microbiome", url: "https://microbiomejournal.biomedcentral.com/articles/most-recent/rss.xml" },
  { name: "Frontiers in Microbiology", url: "https://www.frontiersin.org/journals/microbiology/rss" },
  
  // Immunology & Autoimmune
  { name: "Frontiers in Immunology", url: "https://www.frontiersin.org/journals/immunology/rss" },
  { name: "Nature Immunology", url: "https://www.nature.com/ni.rss" },
  { name: "Journal of Autoimmunity", url: "https://rss.sciencedirect.com/publication/science/08968411" },
  
  // Aging & Longevity
  { name: "Aging Cell", url: "https://onlinelibrary.wiley.com/feed/14749726/most-recent" },
  { name: "Nature Aging", url: "https://www.nature.com/nataging.rss" },
  { name: "GeroScience", url: "https://link.springer.com/search.rss?facet-journal-id=11357&channel-name=GeroScience" },
  
  // Mitochondrial & Cellular Health
  { name: "Mitochondrion", url: "https://rss.sciencedirect.com/publication/science/15677249" },
  { name: "Free Radical Biology and Medicine", url: "https://rss.sciencedirect.com/publication/science/08915849" },
  
  // Neuroscience & Brain Health
  { name: "Frontiers in Neuroscience", url: "https://www.frontiersin.org/journals/neuroscience/rss" },
  { name: "Brain Behavior and Immunity", url: "https://rss.sciencedirect.com/publication/science/08891591" },
  
  // Alternative & Integrative Medicine
  { name: "Evidence-Based Complementary Medicine", url: "https://www.hindawi.com/journals/ecam/rss/" },
  { name: "Journal of Alternative Medicine", url: "https://www.liebertpub.com/action/showFeed?type=etoc&feed=rss&jc=acm" },
  { name: "Integrative Medicine", url: "https://www.liebertpub.com/action/showFeed?type=etoc&feed=rss&jc=acm.2" },
  { name: "Journal of Functional Medicine", url: "https://www.tandfonline.com/feed/rss/ufnm20" },
  
  // Oxidative Stress & NAD
  { name: "Redox Biology", url: "https://rss.sciencedirect.com/publication/science/22132317" },
  { name: "Antioxidants & Redox Signaling", url: "https://www.liebertpub.com/action/showFeed?type=etoc&feed=rss&jc=ars" },
];

export const redditFeeds = [
  // Core Functional Medicine & Biohacking
  { name: "r/FunctionalMedicine", url: "https://www.reddit.com/r/FunctionalMedicine/.rss" },
  { name: "r/Biohackers", url: "https://www.reddit.com/r/Biohackers/.rss" },
  { name: "r/Longevity", url: "https://www.reddit.com/r/longevity/.rss" },
  { name: "r/Nootropics", url: "https://www.reddit.com/r/Nootropics/.rss" },
  { name: "r/AdvancedFitness", url: "https://www.reddit.com/r/AdvancedFitness/.rss" },
  
  // Diet & Nutrition
  { name: "r/Keto", url: "https://www.reddit.com/r/keto/.rss" },
  { name: "r/Carnivore", url: "https://www.reddit.com/r/carnivore/.rss" },
  { name: "r/Fasting", url: "https://www.reddit.com/r/fasting/.rss" },
  { name: "r/IntermittentFasting", url: "https://www.reddit.com/r/intermittentfasting/.rss" },
  { name: "r/Paleo", url: "https://www.reddit.com/r/Paleo/.rss" },
  { name: "r/PlantBasedDiet", url: "https://www.reddit.com/r/PlantBasedDiet/.rss" },
  { name: "r/Nutrition", url: "https://www.reddit.com/r/nutrition/.rss" },
  
  // Gut Health & Microbiome
  { name: "r/Microbiome", url: "https://www.reddit.com/r/Microbiome/.rss" },
  { name: "r/SIBO", url: "https://www.reddit.com/r/SIBO/.rss" },
  { name: "r/Candida", url: "https://www.reddit.com/r/Candida/.rss" },
  { name: "r/Probiotics", url: "https://www.reddit.com/r/Probiotics/.rss" },
  { name: "r/LeakyGutSyndrome", url: "https://www.reddit.com/r/LeakyGutSyndrome/.rss" },
  
  // Supplements & Peptides
  { name: "r/Supplements", url: "https://www.reddit.com/r/Supplements/.rss" },
  { name: "r/Peptides", url: "https://www.reddit.com/r/Peptides/.rss" },
  { name: "r/Vitamins", url: "https://www.reddit.com/r/Vitamins/.rss" },
  
  // Hormones & Optimization
  { name: "r/Testosterone", url: "https://www.reddit.com/r/Testosterone/.rss" },
  { name: "r/TRT", url: "https://www.reddit.com/r/trt/.rss" },
  { name: "r/Thyroid", url: "https://www.reddit.com/r/Thyroid/.rss" },
  { name: "r/PCOS", url: "https://www.reddit.com/r/PCOS/.rss" },
  
  // Autoimmune & Chronic Conditions
  { name: "r/Autoimmune", url: "https://www.reddit.com/r/autoimmune/.rss" },
  { name: "r/ChronicFatigue", url: "https://www.reddit.com/r/cfs/.rss" },
  { name: "r/Fibromyalgia", url: "https://www.reddit.com/r/Fibromyalgia/.rss" },
  { name: "r/PANDAS", url: "https://www.reddit.com/r/PANDAS/.rss" },
  
  // Metabolic & Blood Sugar
  { name: "r/InsulinResistance", url: "https://www.reddit.com/r/InsulinResistance/.rss" },
  { name: "r/Prediabetes", url: "https://www.reddit.com/r/prediabetes/.rss" },
  { name: "r/Type2Diabetes", url: "https://www.reddit.com/r/diabetes_t2/.rss" },
  
  // Alternative Therapies
  { name: "r/AlternativeHealth", url: "https://www.reddit.com/r/AlternativeHealth/.rss" },
  { name: "r/HolisticMedicine", url: "https://www.reddit.com/r/HolisticMedicine/.rss" },
  { name: "r/NaturalHealth", url: "https://www.reddit.com/r/naturalhealth/.rss" },
  
  // Mold & Environmental Toxins
  { name: "r/ToxicMoldExposure", url: "https://www.reddit.com/r/ToxicMoldExposure/.rss" },
  { name: "r/MoldlyInteresting", url: "https://www.reddit.com/r/MoldlyInteresting/.rss" },
  
  // Chronic Viral & Bacterial Conditions
  { name: "r/EBV", url: "https://www.reddit.com/r/EBV/.rss" },
  { name: "r/ChronicIllness", url: "https://www.reddit.com/r/ChronicIllness/.rss" },
];

export const substackFeeds = [
  // Prominent Functional Medicine Doctors
  { name: "Chris Kresser", url: "https://chriskresser.substack.com/feed" },
  { name: "Dr. Mark Hyman", url: "https://drmarkhyman.substack.com/feed" },
  { name: "Peter Attia", url: "https://peterattiamd.substack.com/feed" },
  { name: "Dr. William Cole", url: "https://drwillcole.substack.com/feed" },
  { name: "Dr. Amy Myers", url: "https://amymyersmd.substack.com/feed" },
  { name: "Dr. Terry Wahls", url: "https://terrywahls.substack.com/feed" },
  { name: "Dr. Jill Carnahan", url: "https://jillcarnahan.substack.com/feed" },
  
  // Longevity & Optimization
  { name: "Bryan Johnson", url: "https://bryanjohnson.substack.com/feed" },
  { name: "Lifespan.io", url: "https://lifespan.substack.com/feed" },
  { name: "Senescence", url: "https://senescence.substack.com/feed" },
  
  // Metabolic Health & Nutrition  
  { name: "Diet Doctor", url: "https://dietdoctor.substack.com/feed" },
  { name: "Nutrition with Judy", url: "https://nutritionwithjudy.substack.com/feed" },
  { name: "The Metabolic Health Initiative", url: "https://metabolichealth.substack.com/feed" },
  
  // Gut Health & Microbiome
  { name: "The Gut Health MD", url: "https://guthealthmd.substack.com/feed" },
  { name: "Microbiome Digest", url: "https://microbiomedigest.substack.com/feed" },
  
  // Biohacking & Performance
  { name: "Ben Greenfield", url: "https://bengreenfield.substack.com/feed" },
  { name: "Dave Asprey", url: "https://daveasprey.substack.com/feed" },
  { name: "Andrew Huberman", url: "https://hubermanlab.substack.com/feed" },
  
  // Peptides & Hormones
  { name: "Jay Campbell", url: "https://jaycampbell.substack.com/feed" },
  { name: "Dr. Kyle Gillett", url: "https://kylegillett.substack.com/feed" },
  
  // Mold & Environmental Toxins
  { name: "Dr. Jill Crista", url: "https://drjillcrista.substack.com/feed" },
  { name: "Surviving Mold", url: "https://survivingmold.substack.com/feed" },
  
  // Mitochondrial & Cellular
  { name: "Dr. Rhonda Patrick", url: "https://foundmyfitness.substack.com/feed" },
];

export const youtubeFeeds = [
  // Functional Medicine & Metabolic Health
  { name: "Dr. Mark Hyman", channelId: "UCUZbmf0iB5FdAF4TdOSaHmA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCUZbmf0iB5FdAF4TdOSaHmA" },
  { name: "Dr. Eric Berg", channelId: "UCj0AMDkWzPTqRg5POu0QU9Q", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCj0AMDkWzPTqRg5POu0QU9Q" },
  { name: "Thomas DeLauer", channelId: "UC70SrI3VkT1MXALRtf0pcHg", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC70SrI3VkT1MXALRtf0pcHg" },
  { name: "Dr. Ken Berry", channelId: "UCnI1YHsK0WmshfOmI_N4a9w", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCnI1YHsK0WmshfOmI_N4a9w" },
  { name: "Dr. Paul Saladino", channelId: "UCaRMS_MD7K-h6t9WJpG-dOw", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCaRMS_MD7K-h6t9WJpG-dOw" },
  { name: "Glucose Revolution", channelId: "UC3CoZlqZj7vWh3nDJJAg5BA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC3CoZlqZj7vWh3nDJJAg5BA" },
  
  // Longevity & Biohacking
  { name: "Andrew Huberman", channelId: "UC2D2CMWXMOVWx7giW1n3LIg", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC2D2CMWXMOVWx7giW1n3LIg" },
  { name: "Peter Attia", channelId: "UC8kGIv8NS-NmUDJPTG4BPc", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC8kGIv8NS-NmUDJPTG4BPc" },
  { name: "David Sinclair", channelId: "UCQq3z1WATfn3WC9FPIgFbyw", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCQq3z1WATfn3WC9FPIgFbyw" },
  { name: "Bryan Johnson", channelId: "UCv6EdZV3fJJoyLuG85yXBfA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCv6EdZV3fJJoyLuG85yXBfA" },
  { name: "Siim Land", channelId: "UCRvP-Nxa-dCyMFnJW5_W4ww", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCRvP-Nxa-dCyMFnJW5_W4ww" },
  
  // Diet & Nutrition
  { name: "Nutrition Made Simple", channelId: "UCSvUe56brMeJdXs1YFKqReg", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSvUe56brMeJdXs1YFKqReg" },
  { name: "Dr. Sten Ekberg", channelId: "UCD8jPb9nPJYQg8C-Q4_0n3g", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCD8jPb9nPJYQg8C-Q4_0n3g" },
  { name: "Dr. Jason Fung", channelId: "UCoyL4iGArWn5Hu0V_sAhK2w", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCoyL4iGArWn5Hu0V_sAhK2w" },
  { name: "Keto Connect", channelId: "UCzRYivTpUQ0r2qPPjfLoQiA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCzRYivTpUQ0r2qPPjfLoQiA" },
  
  // Gut Health & Microbiome
  { name: "Dr. Steven Gundry", channelId: "UC4ODXZL2r3XepieV0bGBIkg", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC4ODXZL2r3XepieV0bGBIkg" },
  { name: "Dr. Will Bulsiewicz", channelId: "UCl2k_R8TdxXTJVUXu8jjwzA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCl2k_R8TdxXTJVUXu8jjwzA" },
  
  // Hormones & Optimization
  { name: "Dr. Kyle Gillett", channelId: "UCLwsdbpG6hHRbSwg_RNkfGQ", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCLwsdbpG6hHRbSwg_RNkfGQ" },
  { name: "More Plates More Dates", channelId: "UC8sGN1O6OQQb_yz0grHg1Ag", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC8sGN1O6OQQb_yz0grHg1Ag" },
  { name: "Jay Campbell", channelId: "UCjQDGZgA8wjqFdO0D-ggBcA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCjQDGZgA8wjqFdO0D-ggBcA" },
  
  // Autoimmune & Chronic Conditions
  { name: "Dr. Terry Wahls", channelId: "UCV6AzyKZ7hj0QC4OlbhtVNA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCV6AzyKZ7hj0QC4OlbhtVNA" },
  { name: "Dr. Amy Myers", channelId: "UCFXg8m4jPCd8-x7PFKJkXqA", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCFXg8m4jPCd8-x7PFKJkXqA" },
  
  // Peptides & Advanced Topics
  { name: "Vigorous Steve", channelId: "UCb8A1rnbTF8qZSk3gPDBsow", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCb8A1rnbTF8qZSk3gPDBsow" },
  { name: "Ben Greenfield", channelId: "UCbf7EccRGBLwbKmWgJ9FYHw", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCbf7EccRGBLwbKmWgJ9FYHw" },
  { name: "Dave Asprey", channelId: "UCg1LsHN_q9Tx4nRf_1OXkPg", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCg1LsHN_q9Tx4nRf_1OXkPg" },
  
  // Mitochondrial & Cellular Optimization
  { name: "FoundMyFitness", channelId: "UCWF8SqJVNlx8yEJje7Fmr-Q", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCWF8SqJVNlx8yEJje7Fmr-Q" },
  { name: "Ari Whitten", channelId: "UC7VOMBOJIq-VqFMZKJqv4Sg", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC7VOMBOJIq-VqFMZKJqv4Sg" },
  
  // Mold & Environmental Toxins
  { name: "Dr. Jill Crista", channelId: "UCfyKRCQqF7TVHKN5qz7yK-g", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCfyKRCQqF7TVHKN5qz7yK-g" },
  { name: "Dr. Neil Nathan", channelId: "UC-Nk9Nt41pqtmS5VGZ5oD5w", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC-Nk9Nt41pqtmS5VGZ5oD5w" },
];
