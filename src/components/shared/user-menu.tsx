import { memo } from 'react';
import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/use-auth';

/**
 * Props for the UserMenu component
 */
interface UserMenuProps {
  /** Optional CSS classes for customization */
  className?: string;
}

/**
 * Reusable user menu component that displays user information
 * and provides account-related actions
 * 
 * @param props - UserMenuProps object
 * @returns JSX element representing the user menu
 */
export const UserMenu = memo(function UserMenu({ className = '' }: UserMenuProps) {
  const { user, logout } = useAuth();

  // Generate user initials from name
  const userInitials = user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('') || 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className={`flex items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-accent ${className}`}
          aria-label="Open user menu"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt={user?.name || 'User'} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}); 