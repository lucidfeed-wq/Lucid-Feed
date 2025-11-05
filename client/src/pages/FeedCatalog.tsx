import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Search } from 'lucide-react';
import { FeedSubmissionDialog } from '@/components/FeedSubmissionDialog';
import type { FeedCatalog } from '@shared/schema';

export default function FeedCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: feeds = [], isLoading } = useQuery<FeedCatalog[]>({
    queryKey: ['/api/feeds'],
  });

  // Extract unique source types and categories
  const sourceTypes = Array.from(new Set(feeds.map(f => f.sourceType))).sort();
  const categories = Array.from(new Set(feeds.map(f => f.category))).sort();

  // Filter feeds
  const filteredFeeds = feeds.filter(feed => {
    const matchesSearch = !searchQuery || 
      feed.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (feed.description?.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSourceType = selectedSourceType === 'all' || feed.sourceType === selectedSourceType;
    const matchesCategory = selectedCategory === 'all' || feed.category === selectedCategory;
    return matchesSearch && matchesSourceType && matchesCategory && feed.isApproved;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading feed catalog...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4 md:py-8 px-4 max-w-7xl">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-wrap flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-start gap-4 flex-1">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2" data-testid="heading-feed-catalog">
                Feed Catalog
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground">
                Browse {feeds.filter(f => f.isApproved).length} curated RSS feeds across journals, communities, and expert commentary
              </p>
            </div>
          </div>
          <FeedSubmissionDialog />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4">
          <div className="flex-1 min-w-full md:min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search feeds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-feeds"
              />
            </div>
          </div>

          <Select value={selectedSourceType} onValueChange={setSelectedSourceType}>
            <SelectTrigger className="w-full md:w-[200px]" data-testid="select-source-type">
              <SelectValue placeholder="All Sources" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {sourceTypes.map(sourceType => (
                <SelectItem key={sourceType} value={sourceType}>
                  {sourceType.charAt(0).toUpperCase() + sourceType.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[250px]" data-testid="select-category">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-muted-foreground" data-testid="text-results-count">
        Showing {filteredFeeds.length} feed{filteredFeeds.length !== 1 ? 's' : ''}
      </div>

      {/* Feed grid */}
      {filteredFeeds.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">No feeds found matching your criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedSourceType('all');
                setSelectedCategory('all');
              }}
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFeeds.map((feed) => (
            <Card 
              key={feed.id} 
              className="hover-elevate"
              data-testid={`card-feed-${feed.id}`}
            >
              <CardHeader className="space-y-0 pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-base leading-tight">
                    {feed.name}
                  </CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    {feed.sourceType}
                  </Badge>
                </div>
                <CardDescription className="text-xs">
                  {feed.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {feed.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {feed.description}
                  </p>
                )}
                <Link 
                  href={`/feeds/${feed.id}`}
                  className="inline-flex items-center text-sm font-medium hover:underline"
                  data-testid={`link-feed-preview-${feed.id}`}
                >
                  View Feed
                  <Eye className="h-3 w-3 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
