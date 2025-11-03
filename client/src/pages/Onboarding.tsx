import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Rss, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Topic } from "@shared/schema";

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
      { value: "metabolic", label: "Functional Medicine" },
      { value: "chronic_fatigue", label: "Longevity" },
      { value: "gut_health", label: "Nutrition Science" },
      { value: "weight_loss", label: "Fitness & Recovery" },
      { value: "chronic_EBV", label: "Sleep Optimization" },
      { value: "autoimmune", label: "Mindfulness" },
      { value: "leaky_gut", label: "Mental Health" },
      { value: "hormone_optimization", label: "Hormones & Metabolism" },
      { value: "IV_therapy", label: "Supplementation" },
      { value: "insulin_resistance", label: "Preventive Medicine" },
    ],
  },
  {
    category: "Science & Nature",
    description: "Scientific discoveries and natural phenomena",
    subtopics: [
      { value: "mitochondrial_health", label: "Neuroscience" },
      { value: "HRT", label: "Psychology" },
      { value: "TRT", label: "Genetics" },
      { value: "keto", label: "Space Exploration" },
      { value: "carnivore", label: "Physics" },
      { value: "mold_CIRS", label: "Biology" },
    ],
  },
  {
    category: "Technology & AI",
    description: "Emerging tech and digital innovation",
    subtopics: [
      { value: "metabolic", label: "Artificial Intelligence" },
      { value: "chronic_fatigue", label: "Machine Learning" },
      { value: "gut_health", label: "Automation" },
      { value: "weight_loss", label: "Robotics" },
    ],
  },
  {
    category: "Productivity & Self-Improvement",
    description: "Personal growth and effectiveness",
    subtopics: [
      { value: "chronic_EBV", label: "Focus & Flow" },
      { value: "autoimmune", label: "Habit Building" },
      { value: "leaky_gut", label: "Learning Techniques" },
      { value: "hormone_optimization", label: "Time Management" },
    ],
  },
  {
    category: "Finance & Business",
    description: "Money, markets, and entrepreneurship",
    subtopics: [
      { value: "IV_therapy", label: "Investing" },
      { value: "insulin_resistance", label: "Personal Finance" },
      { value: "mitochondrial_health", label: "Startups" },
      { value: "HRT", label: "Entrepreneurship" },
    ],
  },
  {
    category: "Society & Culture",
    description: "Social systems and cultural trends",
    subtopics: [
      { value: "TRT", label: "Politics" },
      { value: "keto", label: "Ethics" },
      { value: "carnivore", label: "Media Studies" },
      { value: "mold_CIRS", label: "Philosophy" },
    ],
  },
  {
    category: "Environment & Sustainability",
    description: "Climate, ecology, and green living",
    subtopics: [
      { value: "metabolic", label: "Climate Change" },
      { value: "chronic_fatigue", label: "Renewable Energy" },
      { value: "gut_health", label: "Agriculture & Food Systems" },
    ],
  },
  {
    category: "Creativity & Media",
    description: "Arts, design, and creative expression",
    subtopics: [
      { value: "weight_loss", label: "Writing" },
      { value: "chronic_EBV", label: "Art & Design" },
      { value: "autoimmune", label: "Storytelling" },
    ],
  },
  {
    category: "Education & Learning",
    description: "Learning science and skill development",
    subtopics: [
      { value: "leaky_gut", label: "Cognitive Science" },
      { value: "hormone_optimization", label: "Teaching" },
      { value: "IV_therapy", label: "Online Learning" },
    ],
  },
  {
    category: "Lifestyle & Travel",
    description: "Life design and exploration",
    subtopics: [
      { value: "insulin_resistance", label: "Minimalism" },
      { value: "mitochondrial_health", label: "Relationships" },
      { value: "HRT", label: "Adventure & Travel" },
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

export default function Onboarding() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [subscribedFeeds, setSubscribedFeeds] = useState<string[]>([]);

  const { data: feeds, isLoading: feedsLoading } = useQuery({
    queryKey: ["/api/catalog/feeds"],
    enabled: currentStep === 2,
  });

  const { data: user } = useQuery({
    queryKey: ["/api/auth/user"],
  });

  const savePreferencesMutation = useMutation({
    mutationFn: async () => {
      console.log("[Onboarding] Saving topics:", selectedTopics);
      const response = await apiRequest("/api/preferences", "PUT", {
        favoriteTopics: selectedTopics,
      });
      console.log("[Onboarding] Save response:", response);
      return response;
    },
    onSuccess: () => {
      console.log("[Onboarding] Save successful, moving to step 2");
      queryClient.invalidateQueries({ queryKey: ["/api/preferences"] });
      setCurrentStep(2);
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
      return apiRequest(`/api/subscriptions/feeds/${feedId}`, "POST");
    },
    onSuccess: (_, feedId) => {
      setSubscribedFeeds((prev) => [...prev, feedId]);
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions/feeds"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe to feed.",
        variant: "destructive",
      });
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

  const handleContinueToFeeds = () => {
    if (selectedTopics.length === 0) {
      toast({
        title: "Select topics",
        description: "Please select at least one topic to continue.",
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

  const progress = ((currentStep - 1) / 2) * 100;

  const filteredFeeds = Array.isArray(feeds) 
    ? feeds.filter((feed: any) =>
        feed.topics?.some((topic: Topic) => selectedTopics.includes(topic))
      )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-primary" data-testid="icon-sparkles" />
            <h1 className="text-3xl font-bold" data-testid="text-onboarding-title">Welcome to Lucid Feed</h1>
          </div>
          <p className="text-muted-foreground" data-testid="text-onboarding-subtitle">
            Let's personalize your content curation experience
          </p>
          <Progress value={progress} className="mt-4" data-testid="progress-onboarding" />
        </div>

        {currentStep === 1 && (
          <Card data-testid="card-topic-selection">
            <CardHeader>
              <CardTitle data-testid="text-step-title">Select Your Interests</CardTitle>
              <CardDescription data-testid="text-step-description">
                First, choose broad categories you're interested in, then select specific subtopics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Selection */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium" data-testid="text-categories-label">
                  Step 1: Choose Categories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {TOPIC_CATEGORIES.map((category) => (
                    <div
                      key={category.category}
                      className={`p-4 rounded-md border cursor-pointer transition-colors ${
                        selectedCategories.includes(category.category)
                          ? "bg-primary/10 border-primary"
                          : "hover-elevate"
                      }`}
                      onClick={() => handleCategoryToggle(category.category)}
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
              </div>

              {/* Subtopic Selection - only show for selected categories */}
              {selectedCategories.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium" data-testid="text-subtopics-label">
                    Step 2: Choose Specific Topics
                  </h3>
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
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-sm text-muted-foreground" data-testid="text-selected-count">
                  {selectedCategories.length} {selectedCategories.length !== 1 ? "categories" : "category"} •{" "}
                  {selectedTopics.length} {selectedTopics.length !== 1 ? "topics" : "topic"}
                </p>
                <Button
                  onClick={handleContinueToFeeds}
                  disabled={selectedTopics.length === 0 || savePreferencesMutation.isPending}
                  data-testid="button-continue-feeds"
                >
                  {savePreferencesMutation.isPending ? "Saving..." : "Continue to Feeds"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
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
