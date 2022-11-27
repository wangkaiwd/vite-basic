import esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const resolveRelativeUrl = (filePath: string) => {
  return path.resolve(__dirname, filePath);
};

esbuild.build({
  entryPoints: [resolveRelativeUrl('./index.ts')],
  bundle: true,
  write: true,
  outdir: resolveRelativeUrl('./dist')
})
  .then(({ errors, warnings }) => {
    if (errors.length === 0) {
      console.log('build successfully!');
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
