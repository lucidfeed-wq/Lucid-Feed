import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function LoadingState() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-32 bg-muted rounded-lg" />
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-6">
          <div className="h-8 bg-muted rounded w-1/4" />
          {[1, 2].map((j) => (
            <Card key={j}>
              <CardHeader>
                <div className="flex gap-2 mb-3">
                  <div className="h-6 w-20 bg-muted rounded" />
                  <div className="h-6 w-24 bg-muted rounded" />
                </div>
                <div className="h-6 bg-muted rounded w-3/4" />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
                <div className="h-4 bg-muted rounded w-4/5" />
              </CardContent>
              <CardFooter>
                <div className="flex gap-2 w-full">
                  <div className="h-6 w-16 bg-muted rounded-full" />
                  <div className="h-6 w-20 bg-muted rounded-full" />
                  <div className="h-6 w-16 bg-muted rounded-full" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
