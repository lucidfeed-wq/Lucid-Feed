import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Rss, CheckCircle, ArrowRight, BookOpen, Mail, Video, MessageCircle, Mic } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Topic, SourceType } from "@shared/schema";
import logoImage from "@assets/brandkit-template-663-2025-11-04_1762296047785.png";

interface CategoryGroup {
  category: string;
  description: string;
  subtopics: { value: Topic; label: string }[];
}

const TOPIC_CATEGORIES: CategoryGroup[] = [
  {
    category: "Health & Wellness",
    description: "Physical and mental health optimization",
    subtopics: [
      { value: "metabolic", label: "Metabolic Health" },
      { value: "longevity", label: "Longevity" },
      { value: "nutrition_science", label: "Nutrition Science" },
      { value: "fitness_recovery", label: "Fitness & Recovery" },
      { value: "sleep_optimization", label: "Sleep Optimization" },
      { value: "mindfulness", label: "Mindfulness" },
      { value: "mental_health", label: "Mental Health" },
      { value: "hormone_optimization", label: "Hormones & Metabolism" },
      { value: "supplementation", label: "Supplementation" },
      { value: "preventive_medicine", label: "Preventive Medicine" },
    ],
  },
  {
    category: "Science & Nature",
    description: "Scientific discoveries and natural phenomena",
    subtopics: [
      { value: "neuroscience", label: "Neuroscience" },
      { value: "psychology", label: "Psychology" },
      { value: "genetics", label: "Genetics" },
      { value: "space_exploration", label: "Space Exploration" },
      { value: "physics", label: "Physics" },
      { value: "biology", label: "Biology" },
      { value: "ecology", label: "Ecology" },
      { value: "chemistry", label: "Chemistry" },
      { value: "cognitive_science", label: "Cognitive Science" },
    ],
  },
  {
    category: "Technology & AI",
    description: "Emerging tech and digital innovation",
    subtopics: [
      { value: "artificial_intelligence", label: "Artificial Intelligence" },
      { value: "machine_learning", label: "Machine Learning" },
      { value: "automation", label: "Automation" },
      { value: "robotics", label: "Robotics" },
      { value: "data_science", label: "Data Science" },
      { value: "cybersecurity", label: "Cybersecurity" },
      { value: "software_development", label: "Software Development" },
      { value: "tech_policy", label: "Tech Policy" },
      { value: "emerging_tech", label: "Emerging Tech" },
    ],
  },
  {
    category: "Productivity & Self-Improvement",
    description: "Personal growth and effectiveness",
    subtopics: [
      { value: "focus_flow", label: "Focus & Flow" },
      { value: "habit_building", label: "Habit Building" },
      { value: "learning_techniques", label: "Learning Techniques" },
      { value: "time_management", label: "Time Management" },
      { value: "stoicism", label: "Stoicism" },
      { value: "motivation", label: "Motivation" },
      { value: "journaling", label: "Journaling" },
      { value: "decision_making", label: "Decision-Making" },
      { value: "systems_thinking", label: "Systems Thinking" },
    ],
  },
  {
    category: "Finance & Business",
    description: "Money, markets, and entrepreneurship",
    subtopics: [
      { value: "investing", label: "Investing" },
      { value: "personal_finance", label: "Personal Finance" },
      { value: "startups", label: "Startups" },
      { value: "entrepreneurship", label: "Entrepreneurship" },
      { value: "economics", label: "Economics" },
      { value: "real_estate", label: "Real Estate" },
      { value: "crypto_web3", label: "Crypto/Web3" },
      { value: "marketing", label: "Marketing" },
      { value: "productivity_founders", label: "Productivity for Founders" },
    ],
  },
  {
    category: "Society & Culture",
    description: "Social systems and cultural trends",
    subtopics: [
      { value: "politics", label: "Politics" },
      { value: "ethics", label: "Ethics" },
      { value: "media_studies", label: "Media Studies" },
      { value: "philosophy", label: "Philosophy" },
      { value: "education_reform", label: "Education Reform" },
      { value: "gender_identity", label: "Gender & Identity" },
      { value: "sociology", label: "Sociology" },
      { value: "global_affairs", label: "Global Affairs" },
      { value: "history", label: "History" },
    ],
  },
];

