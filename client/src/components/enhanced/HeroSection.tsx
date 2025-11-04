import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  image?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  stats,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/20 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            {subtitle && (
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {subtitle}
              </span>
            )}
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button size="lg" data-testid="hero-primary-cta">
                    {primaryCTA.text}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="hero-secondary-cta"
                  >
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
            {stats && stats.length > 0 && (
              <div className="pt-8 border-t">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} data-testid={`hero-stat-${index}`}>
                      <p className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {image && (
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={image}
                  alt="Hero"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-lg bg-primary/20 -z-10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
