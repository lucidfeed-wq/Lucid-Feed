import { useParams, Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Check, Plus, ExternalLink } from "lucide-react";

export default function FeedDetail() {
  const { id } = useParams();
  const { toast } = useToast();

  // Fetch feed details
  const { data: feed, isLoading: feedLoading } = useQuery<any>({
    queryKey: ['/api/feeds', id],
    enabled: !!id,
  });

  // Fetch sample items
  const { data: items = [], isLoading: itemsLoading } = useQuery<any[]>({
    queryKey: ['/api/feeds', id, 'items'],
    enabled: !!id,
  });

  // Check if user is subscribed
  const { data: user } = useQuery<any>({ queryKey: ['/api/auth/user'] });
  const { data: subscriptions = [] } = useQuery<any[]>({
    queryKey: ['/api/user/feed-subscriptions'],
    enabled: !!user,
  });

  const isSubscribed = subscriptions.some((sub: any) => sub.feedId === id);

  // Subscribe mutation
  const subscribeMutation = useMutation({
    mutationFn: async () => {
      await apiRequest('POST', '/api/user/feed-subscriptions', { feedId: id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user/feed-subscriptions'] });
      toast({
        title: "Subscribed!",
        description: `You're now following ${feed?.name}`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe to feed",
        variant: "destructive",
      });
    },
  });

  // Unsubscribe mutation  
  const unsubscribeMutation = useMutation({
    mutationFn: async () => {
      const subscription = subscriptions.find((sub: any) => sub.feedId === id);
      if (!subscription) throw new Error('Not subscribed');
      
      await apiRequest('DELETE', `/api/user/feed-subscriptions/${subscription.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user/feed-subscriptions'] });
      toast({
        title: "Unsubscribed",
        description: `You've unfollowed ${feed?.name}`,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to unsubscribe from feed",
        variant: "destructive",
      });
    },
  });

  if (feedLoading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!feed) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">Feed not found</p>
            <Button asChild variant="outline" data-testid="button-back-to-catalog">
              <Link href="/feeds">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Catalog
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Back button */}
      <Button asChild variant="ghost" size="sm" data-testid="button-back">
        <Link href="/feeds">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Feed Catalog
        </Link>
      </Button>

      {/* Feed header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <CardTitle className="text-2xl" data-testid="text-feed-name">
                {feed.name}
              </CardTitle>
              {feed.description && (
                <CardDescription data-testid="text-feed-description">
                  {feed.description}
                </CardDescription>
              )}
            </div>
            <div className="flex items-center gap-2">
              {isSubscribed ? (
                <Button
                  variant="outline"
                  onClick={() => unsubscribeMutation.mutate()}
                  disabled={unsubscribeMutation.isPending}
                  data-testid="button-unsubscribe"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed
                </Button>
              ) : (
                <Button
                  onClick={() => subscribeMutation.mutate()}
                  disabled={subscribeMutation.isPending}
                  data-testid="button-subscribe"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Metadata */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" data-testid="badge-source-type">
              {feed.sourceType}
            </Badge>
            <Badge variant="outline" data-testid="badge-category">
              {feed.category}
            </Badge>
            {feed.featured && (
              <Badge className="bg-primary" data-testid="badge-featured">
                Featured
              </Badge>
            )}
          </div>

          {/* Topics */}
          {feed.topics && feed.topics.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Topics:</p>
              <div className="flex flex-wrap gap-2">
                {feed.topics.slice(0, 10).map((topic: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs" data-testid={`badge-topic-${idx}`}>
                    {topic}
                  </Badge>
                ))}
                {feed.topics.length > 10 && (
                  <Badge variant="outline" className="text-xs">
                    +{feed.topics.length - 10} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Quality score */}
          {feed.qualityScore !== null && feed.qualityScore !== undefined && (
            <div>
              <p className="text-sm font-medium mb-1">Quality Score:</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all"
                    style={{ width: `${feed.qualityScore}%` }}
                  />
                </div>
                <span className="text-sm font-medium" data-testid="text-quality-score">
                  {feed.qualityScore}/100
                </span>
              </div>
            </div>
          )}

          {/* External link */}
          <div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2"
              data-testid="button-view-external"
            >
              <a href={feed.url} target="_blank" rel="noopener noreferrer">
                View RSS Feed
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-1">
              Opens the raw RSS feed in a new tab
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Sample items */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Items from this Feed</CardTitle>
          <CardDescription>
            Preview of the latest content we've ingested
          </CardDescription>
        </CardHeader>
        <CardContent>
          {itemsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No items found from this feed yet.</p>
              <p className="text-sm mt-2">
                Items will appear here once we've ingested content from this source.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item: any) => (
                <Card key={item.id} className="hover-elevate" data-testid={`card-item-${item.id}`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base leading-snug">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        data-testid={`link-item-${item.id}`}
                      >
                        {item.title}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {item.authorOrChannel} • {new Date(item.publishedAt).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  {item.rawExcerpt && (
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.rawExcerpt}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
