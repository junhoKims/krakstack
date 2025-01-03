import { Divider } from './divider.js';
import type { Meta, StoryObj } from '@storybook/react';
import type { DividerProps } from './divider.js';

const meta: Meta<DividerProps> = {
  title: 'ui/core/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '구분선의 방향',
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<DividerProps>;

type Story = StoryObj<DividerProps>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    className: 'my-1',
  },
  decorators: [
    (Story: any) => (
      <>
        <p>Divider Component</p>
        <Story orientation="horizontal" />
        <div>Show me</div>
      </>
    ),
  ],
};

export const Vertical: Story = {
  decorators: [
    (Story: any) => (
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>One</div>
        <Story />
        <div>Two</div>
        <Story />
        <div>Three</div>
      </div>
    ),
  ],
  args: {
    orientation: 'vertical',
  },
};

export default meta;
