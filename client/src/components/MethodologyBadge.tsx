import { Badge } from "@/components/ui/badge";
import type { Methodology } from "@shared/schema";

interface MethodologyBadgeProps {
  methodology: Methodology;
  className?: string;
}

export function MethodologyBadge({ methodology, className = "" }: MethodologyBadgeProps) {
  const config: Record<Methodology, { label: string; variant: "default" | "secondary" | "outline" }> = {
    RCT: { label: "RCT", variant: "default" },
    Cohort: { label: "Cohort", variant: "secondary" },
    Case: { label: "Case Study", variant: "secondary" },
    Review: { label: "Review", variant: "secondary" },
    Meta: { label: "Meta-Analysis", variant: "default" },
    Preprint: { label: "Preprint", variant: "outline" },
    NA: { label: "N/A", variant: "outline" },
  };

  const { label, variant } = config[methodology];

  return (
    <Badge variant={variant} className={className} data-testid={`badge-methodology-${methodology}`}>
      {label}
    </Badge>
  );
}
