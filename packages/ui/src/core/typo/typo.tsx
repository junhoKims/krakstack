'use client';

import { createElement } from 'react';
import type { VariantProps } from 'cva';
import type { TypoHTMLTag } from '@/core/typo/constants.js';
import { TypoVariant, typoVariants } from '@/core/typo/constants.js';

export interface TypoProps<T extends keyof TypoHTMLTag = 'p'>
  extends React.AllHTMLAttributes<TypoHTMLTag[T]>,
    VariantProps<typeof typoVariants> {
  /** HTML 태그 */
  as?: T;
  /** Typo 색상 */
  color?: string;
}

const DEFAULT_TAG = 'p';

/**
 * @krakstack `Typo` UI
 */
export const Typo = <T extends keyof TypoHTMLTag = typeof DEFAULT_TAG>({
  as,
  variant = TypoVariant.BodySRegular,
  color,
  className,
  children,
  style,
  ...rest
}: TypoProps<T>) => {
  if (!as) {
    return (
      <>
        {createElement(
          DEFAULT_TAG,
          { className: typoVariants({ variant, className }), style: { color, ...style }, ...rest },
          children
        )}
      </>
    );
  }

  return (
    <>
      {createElement(
        as,
        { className: typoVariants({ variant, className }), style: { color, ...style }, ...rest },
        children
      )}
    </>
  );
};
