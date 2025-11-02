import { useState } from "react";
import { X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopicTag } from "./TopicTag";
import { topics, type Topic } from "@shared/schema";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface TopicFilterProps {
  selectedTopics: Topic[];
  onTopicToggle: (topic: Topic) => void;
  onClearFilters: () => void;
}

export function TopicFilter({ selectedTopics, onTopicToggle, onClearFilters }: TopicFilterProps) {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter(topic =>
    topic.toLowerCase().includes(search.toLowerCase())
  );

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Input
          type="search"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
          data-testid="input-topic-search"
        />
      </div>

      {selectedTopics.length > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            {selectedTopics.length} filter{selectedTopics.length !== 1 ? 's' : ''} active
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        </div>
      )}

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Topics</h3>
        <div className="flex flex-wrap gap-2">
          {filteredTopics.map((topic) => (
            <TopicTag
              key={topic}
              topic={topic}
              active={selectedTopics.includes(topic)}
              onClick={onTopicToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pr-6">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Filter by Topic</h2>
          </div>
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Sheet */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg" data-testid="button-filter-mobile">
              <Filter className="w-5 h-5 mr-2" />
              Filter
              {selectedTopics.length > 0 && (
                <span className="ml-2 bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {selectedTopics.length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filter by Topic</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
