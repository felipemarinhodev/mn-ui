import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Pill, PillProps } from '.';
import { Alert } from '../Icons/Alert';

const meta: Meta<PillProps> = {
  title: 'Design System/Molecules/Pill',
  component: Pill,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullSize: true,
    children: <Icon />
  }
};


const Icon = () => {
  return (
    <>
      <Alert />
      <span>Text</span>
    </>
  )
}

const WithoutIcon = () => {
  return (
    <>
      <Alert />
      <span>Text</span>
    </>
  )
}
