import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Youtube, Podcast, MessageSquare, FileText, Loader2 } from "lucide-react";
import { Header } from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

interface FeedResult {
  id: string;
  title: string;
  url: string;
  description: string;
  sourceType: 'youtube' | 'podcast' | 'reddit' | 'substack' | 'journal';
  category?: string;
  subscriberCount?: number;
  itemCount?: number;
}

const sourceTypeIcons = {
  youtube: Youtube,
  podcast: Podcast,
  reddit: MessageSquare,
  substack: FileText,
  journal: FileText,
};

const sourceTypeLabels = {
  youtube: 'YouTube',
  podcast: 'Podcast',
  reddit: 'Reddit',
  substack: 'Substack',
  journal: 'Journal',
};

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();

  const { data: results = [], isLoading, refetch } = useQuery<FeedResult[]>({
    queryKey: ['/api/discover/feeds', searchQuery, activeTab],
    enabled: searchQuery.length > 0,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      refetch();
    }
  };

  const handleSubscribe = async (feed: FeedResult) => {
    try {
      // TODO: Implement subscribe endpoint
      toast({
        title: "Coming soon",
        description: `Subscribe to ${feed.title} - feature in progress`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe to feed",
        variant: "destructive",
      });
    }
  };

  const filteredResults = activeTab === "all" 
    ? results 
    : results.filter(r => r.sourceType === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
            <h1 className="text-4xl font-bold tracking-tight" data-testid="text-page-title">
              Discover Feeds
            </h1>
          </div>
          <p className="text-lg text-muted-foreground ml-4">
            Search across YouTube channels, podcasts, Reddit communities, and Substack publications
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for topics, creators, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-feeds"
              />
            </div>
            <Button type="submit" disabled={!searchQuery.trim() || isLoading} data-testid="button-search">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
            </Button>
          </div>
        </form>

        {/* Source Type Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
            <TabsTrigger value="youtube" data-testid="tab-youtube">YouTube</TabsTrigger>
            <TabsTrigger value="podcast" data-testid="tab-podcast">Podcasts</TabsTrigger>
            <TabsTrigger value="reddit" data-testid="tab-reddit">Reddit</TabsTrigger>
            <TabsTrigger value="substack" data-testid="tab-substack">Substack</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Results */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : filteredResults.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredResults.map((feed) => {
              const Icon = sourceTypeIcons[feed.sourceType];
              return (
                <Card key={feed.id} className="hover-elevate" data-testid={`card-feed-${feed.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="truncate" data-testid={`text-feed-title-${feed.id}`}>
                            {feed.title}
                          </span>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {feed.description}
                        </CardDescription>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleSubscribe(feed)}
                        data-testid={`button-subscribe-${feed.id}`}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Subscribe
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" data-testid={`badge-source-${feed.id}`}>
                        {sourceTypeLabels[feed.sourceType]}
                      </Badge>
                      {feed.category && (
                        <Badge variant="outline" data-testid={`badge-category-${feed.id}`}>
                          {feed.category}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : searchQuery ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">No feeds found for "{searchQuery}"</p>
              <p className="text-sm text-muted-foreground">
                Try different keywords or source types
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">Search to discover feeds</p>
              <p className="text-sm text-muted-foreground">
                Enter topics like "metabolic health", "longevity", or "biohacking"
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
