import { useState } from "react";
import { Folder as FolderIcon, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Folder } from "@shared/schema";

interface FolderSelectorProps {
  itemId: string;
  onManageFolders?: () => void;
}

export function FolderSelector({ itemId, onManageFolders }: FolderSelectorProps) {
  const [open, setOpen] = useState(false);

  // Fetch all user folders
  const { data: allFolders = [] } = useQuery<Folder[]>({
    queryKey: ['/api/folders'],
  });

  // Fetch folders this item is in
  const { data: itemFolders = [] } = useQuery<Folder[]>({
    queryKey: ['/api/items', itemId, 'folders'],
  });

  const itemFolderIds = new Set(itemFolders.map(f => f.id));

  // Add item to folder mutation
  const addToFolderMutation = useMutation({
    mutationFn: async (folderId: string) => {
      await apiRequest("POST", `/api/folders/${folderId}/items/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/items', itemId, 'folders'] });
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
    },
  });

  // Remove item from folder mutation
  const removeFromFolderMutation = useMutation({
    mutationFn: async (folderId: string) => {
      await apiRequest("DELETE", `/api/folders/${folderId}/items/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/items', itemId, 'folders'] });
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
    },
  });

  const handleToggleFolder = (folderId: string) => {
    if (itemFolderIds.has(folderId)) {
      removeFromFolderMutation.mutate(folderId);
    } else {
      addToFolderMutation.mutate(folderId);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {/* Show badges for folders this item is in */}
      {itemFolders.slice(0, 2).map((folder) => (
        <Badge
          key={folder.id}
          variant="outline"
          className="text-xs gap-1 no-default-hover-elevate no-default-active-elevate"
          style={{ borderColor: folder.color || '#6366f1' }}
          data-testid={`badge-folder-${folder.id}`}
        >
          <FolderIcon className="h-3 w-3" style={{ color: folder.color || '#6366f1' }} />
          {folder.name}
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeFromFolderMutation.mutate(folder.id);
            }}
            className="hover:opacity-70"
            data-testid={`button-remove-folder-${folder.id}`}
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      
      {itemFolders.length > 2 && (
        <Badge variant="outline" className="text-xs no-default-hover-elevate no-default-active-elevate">
          +{itemFolders.length - 2}
        </Badge>
      )}

      {/* Folder selector dropdown */}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            data-testid={`button-folder-selector-${itemId}`}
            title="Add to folder"
          >
            <FolderIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {allFolders.length === 0 ? (
            <div className="p-2 text-sm text-muted-foreground text-center">
              No folders yet
            </div>
          ) : (
            allFolders.map((folder) => (
              <DropdownMenuItem
                key={folder.id}
                onClick={() => handleToggleFolder(folder.id)}
                className="gap-2 cursor-pointer"
                data-testid={`menuitem-folder-${folder.id}`}
              >
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: folder.color || '#6366f1' }}
                />
                <span className="flex-1">{folder.name}</span>
                {itemFolderIds.has(folder.id) && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </DropdownMenuItem>
            ))
          )}
          
          {onManageFolders && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={onManageFolders}
                className="gap-2 cursor-pointer"
                data-testid="menuitem-manage-folders"
              >
                <Plus className="h-4 w-4" />
                <span>Manage Folders</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
