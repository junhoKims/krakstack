import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@/core/tab/tab.js';
import { TabStates, TabVariants } from '@/core/tab/constants.js';

const meta: Meta<typeof Tab> = {
  title: 'ui/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.values(TabVariants),
    },
    state: {
      options: Object.values(TabStates),
    },
  },
  decorators: [
    (Story) => {
      const storybookDocsStoryElements = document.querySelectorAll<HTMLDivElement>('.docs-story');
      storybookDocsStoryElements.forEach((e) => {
        e.style.backgroundColor = '#FAFBFD';
      });

      return (
        <div className="flex w-[38.5rem] items-center justify-center">
          <Story />
        </div>
      );
    },
  ],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '`Carousel` 또는 `Tabs` 등에서 공통으로 사용되는 기본 탭 UI',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex w-[7.5rem] items-center">
          <Story />
        </div>
      );
    },
  ],
  args: {
    variant: TabVariants.bar,
    children: 'Tab1',
  },
};

export const VariantBar: Story = {
  parameters: {
    docs: {
      description: {
        story: '`bar` 타입 탭 UI. `count` 및 Dot UI 노출 가능해요',
      },
    },
  },
  render: () => {
    const [tab, setTab] = useState('tab1');

    const handleClickTab: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      setTab(e.currentTarget.name);
    };

    return (
      <>
        <Tab
          name="tab1"
          variant={TabVariants.bar}
          data-state={tab === 'tab1' ? 'active' : 'deactive'}
          onClick={handleClickTab}
        >
          Tab1
        </Tab>
        <Tab
          name="tab2"
          variant={TabVariants.bar}
          data-state={tab === 'tab2' ? 'active' : 'deactive'}
          onClick={handleClickTab}
        >
          Tab2
        </Tab>
      </>
    );
  },
};

export const VariantRound: Story = {
  parameters: {
    docs: {
      description: {
        story: '`round` 타입 탭 UI. Dot UI 노출 가능해요',
      },
    },
  },
  render: () => {
    const [tab, setTab] = useState('tab1');

    const handleClickTab: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      setTab(e.currentTarget.name);
    };

    return (
      <>
        <Tab
          name="tab1"
          variant={TabVariants.round}
          data-state={tab === 'tab1' ? 'active' : 'deactive'}
          onClick={handleClickTab}
        >
          Tab1
        </Tab>
        <Tab
          name="tab2"
          variant={TabVariants.round}
          data-state={tab === 'tab2' ? 'active' : 'deactive'}
          onClick={handleClickTab}
        >
          Tab2
        </Tab>
      </>
    );
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: '`state` props를 통해 로딩 UI로 노출 가능해요',
      },
    },
  },
  render: () => (
    <>
      <Tab variant={TabVariants.bar} state={TabStates.loading}>
        Tab1
      </Tab>
      <Tab variant={TabVariants.round} state={TabStates.loading}>
        Tab2
      </Tab>
    </>
  ),
};

export default meta;
