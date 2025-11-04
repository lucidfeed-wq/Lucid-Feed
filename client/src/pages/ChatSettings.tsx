import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient, apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Settings, Shield, Brain, Loader2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

interface ChatSettings {
  id: number;
  userId: string;
  enableHistoryTracking: boolean;
  enableLearning: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function ChatSettings() {
  const { toast } = useToast();

  // Fetch user tier info
  const { data: rawUserInfo } = useQuery({
    queryKey: ['/api/user/tier-info'],
  });
  const userTierInfo = rawUserInfo as { tier: 'free' | 'premium' | 'pro' } | undefined;

  // Fetch chat settings
  const { data: rawSettings, isLoading } = useQuery({
    queryKey: ['/api/chat/settings'],
  });
  const settings = rawSettings as ChatSettings | undefined;

  const updateMutation = useMutation({
    mutationFn: async (updates: { enableHistoryTracking?: boolean; enableLearning?: boolean }) => {
      const response = await fetch('/api/chat/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(updates),
      });
      if (!response.ok) {
        throw new Error('Failed to update settings');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/chat/settings'] });
      toast({
        title: 'Settings updated',
        description: 'Your chat privacy preferences have been saved.',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update settings. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleToggleHistory = (enabled: boolean) => {
    updateMutation.mutate({ enableHistoryTracking: enabled });
  };

  const handleToggleLearning = (enabled: boolean) => {
    updateMutation.mutate({ enableLearning: enabled });
  };

  const isProTier = userTierInfo?.tier === 'pro';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="border-b px-6 py-6 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-start gap-4">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <Settings className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">Chat Settings</h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Manage your chat privacy and conversation preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Privacy Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacy Settings
              </CardTitle>
              <CardDescription>
                Control how your conversations are stored and used
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* History Tracking */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">Conversation History</h3>
                    {!isProTier && (
                      <Badge variant="outline" className="text-xs">Pro Only</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Save your conversations to review and continue them later.
                    {!isProTier && ' Upgrade to Pro to enable this feature.'}
                  </p>
                </div>
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                ) : (
                  <Switch
                    checked={settings?.enableHistoryTracking || false}
                    onCheckedChange={handleToggleHistory}
                    disabled={!isProTier || updateMutation.isPending}
                    data-testid="switch-history-tracking"
                  />
                )}
              </div>

              <Separator />

              {/* Learning from conversations */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Personalized Learning
                    </h3>
                    {!isProTier && (
                      <Badge variant="outline" className="text-xs">Pro Only</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Allow the chat assistant to learn from your conversation patterns to provide more personalized responses.
                    {!isProTier && ' Upgrade to Pro to enable this feature.'}
                  </p>
                </div>
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                ) : (
                  <Switch
                    checked={settings?.enableLearning || false}
                    onCheckedChange={handleToggleLearning}
                    disabled={!isProTier || updateMutation.isPending}
                    data-testid="switch-learning"
                  />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">About Your Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Session-only mode (default):</strong> Your conversations are only stored for the current session and are not saved permanently.
              </p>
              <p>
                <strong>History tracking (Pro):</strong> When enabled, your conversations are saved to your account so you can review and continue them later.
              </p>
              <p>
                <strong>Personalized learning (Pro):</strong> When enabled, the chat assistant analyzes your conversation patterns to provide more relevant and personalized responses over time.
              </p>
              <p className="text-xs pt-2 border-t">
                Your privacy is important to us. All data is encrypted and stored securely. You can delete your conversation history at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
