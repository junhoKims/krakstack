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

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: '`variants` props로 사이즈 변경 가능',
      },
    },
  },
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            Heading
          </Typo>
          <div className="flex flex-col gap-2">
            <Typo variant={TypoVariant.HeadingL}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.HeadingM}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.HeadingS}>Typography 텍스트 컴포넌트</Typo>
          </div>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            Body M
          </Typo>
          <div className="flex flex-col gap-2">
            <Typo variant={TypoVariant.BodyMBold}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.BodyMMedium}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.BodyMRegular}>Typography 텍스트 컴포넌트</Typo>
          </div>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            Body S
          </Typo>
          <div className="flex flex-col gap-2">
            <Typo variant={TypoVariant.BodySBold}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.BodySMedium}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.BodySRegular}>Typography 텍스트 컴포넌트</Typo>
          </div>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            Caption
          </Typo>
          <div className="flex flex-col gap-2">
            <Typo variant={TypoVariant.CaptionBold}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.CaptionMedium}>Typography 텍스트 컴포넌트</Typo>
            <Typo variant={TypoVariant.CaptionRegular}>Typography 텍스트 컴포넌트</Typo>
          </div>
        </div>
      </div>
    );
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
