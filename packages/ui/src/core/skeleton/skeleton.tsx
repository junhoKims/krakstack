'use client';

import { cva } from '@/utils/index.js';
import { SkeletonVariants } from '@/core/skeleton/constants.js';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Skeleton 모양 (원 | 사각형) */
  variant?: SkeletonVariants;
  /** Skeleton 너비 */
  width: number | `${number}rem` | `${number}%`;
  /** Skeleton 높이 */
  height?: number | `${number}rem` | `${number}%`;
  /** Skeleton 모서리 둥글기 */
  radius?: number | `${number}rem`;
}

/**
 * Skeleton UI
 */
export const Skeleton = ({
  variant = SkeletonVariants.square,
  width,
  height,
  radius,
  className,
  style,
  ...rest
}: SkeletonProps) => {
  const widthValue = getWidth({ width });
  const heightValue = getHeight({ variant, width: widthValue, height });

  return (
    <div
      className={variantsSkeleton({ variant, className })}
      style={{ width: widthValue, height: heightValue, borderRadius: radius, ...style }}
      {...rest}
    />
  );
};

const variantsSkeleton = cva({
  base: 'border-none bg-gray-200',
  variants: {
    variant: {
      [SkeletonVariants.square]: 'rounded-[0.4rem]',
      [SkeletonVariants.round]: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: SkeletonVariants.square,
  },
});

const getWidth = ({ width }: Pick<SkeletonProps, 'width'>) => {
  if (typeof width === 'number') {
    return `${width}rem`;
  }

  return width;
};

const getHeight = ({ variant, width, height }: Pick<SkeletonProps, 'variant' | 'height'> & { width: string }) => {
  if (variant === SkeletonVariants.round) {
    return width;
  }

  if (!height) {
    return 'auto';
  }

  if (typeof height === 'number') {
    return `${height}rem`;
  }
  return height;
};
