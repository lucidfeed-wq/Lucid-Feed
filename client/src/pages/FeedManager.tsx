import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Upload, Link, Search, CheckCircle, XCircle, AlertCircle, Rss } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Form schemas
const submitFeedSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  name: z.string().optional(),
  topics: z.array(z.string()).optional()
});

const searchFeedSchema = z.object({
  query: z.string().min(2, "Search query must be at least 2 characters"),
  sourceType: z.string().optional()
});

type SubmitFeedForm = z.infer<typeof submitFeedSchema>;
type SearchFeedForm = z.infer<typeof searchFeedSchema>;

export default function FeedManager() {
  const [opmlContent, setOpmlContent] = useState("");
  const [importResults, setImportResults] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { toast } = useToast();

  // Manual feed submission form
  const submitForm = useForm<SubmitFeedForm>({
    resolver: zodResolver(submitFeedSchema),
    defaultValues: {
      url: "",
      name: "",
      topics: []
    }
  });

  // Search form
  const searchForm = useForm<SearchFeedForm>({
    resolver: zodResolver(searchFeedSchema),
    defaultValues: {
      query: "",
      sourceType: ""
    }
  });

  // Submit feed mutation
  const submitFeedMutation = useMutation({
    mutationFn: async (data: SubmitFeedForm) => {
      return apiRequest("/api/feeds/submit", "POST", data);
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Feed Submitted",
          description: "Your feed has been submitted for review.",
        });
        submitForm.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Validation Failed",
          description: data.error || "The feed could not be validated.",
        });
      }
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to submit feed",
      });
    }
  });

  // Import OPML mutation
  const importOpmlMutation = useMutation({
    mutationFn: async (content: string) => {
      return apiRequest("/api/feeds/import-opml", "POST", { opmlContent: content });
    },
    onSuccess: (data) => {
      setImportResults(data);
      toast({
        title: "Import Complete",
        description: `Imported ${data.imported} of ${data.total} feeds`,
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Import Failed",
        description: error.message || "Failed to import OPML",
      });
    }
  });

  // Search feeds mutation
  const searchFeedsMutation = useMutation({
    mutationFn: async (data: SearchFeedForm) => {
      const params = new URLSearchParams({
        query: data.query,
        ...(data.sourceType && { sourceType: data.sourceType })
      });
      const response = await fetch(`/api/feeds/search?${params}`);
      if (!response.ok) throw new Error("Search failed");
      return response.json();
    },
    onSuccess: (data) => {
      setSearchResults(data.results || []);
      if (data.results?.length === 0) {
        toast({
          title: "No Results",
          description: "No feeds found matching your search.",
        });
      }
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Search Failed",
        description: error.message || "Failed to search feeds",
      });
    }
  });

  // Handle OPML file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setOpmlContent(content);
      toast({
        title: "File Loaded",
        description: "OPML file loaded successfully. Click Import to proceed.",
      });
    };
    reader.readAsText(file);
  };

  return (
    <div className="container max-w-6xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">Feed Manager</h1>
        <p className="text-muted-foreground">Add RSS feeds manually, import from other readers, or discover new sources</p>
      </div>

      <Tabs defaultValue="submit" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="submit" data-testid="tab-submit">
            <Link className="w-4 h-4 mr-2" />
            Submit Feed
          </TabsTrigger>
          <TabsTrigger value="import" data-testid="tab-import">
            <Upload className="w-4 h-4 mr-2" />
            Import OPML
          </TabsTrigger>
          <TabsTrigger value="discover" data-testid="tab-discover">
            <Search className="w-4 h-4 mr-2" />
            Discover
          </TabsTrigger>
        </TabsList>

        {/* Manual Feed Submission */}
        <TabsContent value="submit">
          <Card>
            <CardHeader>
              <CardTitle>Submit RSS Feed</CardTitle>
              <CardDescription>
                Add any RSS feed URL to your catalog. The feed will be validated and enriched automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...submitForm}>
                <form onSubmit={submitForm.handleSubmit((data) => submitFeedMutation.mutate(data))} className="space-y-4">
                  <FormField
                    control={submitForm.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feed URL</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://example.com/feed.xml" 
                            {...field}
                            data-testid="input-feed-url"
                          />
                        </FormControl>
                        <FormDescription>
                          The RSS/Atom feed URL
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={submitForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="My Favorite Blog" 
                            {...field}
                            data-testid="input-feed-name"
                          />
                        </FormControl>
                        <FormDescription>
                          Override the feed's default name
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={submitFeedMutation.isPending}
                    data-testid="button-submit-feed"
                  >
                    {submitFeedMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>
                        <Rss className="mr-2 h-4 w-4" />
                        Submit Feed
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {submitFeedMutation.data?.validation && (
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Validation Result</AlertTitle>
                  <AlertDescription>
                    {submitFeedMutation.data.validation.valid ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Feed is valid!</span>
                        </div>
                        <div className="text-sm">
                          <p><strong>Title:</strong> {submitFeedMutation.data.validation.title}</p>
                          <p><strong>Type:</strong> {submitFeedMutation.data.validation.feedType}</p>
                          <p><strong>Items:</strong> {submitFeedMutation.data.validation.itemCount}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span>{submitFeedMutation.data.validation.error}</span>
                      </div>
                    )}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* OPML Import */}
        <TabsContent value="import">
          <Card>
            <CardHeader>
              <CardTitle>Import OPML</CardTitle>
              <CardDescription>
                Import your feeds from Feedly, Inoreader, or any RSS reader that exports OPML files.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="opml-file" className="block text-sm font-medium mb-2">
                  Choose OPML File
                </label>
                <Input
                  id="opml-file"
                  type="file"
                  accept=".opml,.xml"
                  onChange={handleFileUpload}
                  data-testid="input-opml-file"
                />
              </div>

              {opmlContent && (
                <div className="space-y-4">
                  <Textarea
                    value={opmlContent.substring(0, 500) + "..."}
                    readOnly
                    className="h-32"
                    data-testid="textarea-opml-preview"
                  />
                  <Button
                    onClick={() => importOpmlMutation.mutate(opmlContent)}
                    disabled={importOpmlMutation.isPending}
                    data-testid="button-import-opml"
                  >
                    {importOpmlMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Importing...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Import Feeds
                      </>
                    )}
                  </Button>
                </div>
              )}

              {importResults && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Import Results</AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2 mt-2">
                      <p>Total feeds: {importResults.total}</p>
                      <p className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Successfully imported: {importResults.imported}
                      </p>
                      {importResults.failed > 0 && (
                        <p className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-600" />
                          Failed: {importResults.failed}
                        </p>
                      )}
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Feed Discovery */}
        <TabsContent value="discover">
          <Card>
            <CardHeader>
              <CardTitle>Discover Feeds</CardTitle>
              <CardDescription>
                Search for new feeds by topic or keyword
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...searchForm}>
                <form onSubmit={searchForm.handleSubmit((data) => searchFeedsMutation.mutate(data))} className="space-y-4">
                  <div className="flex gap-2">
                    <FormField
                      control={searchForm.control}
                      name="query"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input 
                              placeholder="Search for feeds..." 
                              {...field}
                              data-testid="input-search-query"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={searchFeedsMutation.isPending}
                      data-testid="button-search-feeds"
                    >
                      {searchFeedsMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </form>
              </Form>

              {searchResults.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold">Search Results</h3>
                  {searchResults.map((result: any, idx: number) => (
                    <Card key={idx}>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h4 className="font-medium" data-testid={`text-result-name-${idx}`}>
                              {result.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {result.url}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="secondary">
                                {result.method}
                              </Badge>
                              <Badge>
                                Confidence: {Math.round(result.confidence * 100)}%
                              </Badge>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => {
                              submitForm.setValue("url", result.url);
                              submitForm.setValue("name", result.name);
                              submitFeedMutation.mutate({
                                url: result.url,
                                name: result.name
                              });
                            }}
                            data-testid={`button-add-result-${idx}`}
                          >
                            Add Feed
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}