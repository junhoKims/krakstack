import { twMerge } from 'tailwind-merge';
import { defineConfig } from 'cva';
import { clsx } from 'clsx';

/**
 * `cva`에 스타일 충돌을 피하기 위한 twMerge 적용
 *
 * {@link https://beta.cva.style/getting-started/installation}
 */
export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(clsx(className)),
  },
});
