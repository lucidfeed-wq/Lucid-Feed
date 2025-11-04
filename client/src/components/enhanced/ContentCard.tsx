import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
  };
  date?: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function ContentCard({
  title,
  description,
  image,
  tags,
  author,
  date,
  stats,
  onClick,
  className,
  children,
}: ContentCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover-elevate active-elevate-2",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      data-testid="content-card"
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader className="space-y-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h3 className="text-xl font-semibold leading-tight text-foreground line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-4">
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        )}
        {children}
        {(author || date || stats) && (
          <div className="flex items-center justify-between pt-2 border-t">
            {author && (
              <div className="flex items-center gap-2">
                {author.avatar && (
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <span className="text-sm text-muted-foreground">
                  {author.name}
                </span>
              </div>
            )}
            {date && (
              <span className="text-xs text-muted-foreground">{date}</span>
            )}
          </div>
        )}
        {stats && stats.length > 0 && (
          <div className="flex gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
