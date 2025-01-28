import { useState } from 'react';
import { vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { useDebounceEffect } from '@/react/use-debounce-effect.js';

describe('useDebounceEffect', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  const Comp = () => {
    const [count, setCount] = useState(0);
    const [showsText, setShowsText] = useState(false);

    useDebounceEffect(
      () => {
        setShowsText(count > 0);
      },
      [count],
      200
    );

    return (
      <div>
        <button
          data-testid="test-btn"
          type="button"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          click
        </button>
        {showsText && <div data-testid="test-show-text">SHOW</div>}
      </div>
    );
  };

  test('useDebounceEffect의 callback이 0.2초 이후 실행된다', () => {
    render(<Comp />);

    fireEvent.click(screen.getByTestId('test-btn'));

    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(screen.queryByTestId('test-show-text')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.queryByTestId('test-show-text')).toBeInTheDocument();
  });
});
