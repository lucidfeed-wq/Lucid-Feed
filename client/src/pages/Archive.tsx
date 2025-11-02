import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { LoadingState } from "@/components/LoadingState";
import { EmptyState } from "@/components/EmptyState";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Digest } from "@shared/schema";

export default function Archive() {
  const { data: digests, isLoading, error } = useQuery<Digest[]>({
    queryKey: ['/api/digest/archive'],
  });

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

  if (error || !digests) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <EmptyState
            title="Unable to Load Archive"
            description="There was a problem loading the digest archive. Please try again later."
          />
        </main>
      </div>
    );
  }

  if (digests.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <EmptyState
            title="No Digests Available"
            description="The archive is currently empty. Check back after the first weekly digest has been generated."
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2 tracking-tight">Digest Archive</h1>
          <p className="text-muted-foreground">Browse past weekly digests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digests.map((digest) => {
            const startDate = format(new Date(digest.windowStart), "MMM d");
            const endDate = format(new Date(digest.windowEnd), "MMM d, yyyy");
            const totalItems = (digest.sections.researchHighlights?.length || 0) +
              (digest.sections.communityTrends?.length || 0) +
              (digest.sections.expertCommentary?.length || 0);

            return (
              <Card key={digest.id} className="hover-elevate transition-shadow" data-testid={`card-digest-${digest.publicSlug}`}>
                <CardHeader>
                  <h2 className="text-xl font-semibold mb-1">
                    Week of {startDate}
                  </h2>
                  <p className="text-sm text-muted-foreground">{endDate}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    {totalItems} total item{totalItems !== 1 ? 's' : ''} across research, community, and expert sources
                  </p>
                  <div className="space-y-2">
                    {digest.sections.researchHighlights && digest.sections.researchHighlights.length > 0 && (
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {digest.sections.researchHighlights.length} Research
                        </Badge>
                      </div>
                    )}
                    {digest.sections.communityTrends && digest.sections.communityTrends.length > 0 && (
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {digest.sections.communityTrends.length} Community
                        </Badge>
                      </div>
                    )}
                    {digest.sections.expertCommentary && digest.sections.expertCommentary.length > 0 && (
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {digest.sections.expertCommentary.length} Expert
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/digest/${digest.publicSlug}`}>
                    <Button variant="outline" className="w-full" data-testid={`button-view-${digest.publicSlug}`}>
                      View Digest
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
