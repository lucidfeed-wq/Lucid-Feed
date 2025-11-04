import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { queryClient } from "@/lib/queryClient";

export default function SubscriptionSuccess() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['/api/subscriptions/status'] });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4" data-testid="page-subscription-success">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" data-testid="icon-success" />
          </div>
          <CardTitle className="text-2xl" data-testid="heading-success">
            Subscription Successful!
          </CardTitle>
          <CardDescription data-testid="text-success-message">
            Welcome to your upgraded plan. You now have access to more feeds, chat messages, and faster digests.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Your subscription is now active. Start exploring with your new limits!
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setLocation('/chat')}
              className="w-full"
              data-testid="button-go-chat"
            >
              Start Chatting
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setLocation('/feeds')}
              className="w-full"
              data-testid="button-go-feeds"
            >
              Browse Feeds
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
