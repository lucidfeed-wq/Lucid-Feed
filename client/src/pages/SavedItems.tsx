import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { ItemCard } from "@/components/ItemCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Item } from "@shared/schema";

export default function SavedItems() {
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

  const items = savedItems || [];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2" data-testid="heading-saved-items">
          My Saved Items
        </h1>
        <p className="text-muted-foreground">
          {items.length} item{items.length !== 1 ? 's' : ''} saved
        </p>
      </div>

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
                engagement: item.engagement,
              }}
              isSaved={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
