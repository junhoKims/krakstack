import { Image } from './image.js';
import type { Meta, StoryObj } from '@storybook/react';
import type { ImageProps } from './image.js';

const meta: Meta<ImageProps> = {
  title: 'ui/Image',
  component: Image,
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
  argTypes: {
    width: {
      type: 'number',
      description: '이미지 가로 크기',
    },
    height: {
      type: 'number',
      description: '이미지 세로 크기',
    },
    ratio: {
      type: 'number',
      description: 'Aspect Ratio 비율',
    },
  },
  args: {
    src: 'https://mui.com/static/images/cards/paella.jpg',
  },
} satisfies Meta<ImageProps>;

type Story = StoryObj<typeof meta>;

export const FixedWithHeight: Story = {
  parameters: {
    docs: {
      description: {
        story: '`width`, `height` props로 길이를 설정할 수 있다',
      },
    },
  },
  args: {
    width: 200,
    height: 135,
  },
};

export const WithRatio: Story = {
  parameters: {
    docs: {
      description: {
        story: '`ratio` props로 aspect-ratio를 설정할 수 있다',
      },
    },
  },
  args: {
    ratio: 16 / 9,
  },
};

export default meta;
