import { Badge } from "@/components/ui/badge";
import type { EvidenceLevel } from "@shared/schema";

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  className?: string;
}

export function EvidenceBadge({ level, className = "" }: EvidenceBadgeProps) {
  const config: Record<EvidenceLevel, { label: string; variant: "default" | "secondary" | "outline" }> = {
    A: { label: "Level A", variant: "default" },
    B: { label: "Level B", variant: "secondary" },
    C: { label: "Level C", variant: "outline" },
  };

  const { label, variant } = config[level];

  return (
    <Badge variant={variant} className={className} data-testid={`badge-evidence-${level}`}>
      {label}
    </Badge>
  );
}
