export interface FallbackProps {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
}

type ErrorBoundaryPropsBase = React.PropsWithChildren<{
  onError?: (error: Error, info: React.ErrorInfo) => void;
  onReset?: (details: { args: any[] }) => void;
  resetKeys?: any[];
}>;

export type ErrorBoundaryPropsWithFallback = ErrorBoundaryPropsBase & {
  fallback: React.ReactNode;
  fallbackComponent?: never;
};

export type ErrorBoundaryPropsWithComponent = ErrorBoundaryPropsBase & {
  fallback?: never;
  fallbackComponent: React.ComponentType<FallbackProps>;
};

export type ErrorBoundaryProps = ErrorBoundaryPropsWithFallback | ErrorBoundaryPropsWithComponent;
