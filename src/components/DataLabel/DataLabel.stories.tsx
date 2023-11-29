import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DataLabel, type DataLabelProps } from '.';

const meta: Meta<DataLabelProps> = {
  title: 'Design System/Molecules/DataLabel',
  component: DataLabel,
  args: {
    title: 'Title',
    text: 'Text'
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
