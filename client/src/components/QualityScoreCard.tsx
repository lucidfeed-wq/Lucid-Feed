import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Info, FileText, TrendingUp, Shield, Clock, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ScoreBreakdown {
  contentQuality: number; // 0-40
  engagementSignals: number; // 0-20
  sourceCredibility: number; // 0-20
  recencyScore: number; // 0-10
  communityValidation: number; // 0-10
  totalScore: number; // 0-100
  explanation: string;
}

interface QualityScoreCardProps {
  scoreBreakdown: ScoreBreakdown;
  compact?: boolean;
  showTraditionalMetrics?: boolean;
  citationCount?: number;
  authorHIndex?: number;
}

export function QualityScoreCard({ 
  scoreBreakdown, 
  compact = false,
  showTraditionalMetrics = false,
  citationCount,
  authorHIndex,
}: QualityScoreCardProps) {
  // Ensure all score values are valid numbers
  const safeScore = {
    contentQuality: Number.isFinite(scoreBreakdown.contentQuality) ? scoreBreakdown.contentQuality : 0,
    engagementSignals: Number.isFinite(scoreBreakdown.engagementSignals) ? scoreBreakdown.engagementSignals : 0,
    sourceCredibility: Number.isFinite(scoreBreakdown.sourceCredibility) ? scoreBreakdown.sourceCredibility : 0,
    recencyScore: Number.isFinite(scoreBreakdown.recencyScore) ? scoreBreakdown.recencyScore : 0,
    communityValidation: Number.isFinite(scoreBreakdown.communityValidation) ? scoreBreakdown.communityValidation : 0,
    totalScore: Number.isFinite(scoreBreakdown.totalScore) ? scoreBreakdown.totalScore : 0,
    explanation: scoreBreakdown.explanation || 'Score calculation in progress',
  };

  const components = [
    {
      name: "Content Quality",
      score: safeScore.contentQuality,
      max: 40,
      icon: FileText,
      color: "text-blue-600 dark:text-blue-400",
      description: "AI-assessed evidence quality, clinical value, clarity, and practical applicability",
    },
    {
      name: "Engagement",
      score: safeScore.engagementSignals,
      max: 20,
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
      description: "Normalized engagement metrics: citations, upvotes, views, or likes depending on source",
    },
    {
      name: "Source Credibility",
      score: safeScore.sourceCredibility,
      max: 20,
      icon: Shield,
      color: "text-green-600 dark:text-green-400",
      description: "Source reputation: journal tier, channel size, or community quality",
    },
    {
      name: "Community",
      score: safeScore.communityValidation,
      max: 10,
      icon: Users,
      color: "text-orange-600 dark:text-orange-400",
      description: "Practitioner ratings and peer feedback from functional medicine community",
    },
    {
      name: "Recency",
      score: safeScore.recencyScore,
      max: 10,
      icon: Clock,
      color: "text-indigo-600 dark:text-indigo-400",
      description: "Publication freshness and scientific currency",
    },
  ];

  const getScoreColor = (score: number) => {
    const safeScore = Number.isFinite(score) ? score : 0;
    if (safeScore >= 75) return "text-green-600 dark:text-green-400";
    if (safeScore >= 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-orange-600 dark:text-orange-400";
  };

  const getScoreLabel = (score: number) => {
    const safeScore = Number.isFinite(score) ? score : 0;
    if (safeScore >= 75) return "High Quality";
    if (safeScore >= 50) return "Moderate Quality";
    return "Emerging Evidence";
  };

  if (compact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="cursor-help" data-testid="badge-quality-score">
              <div className="flex items-center gap-1">
                <span className={getScoreColor(safeScore.totalScore)}>
                  {Math.round(safeScore.totalScore)}/100
                </span>
                <Info className="h-3 w-3" />
              </div>
            </Badge>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm">
            <div className="space-y-2">
              <div className="font-medium">{safeScore.explanation}</div>
              <div className="text-xs space-y-1">
                {components.map((c) => (
                  <div key={c.name} className="flex justify-between">
                    <span>{c.name}:</span>
                    <span>{Math.round(c.score)}/{c.max}</span>
                  </div>
                ))}
              </div>
              {showTraditionalMetrics && (citationCount || authorHIndex) && (
                <div className="border-t pt-2 mt-2">
                  <div className="text-xs font-medium mb-1">Traditional Metrics:</div>
                  {citationCount !== undefined && (
                    <div className="text-xs">Citations: {citationCount}</div>
                  )}
                  {authorHIndex !== undefined && (
                    <div className="text-xs">Author H-Index: {authorHIndex}</div>
                  )}
                </div>
              )}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Card data-testid="card-quality-score">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Quality Score</span>
          <Badge variant="outline" className={getScoreColor(safeScore.totalScore)}>
            {Math.round(safeScore.totalScore)}/100 - {getScoreLabel(safeScore.totalScore)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {safeScore.explanation}
        </div>

        <div className="space-y-3">
          {components.map((component) => {
            const Icon = component.icon;
            const percentage = (component.score / component.max) * 100;

            return (
              <div key={component.name} className="space-y-1" data-testid={`score-${component.name.toLowerCase().replace(' ', '-')}`}>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${component.color}`} />
                    <span className="font-medium">{component.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-xs">{component.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="font-mono text-xs">
                    {Math.round(component.score)}/{component.max}
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>

        {showTraditionalMetrics && (citationCount || authorHIndex) && (
          <div className="pt-4 border-t">
            <div className="text-sm font-medium mb-2">Traditional Academic Metrics</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {citationCount !== undefined && (
                <div>
                  <div className="text-muted-foreground">Citations</div>
                  <div className="font-semibold">{citationCount}</div>
                </div>
              )}
              {authorHIndex !== undefined && (
                <div>
                  <div className="text-muted-foreground">Author H-Index</div>
                  <div className="font-semibold">{authorHIndex}</div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="pt-2 border-t">
          <div className="text-xs text-muted-foreground">
            <div className="font-medium mb-1">About Unified Quality Scoring</div>
            <div>
              Our transparent unified scoring works across ALL sources (journals, Reddit, YouTube, Substack).
              It combines AI-assessed content quality, normalized engagement, source credibility, community
              feedback, and recency to provide comparable quality scores. For journals, traditional metrics
              (citations, h-index) are shown separately. You're free to read any content regardless of
              score—this is a lighthouse, not a gatekeeper.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
