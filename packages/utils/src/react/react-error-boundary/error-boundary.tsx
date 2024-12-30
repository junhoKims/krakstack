'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Component, createElement } from 'react';
import type { ErrorBoundaryProps } from '@/react/react-error-boundary/types.js';
import { ErrorBoundaryProvider } from '@/react/react-error-boundary/contexts.js';

type ErrorBoundaryState =
  | {
      didCatch: true;
      error: any;
    }
  | {
      didCatch: false;
      error: null;
    };

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null,
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }

  resetErrorBoundary(...args: any[]) {
    if (this.state.error !== null) {
      this.props.onReset?.({ args });
      this.setState(initialState);
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { didCatch: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
  }

  render() {
    const { children, fallbackComponent, fallback } = this.props;
    const { didCatch, error } = this.state;
    let childToRender = children;

    if (didCatch) {
      if (fallbackComponent) {
        childToRender = createElement(fallbackComponent, {
          error,
          resetErrorBoundary: this.resetErrorBoundary.bind(this),
        });
      } else if (fallback !== undefined) {
        childToRender = fallback;
      } else {
        throw error;
      }
    }

    return createElement(
      ErrorBoundaryProvider,
      {
        value: {
          didCatch,
          error,
          resetErrorBoundary: this.resetErrorBoundary.bind(this),
        },
      },
      childToRender
    );
  }
}
