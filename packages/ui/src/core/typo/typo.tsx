'use client';

import { createElement } from 'react';
import type { VariantProps } from 'cva';
import type { TypoHTMLTag } from '@/core/typo/constants.js';
import { TypoVariant, typoVariants } from '@/core/typo/constants.js';

export interface TypoProps<T extends keyof TypoHTMLTag = 'p'>
  extends React.HTMLAttributes<TypoHTMLTag[T]>,
    VariantProps<typeof typoVariants> {
  /** HTML 태그 */
  as?: T;
  /** Typo 색상 */
  color?: string;
}

/**
 * Typo 텍스트 컴포넌트 UI
 */
export const Typo = <T extends keyof TypoHTMLTag = 'p'>({
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
          'p',
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
