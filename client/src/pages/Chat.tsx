import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Send, MessageSquare, ExternalLink, Loader2, History, Settings as SettingsIcon, Save, Trash2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { UpgradePrompt } from '@/components/UpgradePrompt';
import { ChatScopeSelector, type ScopeType, type SearchScope } from '@/components/ChatScopeSelector';
import { ConversationHistory } from '@/components/ConversationHistory';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import type { Digest } from '@shared/schema';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatSource {
  itemId: string;
  title: string;
  url: string;
  similarity: number;
}

interface ChatResponse {
  response: string;
  sources: ChatSource[];
  mode: 'rag' | 'hybrid' | 'general';
}

export default function Chat() {
  const { toast } = useToast();
  const [query, setQuery] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [sources, setSources] = useState<ChatSource[]>([]);
  const [chatMode, setChatMode] = useState<'rag' | 'hybrid' | 'general' | null>(null);
  const [selectedScope, setSelectedScope] = useState<ScopeType>('current_digest');
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [historySheetOpen, setHistorySheetOpen] = useState(false);
  const [limitError, setLimitError] = useState<{ 
    tier?: string; 
    limit?: number | 'unlimited'; 
    currentUsage?: number 
  } | null>(null);

  // Fetch latest digest to get its ID for filtered search
  const { data: rawDigest } = useQuery({
    queryKey: ['/api/digest/latest'],
  });
  const digest = rawDigest as Digest | undefined;

  // Fetch user tier info
  const { data: rawUserInfo } = useQuery({
    queryKey: ['/api/user/tier-info'],
  });
  const userTierInfo = rawUserInfo as { tier: 'free' | 'premium' | 'pro' } | undefined;

  const chatMutation = useMutation({
    mutationFn: async ({ message, history }: { message: string; history: ChatMessage[] }): Promise<ChatResponse> => {
      // Build scope object based on selected scope type
      let scope: SearchScope | undefined;
      
      if (selectedScope === 'current_digest' && digest?.id) {
        scope = { type: 'current_digest', digestId: digest.id };
      } else if (selectedScope === 'all_digests') {
        scope = { type: 'all_digests' };
      } else if (selectedScope === 'saved_items') {
        scope = { type: 'saved_items' };
      } else if (selectedScope === 'folder' && selectedFolderId) {
        scope = { type: 'folder', folderId: selectedFolderId };
      }
      
      // Use fetch directly to handle tier limit errors
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          query: message,
          conversationHistory: history,
          scope,
        }),
      });
      
      // Check for tier limit errors
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.limitReached || errorData.upgradeRequired) {
          throw { 
            isTierLimit: true, 
            ...errorData 
          };
        }
        throw new Error(errorData.message || 'Failed to send message');
      }
      
      const data = await response.json();
      console.log('Chat API response:', data);
      return data as ChatResponse;
    },
    onSuccess: (data) => {
      console.log('Chat mutation success, data:', data);
      console.log('Assistant response:', data.response);
      console.log('Sources:', data.sources);
      console.log('Mode:', data.mode);
      setConversationHistory((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ]);
      setSources(data.sources || []);
      setChatMode(data.mode);
      setLimitError(null); // Clear any previous limit errors
    },
    onError: (error: any) => {
      if (error.isTierLimit) {
        setLimitError({
          tier: error.tier,
          limit: error.limit,
          currentUsage: error.currentUsage,
        });
      }
    },
  });

  // Load conversation
  const loadConversationMutation = useMutation({
    mutationFn: async (conversationId: string) => {
      const response = await fetch(`/api/chat/conversations/${conversationId}`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to load conversation');
      }
      return response.json();
    },
    onSuccess: (conversation: any) => {
      // Restore conversation messages
      const messages = conversation.messages || [];
      setConversationHistory(messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })));
      
      // Restore scope if available
      if (conversation.scope?.type) {
        setSelectedScope(conversation.scope.type);
        
        // Restore folder ID if scope is folder
        if (conversation.scope.type === 'folder' && conversation.scope.folderId) {
          setSelectedFolderId(conversation.scope.folderId);
        } else {
          setSelectedFolderId(null);
        }
      }
      
      setCurrentConversationId(conversation.id);
      setHistorySheetOpen(false);
      
      toast({
        title: 'Conversation loaded',
        description: conversation.title || 'Previous conversation restored',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to load conversation',
        variant: 'destructive',
      });
    },
  });

  // Save conversation
  const saveConversationMutation = useMutation({
    mutationFn: async () => {
      const title = conversationHistory.length > 0
        ? conversationHistory[0].content.slice(0, 50) + (conversationHistory[0].content.length > 50 ? '...' : '')
        : 'New conversation';
      
      const messages = conversationHistory.map(m => ({
        ...m,
        timestamp: new Date().toISOString(),
      }));
      
      const scope = {
        type: selectedScope,
        ...(selectedScope === 'current_digest' && digest?.id ? { digestId: digest.id } : {}),
        ...(selectedScope === 'folder' && selectedFolderId ? { folderId: selectedFolderId } : {}),
      };
      
      const response = await fetch('/api/chat/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title, messages, scope }),
      });
      if (!response.ok) {
        throw new Error('Failed to save conversation');
      }
      return response.json();
    },
    onSuccess: (data: any) => {
      setCurrentConversationId(data.id);
      queryClient.invalidateQueries({ queryKey: ['/api/chat/conversations'] });
      toast({
        title: 'Conversation saved',
        description: 'You can access this conversation from your history',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to save conversation',
        variant: 'destructive',
      });
    },
  });

  // Clear conversation
  const handleNewConversation = () => {
    setConversationHistory([]);
    setSources([]);
    setChatMode(null);
    setCurrentConversationId(null);
    setQuery('');
  };

  const handleSend = () => {
    if (!query.trim() || chatMutation.isPending || !digest) return;
    
    // Prevent sending if folder scope is selected but no folder chosen
    if (selectedScope === 'folder' && !selectedFolderId) {
      return;
    }

    const userMessage = query.trim();
    const nextHistory: ChatMessage[] = [
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];
    setConversationHistory(nextHistory);
    setQuery('');
    setCurrentConversationId(null); // Mark as unsaved when new messages added
    chatMutation.mutate({ message: userMessage, history: nextHistory });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Page Header */}
      <div className="border-b px-6 py-6 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-wrap items-start gap-4 flex-1">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
              <div className="flex flex-wrap items-center gap-3 flex-1">
                <MessageSquare className="w-10 h-10 text-primary" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">Chat with Digest</h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Ask questions about research, protocols, and clinical insights from the latest digest
                  </p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Clear Conversation */}
              {conversationHistory.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNewConversation}
                  data-testid="button-new-conversation"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              )}
              
              {/* Save Conversation (Pro only) */}
              {userTierInfo?.tier === 'pro' && conversationHistory.length > 0 && !currentConversationId && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => saveConversationMutation.mutate()}
                  disabled={saveConversationMutation.isPending}
                  data-testid="button-save-conversation"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {saveConversationMutation.isPending ? 'Saving...' : 'Save'}
                </Button>
              )}
              
              {/* Conversation History (Pro only) */}
              {userTierInfo?.tier === 'pro' && (
                <Sheet open={historySheetOpen} onOpenChange={setHistorySheetOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" data-testid="button-conversation-history">
                      <History className="w-4 h-4 mr-2" />
                      History
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-96 sm:max-w-96">
                    <SheetHeader>
                      <SheetTitle>Conversation History</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <ConversationHistory
                        onLoadConversation={(id) => loadConversationMutation.mutate(id)}
                        userTier={userTierInfo?.tier || 'free'}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              
              <Link href="/chat/settings">
                <Button variant="ghost" size="sm" data-testid="button-chat-settings">
                  <SettingsIcon className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="max-w-4xl mx-auto flex-1 flex flex-col px-6 py-6">
          {/* Scope Selector */}
          {userTierInfo && (
            <div className="mb-4">
              <ChatScopeSelector
                selectedScope={selectedScope}
                onScopeChange={setSelectedScope}
                selectedFolderId={selectedFolderId}
                onFolderChange={setSelectedFolderId}
                userTier={userTierInfo.tier}
                digestId={digest?.id}
              />
            </div>
          )}
          
          {/* Messages */}
          <ScrollArea className="flex-1 pr-4">
            {conversationHistory.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-md">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Start a conversation</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ask about metabolic health, gut microbiome, hormone optimization,
                    or any other health topic covered in the digest.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Example questions:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="cursor-pointer hover-elevate" onClick={() => setQuery("What's the latest research on GLP-1 agonists?")} data-testid="badge-example-glp1">
                        GLP-1 research
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover-elevate" onClick={() => setQuery("Summarize recent gut microbiome findings")} data-testid="badge-example-microbiome">
                        Gut microbiome
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover-elevate" onClick={() => setQuery("What protocols are discussed for metabolic health?")} data-testid="badge-example-metabolic">
                        Metabolic protocols
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 pb-4">
                {conversationHistory.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'user' ? (
                      <div className="bg-primary text-primary-foreground rounded-lg px-4 py-3 max-w-[80%]" data-testid={`message-user-${idx}`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    ) : (
                      <Card className="max-w-[85%]" data-testid={`message-assistant-${idx}`}>
                        <CardContent className="pt-6">
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
                
                {chatMutation.isPending && (
                  <div className="flex justify-start">
                    <Card className="max-w-[85%]">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Searching digest and generating response...</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          {/* Mode Indicator & Sources Panel */}
          {chatMode && (
            <div className="mt-4 mb-2">
              <Badge 
                variant={chatMode === 'rag' ? 'default' : chatMode === 'hybrid' ? 'secondary' : 'outline'}
                className="text-xs"
                data-testid="chat-mode-indicator"
              >
                {chatMode === 'rag' && '📚 RAG Mode: Answer from digest sources'}
                {chatMode === 'hybrid' && '🔀 Hybrid Mode: Digest sources + general knowledge'}
                {chatMode === 'general' && '💡 General Mode: No specific digest sources found'}
              </Badge>
            </div>
          )}
          
          {sources && sources.length > 0 && (
            <div className="mt-2 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {sources.map((source, idx) => (
                      <a
                        key={source.itemId}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 p-3 rounded-md hover-elevate border"
                        data-testid={`source-${idx}`}
                      >
                        <Badge variant="secondary" className="shrink-0 no-default-hover-elevate">
                          {idx + 1}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-2">{source.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Similarity: {(source.similarity * 100).toFixed(1)}%
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Upgrade Prompt */}
          {limitError && (
            <div className="mb-4">
              <UpgradePrompt
                title="Daily Chat Limit Reached"
                message="You've reached your daily chat message limit. Upgrade to Premium or Pro for more messages."
                currentTier={limitError.tier}
                currentUsage={limitError.currentUsage}
                limit={limitError.limit}
              />
            </div>
          )}

          {/* Input Area */}
          <div className="border-t pt-4">
            {/* Folder selection warning */}
            {selectedScope === 'folder' && !selectedFolderId && (
              <div className="mb-3 p-3 bg-muted/50 rounded-md border">
                <p className="text-sm text-muted-foreground">
                  Please select a folder from the dropdown above to search in folder scope.
                </p>
              </div>
            )}
            
            <div className="flex gap-2">
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about research, protocols, or clinical insights..."
                className="resize-none min-h-[60px]"
                disabled={chatMutation.isPending || !!limitError}
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSend}
                disabled={!query.trim() || chatMutation.isPending || !digest || !!limitError || (selectedScope === 'folder' && !selectedFolderId)}
                size="icon"
                className="shrink-0"
                data-testid="button-send-message"
              >
                {chatMutation.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
            {chatMutation.isError && !limitError && (
              <p className="text-sm text-destructive mt-2">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
