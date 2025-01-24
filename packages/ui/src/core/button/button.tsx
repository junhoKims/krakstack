import { safeForwardRef } from '@krakstack/utils/react';
import { cn } from '@/utils/cn.js';
import { ButtonSize, ButtonVariant, buttonVariants } from '@/core/button/constants.js';

type ButtonUnion = React.ElementType<any, 'button'> | React.ElementType<any, 'a'>;

export const ButtonWithoutRef = <T extends ButtonUnion>(
  props: {
    as?: T;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
  } & DistributiveOmit<React.ComponentProps<ButtonUnion extends T ? 'button' : T>, 'as'>,
  ref?: React.ForwardedRef<any>
) => {
  const { as: Comp = 'button', variant = ButtonVariant.primary, size = ButtonSize.md, className, ...rest } = props;
  return (
    <Comp
      ref={ref}
      type={Comp === 'button' ? 'button' : undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
};
export const Button = safeForwardRef(ButtonWithoutRef);
