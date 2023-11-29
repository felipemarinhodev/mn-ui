import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField, type TextFieldProps } from '.';
import { Alert } from '../../Icons/Alert';

const meta: Meta<TextFieldProps> = {
  title: 'Design System/Atom/TextField',
  component: TextField,
  
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Story />
      </div>
    )
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
  args: {
    icon: <Alert />,
  }
}

export const IconReverse: Story = {
  args: {
    icon: <Alert />,
    iconRight: true
  }
}

export const ReadOnly: Story = {
  args: {
    value: 'Lorem ipsum dolor sit amet',
    readOnly: true
  }
}
