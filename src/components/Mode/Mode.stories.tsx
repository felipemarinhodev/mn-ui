import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Mode, type ModeProps } from '.';

const meta: Meta<ModeProps> = {
  title: 'Design System/Atom/Mode',
  component: Mode,
  args: {
    environment: 'dev'
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
export const Production: Story = {
  args: {
    environment: 'prod'
  }
};
export const Development: Story = {
  args: {
    environment: 'dev'
  }
};
export const QA: Story = {
  args: {
    environment: 'qa'
  }
};
export const UAT: Story = {
  args: {
    environment: 'uat'
  }
};