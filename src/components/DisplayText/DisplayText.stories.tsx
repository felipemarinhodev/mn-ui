import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DisplayText, type DisplayTextProps } from '.';

const meta: Meta<DisplayTextProps> = {
  title: 'Design System/Molecules/DisplayText',
  component: DisplayText,
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum ac mauris ut viverra. Cras ac nisi eros. Phasellus ut finibus tortor. Morbi viverra vel tortor nec maximus. Phasellus ex metus, lobortis at ultrices sodales, suscipit a nisi. Vestibulum in malesuada ante, porta facilisis magna. Vivamus tempor ipsum vitae porttitor bibendum.'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          width: '20rem',
          borderRadius: '8px',
          boxShadow: '0 0 5px gray',
          padding: '20px 10px'
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
export const Expandable: Story = {
  args: {
    expandable: true,
    characterLimit: 50
  }
};