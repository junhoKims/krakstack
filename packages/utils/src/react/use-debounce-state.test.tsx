import { vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useDebounceState } from '@/react/use-debounce-state.js';

describe('useDebounceState', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  test('1초 디바운싱이 걸린 useState를 1초 안에 4번 업데이트하면 1번만 업데이트된다', () => {
    const { result } = renderHook(() => useDebounceState(0, { debounce: 1000 }));

    expect(result.current[0]).toBe(0);
    act(() => {
      result.current[1](1); // 0ms
      vi.advanceTimersByTime(200);
      result.current[1](2); // 200ms
      vi.advanceTimersByTime(200);
      result.current[1](3); // 400ms
      vi.advanceTimersByTime(200);
      result.current[1](4); // 600ms
    });
    expect(result.current[0]).toBe(0);

    act(() => {
      vi.advanceTimersByTime(1100);
    });
    expect(result.current[0]).toBe(4);
  });
});
