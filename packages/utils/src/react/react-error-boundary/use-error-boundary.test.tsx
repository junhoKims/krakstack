import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import { useErrorBoundary } from '@/react/react-error-boundary/use-error-boundary.js';
import { ErrorBoundary } from '@/react/react-error-boundary/error-boundary.js';

describe('useErrorBoundary', () => {
  let container: HTMLDivElement;
  let lastRenderedErrorBoundaryHook: ReturnType<typeof useErrorBoundary> | null = null;

  const render = () => {
    const Child = () => {
      lastRenderedErrorBoundaryHook = useErrorBoundary();
      return <div>Child</div>;
    };

    const root = createRoot(container);
    act(() => {
      root.render(
        <ErrorBoundary fallback={<div>Error</div>}>
          <Child />
        </ErrorBoundary>
      );
    });
  };

  beforeEach(() => {
    container = document.createElement('div');
    lastRenderedErrorBoundaryHook = null;
  });

  test('hook `showBoundary`를 사용해 명시적으로 에러를 발생시킬 수 있다', () => {
    render();
    expect(container.textContent).toBe('Child');

    act(() => {
      lastRenderedErrorBoundaryHook?.showBoundary(new Error('Test Error'));
    });
    expect(container.textContent).toBe('Error');
  });

  test('hook `resetBoundary`를 사용해 명시적으로 에러를 리셋시킬 수 있다', () => {
    render();

    act(() => {
      lastRenderedErrorBoundaryHook?.showBoundary(new Error('Test Error'));
    });
    expect(container.textContent).toBe('Error');

    act(() => {
      lastRenderedErrorBoundaryHook?.resetBoundary();
    });
    expect(container.textContent).toBe('Child');
  });
});
