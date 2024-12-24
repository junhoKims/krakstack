import * as icons from '@/assets/icons/index.js';

export type IconName = keyof typeof icons;
export const IconName = Object.entries(icons).reduce(
  (acc, [key, value]) => {
    acc[key as keyof typeof icons] = value as React.FC<React.SVGProps<SVGElement>>;
    return acc;
  },
  {} as Record<keyof typeof icons, React.FC<React.SVGProps<SVGElement>>>
);
