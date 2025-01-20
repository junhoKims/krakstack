import { Button, ButtonWithoutRef } from './button.js';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSize, ButtonVariant } from '@/core/button/constants.js';

const meta: Meta<typeof ButtonWithoutRef> = {
  title: 'ui/Button',
  component: ButtonWithoutRef,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: 'select',
      options: Object.keys(ButtonVariant),
      description: '버튼 모양',
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonSize),
      description: '버튼 사이즈',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'BUTTON',
  },
} satisfies Meta<typeof ButtonWithoutRef>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const VariantsAndSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: '아래와 같은 variant와 size를 설정할 수 있다',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <p>Variant</p>
      <div className="flex gap-4">
        <Button variant={ButtonVariant.primary}>Button</Button>
        <Button variant={ButtonVariant.secondary}>Button</Button>
        <Button variant={ButtonVariant.tertiary}>Button</Button>
      </div>
      <p>Size</p>
      <div className="flex gap-4">
        <Button size={ButtonSize.sm}>Button</Button>
        <Button size={ButtonSize.md}>Button</Button>
        <Button size={ButtonSize.lg}>Button</Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: '비활성화 처리 가능',
      },
    },
  },
  args: {
    disabled: true,
  },
};

export const Link: Story = {
  parameters: {
    docs: {
      description: {
        story: '`as`로 컴포넌트를 `a`로 바꿀 수 있다',
      },
    },
  },
  render: () => (
    <Button as="a" href="https://www.google.com">
      MOVE GOOGLE
    </Button>
  ),
};

export default meta;
