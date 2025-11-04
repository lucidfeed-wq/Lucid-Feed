import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta: {
    text: string;
    onClick: () => void;
  };
  popular?: boolean;
  currentPlan?: boolean;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  cta,
  popular,
  currentPlan,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all hover-elevate",
        popular && "border-primary shadow-lg"
      )}
      data-testid={`pricing-${name.toLowerCase()}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-md">
          Popular
        </div>
      )}
      <CardHeader className="text-center space-y-4 pb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={cta.onClick}
          className="w-full"
          variant={popular ? "default" : "outline"}
          disabled={currentPlan}
          data-testid={`pricing-cta-${name.toLowerCase()}`}
        >
          {currentPlan ? "Current Plan" : cta.text}
        </Button>
      </CardContent>
    </Card>
  );
}
