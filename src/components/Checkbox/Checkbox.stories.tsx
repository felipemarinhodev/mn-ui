import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, type CheckboxProps } from './Checkbox';
import { Column } from '../Flex/Column';

const meta: Meta<CheckboxProps> = {
  title: 'Design System/Atom/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Column
          alignItems='center'
          justifyContent='center'
      >
        <Story />
      </Column>
    )
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox",
    labelFor: "Checkbox"
  }
};

export const Disabled: Story = {
  args: {
    label: "Checkbox",
    labelFor: "Checkbox",
    disabled: true
  }
}
