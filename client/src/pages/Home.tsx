import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Filter, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
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
import { SortSelector, type SortOption } from "@/components/SortSelector";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import { LandingPage } from "@/components/LandingPage";
import type { Digest, Topic, SourceType, UserPreferences } from "@shared/schema";

export default function Home() {
  const [, navigate] = useLocation();
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [selectedSourceTypes, setSelectedSourceTypes] = useState<SourceType[]>([]);
  const [showReadFilter, setShowReadFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [sortOption, setSortOption] = useState<SortOption>('quality-desc');

  const { user, isLoading: isLoadingUser, isAuthenticated } = useAuth();
  const { toast } = useToast();

  const { data: preferences } = useQuery<UserPreferences>({
    queryKey: ["/api/preferences"],
    enabled: !!user,
  });

  const { data: rawDigest, isLoading, error } = useQuery({
    queryKey: ['/api/digest/latest'],
    enabled: !!user,
  });

  // Fetch read status for all items in digest
  const digest = rawDigest as Digest | undefined;
  const allItemIds = digest
    ? [
        ...((digest.sections as any)?.researchHighlights || []).map((i: any) => i.itemId),
        ...((digest.sections as any)?.communityTrends || []).map((i: any) => i.itemId),
        ...((digest.sections as any)?.expertCommentary || []).map((i: any) => i.itemId),
      ]
    : [];

  const { data: readStatusData } = useQuery({
    queryKey: ['/api/read-items/bulk', { itemIds: allItemIds }],
    enabled: !!user && allItemIds.length > 0,
    queryFn: async () => {
      const response = await fetch('/api/read-items/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ itemIds: allItemIds }),
      });
      if (!response.ok) throw new Error('Failed to fetch read status');
      return response.json();
    },
  });

  const readItemIds = new Set((readStatusData as { readIds?: string[] })?.readIds || []);

  // Refresh digest mutation
  const refreshMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/digest/refresh');
      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/digest/latest'] });
      
      // Show warnings if ingestion failed but digest succeeded
      if (data?.warnings && Array.isArray(data.warnings) && data.warnings.length > 0) {
        toast({
          title: "Digest Created with Warnings",
          description: "Your digest was created, but some content sources had errors. The digest may not include the very latest items.",
        });
      } else {
        toast({
          title: "Digest Refreshed",
          description: "Your digest has been updated with the latest content.",
        });
      }
    },
    onError: (error: any) => {
      const errorData = error?.response?.data;
      
      if (errorData?.upgradeRequired) {
        toast({
          title: "Upgrade Required",
          description: errorData.error,
          variant: "destructive",
          action: (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/pricing")}
            >
              View Plans
            </Button>
          ),
        });
      } else if (errorData?.limit !== undefined) {
        toast({
          title: "Daily Limit Reached",
          description: errorData.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Refresh Failed",
          description: error?.message || "Failed to refresh digest. Please try again.",
          variant: "destructive",
        });
      }
    },
  });

  // Redirect to onboarding if user has no topics selected
  useEffect(() => {
    if (user && preferences && (!preferences.favoriteTopics || preferences.favoriteTopics.length === 0)) {
      navigate("/onboarding");
    }
  }, [user, preferences, navigate]);

  // Show landing page for non-authenticated users (must check after all hooks)
  if (!isLoadingUser && !isAuthenticated) {
    return <LandingPage />;
  }

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

  const filterAndSortItems = (items: any[]) => {
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

    // Filter by read status
    if (showReadFilter === 'read') {
      filtered = filtered.filter(item => readItemIds.has(item.itemId));
    } else if (showReadFilter === 'unread') {
      filtered = filtered.filter(item => !readItemIds.has(item.itemId));
    }

    // Sort items
    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'quality-desc':
          return (b.scoreBreakdown?.totalScore || 0) - (a.scoreBreakdown?.totalScore || 0);
        case 'quality-asc':
          return (a.scoreBreakdown?.totalScore || 0) - (b.scoreBreakdown?.totalScore || 0);
        case 'recency-desc':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'recency-asc':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'engagement-desc':
          const aEngagement = (a.engagement?.upvotes || 0) + (a.engagement?.views || 0) + (a.engagement?.comments || 0);
          const bEngagement = (b.engagement?.upvotes || 0) + (b.engagement?.views || 0) + (b.engagement?.comments || 0);
          return bEngagement - aEngagement;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
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
    researchHighlights: filterAndSortItems((digest.sections as any)?.researchHighlights || []),
    communityTrends: filterAndSortItems((digest.sections as any)?.communityTrends || []),
    expertCommentary: filterAndSortItems((digest.sections as any)?.expertCommentary || []),
  };

  const hasResults = filteredSections.researchHighlights.length > 0 ||
    filteredSections.communityTrends.length > 0 ||
    filteredSections.expertCommentary.length > 0;

  const totalFilters = selectedSourceTypes.length + selectedTopics.length;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Read/Unread Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-foreground" data-testid="heading-read-filter">
          Read Status
        </h3>
        <div className="flex gap-2">
          <Button
            variant={showReadFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowReadFilter('all')}
            data-testid="button-filter-all"
            className="flex-1"
          >
            All
          </Button>
          <Button
            variant={showReadFilter === 'unread' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowReadFilter('unread')}
            data-testid="button-filter-unread"
            className="flex-1"
          >
            Unread
          </Button>
          <Button
            variant={showReadFilter === 'read' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowReadFilter('read')}
            data-testid="button-filter-read"
            className="flex-1"
          >
            Read
          </Button>
        </div>
      </div>

      <div className="border-t pt-8">
        <SourceTypeFilter
          selectedTypes={selectedSourceTypes}
          onTypeToggle={handleSourceTypeToggle}
          onClearTypes={handleClearSourceTypes}
        />
      </div>
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

            {/* Refresh Button */}
            <div className="mb-6">
              <Button
                onClick={() => refreshMutation.mutate()}
                disabled={refreshMutation.isPending}
                data-testid="button-refresh-digest"
                className="w-full"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshMutation.isPending ? 'animate-spin' : ''}`} />
                {refreshMutation.isPending ? "Fetching Fresh Content..." : "Refresh My Digest"}
              </Button>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredSections.researchHighlights.length + filteredSections.communityTrends.length + filteredSections.expertCommentary.length} items
              </p>
              <SortSelector currentSort={sortOption} onSortChange={setSortOption} />
            </div>

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
                  readItemIds={readItemIds}
                />

                <DigestSection
                  title="Community Trends"
                  description="Trending discussions and insights from health communities on Reddit and Substack."
                  items={filteredSections.communityTrends}
                  categorySummary={(digest.sections as any)?.communityTrendsSummary}
                  onTopicClick={handleTopicToggle}
                  readItemIds={readItemIds}
                />

                <DigestSection
                  title="Expert Commentary"
                  description="Educational videos and analysis from leading health practitioners and researchers."
                  items={filteredSections.expertCommentary}
                  categorySummary={(digest.sections as any)?.expertCommentarySummary}
                  onTopicClick={handleTopicToggle}
                  readItemIds={readItemIds}
                />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
