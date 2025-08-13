import { memo } from 'react';
import { UserPlus, FileText, Settings } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/page-header';
import { StatsCard } from '@/components/shared/stats-card';
import { ActivityItem } from '@/components/shared/activity-item';
import { QuickActionButton } from '@/components/shared/quick-action-button';
import { dashboardStats } from '@/constant/mockdata';

/**
 * Dashboard overview page that displays key metrics, recent activity,
 * and quick actions for administrators
 * 
 * @returns JSX element representing the dashboard overview page
 */
export const OverviewPage = memo(function OverviewPage() {
  // Mock activity data - in a real app, this would come from an API
  const recentActivities = [
    { type: 'user' as const, message: 'New user registered', timestamp: '2 hours ago' },
    { type: 'report' as const, message: 'Payment processed successfully', timestamp: '4 hours ago' },
    { type: 'system' as const, message: 'System backup completed', timestamp: '6 hours ago' },
  ];

  // Quick action handlers
  const handleAddUser = () => {
    // TODO: Implement add user functionality
    console.log('Add user clicked');
  };

  const handleGenerateReport = () => {
    // TODO: Implement generate report functionality
    console.log('Generate report clicked');
  };

  const handleSystemSettings = () => {
    // TODO: Implement system settings functionality
    console.log('System settings clicked');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        subtitle="Welcome to your admin dashboard overview"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatsCard
            key={stat.id}
            id={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
          />
        ))}
      </div>

      {/* Additional Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates from your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <ActivityItem
                  key={index}
                  type={activity.type}
                  message={activity.message}
                  timestamp={activity.timestamp}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <QuickActionButton
                title="Add New User"
                description="Create a new user account"
                icon={<UserPlus className="h-4 w-4" />}
                onClick={handleAddUser}
              />
              <QuickActionButton
                title="Generate Report"
                description="Create monthly analytics report"
                icon={<FileText className="h-4 w-4" />}
                onClick={handleGenerateReport}
              />
              <QuickActionButton
                title="System Settings"
                description="Configure application settings"
                icon={<Settings className="h-4 w-4" />}
                onClick={handleSystemSettings}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default OverviewPage;
