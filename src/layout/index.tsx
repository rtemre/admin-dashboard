import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router";
import { Header } from "@/components/app-header";

export default function AppLayout() {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-visible">
        {/* Header */}
        <Header />
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          {/* {children} */}
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
