import React from 'react';

/**
 * Props for the ErrorBoundary component
 */
interface ErrorBoundaryProps {
  /** Child components to render when no errors occur */
  children: React.ReactNode;
  /** Optional custom fallback component */
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  /** Optional error reporting function */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * State interface for the ErrorBoundary component
 */
interface ErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error that occurred, if any */
  error: Error | null;
}

/**
 * Error Boundary component that catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of the component tree that crashed.
 * 
 * This component is essential for production applications to prevent the entire app
 * from crashing due to unhandled errors in components.
 * 
 * @example
 * ```tsx
 * <ErrorBoundary onError={(error, info) => console.error('App error:', error, info)}>
 *   <App />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Static method that is called when an error occurs in a child component.
   * This method should return a new state object to update the component state.
   * 
   * @param error - The error that occurred
   * @returns New state object indicating an error has occurred
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  /**
   * Lifecycle method called after an error has been thrown in a child component.
   * This is the perfect place to log error information or send it to an error reporting service.
   * 
   * @param error - The error that occurred
   * @param errorInfo - Additional information about the error
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call the optional error reporting function
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service:
    // - Sentry
    // - LogRocket
    // - Bugsnag
    // - Custom error tracking service
  }

  /**
   * Reset the error state and attempt to re-render the child components
   */
  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  /**
   * Reload the entire application
   */
  handleReload = () => {
    window.location.reload();
  };

  /**
   * Navigate to the home page
   */
  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent 
            error={this.state.error!} 
            resetError={this.handleReset} 
          />
        );
      }

      // Default fallback UI
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-card text-card-foreground border border-border rounded-xl p-6 shadow-sm">
            <div className="text-center">
              {/* Error Icon */}
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>

              {/* Error Message */}
              <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
              <p className="text-sm text-muted-foreground mb-6">
                {this.state.error?.message || 'An unexpected error occurred.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={this.handleReset}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                >
                  Go Home
                </button>
                <button
                  onClick={this.handleReload}
                  className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                >
                  Reload Page
                </button>
              </div>

              {/* Additional Help */}
              <p className="text-xs text-muted-foreground mt-4">
                If the problem persists, please contact support.
              </p>
            </div>
          </div>
        </div>
      );
    }

    // If no error, render children normally
    return this.props.children;
  }
} 