import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * `deboucne` 기능이 적용된 useState Hook
 *
 * @example
 * const [value, setValue] = useDebounceState(0);
 * const [value2, setValue2] = useDebounceState(0, { debounce: 500 });
 */
export const useDebounceState = <T>(
  initialValue: T | (() => T),
  options: {
    debounce?: number;
  } = { debounce: 200 }
) => {
  const [value, setValue] = useState<T>(initialValue);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSetValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (value) => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setValue(value);
      }, options.debounce);
    },
    [options.debounce]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return [value, debouncedSetValue] as const;
};
