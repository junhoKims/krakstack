'use client';

import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/utils/index.js';
import { useTabsContext, useTabsListSetDraggingContext } from '@/core/tabs/contexts.js';
import { TABS_MIN_HEIGHT } from '@/core/tabs/constants.js';
import { TabsListWithExpanded } from '@/core/tabs/components/tabs-list-with-expanded.js';

/**
 * 드래그 여부를 관리하는 객체 타입
 */
interface DragInfo {
  x: number | undefined;
  moved: boolean;
}

/**
 * 드래그 여부를 관리하는 객체 초기값
 */
const DRAG_INFO_INITIAL: DragInfo = { x: undefined, moved: false };

/**
 * `embla-carousel-react` 라이브러리의 옵션값
 */
const EMBLA_CAROUSEL_OPTIONS: Parameters<typeof useEmblaCarousel>[0] = {
  loop: false,
  dragFree: true,
  containScroll: 'keepSnaps',
};

interface TabsListWithCarouselProps {
  /** 자식 엘리먼트 */
  children: React.ReactNode;
  /** `TabsTrigger` 요소 배열인 자식 엘리먼트 */
  tabsTriggerElements: React.ReactNode;
}

/**
 * `TabList`에 스크롤 및 드래그 기능을 구현하기 위해 캐로셀을 적용한 Wrapper UI
 */
export const TabsListWithCarousel = ({ children, tabsTriggerElements }: TabsListWithCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_CAROUSEL_OPTIONS);
  const { showsExpanded } = useTabsContext();

  const handleScrollToCenter: React.MouseEventHandler<HTMLDivElement> = () => {
    const containerElement = emblaApi!.containerNode();

    const buttonElements = Array.from(containerElement.children) as HTMLElement[];
    const activeButtonIndex = buttonElements.findIndex((button) => button.getAttribute('data-state') === 'active');
    if (activeButtonIndex === -1) return;

    emblaApi?.scrollTo(activeButtonIndex);
  };

  return (
    <>
      <CarouselViewport emblaRef={emblaRef} onClick={handleScrollToCenter}>
        {children}
      </CarouselViewport>
      {showsExpanded && (
        <TabsListWithExpanded onClick={handleScrollToCenter}>{tabsTriggerElements}</TabsListWithExpanded>
      )}
    </>
  );
};

interface CarouselViewportProps {
  /** `embla-carousel-react` 라이브러리 적용을 위한 ref 객체 */
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  /** 클릭 이벤트 */
  onClick: React.MouseEventHandler<HTMLDivElement>;
  /** 자식 엘리먼트 */
  children: React.ReactNode;
}

/**
 * 캐로셀의 스크롤 영역 Viewport UI
 */
const CarouselViewport = ({ emblaRef, onClick, children }: CarouselViewportProps) => {
  const { showsExpanded } = useTabsContext();
  const setDragging = useTabsListSetDraggingContext();
  const dragInfoRef = useRef<DragInfo>(DRAG_INFO_INITIAL);

  return (
    <div
      ref={emblaRef}
      className={cn('size-full overflow-hidden pl-[1.6rem] pr-[1.6rem]', showsExpanded && `pr-[${TABS_MIN_HEIGHT}rem]`)}
      onMouseDownCapture={(e) => {
        /**
         * 리스트 요소 MouseDown 시, 좌표값 저장
         */
        dragInfoRef.current = { ...dragInfoRef.current, x: e.clientX };
      }}
      onMouseMoveCapture={(e) => {
        /**
         * 리스트 요소 MouseMove(드래그) 시, 초기 좌표값과 다르면
         *
         * 드래그 중이라고 판단, `dragging` 상태 변경
         */
        const dragging = dragInfoRef.current.x && Math.abs(dragInfoRef.current.x - e.clientX) > 5;
        if (dragging) {
          dragInfoRef.current = { ...dragInfoRef.current, moved: true };
          setDragging(true);
        }
      }}
      onMouseUpCapture={() => {
        /**
         * 리스트 요소 MouseUp 시, 좌표값을 초기화하고
         *
         * `dragging` 상태 변경
         */
        setTimeout(() => {
          dragInfoRef.current = DRAG_INFO_INITIAL;
          setDragging(false);
        }, 0);
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
