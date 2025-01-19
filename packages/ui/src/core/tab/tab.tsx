'use client';

import { forwardRef } from 'react';
import { cn } from '@/utils/index.js';
import { Typo, TypoVariant } from '@/core/typo/index.js';
import { TabStates, TabVariants, tabVariants } from '@/core/tab/constants.js';
import { Skeleton } from '@/core/skeleton/index.js';
import { Divider } from '@/core/divider/index.js';

export interface TabProps extends React.ComponentPropsWithoutRef<'button'> {
  /** TabBase 모양(타입) */
  variant?: TabVariants;
  /** TabBase 상태 (기본 | 로딩) */
  state?: TabStates;
  /** TabBase 노출 카운트 */
  count?: number;
  /** TabBase Dot UI 노출 여부 */
  showsDot?: boolean;
}

/**
 * `Tabs` 또는 `Carousel` 등에서 쓰이는 Item UI
 */
export const Tab = forwardRef<React.ComponentRef<'button'>, TabProps>(
  ({ variant, state, count, showsDot, className, children, ...props }, ref) => {
    if (state === TabStates.loading) {
      const height = variant === TabVariants.bar ? 2.2 : 3.8;

      return (
        <div
          className={tabVariants({
            variant,
            className: cn('relative flex justify-center', variant === TabVariants.round && 'p-0'),
          })}
        >
          <Skeleton
            width="100%"
            height={height}
            radius={variant === TabVariants.round ? '2rem' : undefined}
            className={cn('w-full', count !== undefined && 'relative bottom-[0.7rem]')}
          />
        </div>
      );
    }

    return (
      <button ref={ref} type="button" className={tabVariants({ variant, className })} {...props}>
        <div className="relative inline-flex flex-col">
          {children}
          {variant === TabVariants.bar && typeof count === 'number' && (
            <Typo as="span" variant={TypoVariant.CaptionMedium} className="text-gray-300">
              {count}
            </Typo>
          )}
          {showsDot && <div className="absolute right-[-0.8rem] top-0 size-[0.4rem] rounded-full bg-red-500" />}
        </div>
        {variant === TabVariants.bar && (
          <Divider className="absolute inset-x-0 bottom-0 h-[0.2rem] rounded-[0.2rem] border-transparent bg-white group-data-[state=active]:bg-gray-900" />
        )}
      </button>
    );
  }
);
Tab.displayName = 'Tab';
