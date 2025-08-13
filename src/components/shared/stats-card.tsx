import { memo } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Props for the StatsCard component
 */
interface StatsCardProps {
  /** Unique identifier for the stat */
  id: string | number;
  /** Title/name of the stat */
  title: string;
  /** Current value of the stat */
  value: string | number;
  /** Change amount from previous period */
  change: string;
  /** Type of change (positive, negative, or neutral) */
  changeType: 'positive' | 'negative' | 'neutral';
  /** Optional CSS classes for customization */
  className?: string;
}

/**
 * Reusable stats card component that displays a single metric
 * with change indicator and trend icon
 * 
 * @param props - StatsCardProps object
 * @returns JSX element representing the stats card
 */
export const StatsCard = memo(function StatsCard({
  id,
  title,
  value,
  change,
  changeType,
  className = '',
}: StatsCardProps) {
  // Determine trend icon and color based on change type
  const getTrendIcon = () => {
    switch (changeType) {
      case 'positive':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'negative':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card key={id} className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {getTrendIcon()}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">
          {value}
        </div>
        <p className={`text-xs flex items-center mt-1 ${getChangeColor()}`}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  );
}); 