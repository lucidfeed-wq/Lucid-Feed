import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface CommunityRatingProps {
  itemId: string;
  isAuthenticated: boolean;
}

interface RatingStats {
  averageRating: number;
  totalRatings: number;
}

interface UserRating {
  id: string;
  userId: string;
  itemId: string;
  rating: number;
  comment: string | null;
}

export function CommunityRating({ itemId, isAuthenticated }: CommunityRatingProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch rating stats (public)
  const { data: stats } = useQuery<RatingStats>({
    queryKey: ["/api/ratings", itemId, "stats"],
  });

  // Fetch user's existing rating (authenticated only)
  const { data: userRating } = useQuery<UserRating | null>({
    queryKey: ["/api/ratings", itemId, "user"],
    enabled: isAuthenticated,
  });

  // Sync form values when user rating loads
  useEffect(() => {
    if (userRating) {
      setSelectedRating(userRating.rating);
      setComment(userRating.comment || "");
    }
  }, [userRating]);

  const submitRating = useMutation({
    mutationFn: async ({ rating, comment }: { rating: number; comment: string }) => {
      return await apiRequest(`/api/ratings/${itemId}`, "POST", { rating, comment });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ratings", itemId] });
      toast({
        title: "Rating submitted",
        description: "Thank you for contributing to the community!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit rating",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = () => {
    if (selectedRating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }

    submitRating.mutate({ rating: selectedRating, comment });
  };

  const displayRating = hoveredRating || selectedRating;

  return (
    <Card data-testid="card-community-rating">
      <CardHeader>
        <CardTitle>Community Rating</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats && stats.totalRatings > 0 && (
          <div className="flex items-center gap-2" data-testid="stats-average-rating">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.round(stats.averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {stats.averageRating.toFixed(1)} ({stats.totalRatings}{" "}
              {stats.totalRatings === 1 ? "rating" : "ratings"})
            </span>
          </div>
        )}

        {!isAuthenticated ? (
          <div className="text-sm text-muted-foreground">
            Sign in to rate this content and help the community
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">
                {userRating ? "Your Rating" : "Rate This Content"}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 cursor-pointer transition-colors ${
                      star <= displayRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30 hover:text-yellow-200"
                    }`}
                    onClick={() => setSelectedRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    data-testid={`star-rating-${star}`}
                  />
                ))}
                {selectedRating > 0 && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    {selectedRating} star{selectedRating > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">
                Comment (Optional)
              </div>
              <Textarea
                placeholder="Share your thoughts on the quality or clinical relevance..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                data-testid="input-rating-comment"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={submitRating.isPending || selectedRating === 0}
              className="w-full"
              data-testid="button-submit-rating"
            >
              {submitRating.isPending
                ? "Submitting..."
                : userRating
                ? "Update Rating"
                : "Submit Rating"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
