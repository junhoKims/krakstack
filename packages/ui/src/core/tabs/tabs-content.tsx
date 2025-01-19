'use client';

import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils/index.js';

/**
 * ### `TabsContent`
 *
 * Tabs 내부에서 선택한 콘텐츠 타이틀의 영역 컴포넌트
 *
 * 단독으로 쓰이지 않으며, TabsTrigger의 value에 대응하는 경우 뷰를 노출합니다.
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab1
 *   </TabsList>
 *   <TabsContent value="tab1">Tab1 Contents</TabsContent>
 * </Tabs>
 */
export const TabsContent = forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
