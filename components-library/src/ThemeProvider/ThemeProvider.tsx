import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto" >
      {children}
    </MantineProvider>
  );
}
