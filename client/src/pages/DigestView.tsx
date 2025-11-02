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
    researchHighlights: filterItems(digest.sections.researchHighlights || []),
    communityTrends: filterItems(digest.sections.communityTrends || []),
    expertCommentary: filterItems(digest.sections.expertCommentary || []),
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
                research: digest.sections.researchHighlights?.length || 0,
                community: digest.sections.communityTrends?.length || 0,
                expert: digest.sections.expertCommentary?.length || 0,
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
                />

                <DigestSection
                  title="Community Trends"
                  description="Trending discussions and insights from functional medicine communities on Reddit and Substack."
                  items={filteredSections.communityTrends}
                  onTopicClick={handleTopicToggle}
                />

                <DigestSection
                  title="Expert Commentary"
                  description="Educational videos and analysis from leading functional medicine practitioners."
                  items={filteredSections.expertCommentary}
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
