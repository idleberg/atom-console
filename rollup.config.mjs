import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import typescript from '@rollup/plugin-typescript';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  babel({
    extensions: ['.cjs', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
    babelHelpers: 'bundled',
  }),
  commonjs(),
  json(),
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
  typescript(),
  production && terser()
];

export default [
  {
    input: 'src/console.ts',
    output: {
      file: 'lib/console.js',
      exports: 'default',
      format: 'cjs',
      sourcemap: production ? false : true
    },
    external: [
      // Atom
      'atom',
      'electron'
    ],
    plugins: plugins
  }
];
