import type { PluginOption } from 'vite';
import svgrCore from '@svgr/core';
import fsp from 'node:fs/promises';
import { transformWithEsbuild } from 'vite';

const svgReg = /\.svg$/;

interface SvgrOptions {

}

const svgr = (options?: SvgrOptions): PluginOption => {
  return {
    name: 'svgr',
    // why can't use load
    async transform (code, id) {
      if (svgReg.test(id)) { // match svg file
        const svgCode = await fsp.readFile(id, { encoding: 'utf-8' });
        const componentCode = await svgrCore.transform(svgCode, { icon: true }, { componentName: 'SvgComponent' });
        // compile jsx code
        // normal jsx file will be handled by .jsx extension logic
        const result = await transformWithEsbuild(componentCode, id, { loader: 'jsx' });
        return {
          code: result.code
        };
      }
    }
  };
};

export default svgr;
