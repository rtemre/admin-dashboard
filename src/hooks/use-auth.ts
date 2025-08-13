import { useState, useCallback, useMemo } from "react";

/**
 * User interface representing an authenticated user
 */
interface AuthUser {
  /** Unique identifier for the user */
  id: string;
  /** Display name of the user */
  name: string;
  /** Email address of the user */
  email: string;
  /** Role/permission level of the user */
  role: string;
}

/**
 * Authentication state interface
 */
interface AuthState {
  /** Whether the user is currently authenticated */
  isAuthenticated: boolean;
  /** Current user information if authenticated */
  user: AuthUser | null;
  /** Whether authentication is in progress */
  isLoading: boolean;
  /** Any error that occurred during authentication */
  error: string | null;
}

/**
 * Authentication actions interface
 */
interface AuthActions {
  /** Login function that authenticates a user */
  login: (email: string, password?: string) => Promise<void>;
  /** Logout function that deauthenticates the current user */
  logout: () => void;
  /** Clear any authentication errors */
  clearError: () => void;
}

/**
 * Custom hook for managing authentication state and actions
 *
 * This hook provides a centralized way to manage user authentication
 * including login, logout, and state management. Currently implements
 * mock authentication for development purposes.
 *
 * @returns Object containing authentication state and actions
 *
 * @example
 * ```tsx
 * const { user, isAuthenticated, login, logout } = useAuth();
 *
 * if (isAuthenticated) {
 *   return <Dashboard user={user} onLogout={logout} />;
 * }
 *
 * return <LoginForm onSubmit={login} />;
 * ```
 */
export function useAuth(): AuthState & AuthActions {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: true, // Mock authentication - always authenticated in dev
    user: {
      id: "1",
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
    },
    isLoading: false,
    error: null,
  });

  /**
   * Login function that authenticates a user
   *
   * @param email - User's email address
   * @param password - User's password (optional in mock mode)
   * @returns Promise that resolves when login is complete
   */
  const login = useCallback(
    async (email: string, _password?: string): Promise<void> => {
      try {
        setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

        // Simulate API call delay for realistic UX
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock validation - in real app, this would be an API call
        if (!email || !email.includes("@")) {
          throw new Error("Invalid email address");
        }

        setAuthState({
          isAuthenticated: true,
          user: {
            id: "1",
            name: "Admin User",
            email: email,
            role: "Admin",
          },
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : "Login failed",
        }));
        throw error; // Re-throw to allow component-level error handling
      }
    },
    []
  );

  /**
   * Logout function that deauthenticates the current user
   */
  const logout = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      isLoading: false,
      error: null,
    });

    // In a real app, you might want to:
    // - Clear tokens from localStorage
    // - Call logout API endpoint
    // - Redirect to login page
    // - Clear any cached data
  }, []);

  /**
   * Clear any authentication errors
   */
  const clearError = useCallback(() => {
    setAuthState((prev) => ({ ...prev, error: null }));
  }, []);

  // Memoize the return value to prevent unnecessary re-renders
  const authValue = useMemo(
    () => ({
      ...authState,
      login,
      logout,
      clearError,
    }),
    [authState, login, logout, clearError]
  );

  return authValue;
}
