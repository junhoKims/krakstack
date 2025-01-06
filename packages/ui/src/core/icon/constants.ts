import * as icons from '@/assets/icons/index.js';

export type IconName = keyof typeof icons;
export const IconName = Object.entries(icons).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof icons] = value as React.FC<React.SVGProps<SVGElement>>;
    return acc;
  },
  {} as Record<keyof typeof icons, React.FC<React.SVGProps<SVGElement>>>
);

export type IconSize = ValueOf<typeof IconSize>;
export const IconSize = {
  xl: 32,
  lg: 24,
  md: 16,
  sm: 12,
  xs: 10,
} as const;
