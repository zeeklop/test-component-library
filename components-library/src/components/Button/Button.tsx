import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export type ButtonProps = MantineButtonProps & {
  onClick: () => void;
  children: React.ReactNode;
  rest?: MantineButtonProps;
};

export function Button({ onClick, children, rest }: ButtonProps) {
  return (
    <MantineButton onClick={onClick} {...rest}>
      {children}
    </MantineButton>
  );
}
