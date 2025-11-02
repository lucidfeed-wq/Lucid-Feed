import { FileQuestion, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title = "No Results Found",
  description = "We couldn't find any items matching your criteria. Try adjusting your filters or check back later.",
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 max-w-md mx-auto text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <FileQuestion className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="outline" data-testid="button-empty-action">
          <RefreshCw className="w-4 h-4 mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
