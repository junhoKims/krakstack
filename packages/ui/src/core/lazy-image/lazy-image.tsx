import { forwardRef, useRef } from 'react';
import { combineRefs, useIsomorphicLayoutEffect } from '@krakstack/utils/react';
import { cn } from '@/utils/index.js';
import { IMG_LAZY_BLANK_URL, IMG_LAZY_INTERSECTION_OBSERVER_OPTIONS_INIT } from '@/core/lazy-image/constants.js';
import { Image } from '@/core/image/index.js';

export interface LazyImageProps extends Omit<React.ComponentPropsWithoutRef<typeof Image>, 'data-src'> {
  /** 이미지로 부모 요소를 채울지 여부 */
  fill?: boolean;
  /** IntersectionObserver 옵션 */
  options?: IntersectionObserverInit;
}

/**
 * Lazy Image UI (Use IntersectionObserver)
 */
export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  ({ fill, options, src, className, width, height, ...rest }, ref) => {
    const imgRef = useImgLazyIntersectionObserver(options);

    const hasPropsFill = !!fill;
    const hasPropsWidthHeight = !!width && !!height;
    if (!hasPropsFill && !hasPropsWidthHeight) {
      throw new Error('props `width` and `height` are Required');
    }

    return (
      <Image
        ref={combineRefs(ref, imgRef)}
        src={IMG_LAZY_BLANK_URL}
        data-src={src ?? ''}
        width={width}
        height={height}
        className={cn('bg-gray-50', fill && 'object-fill', className)}
        {...rest}
      />
    );
  }
);
LazyImage.displayName = 'LazyImage';

const useImgLazyIntersectionObserver = (
  options: IntersectionObserverInit = IMG_LAZY_INTERSECTION_OBSERVER_OPTIONS_INIT
) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    const target = imgRef.current;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.src = target.dataset.src ?? '';
          observer.unobserve(target);
        }
      });
    }, options);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };

    // IntersectionObserver `options` props가 렌더링 중간에 변경될 일은 없을거라고 가정
    // 따라서 최초 렌더링 시 한번만 실행되도록 의존성에서 제거
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return imgRef;
};
