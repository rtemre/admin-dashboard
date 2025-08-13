import { memo } from 'react';

/**
 * Props for the LoadingSkeleton component
 */
interface LoadingSkeletonProps {
  /** Number of skeleton rows to display */
  rows?: number;
  /** Number of skeleton columns to display */
  columns?: number;
  /** Height of each skeleton row */
  rowHeight?: string;
  /** Width of each skeleton column */
  columnWidth?: string;
  /** Optional CSS classes for customization */
  className?: string;
}

/**
 * Reusable loading skeleton component that displays
 * animated placeholder content while data is loading
 * 
 * @param props - LoadingSkeletonProps object
 * @returns JSX element representing the loading skeleton
 */
export const LoadingSkeleton = memo(function LoadingSkeleton({
  rows = 3,
  columns = 4,
  rowHeight = 'h-4',
  columnWidth = 'w-full',
  className = '',
}: LoadingSkeletonProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-3">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={`
                bg-muted rounded animate-pulse
                ${rowHeight} ${columnWidth}
                ${colIndex === columns - 1 ? 'flex-1' : ''}
              `}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

/**
 * Card skeleton component for loading card content
 */
export const CardSkeleton = memo(function CardSkeleton({
  rows = 3,
  className = '',
}: Omit<LoadingSkeletonProps, 'columns' | 'columnWidth'>) {
  return (
    <div className={`bg-card border border-border rounded-xl p-6 ${className}`}>
      <div className="space-y-4">
        {/* Header skeleton */}
        <div className="space-y-2">
          <div className="h-6 bg-muted rounded w-1/3 animate-pulse" />
          <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
        </div>
        
        {/* Content skeleton */}
        <LoadingSkeleton rows={rows} columns={1} />
      </div>
    </div>
  );
});

/**
 * Table skeleton component for loading table content
 */
export const TableSkeleton = memo(function TableSkeleton({
  rows = 5,
  columns = 5,
  className = '',
}: LoadingSkeletonProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header skeleton */}
      <div className="flex gap-3 pb-2 border-b border-border">
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className="h-4 bg-muted rounded animate-pulse flex-1"
          />
        ))}
      </div>
      
      {/* Row skeletons */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-3 py-2">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-4 bg-muted rounded animate-pulse flex-1"
            />
          ))}
        </div>
      ))}
    </div>
  );
});

/**
 * Page skeleton component for loading entire page content
 */
export const PageSkeleton = memo(function PageSkeleton({
  className = '',
}: { className?: string }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Page header skeleton */}
      <div className="space-y-2">
        <div className="h-9 bg-muted rounded w-1/4 animate-pulse" />
        <div className="h-5 bg-muted rounded w-1/3 animate-pulse" />
      </div>
      
      {/* Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} rows={2} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardSkeleton rows={4} />
        <CardSkeleton rows={4} />
      </div>
    </div>
  );
}); 