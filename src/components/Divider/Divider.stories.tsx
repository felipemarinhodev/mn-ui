import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Divider, type DividerProps } from '.';

const meta: Meta<DividerProps> = {
  title: 'Design System/Atom/Divider',
  component: Divider,
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
