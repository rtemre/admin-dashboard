import type { ReactNode } from 'react';

/**
 * Props for the PageHeader component
 */
interface PageHeaderProps {
  /** Main title of the page */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Optional right-side content (e.g., action buttons) */
  actions?: ReactNode;
  /** Optional CSS classes for customization */
  className?: string;
}

/**
 * Reusable page header component that provides consistent styling
 * and layout for page titles across the application
 * 
 * @param props - PageHeaderProps object
 * @returns JSX element representing the page header
 */
export function PageHeader({ 
  title, 
  subtitle, 
  actions, 
  className = '' 
}: PageHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-2">
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
} 