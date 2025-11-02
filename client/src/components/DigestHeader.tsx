import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface DigestHeaderProps {
  windowStart: string;
  windowEnd: string;
  generatedAt: string;
  itemCounts: {
    research: number;
    community: number;
    expert: number;
  };
}

export function DigestHeader({ windowStart, windowEnd, generatedAt, itemCounts }: DigestHeaderProps) {
  const startDate = format(new Date(windowStart), "MMM d");
  const endDate = format(new Date(windowEnd), "MMM d, yyyy");
  const generated = format(new Date(generatedAt), "PPpp");

  return (
    <div className="pb-8 mb-12 border-b">
      <h1 className="text-4xl font-semibold mb-3 tracking-tight" data-testid="text-digest-title">
        Weekly Digest: {startDate} – {endDate}
      </h1>
      <p className="text-sm text-muted-foreground mb-4" data-testid="text-generated">
        Generated on {generated}
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" data-testid="badge-count-research">
          {itemCounts.research} Research Article{itemCounts.research !== 1 ? 's' : ''}
        </Badge>
        <Badge variant="outline" data-testid="badge-count-community">
          {itemCounts.community} Community Post{itemCounts.community !== 1 ? 's' : ''}
        </Badge>
        <Badge variant="outline" data-testid="badge-count-expert">
          {itemCounts.expert} Expert Video{itemCounts.expert !== 1 ? 's' : ''}
        </Badge>
      </div>
    </div>
  );
}
