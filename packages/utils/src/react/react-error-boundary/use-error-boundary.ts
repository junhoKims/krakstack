import { useMemo, useState } from 'react';
import { useErrorBoundaryContext } from '@/react/react-error-boundary/contexts.js';

type UseErrorBoundaryState<TErr = any> = { error: TErr; hasError: true } | { error: null; hasError: false };

export const useErrorBoundary = <TErr = any>() => {
  const context = useErrorBoundaryContext();

  const [state, setState] = useState<UseErrorBoundaryState<TErr>>({
    error: null,
    hasError: false,
  });

  const memoized = useMemo(
    () => ({
      resetBoundary: () => {
        context.resetErrorBoundary();
        setState({ error: null, hasError: false });
      },
      showBoundary: (error: TErr) => {
        setState({ error, hasError: true });
      },
    }),
    [context.resetErrorBoundary]
  );

  if (state.hasError) {
    throw state.error;
  }

  return memoized;
};
