'use client';

import type { FallbackProps } from '@/react/react-error-boundary/types.js';
import { createRequiredContext } from '@/react/create-required-context.js';

export interface ErrorBoundaryContextType extends FallbackProps {
  didCatch: boolean;
}

const [useErrorBoundaryContext, ErrorBoundaryProvider] = createRequiredContext<ErrorBoundaryContextType>();
export { useErrorBoundaryContext, ErrorBoundaryProvider };
