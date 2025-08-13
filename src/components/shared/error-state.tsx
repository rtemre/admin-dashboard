import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ title, message, onRetry }: ErrorStateProps) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-xl p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="size-5 text-destructive mt-0.5" />
        <div className="flex-1">
          <h2 className="text-base font-semibold">{title || "Something went wrong"}</h2>
          {message ? (
            <p className="text-sm text-muted-foreground mt-1">{message}</p>
          ) : null}
        </div>
        {onRetry ? (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-accent"
          >
            <RotateCcw className="size-4" />
            Retry
          </button>
        ) : null}
      </div>
    </div>
  );
} 