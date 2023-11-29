import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Row, type RowProps } from '.';

const meta: Meta<RowProps> = {
  title: 'Design System/Atom/Row',
  component: Row,
  args: {
    gap: 10,
    justifyContent: 'center'

  },
};

export default meta;
export const Template: StoryFn<RowProps> = (args) => (
  <div style={{ background: 'gray', height: '450px'}}>
    <Row {...args}>
      <Box />
      <Box />
      <Box />
    </Row>
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
