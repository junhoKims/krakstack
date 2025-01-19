import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@/core/tabs/tabs.js';
import { TabsTrigger } from '@/core/tabs/tabs-trigger.js';
import { TabsList } from '@/core/tabs/tabs-list.js';
import { TabsContent } from '@/core/tabs/tabs-content.js';
import { TabsShapes, TabsStates, TabsVariants } from '@/core/tabs/constants.js';

const meta: Meta<typeof Tabs> = {
  title: 'ui/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const storybookDocsStoryElements = document.querySelectorAll<HTMLDivElement>('.docs-story');
      storybookDocsStoryElements.forEach((e) => {
        e.style.backgroundColor = '#FAFBFD';
      });

      const storybookSbMainElement = document.querySelector<HTMLDivElement>('.sb-main-centered');
      if (storybookSbMainElement) storybookSbMainElement.style.backgroundColor = '#EEF1F5';

      const storybookRootElement = document.querySelector<HTMLDivElement>('#storybook-root');
      if (storybookRootElement) storybookRootElement.style.padding = '0';

      return (
        <div className="flex w-[37.5rem] items-center">
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    onChangeExpanded: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    variant: TabsVariants.bar,
    shape: TabsShapes.fixed,
    expanded: false,
    showsExpanded: false,
  },
  render: (props) => (
    <Tabs defaultValue="tab1" {...props}>
      <TabsList>
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="h-[120px] bg-white">
        Tab1 Contents
      </TabsContent>
      <TabsContent value="tab2" className="h-[120px] bg-white">
        Tab2 Contents
      </TabsContent>
    </Tabs>
  ),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '`value`, `defaultValue`로 Tab의 값을 지정하고 `onValueChange`로 변경된 값을 추적할 수 있어요',
      },
    },
  },
};

export const RoundTabs: Story = {
  parameters: {
    docs: {
      description: {
        story: `RoundTap은 동일한 위계의 연관된 콘텐츠를 그룹핑할 때 사용합니다.`,
      },
    },
  },
  args: {
    variant: TabsVariants.round,
    shape: TabsShapes.fixed,
  },
};

export const FixedType: Story = {
  parameters: {
    docs: {
      description: {
        story: `fixed 타입은 최소 2개에서 최대 4개의 탭 항목을 사용합니다.`,
      },
    },
  },
  render: (props) => (
    <Tabs defaultValue="tab1" {...props}>
      <TabsList>
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
        <TabsTrigger value="tab3">Tab3</TabsTrigger>
        <TabsTrigger value="tab4">Tab4</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="h-[120px] bg-white">
        Tab1 Contents
      </TabsContent>
      <TabsContent value="tab2" className="h-[120px] bg-white">
        Tab2 Contents
      </TabsContent>
      <TabsContent value="tab3" className="h-[120px] bg-white">
        Tab3 Contents
      </TabsContent>
      <TabsContent value="tab4" className="h-[120px] bg-white">
        Tab4 Contents
      </TabsContent>
    </Tabs>
  ),
};

export const ScrollabelType: Story = {
  parameters: {
    docs: {
      description: {
        story: 'scrollable 타입은 탭 개수가 많거나 Lable이 길 때 사용합니다.',
      },
    },
  },
  args: {
    variant: TabsVariants.round,
    shape: TabsShapes.scrollable,
  },
  render: (props) => (
    <Tabs defaultValue="tab1" {...props}>
      <TabsList>
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
        <TabsTrigger value="tab3">Tab3</TabsTrigger>
        <TabsTrigger value="tab4">Tab4</TabsTrigger>
        <TabsTrigger value="tab5">Tab5</TabsTrigger>
        <TabsTrigger value="tab6">Tab6</TabsTrigger>
        <TabsTrigger value="tab7">Tab7</TabsTrigger>
        <TabsTrigger value="tab8">Tab8</TabsTrigger>
        <TabsTrigger value="tab9">Tab9</TabsTrigger>
        <TabsTrigger value="tab10">Tab10</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="h-[120px] bg-white">
        Tab1 Contents
      </TabsContent>
      <TabsContent value="tab2" className="h-[120px] bg-white">
        Tab2 Contents
      </TabsContent>
      <TabsContent value="tab3" className="h-[120px] bg-white">
        Tab3 Contents
      </TabsContent>
      <TabsContent value="tab4" className="h-[120px] bg-white">
        Tab4 Contents
      </TabsContent>
      <TabsContent value="tab10" className="h-[120px] bg-white">
        Tab10 Contents
      </TabsContent>
    </Tabs>
  ),
};

