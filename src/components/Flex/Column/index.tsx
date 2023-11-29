import React, { CSSProperties } from 'react';
import './Column.css';
import { TAlignItems, TJustifyContent } from '../types/types';

export type ColumnProps = {
  children: React.ReactNode;
  gap?: number;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  paddingY?: number;
  paddingX?: number | 'auto';
}

export function Column({
  children,
  gap,
  justifyContent = 'center',
  alignItems = 'center',
  paddingY,
  paddingX
}: ColumnProps) {

  const style: CSSProperties = {
    justifyContent,
    alignItems,
    height: '100%',
    width: '100%'
  };

  gap && (style.gap = gap);
  !!paddingY && (style.paddingTop = `${paddingY}px`)
  !!paddingY && (style.paddingBottom = `${paddingY}px`)
  !!paddingX && (style.paddingRight = `${paddingX}px`)
  !!paddingX && (style.paddingLeft = `${paddingX}px`)

  return (
    <div
      className="flex flex-column"
      style={style}
    >
      {children}
    </div>
  )
}
