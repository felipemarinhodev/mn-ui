import React from 'react';
import { Column } from '../../Flex/Column';
import { Typography } from '../../Typography';
import { TextField } from '../TextField';
import { Alert } from '../../Icons/Alert';

export type TextInputProps = {
  label?: string
  error?: string
}

export function TextInput ({ label, error }: TextInputProps) {
  return (
    <Column gap={4} alignItems='flex-start' >
      <Typography>{label}</Typography>
      <TextField
        outline={!!error ? 'red' : 'default'}
        icon={error && <Alert />}
      />
      {!!error && <Typography element='label' color='red'>{error}</Typography>}

    </Column>
  );
}
