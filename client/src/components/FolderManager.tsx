import { useState } from "react";
import { Folder as FolderIcon, Plus, Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Folder } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

const FOLDER_COLORS = [
  '#6366f1', // indigo
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#f43f5e', // rose
  '#f59e0b', // amber
  '#10b981', // emerald
  '#3b82f6', // blue
  '#06b6d4', // cyan
];

interface FolderManagerProps {
  children?: React.ReactNode;
}

export function FolderManager({ children }: FolderManagerProps) {
  const [open, setOpen] = useState(false);
  const [editingFolder, setEditingFolder] = useState<Folder | null>(null);
  const [folderName, setFolderName] = useState("");
  const [selectedColor, setSelectedColor] = useState(FOLDER_COLORS[0]);
  const { toast } = useToast();

  const { data: folders = [] } = useQuery<Folder[]>({
    queryKey: ['/api/folders'],
    enabled: open,
  });

  const createFolderMutation = useMutation({
    mutationFn: async (data: { name: string; color: string }) => {
      await apiRequest("POST", "/api/folders", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
      setFolderName("");
      setSelectedColor(FOLDER_COLORS[0]);
      toast({
        title: "Folder created",
        description: "Your folder has been created successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create folder. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateFolderMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: { name: string; color: string } }) => {
      await apiRequest("PATCH", `/api/folders/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
      setEditingFolder(null);
      setFolderName("");
      setSelectedColor(FOLDER_COLORS[0]);
      toast({
        title: "Folder updated",
        description: "Your folder has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update folder. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteFolderMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/folders/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
      toast({
        title: "Folder deleted",
        description: "Your folder has been deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete folder. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!folderName.trim()) return;

    if (editingFolder) {
      updateFolderMutation.mutate({
        id: editingFolder.id,
        data: { name: folderName.trim(), color: selectedColor },
      });
    } else {
      createFolderMutation.mutate({ name: folderName.trim(), color: selectedColor });
    }
  };

  const handleEdit = (folder: Folder) => {
    setEditingFolder(folder);
    setFolderName(folder.name);
    setSelectedColor(folder.color || FOLDER_COLORS[0]);
  };

  const handleCancelEdit = () => {
    setEditingFolder(null);
    setFolderName("");
    setSelectedColor(FOLDER_COLORS[0]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm" data-testid="button-manage-folders">
            <FolderIcon className="h-4 w-4 mr-2" />
            Manage Folders
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Folders</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Create/Edit Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="folder-name">
                {editingFolder ? "Edit Folder" : "New Folder"}
              </Label>
              <Input
                id="folder-name"
                placeholder="Folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                data-testid="input-folder-name"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Color</Label>
              <div className="flex gap-2">
                {FOLDER_COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-md transition-all ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-foreground' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    data-testid={`button-color-${color}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                size="sm"
                disabled={!folderName.trim() || createFolderMutation.isPending || updateFolderMutation.isPending}
                data-testid="button-save-folder"
              >
                <Plus className="h-4 w-4 mr-1" />
                {editingFolder ? "Update" : "Create"}
              </Button>
              {editingFolder && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleCancelEdit}
                  data-testid="button-cancel-edit"
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>

          {/* Existing Folders List */}
          {folders.length > 0 && (
            <div className="space-y-2">
              <Label>Your Folders</Label>
              <div className="space-y-1">
                {folders.map((folder) => (
                  <div
                    key={folder.id}
                    className="flex items-center justify-between p-2 rounded-md hover-elevate"
                    data-testid={`folder-item-${folder.id}`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-sm flex-shrink-0"
                        style={{ backgroundColor: folder.color || '#6366f1' }}
                      />
                      <span className="text-sm font-medium">{folder.name}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(folder)}
                        data-testid={`button-edit-folder-${folder.id}`}
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (confirm(`Delete folder "${folder.name}"? Items will not be deleted.`)) {
                            deleteFolderMutation.mutate(folder.id);
                          }
                        }}
                        data-testid={`button-delete-folder-${folder.id}`}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {folders.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              No folders yet. Create one to get started!
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
