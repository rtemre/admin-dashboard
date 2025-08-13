import { memo } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

/**
 * Props for the ThemeToggle component
 */
interface ThemeToggleProps {
  /** Optional CSS classes for customization */
  className?: string;
  /** Optional size for the toggle button */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable theme toggle component that provides consistent styling
 * and behavior for switching between light and dark themes
 * 
 * @param props - ThemeToggleProps object
 * @returns JSX element representing the theme toggle button
 */
export const ThemeToggle = memo(function ThemeToggle({ 
  className = '', 
  size = 'md' 
}: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  // Size variants for consistent sizing
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
  };

  const iconSizes = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
      className={`
        rounded-full transition-all duration-200 ease-in-out
        hover:bg-accent hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {isDark ? (
        <Sun className={`${iconSizes[size]} text-yellow-500`} />
      ) : (
        <Moon className={`${iconSizes[size]} text-foreground`} />
      )}
    </button>
  );
}); 