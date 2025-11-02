import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sourceTypes, type SourceType } from "@shared/schema";

interface SourceTypeFilterProps {
  selectedTypes: SourceType[];
  onTypeToggle: (type: SourceType) => void;
  onClearTypes: () => void;
}

const sourceTypeLabels: Record<SourceType, string> = {
  journal: "Research Articles",
  reddit: "Reddit Discussions",
  substack: "Expert Newsletters",
  youtube: "Video Content",
};

const sourceTypeDescriptions: Record<SourceType, string> = {
  journal: "Peer-reviewed studies and medical journals",
  reddit: "Community discussions and trends",
  substack: "Expert analysis and commentary",
  youtube: "Educational videos and presentations",
};

export function SourceTypeFilter({ selectedTypes, onTypeToggle, onClearTypes }: SourceTypeFilterProps) {
  const allSelected = selectedTypes.length === sourceTypes.length;
  const noneSelected = selectedTypes.length === 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Source Type</h3>
        {!noneSelected && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearTypes}
            data-testid="button-clear-source-types"
            className="h-auto py-1 px-2 text-xs"
          >
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-2">
        {sourceTypes.map((type) => {
          const isSelected = selectedTypes.includes(type);

          return (
            <Card
              key={type}
              className={`p-3 cursor-pointer transition-colors hover-elevate ${
                isSelected ? 'border-primary bg-accent/50' : ''
              }`}
              onClick={() => onTypeToggle(type)}
              data-testid={`filter-source-${type}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-primary border-primary'
                      : 'border-muted-foreground/30'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">
                    {sourceTypeLabels[type]}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {sourceTypeDescriptions[type]}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
