import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
}

export function FeatureSection({
  title = "Features",
  subtitle,
  description,
  features,
}: FeatureSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {(title || subtitle || description) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {title && (
              <span className="mb-2 block text-sm font-semibold text-primary uppercase tracking-wide">
                {title}
              </span>
            )}
            {subtitle && (
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                {subtitle}
              </h2>
            )}
            {description && (
              <p className="text-base text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border" data-testid={`feature-${index}`}>
              <CardHeader>
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md"
                  style={{
                    backgroundColor: feature.color ? `${feature.color}15` : undefined,
                    color: feature.color,
                  }}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
