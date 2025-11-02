import { Newspaper, MessageSquare, FileText, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { SourceType } from "@shared/schema";

interface SourceBadgeProps {
  sourceType: SourceType;
  className?: string;
}

export function SourceBadge({ sourceType, className = "" }: SourceBadgeProps) {
  const config = {
    journal: {
      icon: Newspaper,
      label: "Journal",
      variant: "default" as const,
    },
    reddit: {
      icon: MessageSquare,
      label: "Reddit",
      variant: "outline" as const,
    },
    substack: {
      icon: FileText,
      label: "Substack",
      variant: "outline" as const,
    },
    youtube: {
      icon: Video,
      label: "YouTube",
      variant: "outline" as const,
    },
  };

  const { icon: Icon, label, variant } = config[sourceType];

  return (
    <Badge variant={variant} className={className} data-testid={`badge-source-${sourceType}`}>
      <Icon className="w-3 h-3 mr-1" />
      {label}
    </Badge>
  );
}
