import { Link } from "wouter";
import { FileJson, FileText, Rss, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const handleExport = (type: 'json' | 'markdown' | 'rss') => {
    const urls = {
      json: '/export/weekly.json',
      markdown: '/export/weekly.md',
      rss: '/rss/weekly.xml',
    };
    window.open(urls[type], '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2" data-testid="link-home">
                <span className="text-xl font-semibold tracking-tight">FM Intelligence</span>
              </a>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/">
                <a className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-latest">
                  Latest Digest
                </a>
              </Link>
              <Link href="/archive">
                <a className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-archive">
                  Archive
                </a>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" data-testid="button-export">
                  <FileJson className="w-4 h-4 mr-2" />
                  Export
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
          </div>
        </div>
      </div>
    </header>
  );
}
