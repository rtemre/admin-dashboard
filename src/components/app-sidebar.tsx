import { Link } from "react-router";

import {
  Command,
  LayoutDashboard,
  NotepadText,
  Settings,
  //   UserCircle,
  Users,
} from "lucide-react";

// import logoSvg from "@/assets/logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: NotepadText,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Command className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Admin Dashboard</span>
          </div>
        </SidebarMenuButton>
        {/* <LayoutDashboard className="h-6 w-6 mr-2" /> 
        <h2 className="text-lg font-semibold">Admin Dashboard</h2> */}
        {/* <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2 overflow-hidden">
            <img src={logoSvg} alt="Admin Dashboard" className="h-8" />
            <h1 className="text-lg font-semibold whitespace-nowrap">
              <span>Admin Dashboard</span>
            </h1>
          </div>
          <SidebarTrigger className="p-2 rounded-lg hover:bg-gray-100 transition-colors" />
        </div> */}
        {/* <div className="flex justify-end">
          <SidebarTrigger />
        </div> */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
