import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";

interface SaveButtonProps {
  itemId: string;
  isSaved: boolean;
}

export function SaveButton({ itemId, isSaved: initialSaved }: SaveButtonProps) {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSaved, setIsSaved] = useState(initialSaved);

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (isSaved) {
        await apiRequest("DELETE", `/api/saved-items/${itemId}`);
        return false;
      } else {
        await apiRequest("POST", `/api/saved-items/${itemId}`);
        return true;
      }
    },
    onSuccess: (newSavedState) => {
      setIsSaved(newSavedState);
      queryClient.invalidateQueries({ queryKey: ["/api/saved-items"] });
      toast({
        title: newSavedState ? "Item saved" : "Item unsaved",
        description: newSavedState 
          ? "Added to your saved items" 
          : "Removed from your saved items",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update saved status. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleClick = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please log in to save items.",
      });
      return;
    }
    saveMutation.mutate();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      disabled={saveMutation.isPending}
      data-testid={`button-save-${itemId}`}
      className={isSaved ? "text-primary" : ""}
    >
      <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
    </Button>
  );
}
