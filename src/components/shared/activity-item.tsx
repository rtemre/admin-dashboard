import { memo } from 'react';

/**
 * Props for the ActivityItem component
 */
interface ActivityItemProps {
  /** Type of activity (user, report, system) */
  type: 'user' | 'report' | 'system';
  /** Activity message/description */
  message: string;
  /** Time when the activity occurred */
  timestamp: string;
  /** Optional CSS classes for customization */
  className?: string;
}

/**
 * Reusable activity item component that displays a single activity
 * with appropriate styling and icon based on type
 * 
 * @param props - ActivityItemProps object
 * @returns JSX element representing the activity item
 */
export const ActivityItem = memo(function ActivityItem({
  type,
  message,
  timestamp,
  className = '',
}: ActivityItemProps) {
  // Get appropriate color and icon based on activity type
  const getActivityStyle = () => {
    switch (type) {
      case 'user':
        return 'bg-primary';
      case 'report':
        return 'bg-green-500';
      case 'system':
        return 'bg-blue-500';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`w-2 h-2 rounded-full ${getActivityStyle()}`} />
      <p className="text-sm text-muted-foreground flex-1">
        {message}
      </p>
      <span className="text-xs text-muted-foreground ml-auto">
        {timestamp}
      </span>
    </div>
  );
}); 