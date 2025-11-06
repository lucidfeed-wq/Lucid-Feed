import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FeedHealthBanner } from "@/components/FeedHealthBanner";
import Home from "@/pages/Home";
import Archive from "@/pages/Archive";
import DigestView from "@/pages/DigestView";
import Preferences from "@/pages/Preferences";
import SavedItems from "@/pages/SavedItems";
import Chat from "@/pages/Chat";
import ChatSettings from "@/pages/ChatSettings";
import Folders from "@/pages/Folders";
import FolderView from "@/pages/FolderView";
import FeedCatalog from "@/pages/FeedCatalog";
import FeedDetail from "@/pages/FeedDetail";
import Discover from "@/pages/Discover";
import Onboarding from "@/pages/Onboarding";
import Admin from "@/pages/Admin";
import Pricing from "@/pages/Pricing";
import SubscriptionSuccess from "@/pages/SubscriptionSuccess";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route path="/digest/:slug" component={DigestView} />
      <Route path="/preferences" component={Preferences} />
      <Route path="/saved" component={SavedItems} />
      <Route path="/chat" component={Chat} />
      <Route path="/chat/settings" component={ChatSettings} />
      <Route path="/folders" component={Folders} />
      <Route path="/folders/:folderId" component={FolderView} />
      <Route path="/feeds" component={FeedCatalog} />
      <Route path="/feeds/:id" component={FeedDetail} />
      <Route path="/discover" component={Discover} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/admin" component={Admin} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/subscription-success" component={SubscriptionSuccess} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <FeedHealthBanner />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
