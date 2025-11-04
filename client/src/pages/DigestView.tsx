import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Header } from "@/components/Header";
import { DigestHeader } from "@/components/DigestHeader";
import { DigestSection } from "@/components/DigestSection";
import { TopicFilter } from "@/components/TopicFilter";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import type { Digest, Topic } from "@shared/schema";

export default function DigestView() {
  const [, params] = useRoute("/digest/:slug");
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

  const { data: digest, isLoading, error } = useQuery<Digest>({
    queryKey: ['/api/digest', params?.slug],
    enabled: !!params?.slug,
  });

  // Fetch read status for all items in digest
  const allItemIds = digest
    ? [
        ...((digest.sections as any)?.researchHighlights || []).map((i: any) => i.itemId),
        ...((digest.sections as any)?.communityTrends || []).map((i: any) => i.itemId),
        ...((digest.sections as any)?.expertCommentary || []).map((i: any) => i.itemId),
      ]
    : [];

  const { data: readStatusData } = useQuery({
    queryKey: ['/api/read-items/bulk', { itemIds: allItemIds }],
    enabled: allItemIds.length > 0,
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

  const handleTopicToggle = (topic: Topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleClearFilters = () => {
    setSelectedTopics([]);
  };

  const filterItems = (items: any[]) => {
    if (selectedTopics.length === 0) return items;
    return items.filter(item =>
      item.topics?.some((topic: Topic) => selectedTopics.includes(topic))
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <LoadingState />
        </main>
      </div>
    );
  }

  if (error || !digest) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <EmptyState
            title="Digest Not Found"
            description="The requested digest could not be found. It may have been removed or the link is incorrect."
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <TopicFilter
            selectedTopics={selectedTopics}
            onTopicToggle={handleTopicToggle}
            onClearFilters={handleClearFilters}
          />

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
                  onTopicClick={handleTopicToggle}
                  readItemIds={readItemIds}
                />

                <DigestSection
                  title="Community Trends"
                  description="Trending discussions and insights from health communities on Reddit and Substack."
                  items={filteredSections.communityTrends}
                  onTopicClick={handleTopicToggle}
                  readItemIds={readItemIds}
                />

                <DigestSection
                  title="Expert Commentary"
                  description="Educational videos and analysis from leading health practitioners and researchers."
                  items={filteredSections.expertCommentary}
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
