import React from "react";
import { Column } from "../Flex/Column";
import { TColors, TElements, Typography } from "../Typography";

export type DataLabelProps = {
  title?: string;
  titleColor?: TColors;
  titleElement?: TElements; // Omit<TElements, 'p' | 'span' | 'label'>;
  text?: string;
  textColor?: TColors;
}

export function DataLabel ({
  title,
  titleColor='default',
  titleElement='h5',
  text,
  textColor='default'
}: DataLabelProps) {
  return (
  <Column alignItems="flex-start" gap={0}>
    <Typography element={titleElement} color={titleColor}>{title}</Typography>
    <Typography element="p" color={textColor}>{text}</Typography>
  </Column>
  );
}

