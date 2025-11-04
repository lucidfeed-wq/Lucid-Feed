import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Folder, Plus, Edit2, Trash2, BookMarked, Loader2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { UpgradePrompt } from '@/components/UpgradePrompt';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';

interface FolderType {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default function Folders() {
  const { toast } = useToast();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<FolderType | null>(null);
  const [folderName, setFolderName] = useState('');
  const [folderDescription, setFolderDescription] = useState('');

  // Fetch user tier
  const { data: rawUserInfo } = useQuery({
    queryKey: ['/api/subscription'],
  });
  const userTierInfo = rawUserInfo as { tier: 'free' | 'premium' | 'pro' } | undefined;

  // Fetch folders - Pro feature
  const { data: rawFolders, isLoading } = useQuery({
    queryKey: ['/api/folders'],
    enabled: userTierInfo?.tier === 'pro',
  });
  const folders = (rawFolders as FolderType[] | undefined) || [];

  // Create folder mutation
  const createFolderMutation = useMutation({
    mutationFn: async (data: { name: string; description: string }) => {
      const response = await fetch('/api/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create folder');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
      setCreateDialogOpen(false);
      setFolderName('');
      setFolderDescription('');
      toast({
        title: 'Folder created',
        description: 'Your new folder has been created successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to create folder',
        variant: 'destructive',
      });
    },
  });

  // Update folder mutation
  const updateFolderMutation = useMutation({
    mutationFn: async (data: { id: string; name: string; description: string }) => {
      const response = await fetch(`/api/folders/${data.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name: data.name, description: data.description }),
      });
      if (!response.ok) {
        throw new Error('Failed to update folder');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
      setEditDialogOpen(false);
      setSelectedFolder(null);
      setFolderName('');
      setFolderDescription('');
      toast({
        title: 'Folder updated',
        description: 'Your folder has been updated successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update folder',
        variant: 'destructive',
      });
    },
  });

  // Delete folder mutation
  const deleteFolderMutation = useMutation({
    mutationFn: async (folderId: string) => {
      const response = await fetch(`/api/folders/${folderId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to delete folder');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/folders'] });
      setDeleteDialogOpen(false);
      setSelectedFolder(null);
      toast({
        title: 'Folder deleted',
        description: 'Your folder has been deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete folder',
        variant: 'destructive',
      });
    },
  });

  const handleCreateFolder = () => {
    if (!folderName.trim()) return;
    createFolderMutation.mutate({
      name: folderName.trim(),
      description: folderDescription.trim(),
    });
  };

  const handleEditFolder = () => {
    if (!selectedFolder || !folderName.trim()) return;
    updateFolderMutation.mutate({
      id: selectedFolder.id,
      name: folderName.trim(),
      description: folderDescription.trim(),
    });
  };

  const openEditDialog = (folder: FolderType) => {
    setSelectedFolder(folder);
    setFolderName(folder.name);
    setFolderDescription(folder.description || '');
    setEditDialogOpen(true);
  };

  const openDeleteDialog = (folder: FolderType) => {
    setSelectedFolder(folder);
    setDeleteDialogOpen(true);
  };

  // Check if user has Pro access
  if (userTierInfo && userTierInfo.tier !== 'pro') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <UpgradePrompt
            title="Folders - Pro Feature"
            message="Organize your saved items into custom folders with Pro tier. Upgrade to access this feature."
            currentTier={userTierInfo.tier}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="border-b px-6 py-6 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-wrap items-start gap-4 flex-1">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-3"></div>
              <div className="flex flex-wrap items-center gap-3 flex-1">
                <Folder className="w-10 h-10 text-primary" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">My Folders</h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Organize your saved items into custom collections
                  </p>
                </div>
              </div>
            </div>
            
            <Button
              onClick={() => {
                setFolderName('');
                setFolderDescription('');
                setCreateDialogOpen(true);
              }}
              data-testid="button-create-folder"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Folder
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : folders.length === 0 ? (
            <div className="text-center py-12">
              <Folder className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-medium mb-2">No folders yet</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Create your first folder to start organizing your saved items
              </p>
              <Button
                onClick={() => {
                  setFolderName('');
                  setFolderDescription('');
                  setCreateDialogOpen(true);
                }}
                data-testid="button-create-first-folder"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Folder
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {folders.map((folder) => (
                <Card
                  key={folder.id}
                  className="hover-elevate transition-all"
                  data-testid={`card-folder-${folder.id}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <Folder className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg truncate">{folder.name}</CardTitle>
                          {folder.description && (
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {folder.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => openEditDialog(folder)}
                          data-testid={`button-edit-folder-${folder.id}`}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => openDeleteDialog(folder)}
                          data-testid={`button-delete-folder-${folder.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/folders/${folder.id}`}>
                      <Button variant="outline" size="sm" className="w-full" data-testid={`button-view-folder-${folder.id}`}>
                        <BookMarked className="w-4 h-4 mr-2" />
                        View Items
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create Folder Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent data-testid="dialog-create-folder">
          <DialogHeader>
            <DialogTitle>Create New Folder</DialogTitle>
            <DialogDescription>
              Create a new folder to organize your saved items
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Folder Name</label>
              <Input
                placeholder="Enter folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && folderName.trim()) {
                    handleCreateFolder();
                  }
                }}
                data-testid="input-folder-name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description (optional)</label>
              <Input
                placeholder="Enter folder description"
                value={folderDescription}
                onChange={(e) => setFolderDescription(e.target.value)}
                data-testid="input-folder-description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setCreateDialogOpen(false)}
              data-testid="button-cancel-create"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateFolder}
              disabled={!folderName.trim() || createFolderMutation.isPending}
              data-testid="button-confirm-create"
            >
              {createFolderMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Folder'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Folder Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent data-testid="dialog-edit-folder">
          <DialogHeader>
            <DialogTitle>Edit Folder</DialogTitle>
            <DialogDescription>
              Update the folder name and description
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Folder Name</label>
              <Input
                placeholder="Enter folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && folderName.trim()) {
                    handleEditFolder();
                  }
                }}
                data-testid="input-edit-folder-name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description (optional)</label>
              <Input
                placeholder="Enter folder description"
                value={folderDescription}
                onChange={(e) => setFolderDescription(e.target.value)}
                data-testid="input-edit-folder-description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setEditDialogOpen(false)}
              data-testid="button-cancel-edit"
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditFolder}
              disabled={!folderName.trim() || updateFolderMutation.isPending}
              data-testid="button-confirm-edit"
            >
              {updateFolderMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Folder'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Folder Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent data-testid="dialog-delete-folder">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Folder?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{selectedFolder?.name}"? Items in this folder will not be deleted, only the folder itself.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="button-cancel-delete">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (selectedFolder) {
                  deleteFolderMutation.mutate(selectedFolder.id);
                }
              }}
              disabled={deleteFolderMutation.isPending}
              data-testid="button-confirm-delete"
            >
              {deleteFolderMutation.isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
