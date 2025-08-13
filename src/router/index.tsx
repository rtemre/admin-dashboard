import { createBrowserRouter } from "react-router";
import AppLayout from "@/layout";
import { Suspense, lazy } from "react";

const OverviewPage = lazy(() => import("@/pages/dashboard"));
const UsersPage = lazy(() => import("@/pages/user"));
const ReportsPage = lazy(() => import("@/pages/report"));

// Define the router with all routes
// This includes the login route and the main dashboard routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OverviewPage />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "reports",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ReportsPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <p>Coming Soon...</p>
          </div>
        ),
      },
    ],
  },
]);
