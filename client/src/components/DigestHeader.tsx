import { Badge } from "@/components/ui/badge";
import { format, formatDistanceToNow } from "date-fns";
import { Calendar, Clock, FileText, Users, Video } from "lucide-react";

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
  const totalItems = itemCounts.research + itemCounts.community + itemCounts.expert;

  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-12 mb-8 md:mb-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary" className="text-sm font-medium">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {startDate} – {endDate}
          </Badge>
          <Badge variant="outline" className="text-xs" data-testid="badge-last-updated">
            <Clock className="w-3 h-3 mr-1" />
            Last updated {formatDistanceToNow(new Date(generatedAt), { addSuffix: true })}
          </Badge>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-digest-title">
          Weekly Digest: {startDate} – {endDate}
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl">
          {totalItems} curated items from your favorite sources, ranked by quality and relevance
        </p>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/60 backdrop-blur-sm border" data-testid="badge-count-research">
            <FileText className="w-4 h-4 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Research</span>
              <span className="text-sm font-semibold">{itemCounts.research}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/60 backdrop-blur-sm border" data-testid="badge-count-community">
            <Users className="w-4 h-4 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Community</span>
              <span className="text-sm font-semibold">{itemCounts.community}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/60 backdrop-blur-sm border" data-testid="badge-count-expert">
            <Video className="w-4 h-4 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Expert Videos</span>
              <span className="text-sm font-semibold">{itemCounts.expert}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
