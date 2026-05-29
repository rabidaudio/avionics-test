import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';

export default [
  {
    input: ['simulator.ts'],
    output: {
      dir: 'build',
      format: 'iife',
      name: 'simulator.js',
    },
    plugins: [css({ output: 'MyInstrument.css' }), resolve({browser: true}), typescript()]
  }
]