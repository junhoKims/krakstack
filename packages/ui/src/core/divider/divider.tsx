import { cn } from '@/utils/cn.js';

export type DividerProps =
  | ({
      orientation?: 'horizontal';
    } & React.ComponentPropsWithoutRef<'hr'>)
  | ({
      orientation: 'vertical';
    } & React.ComponentPropsWithoutRef<'div'>);

/**
 * 구분선 UI
 */
export const Divider = (props: DividerProps) => {
  if (props.orientation === 'vertical') {
    const { orientation, className, ...rest } = props;
    return (
      <div
        aria-orientation={orientation}
        className={cn('h-full w-px shrink-0 border-none bg-gray-200', className)}
        {...rest}
      />
    );
  }

  const { orientation = 'horizontal', className, ...rest } = props;

  return (
    <hr
      aria-orientation={orientation}
      className={cn('h-px w-full shrink-0 border-none bg-gray-200', className)}
      {...rest}
    ></hr>
  );
};
