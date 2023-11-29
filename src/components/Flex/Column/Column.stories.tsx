import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Column, type ColumnProps } from '.';

const meta: Meta<ColumnProps> = {
  title: 'Design System/Atom/Column',
  component: Column,
  args: {
    gap: 10,
    justifyContent: 'center'

  },
};

export default meta;
export const Template: StoryFn<ColumnProps> = (args) => (
  <div style={{ background: 'gray', height: '450px'}}>
    <Column {...args}>
      <Box />
      <Box />
      <Box />
    </Column>
  </div>
)

const Box = () => (
  <div style={{
    height: '100px',
    width: '100px',
    background: 'orange',
    border: '3px solid black'
  }}
  />
)
