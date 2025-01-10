import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/core/icon/icon.js';
import { IconSize } from '@/core/icon/constants.js';

const meta: Meta<typeof Icon> = {
  title: 'ui/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex w-96 justify-center">
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h5 className="block">Icon Lists</h5>
        <div className="flex flex-row gap-2">
          <Icon icon="icAdd" />
          <Icon icon="icBack" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="block">Icon Customize</h5>
        <div className="flex flex-row items-center gap-2">
          <Icon icon="icAdd" size={IconSize.xl} />
          <Icon icon="icBack" size={IconSize.xl} />
          <Icon icon="icAdd" className="text-green-500" />
          <Icon icon="icBack" className="text-blue-500" />
        </div>
      </div>
    </div>
  ),
};

export default meta;
