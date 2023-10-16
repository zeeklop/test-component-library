import type { ReactNode } from 'react';
import type { MantineProviderProps } from '@mantine/core';

export type ThemeProviderProps = MantineProviderProps & {
  children: ReactNode;
};
