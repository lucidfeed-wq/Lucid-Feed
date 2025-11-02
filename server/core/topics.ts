import type { Topic } from "@shared/schema";

// Regex patterns for topic detection (case-insensitive)
const topicPatterns: Record<Topic, RegExp[]> = {
  metabolic: [/metabolic/i, /metabolism/i, /metabol\w+/i],
  chronic_fatigue: [/chronic fatigue/i, /CFS/i, /ME\/CFS/i, /myalgic encephalomyelitis/i],
  chronic_EBV: [/chronic EBV/i, /epstein.?barr/i, /reactivat\w+ EBV/i, /chronic viral/i],
  autoimmune: [/autoimmune/i, /auto.?immun\w+/i, /lupus/i, /rheumatoid/i, /hashimoto/i],
  leaky_gut: [/leaky gut/i, /intestinal permeability/i, /gut barrier/i],
  carnivore: [/carnivore/i, /carnivore diet/i, /all.?meat diet/i],
  keto: [/keto/i, /ketogenic/i, /ketosis/i, /low.?carb/i],
  IV_therapy: [/IV therapy/i, /intravenous/i, /IV nutrition/i, /IV vitamin/i],
  HRT: [/\bHRT\b/i, /hormone replacement/i],
  TRT: [/\bTRT\b/i, /testosterone replacement/i],
  mold_CIRS: [/mold/i, /\bCIRS\b/i, /chronic inflammatory response/i, /mycotoxin/i],
  weight_loss: [/weight loss/i, /obesity/i, /fat loss/i, /bariatric/i],
  PANS_PANDAS: [/\bPANS\b/i, /\bPANDAS\b/i, /pediatric autoimmune/i],
  insulin_resistance: [/insulin resistance/i, /hyperinsulinemia/i, /metabolic syndrome/i],
  gut_health: [/gut health/i, /microbiome/i, /digestive health/i, /intestinal/i],
  hormone_optimization: [/hormone optimization/i, /hormonal balance/i, /endocrine/i],
  biohacking: [/biohack/i, /bio.?hack\w+/i, /optimization/i, /longevity/i],
  mitochondrial_health: [/mitochondrial/i, /mitochondria/i, /cellular energy/i],
  thyroid_health: [/thyroid/i, /hypothyroid/i, /hyperthyroid/i, /TSH/i, /T3/i, /T4/i],
  adrenal_fatigue: [/adrenal fatigue/i, /adrenal dysfunction/i, /HPA axis/i],
  brain_fog: [/brain fog/i, /cognitive dysfunction/i, /mental clarity/i],
  inflammation: [/inflammation/i, /inflammatory/i, /anti.?inflammatory/i],
  SIBO: [/\bSIBO\b/i, /small intestinal bacterial overgrowth/i],
  candida: [/candida/i, /yeast overgrowth/i, /fungal infection/i],
  histamine_DAO: [/histamine/i, /\bDAO\b/i, /diamine oxidase/i, /histamine intolerance/i],
  NAD_therapy: [/\bNAD\b/i, /NAD\+/i, /nicotinamide/i],
  ozone_therapy: [/ozone therapy/i, /ozone treatment/i, /\bO3\b therapy/i],
  red_light_therapy: [/red light/i, /photobiomodulation/i, /LLLT/i, /LED therapy/i],
  cold_exposure: [/cold exposure/i, /cold therapy/i, /cryotherapy/i, /ice bath/i],
  sauna_therapy: [/sauna/i, /heat therapy/i, /hyperthermia/i, /infrared sauna/i],
  fasting: [/fasting/i, /intermittent fasting/i, /\bIF\b/i, /time.?restricted eating/i],
  autophagy: [/autophagy/i, /cellular cleanup/i, /autophagic/i],
};

export function tagTopics(text: string): Topic[] {
  const foundTopics = new Set<Topic>();
  const lowerText = text.toLowerCase();

  for (const [topic, patterns] of Object.entries(topicPatterns) as [Topic, RegExp[]][]) {
    for (const pattern of patterns) {
      if (pattern.test(lowerText)) {
        foundTopics.add(topic);
        break;
      }
    }
    if (foundTopics.size >= 5) break; // Max 5 tags
  }

  return Array.from(foundTopics).slice(0, 5);
}
