'use client';

import { forwardRef, useLayoutEffect, useRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { combineRefs } from '@krakstack/utils/react';
import type { TabProps } from '@/core/tab/tab.js';
import { useTabsContext, useTabsListDraggingContext } from '@/core/tabs/contexts.js';
import { TabsShapes } from '@/core/tabs/constants.js';
import { Tab } from '@/core/tab/tab.js';

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    Pick<TabProps, 'count' | 'showsDot'> {}

/**
 * ### `TabsTrigger`
 *
 * 콘텐츠 타이틀 컴포넌트
 *
 * `Tabs`의 콘텐츠 타이틀을 가리키는 요소입니다.
 *
 * 단독으로 쓰이지 않으며, <Typo>없이 사용 가능하도록 스타일 설정되어 있습니다.
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab1
 *   </TabsList>
 *   <TabsContent value="tab1">Tab1 Contents</TabsContent>
 * </Tabs>
 */
export const TabsTrigger = forwardRef<React.ComponentRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ onMouseUp, ...props }, ref) => {
    const { variant, state } = useTabsContext();
    const { tabsTriggerRef, handleMouseUp } = useControlDragging();

    return (
      <TabsPrimitive.Trigger
        asChild
        value={props.value}
        ref={combineRefs(ref, tabsTriggerRef)}
        onMouseUp={(e) => {
          onMouseUp?.(e);
          handleMouseUp(e);
        }}
      >
        <Tab variant={variant} state={state} {...props} />
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/**
 * 이벤트를 조작하여 dragging 중에 클릭되는 현상을 막아주는 로직을 담은 Hook
 */
const useControlDragging = () => {
  const { shape } = useTabsContext();
  const dragging = useTabsListDraggingContext();

  const tabsTriggerRef = useRef<React.ComponentRef<typeof TabsPrimitive.Trigger>>(null);

  const handleMouseUp: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!tabsTriggerRef.current || dragging) {
      return;
    }

    /**
     * `radix-ui-tabs`에서 강제하는 mousedown 이벤트로 인해 드래깅 중에 클릭 기능이 동작하는 현상이 발생
     *
     * `dragging` state를 통해서 드래깅이 끝날때까지 mousedown 이벤트를 막아버리고
     *
     * 드래깅이 끝나면 다시 라이브러리의 mousedown 이벤트를 호출시켜 클릭 기능을 동작
     */
    tabsTriggerRef.current.removeEventListener('mousedown', preventDefaultHandler);
    e.target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: false, view: window }));
    tabsTriggerRef.current.addEventListener('mousedown', preventDefaultHandler);
  };

  useLayoutEffect(() => {
    if (shape === TabsShapes.scrollable) {
      if (tabsTriggerRef.current) {
        tabsTriggerRef.current.addEventListener('mousedown', preventDefaultHandler);
      }
    }
  }, [shape]);

  return { tabsTriggerRef, handleMouseUp };
};

const preventDefaultHandler = (e: Event) => {
  e.preventDefault();
};
