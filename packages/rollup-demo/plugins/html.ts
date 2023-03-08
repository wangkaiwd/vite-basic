import type { Plugin } from 'rollup';
// create html file then import bundle file
const html = (): Plugin => {
  return {
    name: 'html',
    generateBundle (options, bundle) {
      const entryChunk = bundle['index.js'];
      const { fileName } = entryChunk;
      const htmlSource = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body>
            <script src="./${fileName}"></script>
          </body>
        </html>
      `;
      this.emitFile({
        type: 'asset',
        fileName: 'index.html',
        name: 'Rollup HTML Asset',
        source: htmlSource
      });
    }
  };
};
export default html;

