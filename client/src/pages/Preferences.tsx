import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { topics, sourceTypes } from "@shared/schema";
import type { Topic, SourceType, UserPreferences } from "@shared/schema";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Check, BookOpen, Mail, Video, MessageCircle, Mic } from "lucide-react";

// Comprehensive topic labels matching all 114 topics
const TOPIC_LABELS: Record<Topic, string> = {
  // Health & Wellness
  metabolic: "Metabolic Health",
  chronic_fatigue: "Chronic Fatigue",
  chronic_EBV: "Chronic EBV",
  autoimmune: "Autoimmune",
  leaky_gut: "Leaky Gut",
  carnivore: "Carnivore Diet",
  keto: "Keto Diet",
  IV_therapy: "IV Therapy",
  HRT: "HRT",
  TRT: "TRT",
  mold_CIRS: "Mold/CIRS",
  weight_loss: "Weight Loss",
  PANS_PANDAS: "PANS/PANDAS",
  insulin_resistance: "Insulin Resistance",
  gut_health: "Gut Health",
  hormone_optimization: "Hormone Optimization",
  biohacking: "Biohacking",
  mitochondrial_health: "Mitochondrial Health",
  thyroid_health: "Thyroid Health",
  adrenal_fatigue: "Adrenal Fatigue",
  brain_fog: "Brain Fog",
  inflammation: "Inflammation",
  SIBO: "SIBO",
  candida: "Candida",
  histamine_DAO: "Histamine/DAO",
  NAD_therapy: "NAD+ Therapy",
  ozone_therapy: "Ozone Therapy",
  red_light_therapy: "Red Light Therapy",
  cold_exposure: "Cold Exposure",
  sauna_therapy: "Sauna Therapy",
  fasting: "Fasting",
  autophagy: "Autophagy",
  longevity: "Longevity",
  nutrition_science: "Nutrition Science",
  fitness_recovery: "Fitness & Recovery",
  sleep_optimization: "Sleep Optimization",
  mindfulness: "Mindfulness",
  mental_health: "Mental Health",
  preventive_medicine: "Preventive Medicine",
  supplementation: "Supplementation",
  
  // Science & Nature
  neuroscience: "Neuroscience",
  psychology: "Psychology",
  genetics: "Genetics",
  space_exploration: "Space Exploration",
  physics: "Physics",
  biology: "Biology",
  ecology: "Ecology",
  chemistry: "Chemistry",
  cognitive_science: "Cognitive Science",
  
  // Technology & AI
  artificial_intelligence: "Artificial Intelligence",
  machine_learning: "Machine Learning",
  automation: "Automation",
  robotics: "Robotics",
  data_science: "Data Science",
  cybersecurity: "Cybersecurity",
  software_development: "Software Development",
  tech_policy: "Tech Policy",
  emerging_tech: "Emerging Tech",
  
  // Productivity & Self-Improvement
  focus_flow: "Focus & Flow",
  habit_building: "Habit Building",
  learning_techniques: "Learning Techniques",
  time_management: "Time Management",
  stoicism: "Stoicism",
  motivation: "Motivation",
  journaling: "Journaling",
  decision_making: "Decision-Making",
  systems_thinking: "Systems Thinking",
  
  // Finance & Business
  investing: "Investing",
  personal_finance: "Personal Finance",
  startups: "Startups",
  entrepreneurship: "Entrepreneurship",
  economics: "Economics",
  real_estate: "Real Estate",
  crypto_web3: "Crypto/Web3",
  marketing: "Marketing",
  productivity_founders: "Productivity for Founders",
  
  // Society & Culture
  politics: "Politics",
  ethics: "Ethics",
  media_studies: "Media Studies",
  philosophy: "Philosophy",
  education_reform: "Education Reform",
  gender_identity: "Gender & Identity",
  sociology: "Sociology",
  global_affairs: "Global Affairs",
  history: "History",
  
  // Environment & Sustainability
  climate_change: "Climate Change",
  renewable_energy: "Renewable Energy",
  agriculture_food_systems: "Agriculture & Food Systems",
  conservation: "Conservation",
  environmental_policy: "Environmental Policy",
  urban_design: "Urban Design",
  sustainable_living: "Sustainable Living",
  
  // Creativity & Media
  writing: "Writing",
  art_design: "Art & Design",
  storytelling: "Storytelling",
  film_tv: "Film & TV",
  music: "Music",
  photography: "Photography",
  branding: "Branding",
  digital_creation: "Digital Creation",
  creative_process: "Creative Process",
  
  // Education & Learning
  teaching: "Teaching",
  online_learning: "Online Learning",
  skill_development: "Skill Development",
  learning_technology: "Learning Technology",
  critical_thinking: "Critical Thinking",
  memory_optimization: "Memory Optimization",
  
  // Lifestyle & Travel
  minimalism: "Minimalism",
  relationships: "Relationships",
  parenting: "Parenting",
  adventure_travel: "Adventure Travel",
  outdoor_life: "Outdoor Life",
  work_life_balance: "Work-Life Balance",
  home_design: "Home Design",
  spirituality: "Spirituality",
};

