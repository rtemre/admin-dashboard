import { memo } from "react";
import { BellIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BreadcrumbNav } from "@/components/shared/breadcrumb-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { UserMenu } from "@/components/shared/user-menu";

/**
 * Main application header component that provides navigation,
 * theme switching, and user account access
 *
 * @returns JSX element representing the application header
 */
export const Header = memo(function Header() {
  return (
    <header className="bg-background shadow-sm border-b border-border sticky top-0 z-50 ">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side: Sidebar trigger and breadcrumbs */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger
            variant="outline"
            className="scale-125 sm:scale-100"
          />
          <Separator orientation="vertical" className="h-6" />
          <BreadcrumbNav />
        </div>

        {/* Right side: Theme toggle, notifications, and user menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <BellIcon className="size-4" />
          <UserMenu />
        </div>
      </div>
    </header>
  );
});
