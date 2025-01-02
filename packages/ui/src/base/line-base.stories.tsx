import type { Meta, StoryObj } from '@storybook/react';
import { LineBase } from '@/base/line-base.js';

const meta: Meta<typeof LineBase> = {
  title: 'ui/base/LineBase',
  component: LineBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex w-96 justify-center bg-red-500">
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
