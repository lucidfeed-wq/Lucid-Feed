import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { topics } from "@shared/schema";
import type { Topic, UserPreferences } from "@shared/schema";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Check } from "lucide-react";

const TOPIC_LABELS: Record<Topic, string> = {
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
  autophagy: "Autophagy"
};

export default function Preferences() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

  const { data: preferences, isLoading: prefsLoading } = useQuery<UserPreferences>({
    queryKey: ["/api/preferences"],
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (preferences?.favoriteTopics) {
      setSelectedTopics(preferences.favoriteTopics);
    }
  }, [preferences]);

  const updatePreferencesMutation = useMutation({
    mutationFn: async (favoriteTopics: Topic[]) => {
      const res = await apiRequest("PUT", "/api/preferences", { favoriteTopics });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/preferences"] });
      toast({
        title: "Preferences saved",
        description: "Your topic preferences have been updated successfully.",
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

  const handleSave = () => {
    updatePreferencesMutation.mutate(selectedTopics);
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
              Please log in to customize your topic preferences.
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
      <Card>
        <CardHeader>
          <CardTitle>Topic Preferences</CardTitle>
          <CardDescription>
            Select your favorite topics to personalize your digest content. Items matching your selected topics will be highlighted.
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

          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} selected
            </p>
            <Button
              onClick={handleSave}
              disabled={updatePreferencesMutation.isPending}
              data-testid="button-save-preferences"
            >
              {updatePreferencesMutation.isPending ? "Saving..." : "Save Preferences"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
