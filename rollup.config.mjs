import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  commonjs(),
  json(),
  (
    production
      ? terser()
      : undefined
  ),
  nodeResolve({
    preferBuiltins: true
  }),
  svelte({
    compilerOptions: {
      dev: !production
    },
    emitCss: false,
    preprocess: autoPreprocess()
  }),
  typescript({
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    moduleResolution: 'node',
    resolveJsonModule: true
  }),
  production && terser()
];

export default [
  {
    input: 'src/console.ts',
    output: {
      file: 'lib/console.js',
      exports: 'default',
      format: 'cjs',
      sourcemap: true
    },
    external: [
      // Atom
      'atom',
      'electron'
    ],
    plugins: plugins
  }
];
