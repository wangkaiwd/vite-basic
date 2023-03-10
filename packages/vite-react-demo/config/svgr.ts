import type { PluginOption } from 'vite';
import svgrCore from '@svgr/core';
import fsp from 'node:fs/promises';
import esbuild from 'esbuild';

const svgReg = /\.svg$/;

interface SvgrOptions {

}

const svgr = (options?: SvgrOptions): PluginOption => {
  return {
    name: 'svgr',
    async transform (code, id) {
      if (svgReg.test(id)) { // match svg file
        const content = await fsp.readFile(id, { encoding: 'utf-8' });
        const newCode = await svgrCore.transform(content, { icon: true }, { componentName: 'SvgComponent' });
        const result = await esbuild.transform(newCode, { loader: 'jsx' });
        return {
          code: result.code
        };
      }
    }
  };
};

export default svgr;
