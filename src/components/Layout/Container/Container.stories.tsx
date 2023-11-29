import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Container, type ContainerProps } from '.';
import { Row } from '../../Flex/Row';

const meta: Meta<ContainerProps> = {
  title: 'Design System/Atom/Container',
  component: Container,
};

export default meta;
export const Template: StoryFn<ContainerProps> = (args) => (
  <div style={{ background: 'gray', height: 'calc(100vh - 32px)'}}>
    <Container {...args}>
      <Row gap={16}>
      <Box />
      <Box />
      <Box />

      </Row>
    </Container>
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
