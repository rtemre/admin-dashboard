import { useState } from "react";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  isLoading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: true, // Mock authentication - always authenticated
    user: {
      id: "1",
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
    },
    isLoading: false,
  });

  const login = async (email: string) => {
    // Mock login function
    setAuthState((prev) => ({ ...prev, isLoading: true }));

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setAuthState({
      isAuthenticated: true,
      user: {
        id: "1",
        name: "Admin User",
        email: email,
        role: "Admin",
      },
      isLoading: false,
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      isLoading: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
}
