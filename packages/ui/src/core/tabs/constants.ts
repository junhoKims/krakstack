import { TabVariants } from '@/core/tab/constants.js';

export type TabsVariants = ValueOf<typeof TabsVariants>;
export const TabsVariants = {
  bar: TabVariants.bar,
  round: TabVariants.round,
} as const;

export type TabsShapes = ValueOf<typeof TabsShapes>;
export const TabsShapes = {
  fixed: 'fixed',
  scrollable: 'scrollable',
} as const;

export type TabsStates = ValueOf<typeof TabsStates>;
export const TabsStates = {
  default: 'default',
  loading: 'loading',
} as const;

/**
 * `Tabs` UI의 최소 높이(rem)
 */
export const TABS_MIN_HEIGHT = 5.1;
