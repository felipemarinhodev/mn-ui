import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Design System/Molecules/Button',
  component: Button,
  args: {
    text: 'Button'
  },
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

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Outline: Story = {
  args: {
    outline: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const OutlineDisabled: Story = {
  args: {
    outline: true,
    disabled: true
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const FullSize: Story = {
  args: {
    fullSize: true
  },
};

