import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// import postcss from 'rollup-plugin-postcss'
// import simpleVars from 'postcss-simple-vars'
// import mantinePreset from 'postcss-preset-mantine'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'ComponentsLibrary',
      fileName: 'components-library',
    },
    rollupOptions : {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    // postcss({
    //   plugins: [
    //     mantinePreset(),
    //     simpleVars({
    //       variables: {
    //         'mantine-breakpoint-xs': '36em',
    //         'mantine-breakpoint-sm': '48em',
    //         'mantine-breakpoint-md': '62em',
    //         'mantine-breakpoint-lg': '75em',
    //         'mantine-breakpoint-xl': '88em',
    //       },
    //     })
    //   ],
    //   extensions: ['.css'],
    //   extract: false,
    // }),
    react(),
    dts({ insertTypesEntry: true }),
  ],
})
