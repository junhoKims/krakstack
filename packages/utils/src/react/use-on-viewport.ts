import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/react/use-isomorphic-layout-effect.js';

interface UseOnViewportTypes<T> {
  /** 타겟 요소 (Element) */
  ref: React.RefObject<T | null>;
  /** 타겟 요소가 viewport 안에 존재하는지 여부 */
  inView: boolean | undefined;
}

/**
 * 특정 요소가 화면(viewport) 안에 존재하는지 여부를 반환하는 Hook
 *
 * @example
 * const { ref, inView } = useOnViewport();
 *
 * useLayoutEffect(() => {
 *   if (!inView) return;
 *   // Anything
 * }, [inView]);
 *
 * return (
 *     ...
 *     <div ref={ref} />
 * )
 */
export const useOnViewport = <T extends HTMLElement>(
  options?: Pick<IntersectionObserver, 'rootMargin' | 'thresholds'>
): UseOnViewportTypes<T> => {
  const ref = useRef<T>(null);

  const [inView, setInView] = useState<boolean | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref, inView };
};
