import type { ReactNode } from 'react';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export type ButtonProps = MantineButtonProps & {
  children: ReactNode,
  onClick: () => void,
  variant?: string,
  size?: string,
};
