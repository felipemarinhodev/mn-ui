import React from "react";
import "./Button.css";
import clsx from "clsx";

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  icon?: JSX.Element;
  onClick: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void;
  outline?: boolean;
  fullSize?: boolean;
  content?: React.ReactNode;
  className?: string;
}

export function Button({
  text,
  disabled,
  icon,
  onClick,
  outline = false,
  fullSize = false,
  content,
  className
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx({
        button: !outline,
        buttonDark: outline,
        fullSize: fullSize,
        defaultSize: !fullSize,
      }, className)}
    >
      {icon && icon}
      {text}
      {!!content && content}
    </button>
  );
}