const SOURCE_TYPE_OPTIONS = [
  { value: "journal" as SourceType, label: "Academic Journals", description: "Peer-reviewed research", Icon: BookOpen },
  { value: "substack" as SourceType, label: "Substacks", description: "Independent newsletters", Icon: Mail },
  { value: "youtube" as SourceType, label: "YouTube", description: "Video content", Icon: Video },
  { value: "reddit" as SourceType, label: "Reddit", description: "Community discussions", Icon: MessageCircle },
  { value: "podcast" as SourceType, label: "Podcasts", description: "Audio shows", Icon: Mic },
];

export default function Preferences() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedSourceTypes, setSelectedSourceTypes] = useState<SourceType[]>([]);

  const { data: preferences, isLoading: prefsLoading } = useQuery<UserPreferences>({
    queryKey: ["/api/preferences"],
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (preferences?.favoriteTopics) {
      setSelectedTopics(preferences.favoriteTopics);
    }
    if (preferences?.preferredSourceTypes) {
      setSelectedSourceTypes(preferences.preferredSourceTypes);
    }
  }, [preferences]);

  const updatePreferencesMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("PUT", "/api/preferences", { 
        favoriteTopics: selectedTopics,
        preferredSourceTypes: selectedSourceTypes,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/preferences"] });
      toast({
        title: "Preferences saved",
        description: "Your preferences have been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      });
    },
  });

  const toggleTopic = (topic: Topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const toggleSourceType = (sourceType: SourceType) => {
    setSelectedSourceTypes(prev =>
      prev.includes(sourceType)
        ? prev.filter(st => st !== sourceType)
        : [...prev, sourceType]
    );
  };

  const handleSave = () => {
    if (selectedSourceTypes.length === 0) {
      toast({
        title: "Select source types",
        description: "Please select at least one source type.",
        variant: "destructive",
      });
      return;
    }
    updatePreferencesMutation.mutate();
  };

  if (authLoading || prefsLoading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please log in to customize your preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild data-testid="button-login-prefs">
              <a href="/api/login">Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
          <h1 className="text-4xl font-bold tracking-tight" data-testid="heading-preferences">Preferences</h1>
        </div>
        <p className="text-lg text-muted-foreground ml-4">
          Customize your content sources and topics
        </p>
      </div>

      <div className="space-y-6">
        {/* Source Types Section */}
        <Card data-testid="card-source-types">
          <CardHeader>
            <CardTitle>Source Types</CardTitle>
            <CardDescription>
              Choose which types of content sources you want to see in your digests
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SOURCE_TYPE_OPTIONS.map((sourceType) => (
                <div
                  key={sourceType.value}
                  className={`p-4 rounded-md border cursor-pointer transition-colors ${
                    selectedSourceTypes.includes(sourceType.value)
                      ? "bg-primary/10 border-primary"
                      : "hover-elevate"
                  }`}
                  onClick={() => toggleSourceType(sourceType.value)}
                  data-testid={`source-type-${sourceType.value}`}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectedSourceTypes.includes(sourceType.value)}
                      onCheckedChange={() => toggleSourceType(sourceType.value)}
                      data-testid={`checkbox-source-${sourceType.value}`}
                    />
                    <sourceType.Icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <h4 className="font-medium" data-testid={`source-name-${sourceType.value}`}>
                        {sourceType.label}
                      </h4>
                      <p className="text-xs text-muted-foreground">{sourceType.description}</p>
                    </div>
                    {selectedSourceTypes.includes(sourceType.value) && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              {selectedSourceTypes.length} source type{selectedSourceTypes.length !== 1 ? 's' : ''} selected
            </p>
          </CardContent>
        </Card>

        {/* Topics Section */}
        <Card data-testid="card-topics">
          <CardHeader>
            <CardTitle>Favorite Topics</CardTitle>
            <CardDescription>
              Select topics you're interested in to personalize your digest content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Badge
                  key={topic}
                  variant={selectedTopics.includes(topic) ? "default" : "outline"}
                  className="cursor-pointer hover-elevate active-elevate-2 px-3 py-1.5"
                  onClick={() => toggleTopic(topic)}
                  data-testid={`badge-topic-${topic}`}
                >
                  {selectedTopics.includes(topic) && (
                    <Check className="w-3 h-3 mr-1" />
                  )}
                  {TOPIC_LABELS[topic]}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} selected
            </p>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            disabled={updatePreferencesMutation.isPending}
            size="lg"
            data-testid="button-save-preferences"
          >
            {updatePreferencesMutation.isPending ? "Saving..." : "Save Preferences"}
          </Button>
        </div>
      </div>
    </div>
  );
}
