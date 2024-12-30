/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import type { Mock } from 'vitest';
import type {
  ErrorBoundaryPropsWithComponent,
  ErrorBoundaryPropsWithFallback,
  FallbackProps,
} from '@/react/react-error-boundary/types.js';
import { ErrorBoundary } from '@/react/react-error-boundary/error-boundary.js';

describe('ErrorBoundary', () => {
  let container: HTMLDivElement;
  let root: ReturnType<typeof createRoot>;
  let shouldThrow = true;
  let valueToThrow: any;

  const MaybeThrows = ({ children }: React.PropsWithChildren) => {
    if (shouldThrow) {
      throw valueToThrow;
    }

    return <>{children}</>;
  };

  beforeEach(() => {
    container = document.createElement('div');
    root = createRoot(container);
    shouldThrow = false;
    valueToThrow = new Error('💥💥💥');
  });

  test('에러가 없으면 children이 렌더링된다', () => {
    act(() => {
      root.render(
        <ErrorBoundary fallback={<div>Error</div>}>
          <MaybeThrows>Content</MaybeThrows>
        </ErrorBoundary>
      );
    });

    expect(container.textContent).toBe('Content');
  });

  test('`fallback`, `fallbackComponent` props 모두 없으면 에러를 던진다', () => {
    shouldThrow = true;
    expect(() => {
      act(() => {
        root.render(
          <ErrorBoundary fallback={undefined}>
            <MaybeThrows>Content</MaybeThrows>
          </ErrorBoundary>
        );
      });
    }).toThrow('💥💥💥');
  });

  describe('event handlers', () => {
    let errorBoundaryRef: React.RefObject<ErrorBoundary | null>;

    const render = (props: Omit<ErrorBoundaryPropsWithFallback, 'fallback'>) => {
      act(() => {
        root.render(
          <ErrorBoundary {...props} ref={errorBoundaryRef} fallback="Error">
            <MaybeThrows>Content</MaybeThrows>
          </ErrorBoundary>
        );
      });
    };

    beforeEach(() => {
      errorBoundaryRef = createRef<ErrorBoundary>();
    });

    test('에러가 발생하면 `onError`가 호출된다', () => {
      shouldThrow = true;
      const onError = vi.fn();

      render({ onError });

      expect(onError).toHaveBeenCalledTimes(1);
      expect((onError.mock.calls[0]?.[0] as Error).message).toEqual('💥💥💥');
    });

    test('에러를 리셋하면 `onReset`이 호출된다', () => {
      shouldThrow = true;
      const onReset = vi.fn();

      render({ onReset });
      expect(onReset).not.toHaveBeenCalled();

      act(() => {
        errorBoundaryRef.current?.resetErrorBoundary();
      });
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });

  describe('`fallback` props', () => {
    const render = (props: Omit<ErrorBoundaryPropsWithFallback, 'fallback'> = {}) => {
      act(() => {
        root.render(
          <ErrorBoundary {...props} fallback={<div>Error</div>}>
            <MaybeThrows>Content</MaybeThrows>
          </ErrorBoundary>
        );
      });
    };

    test('에러가 발생하면 `fallback` props가 렌더링된다', () => {
      shouldThrow = true;
      render();
      expect(container.textContent).toBe('Error');
    });
  });

  describe('`fallbackComponent` props', () => {
    let fallbackComponent: Mock<(props: FallbackProps) => React.ReactElement>;
    let lastRenderedError: any = null;
    let lastRenderedResetErrorBoundary: FallbackProps['resetErrorBoundary'] | null = null;

    beforeEach(() => {
      lastRenderedError = null;
      lastRenderedResetErrorBoundary = null;

      fallbackComponent = vi.fn();
      fallbackComponent.mockImplementation(({ error, resetErrorBoundary }: FallbackProps) => {
        lastRenderedError = error;
        lastRenderedResetErrorBoundary = resetErrorBoundary;
        return <div>FallbackComponent</div>;
      });
    });

    function render(props: Omit<ErrorBoundaryPropsWithComponent, 'fallbackComponent'> = {}) {
      act(() => {
        root.render(
          <ErrorBoundary {...props} fallbackComponent={fallbackComponent}>
            <MaybeThrows>Content</MaybeThrows>
          </ErrorBoundary>
        );
      });
    }

    test('에러가 발생하면 fallbackComponent가 렌더링된다', () => {
      shouldThrow = true;
      render();
      expect((lastRenderedError as Error).message).toBe('💥💥💥');
      expect(container.textContent).toBe('FallbackComponent');
    });

    test('ErrorBoundary가 리셋되면 children이 리렌더링된다', () => {
      shouldThrow = true;
      render();
      expect(container.textContent).toBe('FallbackComponent');

      expect(lastRenderedResetErrorBoundary).not.toBeNull();
      act(() => {
        shouldThrow = false;
        assert(lastRenderedResetErrorBoundary !== null);
        lastRenderedResetErrorBoundary();
      });

      expect(container.textContent).toBe('Content');
    });
  });
});
