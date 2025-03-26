import type React from 'react';
import { cva } from '@/utils/cva.js';
import { Typo } from '@/core/typo/typo.js';
import { typoVariants } from '@/core/typo/constants.js';
import { CheckboxProvider, type CheckboxProviderProps, useCheckboxContext } from '@/core/checkbox/contexts.js';
import { CheckboxSizes } from '@/core/checkbox/constants.js';

export interface CheckboxRootProps
  extends React.ComponentPropsWithoutRef<'div'>,
    Omit<CheckboxProviderProps, 'children'> {
  size?: CheckboxSizes;
}
export const Checkbox = ({
  size = CheckboxSizes.md,
  id,
  name,
  value,
  defaultChecked,
  disabled,
  onChangeChecked,
  className,
  children,
  ...props
}: CheckboxRootProps) => (
  <div className={checkboxVariants({ size, className })} {...props}>
    <CheckboxProvider
      size={size}
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChangeChecked={onChangeChecked}
    >
      {children}
    </CheckboxProvider>
  </div>
);
const checkboxVariants = cva({
  base: 'flex items-center',
  variants: {
    size: {
      lg: 'gap-[1.1rem]',
      md: 'gap-4',
      sm: 'gap-[0.8rem]',
    },
  },
});

interface CheckboxBoxProps {
  className?: string;
}
const CheckboxBox = ({ className }: CheckboxBoxProps) => {
  const { size, id, name, disabled, defaultChecked, onChangeChecked } = useCheckboxContext();

  return (
    <input
      className={checkboxInputVariants({ size, className })}
      type="checkbox"
      id={id}
      name={name}
      disabled={disabled}
      defaultChecked={defaultChecked}
      onChange={(e) => {
        onChangeChecked?.(e.target.checked);
      }}
    />
  );
};
Checkbox.Box = CheckboxBox;
const checkboxInputVariants = cva({
  base: [
    'rounded border border-gray-300 shadow-md cursor-pointer appearance-none flex-shrink-0',
    'checked:border-blue-500 checked:bg-blue-500',
    'hover:border-blue-500 focus:ring-2 focus:ring-blue-200',
    'disabled:hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-50',
  ],
  variants: {
    size: {
      lg: 'size-[1.7rem]',
      md: 'size-6',
      sm: 'size-[1.3rem]',
    },
  },
});

interface CheckboxLabelProps {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
const CheckboxLabel = ({ asChild, children, className }: CheckboxLabelProps) => {
  const { size, id, disabled } = useCheckboxContext();

  if (asChild) {
    return <>{children}</>;
  }

  return (
    <Typo as="label" htmlFor={id} className={checkboxLabelVariants({ size, disabled, className })}>
      {children}
    </Typo>
  );
};
Checkbox.Label = CheckboxLabel;
const checkboxLabelVariants = cva({
  base: 'cursor-pointer disabled:text-gray-300',
  variants: {
    size: {
      lg: typoVariants({ variant: 'BodyMRegular' }),
      md: typoVariants({ variant: 'BodySRegular' }),
      sm: typoVariants({ variant: 'CaptionRegular' }),
    },
    disabled: {
      true: 'text-gray-400 cursor-not-allowed',
    },
  },
});