export const ShowExpanded: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Expand 버튼을 탭하여 확장된 탭 목록을 표시할 수 있고, 배경 영역은 Dim 처리돼요.\n\nExpand 버튼 또는 dim 영역 클릭 시 접힘처리돼요.\n\nDim 영역은 `TabsContents` 영역이 아니라 Tabs 화면 아래의 모든 영역을 채워요.',
      },
    },
  },
  args: {
    variant: TabsVariants.round,
    shape: TabsShapes.scrollable,
    showsExpanded: true,
  },
  render: (props) => (
    <Tabs defaultValue="tab1" {...props}>
      <TabsList>
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
        <TabsTrigger value="tab3">Tab3</TabsTrigger>
        <TabsTrigger value="tab4">Tab4</TabsTrigger>
        <TabsTrigger value="tab5">Tab5</TabsTrigger>
        <TabsTrigger value="tab6">Tab6</TabsTrigger>
        <TabsTrigger value="tab7">Tab7</TabsTrigger>
        <TabsTrigger value="tab8">Tab8</TabsTrigger>
        <TabsTrigger value="tab9">Tab9</TabsTrigger>
        <TabsTrigger value="tab10">Tab10</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="h-[120px] bg-white">
        Tab1 Contents
      </TabsContent>
      <TabsContent value="tab2" className="h-[120px] bg-white">
        Tab2 Contents
      </TabsContent>
      <TabsContent value="tab3" className="h-[120px] bg-white">
        Tab3 Contents
      </TabsContent>
      <TabsContent value="tab4" className="h-[120px] bg-white">
        Tab4 Contents
      </TabsContent>
      <TabsContent value="tab5" className="h-[120px] bg-white">
        Tab5 Contents
      </TabsContent>
      <TabsContent value="tab6" className="h-[120px] bg-white">
        Tab6 Contents
      </TabsContent>
      <TabsContent value="tab7" className="h-[120px] bg-white">
        Tab7 Contents
      </TabsContent>
      <TabsContent value="tab8" className="h-[120px] bg-white">
        Tab8 Contents
      </TabsContent>
      <TabsContent value="tab9" className="h-[120px] bg-white">
        Tab9 Contents
      </TabsContent>
      <TabsContent value="tab10" className="h-[120px] bg-white">
        Tab10 Contents
      </TabsContent>
    </Tabs>
  ),
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: '`state` props를 통해 로딩 UI를 노출할 수 있어요',
      },
    },
  },
  args: {
    variant: TabsVariants.bar,
    shape: TabsShapes.fixed,
    state: TabsStates.loading,
    showsExpanded: true,
  },
  render: (props) => (
    <Tabs defaultValue="tab1" {...props}>
      <TabsList>
        <TabsTrigger value="tab1" count={1}>
          Tab1
        </TabsTrigger>
        <TabsTrigger value="tab2" count={1}>
          Tab2
        </TabsTrigger>
        <TabsTrigger value="tab3" count={1}>
          Tab3
        </TabsTrigger>
        <TabsTrigger value="tab4" count={1}>
          Tab4
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="h-[120px] bg-white">
        Tab1 Contents
      </TabsContent>
      <TabsContent value="tab2" className="h-[120px] bg-white">
        Tab2 Contents
      </TabsContent>
      <TabsContent value="tab3" className="h-[120px] bg-white">
        Tab3 Contents
      </TabsContent>
      <TabsContent value="tab4" className="h-[120px] bg-white">
        Tab4 Contents
      </TabsContent>
    </Tabs>
  ),
};

export default meta;
