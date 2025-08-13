import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { StoreProvider } from "./store/StoreProvider";
import "./index.css";
import { ErrorBoundary } from "@/components/shared/error-boundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>
);
