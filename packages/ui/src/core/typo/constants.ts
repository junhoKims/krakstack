import { cva } from '@/utils/index.js';

export const typoVariants = cva({
  base: 'select-none',
  variants: {
    variant: {
      HeadingL: 'text-[2.2rem] font-bold leading-[3rem] tracking-[-2%]',
      HeadingM: 'text-[2rem] font-bold leading-[2.8rem] tracking-[-2%]',
      HeadingS: 'text-[1.8rem] font-bold leading-[2.6rem] tracking-[-2%]',
      BodyMBold: 'text-[1.6rem] font-bold leading-[2.2rem] tracking-[-2%]',
      BodyMMedium: 'text-[1.6rem] font-semibold leading-[2.2rem] tracking-[-2%]',
      BodyMRegular: 'text-[1.6rem] font-medium leading-[2.2rem] tracking-[-2%]',
      BodySBold: 'text-[1.4rem] font-bold leading-8 tracking-[-2%]',
      BodySMedium: 'text-[1.4rem] font-semibold leading-8 tracking-[-2%]',
      BodySRegular: 'text-[1.4rem] font-medium leading-8 tracking-[-2%]',
      CaptionBold: 'text-[1.2rem] font-bold leading-[1.8rem] tracking-[-2%]',
      CaptionMedium: 'text-[1.2rem] font-semibold leading-[1.8rem] tracking-[-2%]',
      CaptionRegular: 'text-[1.2rem] font-medium leading-[1.8rem] tracking-[-2%]',
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
} as const;
