import { memo, type ReactNode } from 'react';

/**
 * Props for the QuickActionButton component
 */
interface QuickActionButtonProps {
  /** Title of the action */
  title: string;
  /** Description/subtitle of the action */
  description: string;
  /** Optional icon to display */
  icon?: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional CSS classes for customization */
  className?: string;
}

/**
 * Reusable quick action button component that displays
 * an action with title, description, and optional icon
 * 
 * @param props - QuickActionButtonProps object
 * @returns JSX element representing the quick action button
 */
export const QuickActionButton = memo(function QuickActionButton({
  title,
  description,
  icon,
  onClick,
  className = '',
}: QuickActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full text-left p-3 rounded-lg border border-border 
        hover:bg-accent transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${className}
      `}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex-shrink-0 mt-0.5">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm text-foreground">
            {title}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {description}
          </div>
        </div>
      </div>
    </button>
  );
}); 