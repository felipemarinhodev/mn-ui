import React from 'react';
import './Typography.css'
import clsx from 'clsx';

export type TColors = 'default' | 'primary' | 'secondary' | 'blue' | 'purple' | 'red' | 'yellow';

export type TElements = 'p' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type TypographyProps = {
  element?: TElements;
  color?: TColors;
  children: React.ReactNode;
}

export function Typography ({
  element= 'p',
  color = 'default',
  children
}: TypographyProps) {

  const Element = element as any;
  return (
      <Element
        className={clsx({
          [element]: true,
          [`color-${color}`]: true
          }, 'typography')
        }
      >
        {children}
      </Element>
    );
}
