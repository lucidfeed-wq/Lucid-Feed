import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

interface SubscriptionStatus {
  tier: 'free' | 'premium' | 'pro';
  status?: 'active' | 'inactive' | 'canceled' | 'past_due';
  stripeCustomerId?: string;
}

const PRICING_PLANS = [
  {
    tier: 'free',
    name: 'Free',
    price: '$0',
    priceId: null,
    description: 'Perfect for trying out Lucid Feed',
    features: [
      '5 feed subscriptions',
      '10 chat messages per day',
      'Weekly digests',
      'Read/unread tracking',
      'Save items',
    ],
  },
  {
    tier: 'premium',
    name: 'Premium',
    price: '$12/month',
    priceId: import.meta.env.VITE_STRIPE_PREMIUM_PRICE_ID || 'price_premium',
    description: 'For serious information enthusiasts',
    features: [
      '20 feed subscriptions',
      '50 chat messages per day',
      'Daily digests',
      'Priority AI summaries',
      'All Free features',
    ],
    popular: true,
  },
  {
    tier: 'pro',
    name: 'Pro',
    price: '$29/month',
    priceId: import.meta.env.VITE_STRIPE_PRO_PRICE_ID || 'price_pro',
    description: 'Unlimited access for power users',
    features: [
      'Unlimited feed subscriptions',
      'Unlimited chat messages',
      'Real-time digests',
      'Advanced analytics',
      'All Premium features',
    ],
  },
];

export default function Pricing() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const { data: subscription } = useQuery<SubscriptionStatus>({
    queryKey: ['/api/subscriptions/status'],
  });

  const checkoutMutation = useMutation({
    mutationFn: async ({ tier }: { tier: string }) => {
      const response = await fetch('/api/subscriptions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ tier }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create checkout session');
      }

      return response.json();
    },
    onSuccess: (data: { url: string }) => {
      window.location.href = data.url;
    },
    onError: (error: Error) => {
      toast({
        title: "Checkout Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const portalMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/subscriptions/portal', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create portal session');
      }

      return response.json();
    },
    onSuccess: (data: { url: string }) => {
      window.location.href = data.url;
    },
    onError: (error: Error) => {
      toast({
        title: "Portal Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const currentTier = subscription?.tier || 'free';
  const hasActiveSubscription = subscription?.status === 'active';

  return (
    <div className="flex flex-col min-h-screen" data-testid="page-pricing">
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4" data-testid="heading-pricing">Choose Your Plan</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upgrade to unlock more feeds, chat messages, and faster digests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.tier}
                className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
                data-testid={`card-plan-${plan.tier}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground" data-testid="badge-popular">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4 pt-8">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl" data-testid={`text-plan-name-${plan.tier}`}>
                      {plan.name}
                    </CardTitle>
                    {currentTier === plan.tier && (
                      <Badge variant="secondary" data-testid={`badge-current-${plan.tier}`}>
                        Current Plan
                      </Badge>
                    )}
                  </div>
                  <div className="text-3xl font-bold mb-2" data-testid={`text-price-${plan.tier}`}>
                    {plan.price}
                  </div>
                  <CardDescription data-testid={`text-description-${plan.tier}`}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                        data-testid={`feature-${plan.tier}-${index}`}
                      >
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  {currentTier === plan.tier && hasActiveSubscription ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => portalMutation.mutate()}
                      disabled={portalMutation.isPending}
                      data-testid={`button-manage-${plan.tier}`}
                    >
                      {portalMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Crown className="h-4 w-4 mr-2" />
                      )}
                      Manage Subscription
                    </Button>
                  ) : plan.tier !== 'free' ? (
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => checkoutMutation.mutate({ tier: plan.tier })}
                      disabled={checkoutMutation.isPending || currentTier === plan.tier}
                      data-testid={`button-subscribe-${plan.tier}`}
                    >
                      {checkoutMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Crown className="h-4 w-4 mr-2" />
                      )}
                      {currentTier === 'free' ? 'Upgrade Now' : 'Change Plan'}
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled data-testid={`button-current-${plan.tier}`}>
                      Current Plan
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="ghost" onClick={() => setLocation('/')} data-testid="button-back-home">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
