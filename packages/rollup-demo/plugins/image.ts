import type { Plugin } from 'rollup';
import fs from 'node:fs';
// resolveId: first,async
// how to parse image:
const image = (): Plugin => {
  return {
    name: 'image',
    load (id) {
      if (id.endsWith('.png')) {
        const source = fs.readFileSync(id);
        const base64 = source.toString('base64');
        // like webpack file-loader,url-loader
        // 1. base64
        // 2. filename string, can use as img url directly
        return `
          const img = 'data:image/png;base64,${base64}';
          export default img;
        `;
      }
      return null;
    }
  };
};

// resolveId, handle import url which is from image
export default image;
