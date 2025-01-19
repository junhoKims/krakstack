'use client';

import { forwardRef, useState } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils/index.js';
import { TabsListDraggingContext, TabsListSetDraggingContext, useTabsContext } from '@/core/tabs/contexts.js';
import { TABS_MIN_HEIGHT, TabsShapes } from '@/core/tabs/constants.js';
import { TabsListWithCarousel } from '@/core/tabs/components/tabs-list-with-carousel.js';

/**
 * ### `TabsList`
 *
 * 콘텐츠 타이틀 목록을 담는 컴포넌트
 *
 * 단독으로 쓰이지 않으며, `shape` props로 스크롤 및 드래그 가능하도록 설정할 수 있고
 *
 * 확장 UI 노출 여부를 결정할 수 있습니다.
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab1
 *   </TabsList>
 *   <TabsContent value="tab1">Tab1 Contents</TabsContent>
 * </Tabs>
 */
export const TabsList = forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {
  const { shape } = useTabsContext();
  const [dragging, setDragging] = useState(false);

  if (shape === TabsShapes.scrollable) {
    const tabsTriggerElements = children;

    return (
      <TabsListDraggingContext.Provider value={dragging}>
        <TabsListSetDraggingContext.Provider value={setDragging}>
          <TabsListWithCarousel tabsTriggerElements={tabsTriggerElements}>
            <TabsPrimitive.List
              ref={ref}
              className={cn(`inline-flex size-full min-h-[${TABS_MIN_HEIGHT}rem] items-center`, className)}
              {...props}
            >
              {children}
            </TabsPrimitive.List>
          </TabsListWithCarousel>
        </TabsListSetDraggingContext.Provider>
      </TabsListDraggingContext.Provider>
    );
  }

  return (
    <TabsListDraggingContext.Provider value={dragging}>
      <TabsListSetDraggingContext.Provider value={setDragging}>
        <TabsPrimitive.List
          ref={ref}
          className={cn(`inline-flex size-full min-h-[${TABS_MIN_HEIGHT}rem] items-center px-[1.6rem]`, className)}
          {...props}
        >
          {children}
        </TabsPrimitive.List>
      </TabsListSetDraggingContext.Provider>
    </TabsListDraggingContext.Provider>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
