import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            ⚠️ Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            {error?.message || "An unexpected error occurred."}
          </p>
          <p className="text-sm text-muted-foreground">
            You might be offline. Please check your internet connection.
          </p>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </CardContent>
      </Card>
    </div>
  );
}
