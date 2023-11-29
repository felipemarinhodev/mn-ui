import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography, type TypographyProps } from '.';

const meta: Meta<TypographyProps> = {
  title: 'Design System/Atom/Typography',
  component: Typography,
  args: {
    children: 'Typography'
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
export const Paragraphy: Story = {
  args: {
    element: 'p'
  }
};
export const Span: Story = {
  args: {
    element: 'span'
  }
};
export const Label: Story = {
  args: {
    element: 'label'
  }
};
export const Header1: Story = {
  args: {
    element: 'h1',
    color: 'primary'
  }
};
export const Header2: Story = {
  args: {
    element: 'h2',
    color: 'primary'
  }
};
export const Header3: Story = {
  args: {
    element: 'h3',
    color: 'primary'
  }
};
export const Header4: Story = {
  args: {
    element: 'h4',
    color: 'primary'
  }
};
export const Header5: Story = {
  args: {
    element: 'h5',
    color: 'primary'
  }
};
