import React from 'react';
import './TextField.css';

import clsx from 'clsx';
import { TColors } from '../../Typography';

export type TextFieldProps = {
  icon?: React.ReactNode;
  iconRight?: boolean;
  outline?: TColors;
} & React.ComponentProps<'input'>

export function TextField ({
  icon,
  iconRight,
  readOnly,
  outline,
  ...props
}: TextFieldProps) {
  return (
    <div
      className={clsx({
        ['reverse']: iconRight,
        ['readonly']: readOnly,
        [`outline-color-${outline}`]: !!outline
      }, 'wrapper')}
    >
      {icon && icon}
      <input
        type='text'
        {...props} 
        className={clsx({ ['readonly']: readOnly })}
      />
    </div>
   );
}

