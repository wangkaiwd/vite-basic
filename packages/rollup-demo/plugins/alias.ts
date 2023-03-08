import type { Plugin } from 'rollup';
import { objectKeys } from './utils';

const alias = (config: Record<string, string>): Plugin => {
  const keys = objectKeys(config);
  return {
    // the name of the plugin, for use in error messages and warnings.
    name: 'alias',
    // Defines a custom resolver.
    // https://rollupjs.org/plugin-development/#resolveid
    resolveId (source, importer, options) {
      const key = keys.find(key => source.includes(key));
      if (!key) {
        return null;
      }
      const updatedId = source.replace(key, config[key]);
      // https://rollupjs.org/plugin-development/#this-resolve
      return this.resolve(
        updatedId,
        importer,
        { skipSelf: true, ...options },
      ).then((resolved) => {
        return resolved || { id: updatedId };
      });
    }
  };
};

export default alias;
