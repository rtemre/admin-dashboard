import { api } from './api';

// Define dashboard data types
export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalReports: number;
  pendingReports: number;
  revenue: number;
  growth: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

export interface DashboardData {
  stats: DashboardStats;
  userGrowth: ChartData;
  revenueChart: ChartData;
  recentActivity: {
    id: string;
    type: 'user' | 'report' | 'system';
    message: string;
    timestamp: string;
  }[];
}

// Create dashboard API slice
export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query<DashboardData, void>({
      query: () => 'dashboard',
      providesTags: ['Dashboard'],
    }),
    
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => 'dashboard/stats',
      providesTags: ['Dashboard'],
    }),
    
    getChartData: builder.query<ChartData, { type: 'user-growth' | 'revenue' }>({
      query: ({ type }) => `dashboard/charts/${type}`,
      providesTags: ['Dashboard'],
    }),
  }),
});

// Export hooks
export const {
  useGetDashboardDataQuery,
  useGetDashboardStatsQuery,
  useGetChartDataQuery,
} = dashboardApi; 