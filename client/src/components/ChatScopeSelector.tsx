import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Database, BookMarked, Folder, Layers } from 'lucide-react';

export type ScopeType = 'current_digest' | 'all_digests' | 'saved_items' | 'folder';

export interface SearchScope {
  type: ScopeType;
  digestId?: string;
  folderId?: string;
  userId?: string;
}

interface ChatScopeSelectorProps {
  selectedScope: ScopeType;
  onScopeChange: (scope: ScopeType) => void;
  userTier: 'free' | 'premium' | 'pro';
  digestId?: string;
  className?: string;
}

const scopeOptions = [
  {
    value: 'current_digest' as ScopeType,
    label: 'Current Digest',
    description: 'Search in latest digest',
    icon: Database,
    tierRequired: 'free' as const,
  },
  {
    value: 'all_digests' as ScopeType,
    label: 'All Digests',
    description: 'Search across all digests',
    icon: Layers,
    tierRequired: 'premium' as const,
  },
  {
    value: 'saved_items' as ScopeType,
    label: 'Saved Items',
    description: 'Search in bookmarked items',
    icon: BookMarked,
    tierRequired: 'premium' as const,
  },
  {
    value: 'folder' as ScopeType,
    label: 'Folders',
    description: 'Search in custom folders',
    icon: Folder,
    tierRequired: 'pro' as const,
  },
];

const tierHierarchy = { free: 1, premium: 2, pro: 3 };

export function ChatScopeSelector({
  selectedScope,
  onScopeChange,
  userTier,
  digestId,
  className = '',
}: ChatScopeSelectorProps) {
  const userTierLevel = tierHierarchy[userTier];

  const isOptionAvailable = (requiredTier: 'free' | 'premium' | 'pro') => {
    return tierHierarchy[requiredTier] <= userTierLevel;
  };

  const selectedOption = scopeOptions.find(opt => opt.value === selectedScope);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground">Search in:</span>
      <Select 
        value={selectedScope} 
        onValueChange={(value) => onScopeChange(value as ScopeType)}
        data-testid="select-chat-scope"
      >
        <SelectTrigger className="w-48" data-testid="button-chat-scope-trigger">
          <SelectValue>
            {selectedOption && (
              <div className="flex items-center gap-2">
                <selectedOption.icon className="w-4 h-4" />
                <span>{selectedOption.label}</span>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {scopeOptions.map((option) => {
            const available = isOptionAvailable(option.tierRequired);
            const Icon = option.icon;
            
            return (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={!available}
                data-testid={`option-scope-${option.value}`}
              >
                <div className="flex items-center justify-between w-full gap-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <div className="flex flex-col">
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs text-muted-foreground">{option.description}</span>
                    </div>
                  </div>
                  {!available && (
                    <Badge variant="outline" className="text-xs">
                      {option.tierRequired === 'premium' ? 'Premium' : 'Pro'}
                    </Badge>
                  )}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
