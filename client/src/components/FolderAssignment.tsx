import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Folder, FolderPlus, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FolderType {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface FolderAssignmentProps {
  itemId: string;
  userTier: 'free' | 'premium' | 'pro';
  size?: 'sm' | 'default';
  variant?: 'ghost' | 'outline' | 'default';
}

export function FolderAssignment({ itemId, userTier, size = 'sm', variant = 'ghost' }: FolderAssignmentProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  // Only Pro users have folder access
  const hasAccess = userTier === 'pro';

  // Fetch all folders
  const { data: rawFolders } = useQuery({
    queryKey: ['/api/folders'],
    enabled: hasAccess && open,
  });
  const folders = (rawFolders as FolderType[] | undefined) || [];

  // Fetch item's current folders
  const { data: rawItemFolders, isLoading: itemFoldersLoading } = useQuery({
    queryKey: ['/api/items', itemId, 'folders'],
    enabled: hasAccess && open,
  });
  const itemFolders = (rawItemFolders as FolderType[] | undefined) || [];
  const itemFolderIds = new Set(itemFolders.map(f => f.id));

  // Add to folder mutation
  const addToFolderMutation = useMutation({
    mutationFn: async (folderId: string) => {
      const response = await fetch(`/api/folders/${folderId}/items/${itemId}`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to add item to folder');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/items', itemId, 'folders'] });
      toast({
        title: 'Added to folder',
        description: 'Item has been added to the folder',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to add item to folder',
        variant: 'destructive',
      });
    },
  });

  // Remove from folder mutation
  const removeFromFolderMutation = useMutation({
    mutationFn: async (folderId: string) => {
      const response = await fetch(`/api/folders/${folderId}/items/${itemId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from folder');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/items', itemId, 'folders'] });
      toast({
        title: 'Removed from folder',
        description: 'Item has been removed from the folder',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to remove item from folder',
        variant: 'destructive',
      });
    },
  });

  const handleToggleFolder = (folderId: string, isChecked: boolean) => {
    if (isChecked) {
      addToFolderMutation.mutate(folderId);
    } else {
      removeFromFolderMutation.mutate(folderId);
    }
  };

  if (!hasAccess) {
    return (
      <Button
        size={size}
        variant={variant}
        disabled
        data-testid={`button-folder-assignment-${itemId}-disabled`}
      >
        <Folder className="w-4 h-4 mr-2" />
        Folders (Pro)
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size={size}
          variant={variant}
          data-testid={`button-folder-assignment-${itemId}`}
        >
          {itemFolders.length > 0 ? (
            <>
              <Folder className="w-4 h-4 mr-2" />
              {itemFolders.length} {itemFolders.length === 1 ? 'Folder' : 'Folders'}
            </>
          ) : (
            <>
              <FolderPlus className="w-4 h-4 mr-2" />
              Add to Folder
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end" data-testid={`popover-folder-assignment-${itemId}`}>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Add to Folders</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Select folders to organize this item
            </p>
          </div>

          {itemFoldersLoading ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : folders.length === 0 ? (
            <div className="text-center py-6">
              <Folder className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" />
              <p className="text-sm text-muted-foreground mb-3">
                No folders yet
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setOpen(false);
                  window.location.href = '/folders';
                }}
                data-testid="button-create-folder-from-assignment"
              >
                <FolderPlus className="w-4 h-4 mr-2" />
                Create Folder
              </Button>
            </div>
          ) : (
            <ScrollArea className="max-h-64">
              <div className="space-y-2">
                {folders.map((folder) => {
                  const isChecked = itemFolderIds.has(folder.id);
                  const isLoading =
                    (addToFolderMutation.isPending || removeFromFolderMutation.isPending);

                  return (
                    <div
                      key={folder.id}
                      className="flex items-start gap-3 p-2 rounded-md hover-elevate transition-all"
                      data-testid={`folder-option-${folder.id}`}
                    >
                      <Checkbox
                        id={`folder-${folder.id}`}
                        checked={isChecked}
                        onCheckedChange={(checked) => handleToggleFolder(folder.id, checked as boolean)}
                        disabled={isLoading}
                        data-testid={`checkbox-folder-${folder.id}`}
                      />
                      <label
                        htmlFor={`folder-${folder.id}`}
                        className="flex-1 cursor-pointer"
                      >
                        <div className="font-medium text-sm">{folder.name}</div>
                        {folder.description && (
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {folder.description}
                          </div>
                        )}
                      </label>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
