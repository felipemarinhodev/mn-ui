import React from 'react';
import { SVGProps } from '../types';

type ArrowRightProps = SVGProps;

export function ArrowRight ({
    color="#f2f000",
    width="24",
    height="24"
  }: ArrowRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      width={width}
      height={height}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>

  );
}
