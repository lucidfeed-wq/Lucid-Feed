import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Check, X, ExternalLink, Activity, TrendingUp, Hash, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import type { UserFeedSubmission, JobRun, Topic } from '@shared/schema';
import { topics } from '@shared/schema';
import { formatDistanceToNow } from 'date-fns';

interface MetricsData {
  jobs: JobRun[];
  summary: {
    totalJobs: number;
    successfulJobs: number;
    failedJobs: number;
    totalItemsIngested: number;
    totalDedupeHits: number;
    totalTokenSpend: number;
    avgDedupeRate: string;
  };
}

export default function AdminPage() {
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [researchCount, setResearchCount] = useState('15');
  const [communityCount, setCommunityCount] = useState('15');
  const [expertCount, setExpertCount] = useState('10');
  const { toast } = useToast();

  const { data: submissions = [], isLoading } = useQuery<UserFeedSubmission[]>({
    queryKey: ['/api/feeds/submissions/pending'],
  });

  const { data: metrics } = useQuery<MetricsData>({
    queryKey: ['/api/admin/metrics/jobs'],
    refetchInterval: 60000, // Refresh every minute
  });

  const runIngestMutation = useMutation({
    mutationFn: async (topicsFilter?: Topic[]) => {
      return await apiRequest('POST', '/admin/run/ingest', {
        topics: topicsFilter && topicsFilter.length > 0 ? topicsFilter : undefined,
      });
    },
    onSuccess: (data: any) => {
      toast({
        title: 'Ingestion started',
        description: `Processing ${data.itemsIngested || 0} items. Check metrics below for progress.`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/metrics/jobs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/digest/latest'] });
      setSelectedTopics([]);
    },
    onError: (error: Error) => {
      toast({
        title: 'Ingestion failed',
        description: error.message || 'Failed to run ingestion job',
        variant: 'destructive',
      });
    },
  });

  const runDigestMutation = useMutation({
    mutationFn: async () => {
      const itemCounts = {
        research: parseInt(researchCount) || 15,
        community: parseInt(communityCount) || 15,
        expert: parseInt(expertCount) || 10,
      };
      return await apiRequest('POST', '/admin/run/digest', { itemCounts });
    },
    onSuccess: () => {
      toast({
        title: 'Digest generated',
        description: 'Weekly digest has been successfully generated.',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/metrics/jobs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/digest/latest'] });
      queryClient.invalidateQueries({ queryKey: ['/api/digest/archive'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Digest generation failed',
        description: error.message || 'Failed to generate digest',
        variant: 'destructive',
      });
    },
  });

  const runEnrichMutation = useMutation({
    mutationFn: async (limit?: number) => {
      return await apiRequest('POST', '/admin/run/enrich', {
        limit: limit || 50,
      });
    },
    onSuccess: (data: any) => {
      toast({
        title: 'Enrichment completed',
        description: `Successfully enriched ${data.itemsEnriched || 0} items with quality scores.`,
      });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/metrics/jobs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/digest/latest'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Enrichment failed',
        description: error.message || 'Failed to enrich items',
        variant: 'destructive',
      });
    },
  });

  const runBulkEnrichMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest('POST', '/admin/run/enrich-all', {});
    },
    onSuccess: (data: any) => {
      toast({
        title: 'Bulk enrichment started',
        description: data.message || 'Processing all items in background. Check server logs for progress.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Bulk enrichment failed',
        description: error.message || 'Failed to start bulk enrichment',
        variant: 'destructive',
      });
    },
  });

  const reviewMutation = useMutation({
    mutationFn: async ({ id, status, notes }: { id: string; status: 'approved' | 'rejected'; notes?: string }) => {
      return await apiRequest('PATCH', `/api/feeds/submissions/${id}/review`, {
        status,
        reviewNotes: notes || undefined,
      });
    },
    onSuccess: (_, variables) => {
      toast({
        title: variables.status === 'approved' ? 'Submission approved' : 'Submission rejected',
        description: variables.status === 'approved' 
          ? 'Feed has been added to the catalog' 
          : 'Feed submission has been rejected',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/feeds/submissions/pending'] });
      queryClient.invalidateQueries({ queryKey: ['/api/feeds'] });
      setReviewNotes(prev => {
        const { [variables.id]: _, ...rest } = prev;
        return rest;
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Review failed',
        description: error.message || 'Failed to review submission',
        variant: 'destructive',
      });
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading submissions...</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-4 md:py-8 px-4 max-w-7xl">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="heading-admin">
            Admin Dashboard
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Monitor system performance and review feed submissions
          </p>
        </div>

      {/* Manual Job Triggers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Manual Job Triggers</CardTitle>
          <CardDescription>
            Force run ingestion or digest generation jobs manually with custom settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Ingestion Trigger */}
          <div className="space-y-3">
            <div>
              <Label className="text-sm font-medium">1. Run Ingestion (Optional: Filter by Topics)</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Fetch new content from RSS feeds. Select topics to limit ingestion, or leave empty for all topics.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.slice(0, 10).map(topic => (
                <Badge
                  key={topic}
                  variant={selectedTopics.includes(topic) ? 'default' : 'outline'}
                  className="cursor-pointer hover-elevate active-elevate-2"
                  onClick={() => {
                    setSelectedTopics(prev =>
                      prev.includes(topic)
                        ? prev.filter(t => t !== topic)
                        : [...prev, topic]
                    );
                  }}
                  data-testid={`badge-topic-${topic}`}
                >
                  {topic.replace(/_/g, ' ')}
                </Badge>
              ))}
            </div>
            {selectedTopics.length > 0 && (
              <p className="text-xs text-muted-foreground">
                {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} selected
              </p>
            )}
            <Button 
              onClick={() => runIngestMutation.mutate(selectedTopics.length > 0 ? selectedTopics : undefined)}
              disabled={runIngestMutation.isPending}
              data-testid="button-trigger-ingest"
            >
              {runIngestMutation.isPending ? 'Running...' : selectedTopics.length > 0 ? `Run Filtered Ingestion (${selectedTopics.length} topics)` : 'Run Full Ingestion'}
            </Button>
          </div>

          <div className="border-t pt-6" />

          {/* Digest Trigger */}
          <div className="space-y-3">
            <div>
              <Label className="text-sm font-medium">2. Generate Digest (Configure Item Counts)</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Create a new weekly digest. Customize how many items to include in each section.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label htmlFor="research-count" className="text-xs">Research Articles</Label>
                <Input
                  id="research-count"
                  type="number"
                  min="5"
                  max="50"
                  value={researchCount}
                  onChange={(e) => setResearchCount(e.target.value)}
                  data-testid="input-research-count"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="community-count" className="text-xs">Community Posts</Label>
                <Input
                  id="community-count"
                  type="number"
                  min="5"
                  max="50"
                  value={communityCount}
                  onChange={(e) => setCommunityCount(e.target.value)}
                  data-testid="input-community-count"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="expert-count" className="text-xs">Expert Videos</Label>
                <Input
                  id="expert-count"
                  type="number"
                  min="5"
                  max="50"
                  value={expertCount}
                  onChange={(e) => setExpertCount(e.target.value)}
                  data-testid="input-expert-count"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Total items: {(parseInt(researchCount) || 0) + (parseInt(communityCount) || 0) + (parseInt(expertCount) || 0)}
            </p>
            <Button 
              onClick={() => runDigestMutation.mutate()}
              disabled={runDigestMutation.isPending}
              variant="secondary"
              data-testid="button-trigger-digest"
            >
              {runDigestMutation.isPending ? 'Generating...' : 'Generate Digest'}
            </Button>
          </div>

          <div className="border-t pt-6" />

          {/* Enrichment Trigger */}
          <div className="space-y-3">
            <div>
              <Label className="text-sm font-medium">3. Enrich Existing Items (Add Quality Scores)</Label>
              <p className="text-xs text-muted-foreground mt-1">
                Add transparent quality scores to existing items in database. Fetches full content, citation metrics, author credibility, and calculates multi-signal quality scores.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => runEnrichMutation.mutate(50)}
                disabled={runEnrichMutation.isPending}
                variant="outline"
                data-testid="button-trigger-enrich"
              >
                {runEnrichMutation.isPending ? 'Enriching...' : 'Enrich 50 Items'}
              </Button>
              <Button 
                onClick={() => runBulkEnrichMutation.mutate()}
                disabled={runBulkEnrichMutation.isPending}
                variant="default"
                data-testid="button-trigger-enrich-all"
              >
                {runBulkEnrichMutation.isPending ? 'Starting...' : 'Enrich ALL Items (Background)'}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Note: Enrichment is automatically applied during ingestion. Use these buttons only for backfilling old items.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Job Observability Metrics */}
      {metrics && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Job Observability (Last 7 Days)</h2>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="metric-total-jobs">{metrics.summary.totalJobs}</div>
                <p className="text-xs text-muted-foreground">
                  {metrics.summary.successfulJobs} successful, {metrics.summary.failedJobs} failed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Items Ingested</CardTitle>
                <Hash className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="metric-items-ingested">{metrics.summary.totalItemsIngested}</div>
                <p className="text-xs text-muted-foreground">
                  New content items
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Dedupe Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="metric-dedupe-rate">{metrics.summary.avgDedupeRate}%</div>
                <p className="text-xs text-muted-foreground">
                  {metrics.summary.totalDedupeHits} duplicates blocked
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Token Spend</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="metric-token-spend">{metrics.summary.totalTokenSpend.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  AI tokens consumed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Job Runs Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base md:text-lg">Recent Job Runs</CardTitle>
              <CardDescription className="text-xs md:text-sm">Latest system job executions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full text-xs md:text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-2 md:px-0 font-medium">Job</th>
                      <th className="text-left py-2 px-2 md:px-0 font-medium">Status</th>
                      <th className="text-right py-2 px-2 md:px-0 font-medium">Items</th>
                      <th className="text-right py-2 px-2 md:px-0 font-medium">Dedupes</th>
                      <th className="text-right py-2 px-2 md:px-0 font-medium">Tokens</th>
                      <th className="text-left py-2 px-2 md:px-0 font-medium">Started</th>
                      <th className="text-left py-2 px-2 md:px-0 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.jobs.slice(0, 10).map((job) => {
                      const duration = job.finishedAt 
                        ? Math.round((new Date(job.finishedAt).getTime() - new Date(job.startedAt).getTime()) / 1000)
                        : null;
                      
                      return (
                        <tr key={job.id} className="border-b" data-testid={`row-job-${job.id}`}>
                          <td className="py-2 px-2 md:px-0">{job.jobName}</td>
                          <td className="py-2 px-2 md:px-0">
                            {job.status === 'success' ? (
                              <Badge variant="default" className="gap-1">
                                <CheckCircle className="h-3 w-3" />
                                Success
                              </Badge>
                            ) : (
                              <Badge variant="destructive" className="gap-1">
                                <AlertCircle className="h-3 w-3" />
                                Error
                              </Badge>
                            )}
                          </td>
                          <td className="py-2 px-2 md:px-0 text-right">{job.itemsIngested}</td>
                          <td className="py-2 px-2 md:px-0 text-right">{job.dedupeHits}</td>
                          <td className="py-2 px-2 md:px-0 text-right">{job.tokenSpend.toLocaleString()}</td>
                          <td className="py-2 px-2 md:px-0">{formatDistanceToNow(new Date(job.startedAt), { addSuffix: true })}</td>
                          <td className="py-2 px-2 md:px-0">{duration ? `${duration}s` : '-'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Feed Submissions Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Feed Submissions Review</h2>
        <p className="text-muted-foreground mb-6">
          Review and approve pending feed submissions from the community
        </p>
      </div>

      {submissions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-submissions">
              No pending submissions to review
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="mb-4 text-sm text-muted-foreground" data-testid="text-submissions-count">
            {submissions.length} pending submission{submissions.length !== 1 ? 's' : ''}
          </div>

          <div className="space-y-6">
            {submissions.map((submission) => (
              <Card key={submission.id} data-testid={`card-submission-${submission.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {submission.feedName}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary">{submission.sourceType}</Badge>
                        <Badge variant="outline">{submission.category}</Badge>
                        {submission.submittedAt && (
                          <span className="text-xs text-muted-foreground">
                            Submitted {new Date(submission.submittedAt).toLocaleDateString()}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Feed URL</Label>
                    <a
                      href={submission.feedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:underline mt-1"
                      data-testid={`link-submission-url-${submission.id}`}
                    >
                      {submission.feedUrl}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>

                  {submission.description && (
                    <div>
                      <Label className="text-sm font-medium">Description</Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {submission.description}
                      </p>
                    </div>
                  )}

                  <div>
                    <Label htmlFor={`notes-${submission.id}`} className="text-sm font-medium">
                      Review Notes (Optional)
                    </Label>
                    <Textarea
                      id={`notes-${submission.id}`}
                      placeholder="Add notes about this submission..."
                      value={reviewNotes[submission.id] || ''}
                      onChange={(e) => setReviewNotes(prev => ({
                        ...prev,
                        [submission.id]: e.target.value,
                      }))}
                      className="mt-2 resize-none"
                      rows={3}
                      data-testid={`input-review-notes-${submission.id}`}
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <Button
                      variant="default"
                      onClick={() => reviewMutation.mutate({ 
                        id: submission.id, 
                        status: 'approved',
                        notes: reviewNotes[submission.id],
                      })}
                      disabled={reviewMutation.isPending}
                      data-testid={`button-approve-${submission.id}`}
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => reviewMutation.mutate({ 
                        id: submission.id, 
                        status: 'rejected',
                        notes: reviewNotes[submission.id],
                      })}
                      disabled={reviewMutation.isPending}
                      data-testid={`button-reject-${submission.id}`}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
      </div>
    </>
  );
}
