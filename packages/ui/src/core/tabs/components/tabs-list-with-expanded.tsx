'use client';

import { Children, isValidElement, useEffect, useRef, useState } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils/index.js';
import { useTabsContext } from '@/core/tabs/contexts.js';
import { TABS_MIN_HEIGHT } from '@/core/tabs/constants.js';
import { Tab, TabVariants } from '@/core/tab/index.js';
import { Icon } from '@/core/icon/index.js';

interface TabsListWithExpandedProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

/**
 * `TabsList`의 expanded 기능 구현 UI
 */
export const TabsListWithExpanded = ({ onClick, children }: TabsListWithExpandedProps) => {
  const { expanded: expandedContext, onChangeExpanded } = useTabsContext();
  const [expanded, setExpanded] = useState(expandedContext);

  const { ref, height } = useExpandedBackgroundHeight();

  const handleClickTabsTrigger: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    handleClickToggle(e);
  };

  const handleClickToggle: React.MouseEventHandler<HTMLButtonElement> = () => {
    setExpanded(!expanded);
    onChangeExpanded?.(!expanded);
  };

  return (
    <>
      <button
        type="button"
        className={cn(`absolute right-0 top-0 size-[${TABS_MIN_HEIGHT}rem] shrink-0 bg-white p-[1.6rem]`)}
        onClick={handleClickToggle}
      >
        <span className="absolute -left-4 top-0 h-full w-4 bg-gradient-to-l from-white to-transparent"></span>
        <Icon icon={expanded ? 'icChevronUp' : 'icChevronDown'} size={16} />
      </button>
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          `absolute left-0 top-[${TABS_MIN_HEIGHT}rem] w-full bg-indigo-100`,
          expanded ? 'block' : 'hidden'
        )}
        style={{ height }}
        onClick={onClick}
      >
        <div className="absolute top-0 size-full bg-black opacity-50" />
        <div className="bg-gray-70 absolute top-0 grid w-full grid-cols-3 gap-[0.1rem] border-y-[0.1rem] border-gray-50">
          {Children.map(children, (child) => {
            if (!isValidElement(child)) return null;
            const props = child.props as React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;

            return (
              <TabsPrimitive.Trigger key={child.key} asChild value={props.value}>
                <Tab variant={TabVariants.expanded} onClick={handleClickTabsTrigger} {...props} />
              </TabsPrimitive.Trigger>
            );
          })}
        </div>
      </TabsPrimitive.List>
    </>
  );
};

/**
 * Tabs의 expanded UI의 화면을 덮는 배경 높이(Viewport)를 계산하는 Hook
 */
const useExpandedBackgroundHeight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const topOffset = ref.current.getBoundingClientRect().top;
        const newHeight = window.document.documentElement.scrollHeight - topOffset;
        setHeight(`${newHeight}px`);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return { ref, height };
};
