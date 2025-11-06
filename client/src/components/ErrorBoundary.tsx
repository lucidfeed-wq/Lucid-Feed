import { Component, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    // Log error to console for debugging in production
    console.error('React Error Boundary caught:', error);
    console.error('Stack trace:', error.stack);
    
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Log error details to console
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: 'Root'
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-4 text-center">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <div className="bg-destructive/10 p-4 rounded-lg text-left">
              <p className="text-sm font-mono text-destructive">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => window.location.reload()}
                variant="default"
              >
                Reload Page
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="ml-2"
              >
                Go Home
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              If this keeps happening, try logging out and back in.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}