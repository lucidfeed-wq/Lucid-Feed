import { useState } from "react";
import { ExternalLink, BookOpen, BookOpenCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SourceBadge } from "./SourceBadge";
import { TopicTag } from "./TopicTag";
import { SaveButton } from "./SaveButton";
import { FolderSelector } from "./FolderSelector";
import type { DigestSectionItem, Topic } from "@shared/schema";
import { format } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

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
  isRead?: boolean;
}

function extractFirstSentence(text: string): string {
  // Extract the first sentence (up to first period, question mark, or exclamation)
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : text.substring(0, 120) + '...';
}

export function ItemCard({ item, onTopicClick, isSaved = false, isRead = false }: ItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const publishedDate = format(new Date(item.publishedAt), "MMM d, yyyy");
  
  // Add UTM tracking to all outbound links
  const trackedUrl = addUTMParams(item.url);

  // Get first sentence from key insights or clinical takeaway
  const keySummary = item.keyInsights 
    ? extractFirstSentence(item.keyInsights)
    : item.clinicalTakeaway 
      ? extractFirstSentence(item.clinicalTakeaway)
      : "Click to read more about this item.";

  // Check if there's more content to show
  const hasExpandableContent = item.keyInsights || item.clinicalTakeaway;

  const toggleReadMutation = useMutation({
    mutationFn: async () => {
      if (isRead) {
        await apiRequest("DELETE", `/api/read-items/${item.itemId}`);
      } else {
        await apiRequest("POST", `/api/read-items/${item.itemId}`);
      }
    },
    onSuccess: () => {
      // Invalidate both digest and read status queries to update UI
      queryClient.invalidateQueries({ queryKey: ['/api/read-items/bulk'] });
      queryClient.invalidateQueries({ queryKey: ['/api/digest/latest'] });
    },
  });

  const handleToggleRead = () => {
    toggleReadMutation.mutate();
  };

  return (
    <Card 
      className="hover-elevate transition-all duration-200" 
      data-testid={`card-item-${item.itemId}`}
      style={{ opacity: isRead ? 0.6 : 1 }}
    >
      <CardHeader className="pb-4 space-y-3">
        {/* Top row: badges, actions, date */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <SourceBadge sourceType={item.sourceType} />
            {item.topics && item.topics.length > 0 && (
              <TopicTag
                topic={item.topics[0]}
                onClick={onTopicClick}
              />
            )}
            {item.topics && item.topics.length > 1 && (
              <span className="text-xs text-muted-foreground">
                +{item.topics.length - 1}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleRead}
              disabled={toggleReadMutation.isPending}
              data-testid={`button-read-${item.itemId}`}
              title={isRead ? "Mark as unread" : "Mark as read"}
            >
              {isRead ? (
                <BookOpenCheck className="h-4 w-4" />
              ) : (
                <BookOpen className="h-4 w-4" />
              )}
            </Button>
            <SaveButton itemId={item.itemId} isSaved={isSaved} />
            <FolderSelector itemId={item.itemId} />
            <span className="text-xs text-muted-foreground whitespace-nowrap" data-testid="text-date">
              {publishedDate}
            </span>
          </div>
        </div>

        {/* Title */}
        <a
          href={trackedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          data-testid="link-item-title"
        >
          <h3 className="text-base md:text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
            {item.title}
            <ExternalLink className="inline-block w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
        </a>

        {/* Author/Journal and Source Link */}
        <div className="flex items-center gap-2 flex-wrap">
          {(item.journalName || item.authorOrChannel) && (
            <p className="text-sm text-muted-foreground" data-testid="text-author">
              {item.journalName || item.authorOrChannel}
            </p>
          )}
          <a
            href={trackedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            data-testid="link-source"
          >
            <ExternalLink className="h-3 w-3" />
            View Source
          </a>
        </div>

        {/* One sentence summary */}
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-summary">
          {keySummary}
        </p>

        {/* Expand/Collapse button */}
        {hasExpandableContent && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2 text-xs"
            data-testid={`button-expand-${item.itemId}`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-3 w-3 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-3 w-3 mr-1" />
                Show Full Insights
              </>
            )}
          </Button>
        )}
      </CardHeader>

      {/* Expandable content */}
      {isExpanded && hasExpandableContent && (
        <CardContent className="pt-0 pb-4 space-y-4">
          {item.keyInsights && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Key Insights</h4>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line" data-testid="text-key-insights">
                {item.keyInsights}
              </div>
            </div>
          )}
          
          {item.clinicalTakeaway && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Clinical Takeaway</h4>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line" data-testid="text-clinical-takeaway">
                {item.clinicalTakeaway}
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
