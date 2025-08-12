import { createBrowserRouter } from "react-router";
import AppLayout from "@/layout";
import { OverviewPage } from "@/pages/dashboard";
import { UsersPage } from "@/pages/user";
import { ReportsPage } from "@/pages/report";

// Define the router with all routes
// This includes the login route and the main dashboard routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
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
