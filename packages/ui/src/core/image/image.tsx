import { forwardRef } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { cva } from '@/utils/index.js';

export interface ImageProps
  extends Omit<React.ComponentPropsWithoutRef<'img'>, 'width' | 'height'>,
    Pick<React.ComponentPropsWithoutRef<typeof AspectRatio.Root>, 'ratio'> {
  /** 이미지 가로 크기 */
  width?: number | `${number}` | `${number}rem`;
  /** 이미지 세로 크기 */
  height?: number | `${number}` | `${number}rem`;
}

/**
 * `<img>` 태그를 대체하는 UI
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ ratio, width, height, style, className, children, ...rest }, ref) => (
    <WrapperRatio ratio={ratio}>
      {children ? (
        <picture>
          {children}
          <img
            ref={ref}
            className={imageVariants({ ratio: !!ratio, className })}
            style={{ ...style, width, height }}
            {...rest}
          />
        </picture>
      ) : (
        <img
          ref={ref}
          className={imageVariants({ ratio: !!ratio, className })}
          style={{ ...style, width, height }}
          {...rest}
        />
      )}
    </WrapperRatio>
  )
);
Image.displayName = 'Image';

const WrapperRatio = ({ ratio, children }: React.ComponentPropsWithoutRef<typeof AspectRatio.Root>) => {
  return typeof ratio === 'number' ? <AspectRatio.Root ratio={ratio}>{children}</AspectRatio.Root> : <>{children}</>;
};

export const imageVariants = cva({
  base: 'h-auto w-full max-w-full select-none object-cover fp-drag-none',
  variants: {
    ratio: {
      true: 'h-full',
    },
  },
});
