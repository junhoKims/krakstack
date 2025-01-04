import type { Meta, StoryObj } from '@storybook/react';
import { LazyImage } from '@/core/lazy-image/lazy-image.js';
import { Image } from '@/core/image/index.js';

const meta: Meta<typeof LazyImage> = {
  title: 'ui/LazyImage',
  component: LazyImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex w-96 flex-col justify-center">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    fill: {
      type: 'boolean',
      description: '이미지로 부모 요소를 채울지 여부',
    },
    width: {
      type: 'number',
      description: '이미지 가로 크기',
    },
    height: {
      type: 'number',
      description: '이미지 세로 크기',
    },
  },
  args: {
    src: 'https://mui.com/static/images/cards/paella.jpg',
  },
} satisfies Meta<typeof LazyImage>;

type Story = StoryObj<typeof meta>;

const LAZY_IMG = 'https://4kwallpapers.com/images/walls/thumbs_3t/8971.jpg';

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '개발자도구 `Network`에서 확인가능',
      },
    },
  },
  args: {
    width: 280,
    height: 150,
  },
};

export const FixWidthHeight: Story = {
  parameters: {
    docs: {
      description: {
        story: '`width`, `height` props가 강제됩니다',
      },
    },
  },
  args: {
    width: 280,
    height: 150,
  },
  render: (args) => (
    <>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Image key={idx} {...args} />
      ))}
      <LazyImage {...args} src={LAZY_IMG} />
    </>
  ),
};

export const HasFillImg: Story = {
  parameters: {
    docs: {
      description: {
        story: '`fill` props를 설정하면 `width`, `height` props가 강제되지 않습니다',
      },
    },
  },
  args: {
    fill: true,
  },
  render: (args) => (
    <>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Image key={idx} {...args} />
      ))}
      <LazyImage {...args} src={LAZY_IMG} />
    </>
  ),
};

export default meta;
