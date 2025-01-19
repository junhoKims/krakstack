import type { Meta, StoryObj } from '@storybook/react';
import { Typo } from '@/core/typo/typo.js';
import { TypoHTMLTag, TypoVariant } from '@/core/typo/constants.js';

const meta: Meta<typeof Typo> = {
  title: 'ui/Typo',
  component: Typo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: Object.values(TypoHTMLTag),
    },
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(TypoVariant),
    },
  },
  args: {
    variant: TypoVariant.BodySRegular,
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: 'p',
    children: 'Typography 텍스트 컴포넌트',
  },
};

export const UseClassname: Story = {
  parameters: {
    docs: {
      description: {
        story: 'className을 사용해 색상 및 스타일 수정 가능합니다',
      },
    },
  },
  args: {
    as: 'p',
    className: 'italic text-red-500',
    children: 'Typography 텍스트 컴포넌트',
  },
};

export const OverlapTypo: Story = {
  parameters: {
    docs: {
      description: {
        story: '컴포넌트를 중첩하여 사용할 수 있습니다',
      },
    },
  },
  render: () => {
    return (
      <Typo as="span" variant={TypoVariant.BodyMRegular}>
        Typography는{' '}
        <Typo as="span" color="#3333bb">
          파란색
        </Typo>
        과{' '}
        <Typo as="span" color="#44ddaa">
          민트색
        </Typo>
        이 섞인 텍스트 컴포넌트
      </Typo>
    );
  },
};

export default meta;
