import React from 'react';
import { Button } from '../Button';
import {Row} from '../Flex/Row';
import { Alert } from '../Icons/Alert';
import "./Pill.css";

export type PillProps = {
  fullSize?: boolean;
  children: React.ReactNode;
}

export function Pill ({ fullSize, children }: PillProps) {
  const Content = () => (
    <Row justifyContent='space-between' alignItems='center'>
      {children}
    </Row>
  )
  return (
    <Button
      className="pill"
      outline
      fullSize={fullSize}
      text=''
      content={<Content />}
      onClick={() => {}}
    />
  )
}

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
