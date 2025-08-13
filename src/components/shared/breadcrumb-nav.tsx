import { useLocation } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

/**
 * Route name mapping for breadcrumb display
 */
const ROUTE_NAMES: Record<string, string> = {
  '/': 'Dashboard',
  '/users': 'Users',
  '/reports': 'Reports',
  '/settings': 'Settings',
} as const;

/**
 * Reusable breadcrumb navigation component that automatically
 * generates breadcrumbs based on the current route
 * 
 * @returns JSX element representing the breadcrumb navigation
 */
export function BreadcrumbNav() {
  const location = useLocation();
  const currentRoute = ROUTE_NAMES[location.pathname] || 'Dashboard';

  // Generate breadcrumb items based on current location
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...(location.pathname !== '/' 
      ? [{ label: currentRoute, href: location.pathname }] 
      : []
    ),
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
} 