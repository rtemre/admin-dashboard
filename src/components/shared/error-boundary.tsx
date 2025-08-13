import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // TODO: send to logging service if needed
    console.error("Unhandled UI error:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-card text-card-foreground border border-border rounded-xl p-6 shadow-sm">
            <h1 className="text-xl font-semibold">Something went wrong</h1>
            <p className="text-sm text-muted-foreground mt-2">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                onClick={this.handleReload}
              >
                Reload
              </button>
              <a
                href="/"
                className="px-4 py-2 rounded-md border border-border"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 