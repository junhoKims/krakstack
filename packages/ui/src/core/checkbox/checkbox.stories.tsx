import type { Meta, StoryObj } from '@storybook/react';
import { Typo } from '@/core/typo/typo.js';
import { TypoVariant } from '@/core/typo/constants.js';
import { Checkbox } from '@/core/checkbox/checkbox.js';

const meta: Meta<typeof Checkbox> = {
  title: 'ui/CheckBox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            lg
          </Typo>
          <Checkbox id="lg-chk" size="lg">
            <Checkbox.Box />
            <Checkbox.Label>체크박스 텍스트</Checkbox.Label>
          </Checkbox>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            md
          </Typo>
          <Checkbox id="md-chk" size="md">
            <Checkbox.Box />
            <Checkbox.Label>체크박스 텍스트</Checkbox.Label>
          </Checkbox>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            sm
          </Typo>
          <Checkbox id="sm-chk" size="sm">
            <Checkbox.Box />
            <Checkbox.Label>체크박스 텍스트</Checkbox.Label>
          </Checkbox>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            disabled
          </Typo>
          <Checkbox id="disabled-chk" disabled>
            <Checkbox.Box />
            <Checkbox.Label>체크박스 텍스트</Checkbox.Label>
          </Checkbox>
        </div>
      </div>
    );
  },
};

export default meta;
