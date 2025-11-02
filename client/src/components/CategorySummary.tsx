import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CategorySummary as CategorySummaryType } from "@shared/schema";

interface CategorySummaryProps {
  summary: CategorySummaryType;
}

export function CategorySummary({ summary }: CategorySummaryProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="bg-accent/30 border-primary/20" data-testid="card-category-summary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-semibold">AI-Generated Category Insights</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid="button-toggle-category-summary"
            className="h-auto p-1"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm leading-relaxed" data-testid="text-category-summary">
              {summary.summary}
            </p>
          </div>

          {summary.keyThemes && summary.keyThemes.length > 0 && (
            <div>
              <h4 className="text-xs font-medium mb-2 text-muted-foreground">Key Themes</h4>
              <div className="flex flex-wrap gap-2">
                {summary.keyThemes.map((theme, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-xs"
                    data-testid={`badge-theme-${idx}`}
                  >
                    {theme}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="border-l-2 border-primary pl-4">
            <h4 className="text-xs font-medium mb-2">Clinical Implications</h4>
            <p className="text-sm leading-relaxed" data-testid="text-clinical-implications">
              {summary.clinicalImplications}
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
