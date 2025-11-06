import { useAuth } from '@/hooks/useAuth';
import { FeedHealthBanner } from './FeedHealthBanner';

export function AuthenticatedFeedHealthBanner() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Don't render anything if auth is loading or user is not authenticated
  if (isLoading || !isAuthenticated) {
    return null;
  }

  return <FeedHealthBanner />;
}