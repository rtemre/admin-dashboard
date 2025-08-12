import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base query with fetch
const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://fakerapi.it/api/v2/"
      : "https://fakerapi.it/api/v2/",
  prepareHeaders: (headers) => {
    // use this as second argument - { getState: _getState }
    // You can add auth headers here if needed
    // const token = (getState() as RootState).auth.token;
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// Create the API slice
export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Report", "Dashboard"],
  endpoints: () => ({}),
});

// Export hooks for use in components
export const { usePrefetch } = api;
