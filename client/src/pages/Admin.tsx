import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Check, X, ExternalLink } from 'lucide-react';
import type { UserFeedSubmission } from '@shared/schema';

export default function AdminPage() {
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const { data: submissions = [], isLoading } = useQuery<UserFeedSubmission[]>({
    queryKey: ['/api/feeds/submissions/pending'],
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
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" data-testid="heading-admin">
          Feed Submissions Review
        </h1>
        <p className="text-muted-foreground">
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
  );
}
