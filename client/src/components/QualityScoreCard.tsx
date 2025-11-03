import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Info, TrendingUp, User, FileCheck, Users, Clock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ScoreBreakdown {
  citationScore: number;
  authorCredibility: number;
  methodologyQuality: number;
  communityVerification: number;
  recencyScore: number;
  totalScore: number;
  explanation: string;
}

interface QualityScoreCardProps {
  scoreBreakdown: ScoreBreakdown;
  compact?: boolean;
}

export function QualityScoreCard({ scoreBreakdown, compact = false }: QualityScoreCardProps) {
  const components = [
    {
      name: "Citations",
      score: scoreBreakdown.citationScore,
      max: 30,
      icon: TrendingUp,
      color: "text-blue-600 dark:text-blue-400",
      description: "Citation count, influential citations, and citation velocity",
    },
    {
      name: "Author",
      score: scoreBreakdown.authorCredibility,
      max: 25,
      icon: User,
      color: "text-purple-600 dark:text-purple-400",
      description: "Author h-index and publication track record",
    },
    {
      name: "Methodology",
      score: scoreBreakdown.methodologyQuality,
      max: 25,
      icon: FileCheck,
      color: "text-green-600 dark:text-green-400",
      description: "Study design quality and bias assessment",
    },
    {
      name: "Community",
      score: scoreBreakdown.communityVerification,
      max: 10,
      icon: Users,
      color: "text-orange-600 dark:text-orange-400",
      description: "Practitioner ratings and peer feedback",
    },
    {
      name: "Recency",
      score: scoreBreakdown.recencyScore,
      max: 10,
      icon: Clock,
      color: "text-indigo-600 dark:text-indigo-400",
      description: "Publication freshness and scientific currency",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-600 dark:text-green-400";
    if (score >= 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-orange-600 dark:text-orange-400";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 75) return "High Quality";
    if (score >= 50) return "Moderate Quality";
    return "Emerging Evidence";
  };

  if (compact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="cursor-help" data-testid="badge-quality-score">
              <div className="flex items-center gap-1">
                <span className={getScoreColor(scoreBreakdown.totalScore)}>
                  {Math.round(scoreBreakdown.totalScore)}/100
                </span>
                <Info className="h-3 w-3" />
              </div>
            </Badge>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm">
            <div className="space-y-2">
              <div className="font-medium">{scoreBreakdown.explanation}</div>
              <div className="text-xs space-y-1">
                {components.map((c) => (
                  <div key={c.name} className="flex justify-between">
                    <span>{c.name}:</span>
                    <span>{Math.round(c.score)}/{c.max}</span>
                  </div>
                ))}
              </div>
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
          <Badge variant="outline" className={getScoreColor(scoreBreakdown.totalScore)}>
            {Math.round(scoreBreakdown.totalScore)}/100 - {getScoreLabel(scoreBreakdown.totalScore)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {scoreBreakdown.explanation}
        </div>

        <div className="space-y-3">
          {components.map((component) => {
            const Icon = component.icon;
            const percentage = (component.score / component.max) * 100;

            return (
              <div key={component.name} className="space-y-1" data-testid={`score-${component.name.toLowerCase()}`}>
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

        <div className="pt-2 border-t">
          <div className="text-xs text-muted-foreground">
            <div className="font-medium mb-1">About Transparency Scoring</div>
            <div>
              Our multi-signal quality assessment combines citations, author credibility,
              methodology, community feedback, and recency to provide a transparent,
              unbiased view of scientific quality. You're free to read any content
              regardless of score—this is simply a lighthouse to help navigate.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
