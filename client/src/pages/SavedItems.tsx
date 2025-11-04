import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { ItemCard } from "@/components/ItemCard";
import { SortSelector, type SortOption } from "@/components/SortSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Item } from "@shared/schema";

export default function SavedItems() {
  const [sortOption, setSortOption] = useState<SortOption>('quality-desc');
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  const { data: savedItems, isLoading: itemsLoading } = useQuery<Item[]>({
    queryKey: ["/api/saved-items"],
    enabled: isAuthenticated,
  });

  if (authLoading || itemsLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
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
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please log in to view your saved items.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild data-testid="button-login-saved">
              <a href="/api/login">Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const rawItems = savedItems || [];

  // Sort items based on selected option
  const items = [...rawItems].sort((a, b) => {
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

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-wrap items-start gap-4 mb-4">
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" data-testid="heading-saved-items">
              My Saved Items
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              {items.length} item{items.length !== 1 ? 's' : ''} saved
            </p>
          </div>
        </div>
      </div>

      {/* Sort Controls */}
      {items.length > 0 && (
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {items.length} saved items
          </p>
          <SortSelector currentSort={sortOption} onSortChange={setSortOption} />
        </div>
      )}

      {items.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No saved items yet</CardTitle>
            <CardDescription>
              Items you bookmark will appear here. Click the bookmark icon on any item to save it.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={{
                itemId: item.id,
                title: item.title,
                url: item.url,
                sourceType: item.sourceType as any,
                publishedAt: item.publishedAt,
                topics: item.topics as any[],
                journalName: item.journalName,
                authorOrChannel: item.authorOrChannel,
                pdfUrl: item.pdfUrl,
                engagement: item.engagement,
                scoreBreakdown: item.scoreBreakdown as any,
              }}
              isSaved={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
