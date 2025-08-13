import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Theme types supported by the application
 */
export type Theme = 'light' | 'dark';

/**
 * Custom hook for managing application theme with localStorage persistence
 * 
 * @returns Object containing current theme, toggle function, and theme state
 */
export function useTheme() {
  // Initialize theme state from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }
    
    // Fallback to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Default to light theme
    return 'light';
  });

  // Memoized function to apply theme to DOM
  const applyTheme = useCallback((newTheme: Theme) => {
    const html = document.documentElement;
    
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // Persist to localStorage
    localStorage.setItem('theme', newTheme);
  }, []);

  // Memoized toggle function
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  }, [theme, applyTheme]);

  // Memoized theme state for performance
  const themeState = useMemo(() => ({
    isDark: theme === 'dark',
    isLight: theme === 'light',
    theme,
  }), [theme]);

  // Apply theme on mount and theme change
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a theme
      if (!localStorage.getItem('theme')) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    ...themeState,
    toggleTheme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      applyTheme(newTheme);
    },
  };
} 