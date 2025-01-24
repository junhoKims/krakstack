'use client';

import { forwardRef, useMemo } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { TabsContextProps } from '@/core/tabs/contexts.js';
import { cn } from '@/utils/index.js';
import { TabsContext } from '@/core/tabs/contexts.js';
import { TabsShapes, TabsStates, TabsVariants } from '@/core/tabs/constants.js';

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, TabsContextProps {}

/**
 * ### `Tabs`
 *
 * 동일한 위계의 콘텐츠를 그룹핑하고 페이지 이동 없이 빠르게 탐색할 수 있도록 하는 UI
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab1
 *   </TabsList>
 *   <TabsContent value="tab1">Tab1 Contents</TabsContent>
 * </Tabs>
 */
export const Tabs = forwardRef<React.ComponentRef<typeof TabsPrimitive.Root>, TabsProps>(
  (
    {
      variant = TabsVariants.bar,
      shape = TabsShapes.fixed,
      state = TabsStates.default,
      expanded,
      showsExpanded,
      onChangeExpanded,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const values = useMemo(
      () => ({ variant, shape, state, expanded, showsExpanded, onChangeExpanded }),
      [variant, shape, state, expanded, showsExpanded, onChangeExpanded]
    );

    return (
      <TabsPrimitive.Root ref={ref} className={cn('relative size-full bg-white', className)} {...props}>
        <TabsContext.Provider value={values}>{children}</TabsContext.Provider>
      </TabsPrimitive.Root>
    );
  }
);
Tabs.displayName = TabsPrimitive.Root.displayName;
