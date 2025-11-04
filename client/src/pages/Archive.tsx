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
        {/* Page Header with modern styling */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
            <h1 className="text-4xl font-bold tracking-tight">Digest Archive</h1>
          </div>
          <p className="text-lg text-muted-foreground ml-4">Browse and revisit your past weekly digests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digests.map((digest) => {
            const startDate = format(new Date(digest.windowStart), "MMM d");
            const endDate = format(new Date(digest.windowEnd), "MMM d, yyyy");
            const sections = digest.sections as any;
            const researchCount = sections?.researchHighlights?.length || 0;
            const communityCount = sections?.communityTrends?.length || 0;
            const expertCount = sections?.expertCommentary?.length || 0;
            const totalItems = researchCount + communityCount + expertCount;

            return (
              <Card key={digest.id} className="hover-elevate transition-all duration-200" data-testid={`card-digest-${digest.slug}`}>
                <CardHeader className="pb-4">
                  <h2 className="text-xl font-bold mb-1">
                    Week of {startDate}
                  </h2>
                  <p className="text-sm text-muted-foreground">{endDate}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-3">
                      {totalItems} total item{totalItems !== 1 ? 's' : ''}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {researchCount > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {researchCount} Research
                        </Badge>
                      )}
                      {communityCount > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {communityCount} Community
                        </Badge>
                      )}
                      {expertCount > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {expertCount} Expert
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/digest/${digest.slug}`}>
                    <Button variant="default" className="w-full" data-testid={`button-view-${digest.slug}`}>
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
