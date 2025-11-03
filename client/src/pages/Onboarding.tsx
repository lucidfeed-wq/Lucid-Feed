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

const TOPICS: { value: Topic; label: string; description: string }[] = [
  { value: "metabolic", label: "Metabolic Health", description: "Insulin, glucose, metabolism" },
  { value: "chronic_fatigue", label: "Chronic Fatigue", description: "CFS/ME, energy optimization" },
  { value: "chronic_EBV", label: "Chronic EBV", description: "Epstein-Barr virus management" },
  { value: "autoimmune", label: "Autoimmune", description: "Autoimmune conditions" },
  { value: "leaky_gut", label: "Leaky Gut", description: "Intestinal permeability" },
  { value: "carnivore", label: "Carnivore Diet", description: "Animal-based nutrition" },
  { value: "keto", label: "Ketogenic Diet", description: "Low-carb, high-fat nutrition" },
  { value: "IV_therapy", label: "IV Therapy", description: "Intravenous nutrient therapy" },
  { value: "HRT", label: "HRT", description: "Hormone replacement therapy" },
  { value: "TRT", label: "TRT", description: "Testosterone replacement therapy" },
  { value: "mold_CIRS", label: "Mold & CIRS", description: "Chronic inflammatory response" },
  { value: "weight_loss", label: "Weight Loss", description: "Sustainable weight management" },
  { value: "insulin_resistance", label: "Insulin Resistance", description: "Blood sugar management" },
  { value: "gut_health", label: "Gut Health", description: "Digestive system optimization" },
  { value: "hormone_optimization", label: "Hormone Optimization", description: "Hormone balance" },
  { value: "mitochondrial_health", label: "Mitochondrial Health", description: "Cellular energy production" },
];

export default function Onboarding() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
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
              <CardTitle data-testid="text-step-title">Select Your Topics</CardTitle>
              <CardDescription data-testid="text-step-description">
                Choose topics you're interested in. We'll curate content based on your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TOPICS.map((topic) => (
                  <div
                    key={topic.value}
                    className="flex items-start gap-3 p-4 rounded-md border hover-elevate cursor-pointer"
                    onClick={() => handleTopicToggle(topic.value)}
                    data-testid={`topic-${topic.value}`}
                  >
                    <Checkbox
                      checked={selectedTopics.includes(topic.value)}
                      onCheckedChange={() => handleTopicToggle(topic.value)}
                      id={topic.value}
                      data-testid={`checkbox-topic-${topic.value}`}
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={topic.value}
                        className="font-medium cursor-pointer"
                        data-testid={`label-topic-${topic.value}`}
                      >
                        {topic.label}
                      </Label>
                      <p className="text-sm text-muted-foreground" data-testid={`description-topic-${topic.value}`}>
                        {topic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4">
                <p className="text-sm text-muted-foreground" data-testid="text-selected-count">
                  {selectedTopics.length} topic{selectedTopics.length !== 1 ? "s" : ""} selected
                </p>
                <Button
                  onClick={handleContinueToFeeds}
                  disabled={selectedTopics.length === 0 || savePreferencesMutation.isPending}
                  data-testid="button-continue-feeds"
                >
                  Continue to Feeds
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
                              {TOPICS.find((t) => t.value === topic)?.label || topic}
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
