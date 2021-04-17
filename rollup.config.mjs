import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  babel(),
  commonjs(),
  json(),
  svelte({
    compilerOptions: {
      dev: !production
    },
    emitCss: false,
    preprocess: autoPreprocess()
  }),
  production && terser()
];

export default [
  {
    input: 'src/console.js',
    output: {
      dir: 'lib',
      exports: 'default',
      format: 'cjs',
      sourcemap: true
    },
    external: [
      'atom',
      'electron'
    ],
    plugins: plugins
  },

];
