import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown } from "lucide-react";
import { useLocation } from "wouter";

interface UpgradePromptProps {
  title: string;
  message: string;
  currentTier?: string;
  currentUsage?: number;
  limit?: number | 'unlimited';
}

export function UpgradePrompt({ 
  title, 
  message, 
  currentTier, 
  currentUsage, 
  limit
}: UpgradePromptProps) {
  const [, setLocation] = useLocation();

  return (
    <Card className="p-6 border-primary/20" data-testid="card-upgrade-prompt">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Crown className="w-6 h-6 text-primary" data-testid="icon-crown" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold" data-testid="text-upgrade-title">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid="text-upgrade-message">
            {message}
          </p>
        </div>

        {currentUsage !== undefined && limit !== undefined && (
          <div className="w-full p-3 bg-muted rounded-md">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Current usage</span>
              <span className="font-medium" data-testid="text-usage-stats">
                {currentUsage} / {limit === 'unlimited' ? '∞' : limit}
              </span>
            </div>
            {limit !== 'unlimited' && (
              <div className="w-full bg-background rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${Math.min((currentUsage / limit) * 100, 100)}%` }}
                  data-testid="progress-usage"
                />
              </div>
            )}
          </div>
        )}

        {currentTier && (
          <p className="text-xs text-muted-foreground" data-testid="text-current-tier">
            Current plan: <span className="font-medium capitalize">{currentTier}</span>
          </p>
        )}

        <Button 
          onClick={() => setLocation('/pricing')}
          className="w-full"
          data-testid="button-upgrade"
        >
          <Crown className="w-4 h-4 mr-2" />
          Upgrade Now
        </Button>
      </div>
    </Card>
  );
}
