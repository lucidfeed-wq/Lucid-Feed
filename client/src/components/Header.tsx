import { Link } from "wouter";
import { useState } from "react";
import { FileJson, FileText, Rss, LogIn, LogOut, Settings, Bookmark, MessageSquare, Library, Shield, Menu, Home, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExport = (type: 'json' | 'markdown' | 'rss') => {
    const urls = {
      json: '/export/weekly.json',
      markdown: '/export/weekly.md',
      rss: '/rss/weekly.xml',
    };
    window.open(urls[type], '_blank');
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6">
                  <Link 
                    href="/" 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                    data-testid="mobile-link-latest"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Home className="w-5 h-5" />
                    <span className="font-medium">Latest Digest</span>
                  </Link>
                  <Link 
                    href="/archive" 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                    data-testid="mobile-link-archive"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Archive className="w-5 h-5" />
                    <span className="font-medium">Archive</span>
                  </Link>
                  <Link 
                    href="/feeds" 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                    data-testid="mobile-link-feeds"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Library className="w-5 h-5" />
                    <span className="font-medium">Feeds</span>
                  </Link>
                  <Link 
                    href="/chat" 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                    data-testid="mobile-link-chat"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-medium">Chat</span>
                  </Link>
                  
                  {isAuthenticated && user && (
                    <>
                      <div className="border-t my-2" />
                      <Link 
                        href="/saved" 
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                        data-testid="mobile-link-saved"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Bookmark className="w-5 h-5" />
                        <span className="font-medium">Saved Items</span>
                      </Link>
                      <Link 
                        href="/preferences" 
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                        data-testid="mobile-link-preferences"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Topic Preferences</span>
                      </Link>
                      <Link 
                        href="/admin" 
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                        data-testid="mobile-link-admin"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Shield className="w-5 h-5" />
                        <span className="font-medium">Admin Panel</span>
                      </Link>
                      <a 
                        href="/api/logout" 
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2 text-destructive" 
                        data-testid="mobile-link-logout"
                      >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Log Out</span>
                      </a>
                    </>
                  )}
                  
                  {!isAuthenticated && !isLoading && (
                    <>
                      <div className="border-t my-2" />
                      <a 
                        href="/api/login" 
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover-elevate active-elevate-2" 
                        data-testid="mobile-link-login"
                      >
                        <LogIn className="w-5 h-5" />
                        <span className="font-medium">Log In</span>
                      </a>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-home">
              <span className="text-xl font-semibold tracking-tight">FM Intelligence</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-latest">
                Latest Digest
              </Link>
              <Link href="/archive" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-archive">
                Archive
              </Link>
              <Link href="/feeds" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md flex items-center gap-2" data-testid="link-feeds">
                <Library className="w-4 h-4" />
                Feeds
              </Link>
              <Link href="/chat" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md flex items-center gap-2" data-testid="link-chat">
                <MessageSquare className="w-4 h-4" />
                Chat
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" data-testid="button-export">
                  <FileJson className="w-4 h-4 mr-2 hidden sm:block" />
                  <span className="hidden sm:inline">Export</span>
                  <FileJson className="w-4 h-4 sm:hidden" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleExport('json')} data-testid="menu-export-json">
                  <FileJson className="w-4 h-4 mr-2" />
                  Download JSON
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('markdown')} data-testid="menu-export-markdown">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Markdown
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('rss')} data-testid="menu-export-rss">
                  <Rss className="w-4 h-4 mr-2" />
                  Subscribe to RSS
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {!isLoading && (
              isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full" data-testid="button-user-menu">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || 'User'} />
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="flex items-center gap-2 p-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || 'User'} />
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col space-y-1">
                        {(user.firstName || user.lastName) && (
                          <p className="text-sm font-medium" data-testid="text-user-name">
                            {user.firstName} {user.lastName}
                          </p>
                        )}
                        {user.email && (
                          <p className="text-xs text-muted-foreground" data-testid="text-user-email">
                            {user.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/saved" data-testid="link-saved">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Saved Items
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/preferences" data-testid="link-preferences">
                        <Settings className="w-4 h-4 mr-2" />
                        Topic Preferences
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/admin" data-testid="link-admin">
                        <Shield className="w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="/api/logout" data-testid="button-logout">
                        <LogOut className="w-4 h-4 mr-2" />
                        Log Out
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button size="sm" asChild data-testid="button-login">
                  <a href="/api/login">
                    <LogIn className="w-4 h-4 mr-2" />
                    Log In
                  </a>
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
