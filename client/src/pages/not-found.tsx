import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-wrap items-start gap-4 mb-6">
            <AlertCircle className="h-10 w-10 text-destructive shrink-0" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">404</h1>
              <p className="text-lg font-medium text-muted-foreground">Page Not Found</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
