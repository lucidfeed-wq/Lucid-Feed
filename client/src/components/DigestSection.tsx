import { ItemCard } from "./ItemCard";
import { CategorySummary } from "./CategorySummary";
import type { DigestSectionItem, Topic, CategorySummary as CategorySummaryType } from "@shared/schema";

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
    <section className="mb-16" data-testid={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {categorySummary && (
        <div className="mb-6">
          <CategorySummary summary={categorySummary} />
        </div>
      )}

      <div className="space-y-6">
        {items.map((item) => (
          <ItemCard key={item.itemId} item={item} onTopicClick={onTopicClick} />
        ))}
      </div>
    </section>
  );
}
