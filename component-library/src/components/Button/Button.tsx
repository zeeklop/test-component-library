import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps } from './Button.types';

export function Button({ children, variant, size, onClick, ...rest }: ButtonProps) {
  return (
    <MantineButton
      variant={variant}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MantineButton>
  );
}

Button.defaultProps = {
  variant: 'default',
  size: 'md',
};
