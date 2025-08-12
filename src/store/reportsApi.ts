import { api } from './api';

// Define Report types
export interface Report {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  category: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateReportRequest {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

export interface UpdateReportRequest {
  id: string;
  title?: string;
  description?: string;
  status?: 'pending' | 'approved' | 'rejected';
  priority?: 'low' | 'medium' | 'high';
  category?: string;
  assignedTo?: string;
}

// Create reports API slice
export const reportsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReports: builder.query<Report[], { status?: string; priority?: string }>({
      query: (params) => ({
        url: 'reports',
        params,
      }),
      providesTags: ['Report'],
    }),
    
    getReportById: builder.query<Report, string>({
      query: (id) => `reports/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Report', id }],
    }),
    
    createReport: builder.mutation<Report, CreateReportRequest>({
      query: (report) => ({
        url: 'reports',
        method: 'POST',
        body: report,
      }),
      invalidatesTags: ['Report'],
    }),
    
    updateReport: builder.mutation<Report, UpdateReportRequest>({
      query: ({ id, ...patch }) => ({
        url: `reports/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Report', id }],
    }),
    
    deleteReport: builder.mutation<void, string>({
      query: (id) => ({
        url: `reports/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Report'],
    }),
    
    getReportStats: builder.query<{
      total: number;
      pending: number;
      approved: number;
      rejected: number;
    }, void>({
      query: () => 'reports/stats',
      providesTags: ['Report'],
    }),
  }),
});

// Export hooks
export const {
  useGetReportsQuery,
  useGetReportByIdQuery,
  useCreateReportMutation,
  useUpdateReportMutation,
  useDeleteReportMutation,
  useGetReportStatsQuery,
} = reportsApi; 