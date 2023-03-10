import { PluginOption } from 'vite';

export default function myPlugin (): PluginOption {
  return {
    name: 'transform-file',
    apply: 'build',
    transform (src, id) {
    },
  };
}
