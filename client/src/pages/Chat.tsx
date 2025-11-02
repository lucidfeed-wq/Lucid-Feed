import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Send, MessageSquare, ExternalLink, Loader2 } from 'lucide-react';
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
}

export default function Chat() {
  const [query, setQuery] = useState('');
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [sources, setSources] = useState<ChatSource[]>([]);

  // Fetch latest digest to get its ID for filtered search
  const { data: rawDigest } = useQuery({
    queryKey: ['/api/digest/latest'],
  });
  const digest = rawDigest as Digest | undefined;

  const chatMutation = useMutation({
    mutationFn: async ({ message, history }: { message: string; history: ChatMessage[] }): Promise<ChatResponse> => {
      const response = await apiRequest('POST', '/api/chat', {
        query: message,
        conversationHistory: history,
        digestId: digest?.id, // Filter search to current digest
      });
      return response as unknown as ChatResponse;
    },
    onSuccess: (data) => {
      setConversationHistory((prev) => [
        ...prev,
        { role: 'assistant', content: data.response },
      ]);
      setSources(data.sources);
    },
  });

  const handleSend = () => {
    if (!query.trim() || chatMutation.isPending || !digest) return;

    const userMessage = query.trim();
    const nextHistory: ChatMessage[] = [
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];
    setConversationHistory(nextHistory);
    setQuery('');
    chatMutation.mutate({ message: userMessage, history: nextHistory });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl font-semibold">Chat with Digest</h1>
              <p className="text-sm text-muted-foreground">
                Ask questions about research, protocols, and clinical insights from the latest digest
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full flex flex-col px-6 py-6">
          {/* Messages */}
          <ScrollArea className="flex-1 pr-4">
            {conversationHistory.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-md">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Start a conversation</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ask about metabolic health, gut microbiome, hormone optimization,
                    or any other functional medicine topic covered in the digest.
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

          {/* Sources Panel */}
          {sources.length > 0 && (
            <div className="mt-4 mb-4">
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

          {/* Input Area */}
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about research, protocols, or clinical insights..."
                className="resize-none min-h-[60px]"
                disabled={chatMutation.isPending}
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSend}
                disabled={!query.trim() || chatMutation.isPending || !digest}
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
            {chatMutation.isError && (
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
