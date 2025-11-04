import { ItemCard } from "./ItemCard";
import { CategorySummary } from "./CategorySummary";
import type { DigestSectionItem, Topic, CategorySummary as CategorySummaryType } from "@shared/schema";
import { Sparkles } from "lucide-react";

interface DigestSectionProps {
  title: string;
  description: string;
  items: DigestSectionItem[];
  categorySummary?: CategorySummaryType;
  onTopicClick?: (topic: Topic) => void;
}

export function DigestSection({ title, description, items, categorySummary, onTopicClick }: DigestSectionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="mb-16 scroll-mt-20" data-testid={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-8 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        <p className="text-sm md:text-base text-muted-foreground ml-4">{description}</p>
      </div>

      {categorySummary && (
        <div className="mb-8">
          <CategorySummary summary={categorySummary} />
        </div>
      )}

      <div className="space-y-6 md:space-y-8">
        {items.map((item) => (
          <ItemCard key={item.itemId} item={item} onTopicClick={onTopicClick} />
        ))}
      </div>
    </section>
  );
}
