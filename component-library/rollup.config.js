import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external({ includeDependencies: true }),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        exclude: 'node_modules/**',
      }),
      commonjs({ include: /node_modules/ }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        preferBuiltins: false,
      }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
];
