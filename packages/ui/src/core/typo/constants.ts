import { cva } from '@/utils/index.js';

export const typoVariants = cva({
  base: 'select-none',
  variants: {
    variant: {
      HeadingL: 'text-[2.2rem] font-krak-bold leading-[3rem] tracking-[-0.02rem]',
      HeadingM: 'text-[2rem] font-krak-semibold leading-[2.8rem] tracking-[-0.02rem]',
      HeadingS: 'text-[1.8rem] font-krak-medium leading-[2.6rem] tracking-[-0.02rem]',
      BodyMBold: 'text-[1.6rem] font-krak-semibold leading-[2.2rem] tracking-[-0.02rem]',
      BodyMMedium: 'text-[1.6rem] font-krak-medium leading-[2.2rem] tracking-[-0.02rem]',
      BodyMRegular: 'text-[1.6rem] font-krak-regular leading-[2.2rem] tracking-[-0.02rem]',
      BodySBold: 'text-[1.4rem] font-krak-semibold leading-8 tracking-[-0.02rem]',
      BodySMedium: 'text-[1.4rem] font-krak-medium leading-8 tracking-[-0.02rem]',
      BodySRegular: 'text-[1.4rem] font-krak-regular leading-8 tracking-[-0.02rem]',
      CaptionBold: 'text-[1.2rem] font-krak-semibold leading-[1.8rem] tracking-[-0.02rem]',
      CaptionMedium: 'text-[1.2rem] font-krak-medium leading-[1.8rem] tracking-[-0.02rem]',
      CaptionRegular: 'text-[1.2rem] font-krak-regular leading-[1.8rem] tracking-[-0.02rem]',
    },
  },
  defaultVariants: {
    variant: 'BodySRegular',
  },
});

export type TypoWeight = ValueOf<typeof TypoWeight>;
export const TypoWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export type TypoVariant = ValueOf<typeof TypoVariant>;
export const TypoVariant = {
  HeadingL: 'HeadingL',
  HeadingM: 'HeadingM',
  HeadingS: 'HeadingS',
  BodyMBold: 'BodyMBold',
  BodyMMedium: 'BodyMMedium',
  BodyMRegular: 'BodyMRegular',
  BodySBold: 'BodySBold',
  BodySMedium: 'BodySMedium',
  BodySRegular: 'BodySRegular',
  CaptionBold: 'CaptionBold',
  CaptionMedium: 'CaptionMedium',
  CaptionRegular: 'CaptionRegular',
} as const;

export type TypoHTMLTag = Pick<
  HTMLElementTagNameMap,
  | 'p'
  | 'div'
  | 'span'
  | 'strong'
  | 'b'
  | 'i'
  | 'u'
  | 'small'
  | 'sub'
  | 'sup'
  | 'mark'
  | 'del'
  | 'ins'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'blockquote'
  | 'pre'
  | 'code'
  | 'cite'
  | 'li'
  | 'label'
>;
export const TypoHTMLTag = {
  p: 'p',
  div: 'div',
  span: 'span',
  strong: 'strong',
  b: 'b',
  i: 'i',
  u: 'u',
  small: 'small',
  sub: 'sub',
  sup: 'sup',
  mark: 'mark',
  del: 'del',
  ins: 'ins',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  blockquote: 'blockquote',
  pre: 'pre',
  code: 'code',
  cite: 'cite',
  li: 'li',
  label: 'label',
} as const;
