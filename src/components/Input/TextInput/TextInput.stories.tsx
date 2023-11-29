import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextInput, type TextInputProps } from '.';

const meta: Meta<TextInputProps> = {
  title: 'Design System/Molecules/TextInput',
  component: TextInput,
  
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: "20rem"
        }}
      >
        <Story />
      </div>
    )
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Label"
  }
};

export const Error: Story = {
  args: {
    label: "Label",
    error: "Error on input"
  }
};
