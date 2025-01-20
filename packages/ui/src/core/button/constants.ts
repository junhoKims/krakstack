import { cva } from '@/utils/cva.js';
import { typoVariants } from '@/core/typo/constants.js';

export type ButtonVariant = ValueOf<typeof ButtonVariant>;
export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
} as const;

export type ButtonSize = ValueOf<typeof ButtonSize>;
export const ButtonSize = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
} as const;

export const buttonVariants = cva({
  base: 'inline-flex shrink-0 items-center justify-center gap-[0.4rem] rounded-[0.8rem] border-[0.1rem] border-solid transition-all',
  variants: {
    /** 버튼 모양 */
    variant: {
      primary: [
        'bg-blue-500',
        'text-white',
        'border-blue-500',
        'hover:bg-blue-700',
        'hover:border-blue-700',
        'active:bg-blue-900',
        'active:border-blue-900',
        'disabled:bg-gray-200',
        'disabled:border-gray-200',
      ],
      secondary: [
        'bg-white',
        'text-blue-500',
        'border-blue-500',
        'hover:bg-blue-50',
        'active:bg-blue-100',
        'disabled:text-gray-200',
        'disabled:bg-white',
        'disabled:border-gray-200',
      ],
      tertiary: [
        'bg-white',
        'text-gray-900',
        'border-gray-200',
        'hover:bg-gray-50',
        'hover:border-gray-200',
        'active:bg-gray-100',
        'active:border-gray-200',
        'disabled:text-gray-200',
        'disabled:bg-white',
        'disabled:border-gray-200',
      ],
    },
    /** 버튼 사이즈 */
    size: {
      lg: 'h-[4.8rem] px-[1.4rem] py-[0.6rem]',
      md: 'h-[3.6rem] px-[1.4rem] py-3',
      sm: 'h-[3.2rem] px-[1.6rem] py-[1.3rem]',
    },
  },
  compoundVariants: [
    {
      size: 'lg',
      className: [typoVariants({ variant: 'BodyMMedium' }), 'group-hover:w-32', 'group-hover:h-32'],
    },
    {
      size: 'lg',
      variant: ['tertiary'],
      className: [typoVariants({ variant: 'BodyMRegular' }), 'group-hover:w-32', 'group-hover:h-32'],
    },
    {
      size: 'md',
      className: typoVariants({ variant: 'BodySRegular' }),
    },
    {
      size: 'sm',
      className: typoVariants({ variant: 'CaptionRegular' }),
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
