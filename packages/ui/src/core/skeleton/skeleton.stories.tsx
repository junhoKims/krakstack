import { Skeleton } from './skeleton.js';
import { SkeletonVariants } from './constants.js';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  title: 'ui/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div className="flex w-[37.5rem] items-center">
          <Story />
        </div>
      );
    },
  ],
  args: {
    width: 37.5,
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 37.5,
    height: 0.4,
  },
  parameters: {
    docs: {
      description: {
        story: '`width`와 `height` props를 사용해서 원하는 모양의 스켈레톤 구현 가능해요',
      },
    },
  },
};

export const FlexibleProps: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`width`와 `height`에 px를 제외한 `숫자`나 `rem`, `%`등을 넣을 수 있어요\n\n `radius`를 주어 커스텀할 수 있어요',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-[0.8rem]">
      <Skeleton width={13.5} height={1.2} />
      <Skeleton width="100%" height={1.2} />
      <Skeleton width="13.5rem" height={1.2} />
    </div>
  ),
};

export const CompositeSkeleton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Skeleton을 조합해 원형 및 텍스트 기반 다양한 구현체 구현 가능해요',
      },
    },
  },
  render: () => (
    <div className="flex flex-row gap-[0.8rem]">
      <Skeleton variant={SkeletonVariants.round} width={2.8} />
      <div className="flex flex-col gap-2">
        <Skeleton width={12} height={1} />
        <Skeleton width={13.5} height={1} />
      </div>
    </div>
  ),
};

export default meta;
