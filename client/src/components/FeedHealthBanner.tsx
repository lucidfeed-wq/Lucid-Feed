import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { X, AlertCircle, AlertTriangle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { apiRequest } from '@/lib/queryClient';
import type { FeedNotification } from '@shared/schema';

export function FeedHealthBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const queryClient = useQueryClient();

  // Fetch unread notifications
  const { data: notifications = [], isLoading } = useQuery<FeedNotification[]>({
    queryKey: ['/api/notifications/unread'],
    refetchInterval: 60000, // Refresh every minute
  });

  // Mark notifications as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: async (notificationIds: string[]) => {
      return apiRequest('/api/notifications/mark-read', 'POST', { notificationIds });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/notifications/unread'] });
    },
  });

  // Filter out dismissed notifications
  const visibleNotifications = notifications.filter(n => !dismissedIds.has(n.id));

  // Auto-expand if there are error notifications
  useEffect(() => {
    const hasErrors = visibleNotifications.some(n => n.severity === 'error');
    if (hasErrors && !isExpanded) {
      setIsExpanded(true);
    }
  }, [visibleNotifications]);

  if (isLoading || visibleNotifications.length === 0) {
    return null;
  }

  const handleDismiss = (notificationId: string) => {
    setDismissedIds(prev => new Set([...prev, notificationId]));
    markAsReadMutation.mutate([notificationId]);
  };

  const handleDismissAll = () => {
    const ids = visibleNotifications.map(n => n.id);
    setDismissedIds(prev => new Set([...prev, ...ids]));
    markAsReadMutation.mutate(ids);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'error':
        return <AlertCircle className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'info':
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'destructive';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'default';
    }
  };

  // Group notifications by severity
  const errorCount = visibleNotifications.filter(n => n.severity === 'error').length;
  const warningCount = visibleNotifications.filter(n => n.severity === 'warning').length;
  const infoCount = visibleNotifications.filter(n => n.severity === 'info').length;

  const summaryMessage = () => {
    const parts = [];
    if (errorCount > 0) parts.push(`${errorCount} feed${errorCount > 1 ? 's' : ''} need attention`);
    if (warningCount > 0) parts.push(`${warningCount} minor issue${warningCount > 1 ? 's' : ''}`);
    if (infoCount > 0) parts.push(`${infoCount} update${infoCount > 1 ? 's' : ''}`);
    return parts.join(', ');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]" data-testid="feed-health-banner">
      <Alert 
        className={`border-2 shadow-lg ${errorCount > 0 ? 'border-destructive' : warningCount > 0 ? 'border-yellow-500' : 'border-blue-500'}`}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <AlertTitle className="flex items-center gap-2">
              {errorCount > 0 ? (
                <AlertCircle className="h-4 w-4 text-destructive" />
              ) : warningCount > 0 ? (
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              ) : (
                <Info className="h-4 w-4 text-blue-500" />
              )}
              Feed Health Update
            </AlertTitle>
            <AlertDescription className="mt-2">
              {summaryMessage()}
            </AlertDescription>
          </div>
          <div className="flex gap-1">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                data-testid="button-expand-notifications"
              >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismissAll}
              data-testid="button-dismiss-all"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleContent className="mt-4">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {visibleNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-2 p-3 rounded-md bg-muted/50"
                  data-testid={`notification-${notification.id}`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {getSeverityIcon(notification.severity)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-relaxed">{notification.message}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={getSeverityColor(notification.severity)} className="text-xs">
                        {notification.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(notification.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex-shrink-0 h-6 w-6"
                    onClick={() => handleDismiss(notification.id)}
                    data-testid={`button-dismiss-${notification.id}`}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  Don't worry! We're actively working on all these issues.
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs"
                  onClick={() => window.location.href = '/feeds'}
                  data-testid="button-manage-feeds"
                >
                  Manage Feeds
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Alert>
    </div>
  );
}