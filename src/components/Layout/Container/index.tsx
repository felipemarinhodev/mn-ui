import React from 'react';
import './Container.css';

export type ContainerProps = {
  children: React.ReactNode;
}

export function Container ({children}: ContainerProps) {
  return <div className='container'>{children}</div>;
}
