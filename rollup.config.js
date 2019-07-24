import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'esm'
      },
      {
        file: pkg.unpkg,
        format: 'umd',
        name: 'example'
      }
    ],
    external: [],
    plugins: [
      resolve(), // remove this line if supported node 8 higher only
      commonjs(), // remove this line if supported node 8 higher only
      babel({
        runtimeHelpers: true, // remove this line if supported node 8 higher only
        exclude: 'node_modules/**'
      })
    ]
  }
]
