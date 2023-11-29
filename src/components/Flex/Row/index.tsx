import React, { CSSProperties } from 'react';
import './Row.css';
import { TAlignItems, TJustifyContent } from '../types/types';

export type RowProps = {
  children: React.ReactNode;
  gap?: number;
  justifyContent?: TJustifyContent
  alignItems?: TAlignItems
}

export function Row({
  children,
  gap,
  justifyContent = 'center',
  alignItems
}: RowProps) {

  const style: CSSProperties = {
    justifyContent,
    width: "100%",
    height: "100%",
    boxSizing: 'border-box',
    padding: '4px'
  };

  gap && (style.gap = gap);
  alignItems && (style.alignItems = alignItems);

  return (
    <div
      className="flex flex-row"
      style={style}
    >
      {children}
    </div>
  )
}
