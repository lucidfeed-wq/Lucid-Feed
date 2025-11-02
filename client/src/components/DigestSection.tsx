import { ItemCard } from "./ItemCard";
import type { DigestSectionItem, Topic } from "@shared/schema";

interface DigestSectionProps {
  title: string;
  description: string;
  items: DigestSectionItem[];
  onTopicClick?: (topic: Topic) => void;
}

export function DigestSection({ title, description, items, onTopicClick }: DigestSectionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="mb-16" data-testid={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <ItemCard key={item.itemId} item={item} onTopicClick={onTopicClick} />
        ))}
      </div>
    </section>
  );
}
