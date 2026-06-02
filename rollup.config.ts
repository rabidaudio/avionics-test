import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';

export default [
  {
    input: 'MyInstrument.tsx',
    output: {
      dir: 'build',
      format: 'iife',
    },
    plugins: [css({ output: 'MyInstrument.css' }), resolve(), typescript()]
  },
  {
    input: 'src/simulator.js',
    output: {
      dir: 'build',
      format: 'iife',
      name: 'simulator.js',
    },
    plugins: [resolve(), typescript()]
  }
]
