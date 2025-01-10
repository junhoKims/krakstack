import { act, fireEvent, render, screen } from '@testing-library/react';
import { useOnViewport } from '@/react/use-on-viewport.js';

describe('useOnViewport', () => {
  const mockIntersectionObserver = vi.fn();
  let intersectionCallback: (entries: Partial<IntersectionObserverEntry>[]) => void;

  beforeEach(() => {
    mockIntersectionObserver.mockImplementation((callback: (entries: Partial<IntersectionObserverEntry>[]) => void) => {
      intersectionCallback = callback;
      return {
        observe: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    global.IntersectionObserver = mockIntersectionObserver;
  });

  test('요소가 viewport 밖에서 안으로 올 때 inView가 true를 반환한다', () => {
    render(<App />);

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('HIDE SCREEN');

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 13000 } });
      intersectionCallback([{ isIntersecting: true, target }]);
    });

    expect(target).toHaveTextContent('SHOW SCREEN');
  });

  test('ref가 없으면 inView가 undefined를 반환한다', () => {
    render(<AppWithoutRef />);

    const target = screen.getByTestId('target');
    expect(target).toHaveTextContent('HIDE SCREEN');
  });
});

const App = () => {
  const { ref, inView } = useOnViewport<HTMLDivElement>();

  return (
    <div className="h-[200vh]">
      <div>Contents</div>
      <div ref={ref} data-testid="target" className="mt-[150vh]">
        {inView ? 'SHOW SCREEN' : 'HIDE SCREEN'}
      </div>
    </div>
  );
};

const AppWithoutRef = () => {
  const { inView } = useOnViewport<HTMLDivElement>();

  return (
    <div className="h-[200vh]">
      <div>Contents</div>
      <div data-testid="target" className="mt-[150vh]">
        {inView ? 'SHOW SCREEN' : 'HIDE SCREEN'}
      </div>
    </div>
  );
};