// Helper function to get topic label from value
const getTopicLabel = (topicValue: Topic): string => {
  for (const category of TOPIC_CATEGORIES) {
    const subtopic = category.subtopics.find((st) => st.value === topicValue);
    if (subtopic) return subtopic.label;
  }
  return topicValue;
};

const SOURCE_TYPES: { value: SourceType; label: string; description: string; Icon: typeof BookOpen }[] = [
  { value: "journal", label: "Academic Journals", description: "Peer-reviewed research papers", Icon: BookOpen },
  { value: "substack", label: "Substacks", description: "Independent newsletters and analysis", Icon: Mail },
  { value: "youtube", label: "YouTube", description: "Video content and talks", Icon: Video },
  { value: "reddit", label: "Reddit", description: "Community discussions and threads", Icon: MessageCircle },
  { value: "podcast", label: "Podcasts", description: "Audio interviews and shows", Icon: Mic },
];

export default function Onboarding() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedSourceTypes, setSelectedSourceTypes] = useState<SourceType[]>([]);
  const [subscribedFeeds, setSubscribedFeeds] = useState<string[]>([]);

  // Build feed suggestions query URL with params
  const feedSuggestionsUrl = currentStep === 4 && selectedTopics.length > 0 && selectedSourceTypes.length > 0
    ? `/api/feeds/suggestions?topics=${selectedTopics.join(',')}&sourceTypes=${selectedSourceTypes.join(',')}&limit=12`
    : null;

  const { data: feeds, isLoading: feedsLoading } = useQuery({
    queryKey: [feedSuggestionsUrl || "/api/feeds/suggestions"],
    enabled: feedSuggestionsUrl !== null,
  });

  const { data: user } = useQuery({
    queryKey: ["/api/auth/user"],
  });

  const savePreferencesMutation = useMutation({
    mutationFn: async () => {
      console.log("[Onboarding] Saving preferences - topics:", selectedTopics, "sourceTypes:", selectedSourceTypes);
      const response = await apiRequest("PUT", "/api/preferences", {
        favoriteTopics: selectedTopics,
        preferredSourceTypes: selectedSourceTypes,
      });
      console.log("[Onboarding] Save response:", response);
      return response;
    },
    onSuccess: () => {
      console.log("[Onboarding] Save successful, moving to step 4 (feeds)");
      queryClient.invalidateQueries({ queryKey: ["/api/preferences"] });
      setCurrentStep(4);
    },
    onError: (error) => {
      console.error("[Onboarding] Save error:", error);
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      });
    },
  });

  const subscribeFeedMutation = useMutation({
    mutationFn: async (feedId: string) => {
      // Use fetch directly to handle tier limit errors
      const response = await fetch(`/api/subscriptions/feeds/${feedId}`, {
        method: 'POST',
        credentials: 'include',
      });
      
      // Check for tier limit errors
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === 'FEED_LIMIT_EXCEEDED') {
          throw { 
            isTierLimit: true, 
            ...errorData 
          };
        }
        throw new Error(errorData.message || 'Failed to subscribe to feed');
      }
      
      return response;
    },
    onSuccess: (_, feedId) => {
      setSubscribedFeeds((prev) => [...prev, feedId]);
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions/feeds"] });
    },
    onError: (error: any) => {
      if (error.isTierLimit) {
        toast({
          title: "Feed Subscription Limit Reached",
          description: `You've reached your ${error.tier || 'free'} tier limit of ${error.limit} feeds. Upgrade to subscribe to more feeds.`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to subscribe to feed.",
          variant: "destructive",
        });
      }
    },
  });

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTopicToggle = (topic: Topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSourceTypeToggle = (sourceType: SourceType) => {
    setSelectedSourceTypes((prev) =>
      prev.includes(sourceType)
        ? prev.filter((st) => st !== sourceType)
        : [...prev, sourceType]
    );
  };

  const handleContinueToSubtopics = () => {
    if (selectedCategories.length === 0) {
      toast({
        title: "Select categories",
        description: "Please select at least one category to continue.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep(2);
  };

  const handleContinueToSourceTypes = () => {
    if (selectedTopics.length === 0) {
      toast({
        title: "Select topics",
        description: "Please select at least one topic to continue.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep(3);
  };

  const handleSaveAndContinue = () => {
    if (selectedSourceTypes.length === 0) {
      toast({
        title: "Select source types",
        description: "Please select at least one source type to continue.",
        variant: "destructive",
      });
      return;
    }
    savePreferencesMutation.mutate();
  };

  const handleFeedSubscribe = (feedId: string) => {
    if (subscribedFeeds.includes(feedId)) return;
    subscribeFeedMutation.mutate(feedId);
  };

  const handleComplete = () => {
    if (subscribedFeeds.length === 0) {
      toast({
        title: "Subscribe to feeds",
        description: "Please subscribe to at least one feed to continue.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Welcome to Lucid Feed!",
      description: "Your personalized digest will be generated soon.",
    });
    navigate("/");
  };

  const progress = ((currentStep - 1) / 4) * 100;

  // Feeds are already filtered by the API based on user preferences
  const filteredFeeds = Array.isArray(feeds) ? feeds : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8">
          <div className="flex flex-col items-center mb-6">
            <img 
              src={logoImage} 
              alt="Lucid Feed" 
              className="h-16 w-16 mb-4"
              data-testid="img-logo-onboarding"
            />
          </div>
          <div className="flex flex-wrap items-start gap-4 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Sparkles className="h-7 w-7 text-primary" data-testid="icon-sparkles" />
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-onboarding-title">Welcome to Lucid Feed</h1>
              </div>
              <p className="text-base md:text-lg text-muted-foreground" data-testid="text-onboarding-subtitle">
                Let's personalize your content curation experience
              </p>
            </div>
          </div>
          <Progress value={progress} className="mt-6" data-testid="progress-onboarding" />
        </div>

        {currentStep === 1 && (
          <Card data-testid="card-category-selection">
            <CardHeader>
              <CardTitle data-testid="text-step-title">Choose what you love</CardTitle>
              <CardDescription data-testid="text-step-description">
                Select the broad areas that interest you most
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TOPIC_CATEGORIES.map((category) => (
                  <div
                    key={category.category}
                    className={`p-4 rounded-md border cursor-pointer transition-colors ${
                      selectedCategories.includes(category.category)
                        ? "bg-primary/10 border-primary"
                        : "hover-elevate"
                    }`}
                    data-testid={`category-${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={selectedCategories.includes(category.category)}
                        onCheckedChange={() => handleCategoryToggle(category.category)}
                        data-testid={`checkbox-category-${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium" data-testid={`category-name-${category.category.toLowerCase().replace(/\s+/g, "-")}`}>
                          {category.category}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end items-center pt-4 border-t">
                <Button
                  onClick={handleContinueToSubtopics}
                  disabled={selectedCategories.length === 0}
                  data-testid="button-continue-subtopics"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card data-testid="card-subtopic-selection">
            <CardHeader>
              <CardTitle data-testid="text-step-title">Now pick a few focus areas</CardTitle>
              <CardDescription data-testid="text-step-description">
                Choose specific topics within your selected categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {TOPIC_CATEGORIES.filter((cat) => selectedCategories.includes(cat.category)).map(
                (category) => (
                  <div key={category.category} className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground" data-testid={`subtopics-header-${category.category.toLowerCase().replace(/\s+/g, "-")}`}>
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {category.subtopics.map((subtopic) => (
                        <Badge
                          key={subtopic.value}
                          variant={selectedTopics.includes(subtopic.value) ? "default" : "outline"}
                          className="cursor-pointer justify-center py-2 hover-elevate"
                          onClick={() => handleTopicToggle(subtopic.value)}
                          data-testid={`subtopic-${subtopic.value}`}
                        >
                          {subtopic.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleContinueToSourceTypes}
                  disabled={selectedTopics.length === 0}
                  data-testid="button-continue-sources"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card data-testid="card-source-selection">
            <CardHeader>
              <CardTitle data-testid="text-step-title">Select your favorite source types</CardTitle>
              <CardDescription data-testid="text-step-description">
                Choose the types of content you prefer to read or watch
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SOURCE_TYPES.map((sourceType) => (
                  <div
                    key={sourceType.value}
                    className={`p-4 rounded-md border cursor-pointer transition-colors ${
                      selectedSourceTypes.includes(sourceType.value)
                        ? "bg-primary/10 border-primary"
                        : "hover-elevate"
                    }`}
                    onClick={() => handleSourceTypeToggle(sourceType.value)}
                    data-testid={`source-type-${sourceType.value}`}
                  >
                    <div className="flex items-start gap-3">
                      <sourceType.Icon className="h-6 w-6 text-muted-foreground" data-testid={`icon-${sourceType.value}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium" data-testid={`source-name-${sourceType.value}`}>{sourceType.label}</h4>
                          {selectedSourceTypes.includes(sourceType.value) && (
                            <CheckCircle className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {sourceType.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSaveAndContinue}
                  disabled={selectedSourceTypes.length === 0 || savePreferencesMutation.isPending}
                  data-testid="button-save-continue"
                >
                  {savePreferencesMutation.isPending ? "Saving..." : "Continue to Feeds"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card data-testid="card-feed-selection">
            <CardHeader>
              <CardTitle data-testid="text-feed-step-title">Subscribe to Feeds</CardTitle>
              <CardDescription data-testid="text-feed-step-description">
                We've curated feeds based on your selected topics. Subscribe to the ones you're interested in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {feedsLoading ? (
                <div className="text-center py-8" data-testid="loading-feeds">
                  <p className="text-muted-foreground">Loading feeds...</p>
                </div>
              ) : filteredFeeds.length === 0 ? (
                <div className="text-center py-8" data-testid="no-feeds">
                  <p className="text-muted-foreground">No feeds found for your selected topics.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredFeeds.map((feed: any) => (
                    <div
                      key={feed.id}
                      className="flex items-start gap-4 p-4 rounded-md border"
                      data-testid={`feed-${feed.id}`}
                    >
                      <Rss className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium" data-testid={`feed-name-${feed.id}`}>{feed.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`feed-description-${feed.id}`}>
                          {feed.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {feed.topics?.map((topic: Topic) => (
                            <Badge key={topic} variant="secondary" data-testid={`badge-topic-${topic}`}>
                              {getTopicLabel(topic)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={subscribedFeeds.includes(feed.id) ? "secondary" : "default"}
                        onClick={() => handleFeedSubscribe(feed.id)}
                        disabled={subscribedFeeds.includes(feed.id)}
                        data-testid={`button-subscribe-${feed.id}`}
                      >
                        {subscribedFeeds.includes(feed.id) ? (
                          <>
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Subscribed
                          </>
                        ) : (
                          "Subscribe"
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  data-testid="button-back"
                >
                  Back
                </Button>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground" data-testid="text-subscribed-count">
                    {subscribedFeeds.length} feed{subscribedFeeds.length !== 1 ? "s" : ""} subscribed
                  </p>
                  <Button
                    onClick={handleComplete}
                    disabled={subscribedFeeds.length === 0}
                    data-testid="button-complete"
                  >
                    Complete Onboarding
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
