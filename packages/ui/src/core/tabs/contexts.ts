import { createContext, useContext } from 'react';
import { TabsShapes, TabsStates, TabsVariants } from '@/core/tabs/constants.js';

export interface TabsContextProps {
  /** Tabs의 Tab UI 종류 */
  variant?: TabsVariants;
  /** Tabs의 스타일 (고정형 | 스크롤형) */
  shape?: TabsShapes;
  /** Tabs의 상태 (기본 | 로딩) */
  state?: TabsStates;
  /** 초기 렌더링 시 확장 UI 열림 및 닫힘 여부 */
  expanded?: boolean;
  /** 확장 기능을 구현하는 UI 노출 여부 */
  showsExpanded?: boolean;
  /** expanded 상태 변경 이벤트 */
  onChangeExpanded?: (expanded: boolean) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  variant: TabsVariants.bar,
  shape: TabsShapes.fixed,
  state: TabsStates.default,
  expanded: false,
  showsExpanded: false,
  onChangeExpanded: undefined,
});
TabsContext.displayName = 'TabsContext';

export const TabsListDraggingContext = createContext<boolean | undefined>(false);
TabsListDraggingContext.displayName = 'TabsListDraggingContext';

type TabsListSetDraggingContextProps = React.Dispatch<React.SetStateAction<boolean>> | undefined;
export const TabsListSetDraggingContext = createContext<TabsListSetDraggingContextProps>(undefined);
TabsListSetDraggingContext.displayName = 'TabsListSetDraggingContext';

/**
 * `Tabs` 컴포넌트 내부에서 쓰이는 Context Hook
 */
export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!(context as any)) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return context;
};

/**
 * `Tabs` 컴포넌트 내부에서 쓰이는 dragging 상태 Context Hook
 */
export const useTabsListDraggingContext = () => {
  const context = useContext(TabsListDraggingContext);

  if (typeof context === 'undefined') {
    throw new Error('useTabsListDraggingContext must be used within a TabsListDraggingProvider');
  }

  return context;
};

/**
 * `Tabs` 컴포넌트 내부에서 쓰이는 setDragging 상태 Context Hook
 */
export const useTabsListSetDraggingContext = () => {
  const context = useContext(TabsListSetDraggingContext);

  if (!context) {
    throw new Error('useTabsListSetDraggingContext must be used within a TabsListSetDraggingProvider');
  }

  return context;
};
