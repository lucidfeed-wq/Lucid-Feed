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

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5" />
        <h3 className="text-sm font-medium">Filter by Topic</h3>
      </div>

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
            {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} selected
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        </div>
      )}

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
  );
}
