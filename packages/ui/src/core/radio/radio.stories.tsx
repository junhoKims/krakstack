import { userEvent, within } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/react';
import { Typo } from '@/core/typo/typo.js';
import { TypoVariant } from '@/core/typo/constants.js';
import { Radio } from '@/core/radio/radio.js';

const meta: Meta<typeof Radio> = {
  title: 'ui/Radio',
  component: Radio,
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
          <Radio size="lg" name="lg" value="1" defaultChecked>
            Lorem typo 1
          </Radio>
          <Radio size="lg" name="lg" value="2">
            Lorem typo 2
          </Radio>
          <Radio size="lg" name="lg" value="3">
            Lorem typo 3
          </Radio>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            md
          </Typo>
          <Radio size="md" name="md" value="1" defaultChecked>
            Lorem typo 1
          </Radio>
          <Radio size="md" name="md" value="2">
            Lorem typo 2
          </Radio>
          <Radio size="md" name="md" value="3">
            Lorem typo 3
          </Radio>
        </div>
        <div className="flex flex-col">
          <Typo variant={TypoVariant.CaptionRegular} className="text-slate-500">
            sm
          </Typo>
          <Radio size="sm" name="sm" value="1" defaultChecked>
            Lorem typo 1
          </Radio>
          <Radio size="sm" name="sm" value="2">
            Lorem typo 2
          </Radio>
          <Radio size="sm" name="sm" value="3">
            Lorem typo 3
          </Radio>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('radio', {
        name(accessibleName, element) {
          return accessibleName === 'Lorem typo 1' && element.getAttribute('name') === 'lg';
        },
      })
    );
    await userEvent.click(
      canvas.getByRole('radio', {
        name(accessibleName, element) {
          return accessibleName === 'Lorem typo 2' && element.getAttribute('name') === 'lg';
        },
      })
    );
    await userEvent.click(
      canvas.getByRole('radio', {
        name(accessibleName, element) {
          return accessibleName === 'Lorem typo 3' && element.getAttribute('name') === 'lg';
        },
      })
    );
  },
};

export default meta;
