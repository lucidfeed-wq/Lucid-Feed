import { MessageSquare, ThumbsUp, Eye, ExternalLink, Link2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SourceBadge } from "./SourceBadge";
import { MethodologyBadge } from "./MethodologyBadge";
import { EvidenceBadge } from "./EvidenceBadge";
import { TopicTag } from "./TopicTag";
import { SaveButton } from "./SaveButton";
import type { DigestSectionItem, Topic } from "@shared/schema";
import { format } from "date-fns";

// UTM tracking utility
function addUTMParams(url: string, source: string = 'digest', medium: string = 'web', campaign: string = 'weekly_digest'): string {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('utm_source', source);
    urlObj.searchParams.set('utm_medium', medium);
    urlObj.searchParams.set('utm_campaign', campaign);
    return urlObj.toString();
  } catch {
    return url;
  }
}

interface ItemCardProps {
  item: DigestSectionItem;
  onTopicClick?: (topic: Topic) => void;
  isSaved?: boolean;
}

export function ItemCard({ item, onTopicClick, isSaved = false }: ItemCardProps) {
  const publishedDate = format(new Date(item.publishedAt), "MMM d, yyyy");
  const hasEngagement = item.engagement && (item.engagement.comments > 0 || item.engagement.upvotes > 0 || item.engagement.views > 0);
  
  // Add UTM tracking to all outbound links
  const trackedUrl = addUTMParams(item.url);

  return (
    <Card className="hover-elevate transition-shadow" data-testid={`card-item-${item.itemId}`}>
      <CardHeader className="pb-3 md:pb-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <SourceBadge sourceType={item.sourceType} />
            {item.methodology && <MethodologyBadge methodology={item.methodology} />}
            {item.levelOfEvidence && <EvidenceBadge level={item.levelOfEvidence} />}
          </div>
          <div className="flex items-center gap-2">
            <SaveButton itemId={item.itemId} isSaved={isSaved} />
            <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap" data-testid="text-date">
              {publishedDate}
            </span>
          </div>
        </div>
        <a
          href={trackedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          data-testid="link-item-title"
        >
          <h3 className="text-base md:text-lg font-medium leading-snug group-hover:underline max-w-prose">
            {item.title}
            <ExternalLink className="inline-block w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
        </a>
        {item.journalName && (
          <p className="text-xs italic text-muted-foreground mt-1" data-testid="text-journal">
            {item.journalName}
          </p>
        )}
        {item.authorOrChannel && (
          <p className="text-sm text-muted-foreground mt-1" data-testid="text-author">
            {item.authorOrChannel}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-3 md:space-y-4">
        {item.keyInsights && (
          <div>
            <h4 className="text-xs md:text-sm font-medium mb-2">Key Insights</h4>
            <p className="text-sm md:text-base leading-relaxed" data-testid="text-insights">
              {item.keyInsights}
            </p>
          </div>
        )}

        {item.clinicalTakeaway && (
          <div className="border-l-2 border-primary pl-3 md:pl-4">
            <h4 className="text-xs md:text-sm font-medium mb-2">Clinical Takeaway</h4>
            <p className="text-xs md:text-sm leading-relaxed" data-testid="text-takeaway">
              {item.clinicalTakeaway}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex-col items-start gap-4 pt-4 border-t">
        <div className="w-full">
          <a
            href={trackedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            data-testid="link-view-source"
          >
            <ExternalLink className="w-4 h-4" />
            View Original Source
          </a>
        </div>

        {item.topics && item.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 w-full">
            {item.topics.slice(0, 5).map((topic) => (
              <TopicTag
                key={topic}
                topic={topic}
                onClick={onTopicClick}
              />
            ))}
            {item.topics.length > 5 && (
              <span className="text-xs text-muted-foreground self-center">
                +{item.topics.length - 5} more
              </span>
            )}
          </div>
        )}

        {hasEngagement && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground w-full">
            {item.engagement!.comments > 0 && (
              <span className="flex items-center gap-1" data-testid="text-comments">
                <MessageSquare className="w-4 h-4" />
                {item.engagement!.comments}
              </span>
            )}
            {item.engagement!.upvotes > 0 && (
              <span className="flex items-center gap-1" data-testid="text-upvotes">
                <ThumbsUp className="w-4 h-4" />
                {item.engagement!.upvotes}
              </span>
            )}
            {item.engagement!.views > 0 && (
              <span className="flex items-center gap-1" data-testid="text-views">
                <Eye className="w-4 h-4" />
                {item.engagement!.views.toLocaleString()}
              </span>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
