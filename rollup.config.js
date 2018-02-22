import babel from 'rollup-plugin-babel';

export default {
  input: 'src/scripts/main.js',
  output: {
    format: 'iife',
    file:'dist/bundle.js',
    sourcemap: false
  },
  plugins: [
   babel({
     exclude: 'node_modules/**',
   })
 ]
};
