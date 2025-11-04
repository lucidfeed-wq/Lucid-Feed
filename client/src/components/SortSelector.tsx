import { ArrowUpDown, TrendingUp, Clock, Star, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type SortOption = 
  | 'quality-desc'
  | 'quality-asc'
  | 'recency-desc'
  | 'recency-asc'
  | 'engagement-desc'
  | 'title-asc'
  | 'title-desc';

interface SortSelectorProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions: Array<{ value: SortOption; label: string; icon: any }> = [
  { value: 'quality-desc', label: 'Quality: High to Low', icon: TrendingUp },
  { value: 'quality-asc', label: 'Quality: Low to High', icon: TrendingUp },
  { value: 'recency-desc', label: 'Newest First', icon: Clock },
  { value: 'recency-asc', label: 'Oldest First', icon: Clock },
  { value: 'engagement-desc', label: 'Most Engagement', icon: Star },
  { value: 'title-asc', label: 'Title: A to Z', icon: Hash },
  { value: 'title-desc', label: 'Title: Z to A', icon: Hash },
];

export function SortSelector({ currentSort, onSortChange }: SortSelectorProps) {
  const currentOption = sortOptions.find(opt => opt.value === currentSort);
  const Icon = currentOption?.icon || ArrowUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" data-testid="button-sort-selector">
          <Icon className="w-4 h-4 mr-2" />
          {currentOption?.label || 'Sort By'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => onSortChange('quality-desc')}
          className={currentSort === 'quality-desc' ? 'bg-accent' : ''}
          data-testid="sort-quality-desc"
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Quality: High to Low
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSortChange('quality-asc')}
          className={currentSort === 'quality-asc' ? 'bg-accent' : ''}
          data-testid="sort-quality-asc"
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Quality: Low to High
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => onSortChange('recency-desc')}
          className={currentSort === 'recency-desc' ? 'bg-accent' : ''}
          data-testid="sort-recency-desc"
        >
          <Clock className="w-4 h-4 mr-2" />
          Newest First
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSortChange('recency-asc')}
          className={currentSort === 'recency-asc' ? 'bg-accent' : ''}
          data-testid="sort-recency-asc"
        >
          <Clock className="w-4 h-4 mr-2" />
          Oldest First
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => onSortChange('engagement-desc')}
          className={currentSort === 'engagement-desc' ? 'bg-accent' : ''}
          data-testid="sort-engagement-desc"
        >
          <Star className="w-4 h-4 mr-2" />
          Most Engagement
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => onSortChange('title-asc')}
          className={currentSort === 'title-asc' ? 'bg-accent' : ''}
          data-testid="sort-title-asc"
        >
          <Hash className="w-4 h-4 mr-2" />
          Title: A to Z
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onSortChange('title-desc')}
          className={currentSort === 'title-desc' ? 'bg-accent' : ''}
          data-testid="sort-title-desc"
        >
          <Hash className="w-4 h-4 mr-2" />
          Title: Z to A
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
