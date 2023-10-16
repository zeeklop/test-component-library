import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import type { ThemeProviderProps } from './ThemeProvider.types';

const theme = createTheme({});

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}
