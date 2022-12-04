import { transform } from 'esbuild';

transform('let x: number = 1', { loader: 'ts' })
  .then((value) => {
    console.log('value', value);
  });
