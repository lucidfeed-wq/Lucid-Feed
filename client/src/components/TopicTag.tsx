import { Badge } from "@/components/ui/badge";
import type { Topic } from "@shared/schema";

interface TopicTagProps {
  topic: Topic;
  onClick?: (topic: Topic) => void;
  active?: boolean;
  className?: string;
}

export function TopicTag({ topic, onClick, active = false, className = "" }: TopicTagProps) {
  const displayName = topic.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <Badge
      variant={active ? "default" : "secondary"}
      className={`rounded-full cursor-pointer hover-elevate active-elevate-2 ${className}`}
      onClick={() => onClick?.(topic)}
      data-testid={`tag-topic-${topic}`}
    >
      {displayName}
    </Badge>
  );
}
