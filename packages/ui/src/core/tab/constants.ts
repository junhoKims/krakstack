import { cn, cva } from '@/utils/index.js';
import { TypoVariant, typoVariants } from '@/core/typo/constants.js';

export type TabVariants = ValueOf<typeof TabVariants>;
export const TabVariants = {
  bar: 'bar',
  round: 'round',
  expanded: 'expanded',
} as const;

export type TabStates = ValueOf<typeof TabStates>;
export const TabStates = {
  default: 'default',
  loading: 'loading',
} as const;

export const tabVariants = cva({
  base: 'group relative h-full flex-1 flex-col items-center gap-[0.6rem] bg-white px-[1.2rem]',
  variants: {
    variant: {
      round: cn(
        'min-h-[3.8rem] rounded-[2rem] text-gray-700',
        typoVariants({ variant: TypoVariant.CaptionRegular }),
        'data-[state=active]:text-white',
        'data-[state=active]:bg-black'
      ),
      bar: cn(
        'min-h-[5.1rem] text-gray-500',
        typoVariants({ variant: TypoVariant.CaptionRegular }),
        'data-[state=active]:text-gray-900',
        `data-[state=active]:${typoVariants({ variant: TypoVariant.CaptionMedium })}`
      ),
      expanded: cn(
        'flex h-24 shrink-0 items-center justify-center bg-white px-[1.2rem] py-[0.8rem] text-gray-500',
        typoVariants({ variant: TypoVariant.CaptionRegular }),
        'data-[state=active]:text-gray-900',
        `data-[state=active]:${typoVariants({ variant: TypoVariant.CaptionMedium })}`
      ),
    },
  },
  defaultVariants: {
    variant: TabVariants.bar,
  },
});
