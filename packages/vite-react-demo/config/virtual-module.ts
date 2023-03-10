import { PluginOption } from 'vite';

function virtualModule (): PluginOption {
  const virtualModuleId = 'virtual:my-module';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'virtual-module', // required, will show up in warnings and errors
    resolveId (id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load (id) {
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`;
      }
    },
  };
}

export default virtualModule;
