import { cva } from '@/utils/cva.js';
import { typoVariants } from '@/core/typo/constants.js';
import { RadioSizes } from '@/core/radio/constants.js';

export interface RadioProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: RadioSizes;
}

export const Radio = ({
  size = RadioSizes.md,
  name,
  value,
  defaultChecked,
  children,
  className,
  style,
  ...props
}: RadioProps) => (
  <label className={radioVariants({ size, className })} style={style}>
    <input
      type="radio"
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      className={radioVariants({ size, element: 'Radio.input' })}
      {...props}
    />
    {typeof children === 'string' ? (
      <span className={radioVariants({ size, element: 'Radio.text' })}>{children}</span>
    ) : (
      children
    )}
  </label>
);

const radioVariants = cva({
  base: 'flex cursor-pointer items-center ',
  variants: {
    size: {
      sm: 'gap-[0.5rem]',
      md: 'gap-[0.65rem]',
      lg: 'gap-[0.8rem]',
    },
    element: {
      'Radio.input': 'border-gray-300 text-blue-600 focus:ring-blue-500',
      'Radio.text': 'text-gray-600',
    },
  },
  compoundVariants: [
    {
      element: 'Radio.input',
      size: 'sm',
      className: 'h-[1rem] w-[1rem] ',
    },
    {
      element: 'Radio.input',
      size: 'md',
      className: 'h-[1.2rem] w-[1.2rem] ',
    },
    {
      element: 'Radio.input',
      size: 'lg',
      className: 'h-[1.4rem] w-[1.4rem] ',
    },
    {
      element: 'Radio.text',
      size: 'sm',
      className: typoVariants({ variant: 'CaptionRegular' }),
    },
    {
      element: 'Radio.text',
      size: 'md',
      className: typoVariants({ variant: 'BodySRegular' }),
    },
    {
      element: 'Radio.text',
      size: 'lg',
      className: typoVariants({ variant: 'BodyMRegular' }),
    },
  ],
  defaultVariants: {
    size: 'md',
  },
});
