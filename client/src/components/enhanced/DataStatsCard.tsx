interface DataStatsCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  subtitle: string;
  value: string | number;
  change?: string;
  isIncrease?: boolean;
  percent?: number;
}

export function DataStatsCard({
  icon,
  color,
  title,
  subtitle,
  value,
  change,
  isIncrease,
  percent,
}: DataStatsCardProps) {
  return (
    <div className="rounded-md bg-card p-6 shadow-sm border" data-testid={`stat-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-5 flex items-center gap-4">
        <div
          className="relative flex h-12 w-12 items-center justify-center rounded-md"
          style={{ color }}
        >
          {icon}
          <div
            className="absolute inset-0 h-full w-full opacity-10 rounded-md"
            style={{ backgroundColor: color }}
          />
        </div>
        <div>
          <h5 className="text-sm font-medium text-foreground">
            {title}
          </h5>
          <p className="text-xs text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
      <div>
        <div className="mb-4 flex items-end gap-2">
          <p className="text-2xl font-bold text-foreground">
            {value}
          </p>
          {change && (
            <p
              className={`inline-flex items-center text-sm font-medium ${
                isIncrease ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              }`}
            >
              <span className="mr-1">
                {isIncrease ? (
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.8925L0.908974 6.245L5.0443e-07 5.36125L5 0.499999L10 5.36125L9.09103 6.245L5.64284 2.8925L5.64284 10.5L4.35716 10.5L4.35716 2.8925Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 8.1075L9.09102 4.755L10 5.63875L5 10.5L-8.98488e-07 5.63875L0.908973 4.755L4.35716 8.1075L4.35716 0.500001L5.64284 0.500001L5.64284 8.1075Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </span>
              {change}
            </p>
          )}
        </div>
        {percent !== undefined && (
          <div className="relative h-2 w-full rounded-full bg-muted">
            <div
              className="absolute h-full rounded-full transition-all"
              style={{ backgroundColor: color, width: `${percent}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
