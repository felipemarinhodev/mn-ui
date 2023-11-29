import React, { InputHTMLAttributes, useState } from 'react';
import './Checkbox.css';

export type CheckboxProps = {
  labelFor?: string;
  label?: string;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck: (status: boolean) => void;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>


export function Checkbox({
  onCheck,
  labelFor = "",
  label = "",
  isChecked = false,
  value,
  disabled = false,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked
    setChecked(status)
    onCheck(status)
  }

  return (
    <div className={disabled ? "container-disabled" :"container"}>
      <input
        type='checkbox'
        id={labelFor}
        checked={checked}
        onChange={onChange}
        value={value}
        className='checkbox'
        disabled={disabled}
        {...props}
      />
      {label && (
        <label
          htmlFor={labelFor}
          className={disabled ? 'label-disabled' : '' }
        >
          {label}
        </label>
      )}
    </div>
  );
}
