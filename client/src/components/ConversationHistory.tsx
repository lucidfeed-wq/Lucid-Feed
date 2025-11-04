import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient, apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { History, Trash2, MessageSquare, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface Conversation {
  id: string;
  userId: string;
  title: string | null;
  scope: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ConversationHistoryProps {
  onLoadConversation: (conversationId: string) => void;
  userTier: 'free' | 'premium' | 'pro';
  className?: string;
}

export function ConversationHistory({
  onLoadConversation,
  userTier,
  className = '',
}: ConversationHistoryProps) {
  const { toast } = useToast();

  // Only Pro users have access to conversation history
  const hasAccess = userTier === 'pro';

  const { data: rawConversations, isLoading } = useQuery({
    queryKey: ['/api/chat/conversations'],
    enabled: hasAccess,
  });
  const conversations = (rawConversations as Conversation[] | undefined) || [];

  const deleteMutation = useMutation({
    mutationFn: async (conversationId: string) => {
      const response = await fetch(`/api/chat/conversations/${conversationId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to delete conversation');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/chat/conversations'] });
      toast({
        title: 'Conversation deleted',
        description: 'The conversation has been removed from your history.',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete conversation. Please try again.',
        variant: 'destructive',
      });
    },
  });

  if (!hasAccess) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <History className="w-5 h-5" />
            Conversation History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <History className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground mb-2">
              Conversation history is a Pro feature
            </p>
            <Badge variant="outline">Pro Tier Required</Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <History className="w-5 h-5" />
            Conversation History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-6">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <History className="w-5 h-5" />
          Conversation History
        </CardTitle>
      </CardHeader>
      <CardContent>
        {conversations.length === 0 ? (
          <div className="text-center py-6">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground">
              No saved conversations yet
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <Card
                  key={conversation.id}
                  className="hover-elevate cursor-pointer transition-all"
                  data-testid={`conversation-${conversation.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="flex-1 min-w-0"
                        onClick={() => onLoadConversation(conversation.id)}
                      >
                        <h4 className="font-medium text-sm truncate mb-1">
                          {conversation.title || 'Untitled conversation'}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>
                            {formatDistanceToNow(new Date(conversation.updatedAt), {
                              addSuffix: true,
                            })}
                          </span>
                          {conversation.scope && (
                            <>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {conversation.scope.replace('_', ' ')}
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMutation.mutate(conversation.id);
                        }}
                        disabled={deleteMutation.isPending}
                        data-testid={`button-delete-conversation-${conversation.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
