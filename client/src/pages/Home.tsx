import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Header } from "@/components/Header";
import { DigestHeader } from "@/components/DigestHeader";
import { DigestSection } from "@/components/DigestSection";
import { TopicFilter } from "@/components/TopicFilter";
import { SourceTypeFilter } from "@/components/SourceTypeFilter";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import { LandingPage } from "@/components/LandingPage";
import type { Digest, Topic, SourceType, UserPreferences } from "@shared/schema";

export default function Home() {
  const [, navigate] = useLocation();
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedSourceTypes, setSelectedSourceTypes] = useState<SourceType[]>([]);

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["/api/auth/user"],
  });

  const { data: preferences } = useQuery<UserPreferences>({
    queryKey: ["/api/preferences"],
    enabled: !!user,
  });

  const { data: rawDigest, isLoading, error } = useQuery({
    queryKey: ['/api/digest/latest'],
    enabled: !!user,
  });

  // Show landing page for non-authenticated users
  if (!isLoadingUser && !user) {
    return <LandingPage />;
  }

  const digest = rawDigest as Digest | undefined;

  // Redirect to onboarding if user has no topics selected
  useEffect(() => {
    if (user && preferences && (!preferences.favoriteTopics || preferences.favoriteTopics.length === 0)) {
      navigate("/onboarding");
    }
  }, [user, preferences, navigate]);

  const handleTopicToggle = (topic: Topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSourceTypeToggle = (type: SourceType) => {
    setSelectedSourceTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleClearFilters = () => {
    setSelectedTopics([]);
    setSelectedSourceTypes([]);
  };

  const handleClearSourceTypes = () => {
    setSelectedSourceTypes([]);
  };

  const filterItems = (items: any[]) => {
    let filtered = items;

    // Filter by topic
    if (selectedTopics.length > 0) {
      filtered = filtered.filter(item =>
        item.topics?.some((topic: Topic) => selectedTopics.includes(topic))
      );
    }

    // Filter by source type
    if (selectedSourceTypes.length > 0) {
      filtered = filtered.filter(item =>
        selectedSourceTypes.includes(item.sourceType)
      );
    }

    return filtered;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
          <LoadingState />
        </main>
      </div>
    );
  }

  if (error || !digest) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
          <EmptyState
            title="Unable to Load Digest"
            description="There was a problem loading the latest digest. Please try again later."
          />
        </main>
      </div>
    );
  }

  const filteredSections = {
    researchHighlights: filterItems((digest.sections as any)?.researchHighlights || []),
    communityTrends: filterItems((digest.sections as any)?.communityTrends || []),
    expertCommentary: filterItems((digest.sections as any)?.expertCommentary || []),
  };

  const hasResults = filteredSections.researchHighlights.length > 0 ||
    filteredSections.communityTrends.length > 0 ||
    filteredSections.expertCommentary.length > 0;

  const totalFilters = selectedSourceTypes.length + selectedTopics.length;

  const FilterContent = () => (
    <div className="space-y-8">
      <SourceTypeFilter
        selectedTypes={selectedSourceTypes}
        onTypeToggle={handleSourceTypeToggle}
        onClearTypes={handleClearSourceTypes}
      />
      <div className="border-t pt-8">
        <TopicFilter
          selectedTopics={selectedTopics}
          onTopicToggle={handleTopicToggle}
          onClearFilters={handleClearFilters}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex gap-4 md:gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pr-6">
            <FilterContent />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" className="rounded-full shadow-lg" data-testid="button-filter-mobile">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                  {totalFilters > 0 && (
                    <span className="ml-2 bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {totalFilters}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-1 max-w-4xl">
            <DigestHeader
              windowStart={digest.windowStart}
              windowEnd={digest.windowEnd}
              generatedAt={digest.generatedAt}
              itemCounts={{
                research: filteredSections.researchHighlights.length,
                community: filteredSections.communityTrends.length,
                expert: filteredSections.expertCommentary.length,
              }}
            />

            {!hasResults ? (
              <EmptyState
                title="No Items Match Your Filters"
                description="Try selecting different topics or clear your filters to see all content."
                actionLabel="Clear Filters"
                onAction={handleClearFilters}
              />
            ) : (
              <>
                <DigestSection
                  title="Research Highlights"
                  description="Top peer-reviewed studies and preprints from leading medical journals."
                  items={filteredSections.researchHighlights}
                  categorySummary={(digest.sections as any)?.researchHighlightsSummary}
                  onTopicClick={handleTopicToggle}
                />

                <DigestSection
                  title="Community Trends"
                  description="Trending discussions and insights from health communities on Reddit and Substack."
                  items={filteredSections.communityTrends}
                  categorySummary={(digest.sections as any)?.communityTrendsSummary}
                  onTopicClick={handleTopicToggle}
                />

                <DigestSection
                  title="Expert Commentary"
                  description="Educational videos and analysis from leading health practitioners and researchers."
                  items={filteredSections.expertCommentary}
                  categorySummary={(digest.sections as any)?.expertCommentarySummary}
                  onTopicClick={handleTopicToggle}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
