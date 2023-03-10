import { PluginOption } from 'vite';

const fileRegex = /\.(my-file-ext)$/;
export default function myPlugin (): PluginOption {
  return {
    name: 'transform-file',
    transform (src, id) {
      console.log('src', src, id);
      // if (fileRegex.test(id)) {
      //   return {
      //     code: src,
      //     map: null, // provide source map if available
      //   };
      // }
    },
  };
}
