import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Folder, ArrowLeft, ExternalLink, BookMarked, Loader2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { formatDistanceToNow } from 'date-fns';

interface FolderType {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Item {
  id: string;
  title: string;
  url: string;
  sourceType: string;
  topics: string[];
  publishedAt: Date;
}

export default function FolderView() {
  const { folderId } = useParams();

  // Fetch folder details
  const { data: rawFolder, isLoading: folderLoading } = useQuery({
    queryKey: ['/api/folders', folderId],
    queryFn: async () => {
      const response = await fetch(`/api/folders/${folderId}`, {
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Failed to fetch folder');
      return response.json();
    },
    enabled: !!folderId,
  });
  const folder = rawFolder as FolderType | undefined;

  // Fetch folder items
  const { data: rawItems, isLoading: itemsLoading } = useQuery({
    queryKey: ['/api/folders', folderId, 'items'],
    queryFn: async () => {
      const response = await fetch(`/api/folders/${folderId}/items`, {
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Failed to fetch items');
      return response.json();
    },
    enabled: !!folderId,
  });
  const items = (rawItems as Item[] | undefined) || [];

  if (folderLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (!folder) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Folder not found</h3>
            <Link href="/folders">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Folders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="border-b px-6 py-6 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <Link href="/folders">
            <Button variant="ghost" size="sm" className="mb-4" data-testid="button-back-to-folders">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Folders
            </Button>
          </Link>
          <div className="flex flex-wrap items-start gap-4">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <Folder className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">{folder.name}</h1>
                {folder.description && (
                  <p className="text-sm md:text-base text-muted-foreground">
                    {folder.description}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {itemsLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <BookMarked className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-medium mb-2">No items in this folder</h3>
              <p className="text-sm text-muted-foreground">
                Add items to this folder from your digest or saved items
              </p>
            </div>
          ) : (
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="space-y-4">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="hover-elevate transition-all"
                    data-testid={`card-item-${item.id}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                              <Badge variant="outline">{item.sourceType}</Badge>
                              <span>•</span>
                              <span>
                                {formatDistanceToNow(new Date(item.publishedAt), {
                                  addSuffix: true,
                                })}
                              </span>
                            </div>
                            {item.topics && item.topics.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-3">
                                {item.topics.slice(0, 3).map((topic) => (
                                  <Badge
                                    key={topic}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {topic}
                                  </Badge>
                                ))}
                                {item.topics.length > 3 && (
                                  <Badge variant="secondary" className="text-xs">
                                    +{item.topics.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="outline" size="sm" className="w-full">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read Article
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  );
}
