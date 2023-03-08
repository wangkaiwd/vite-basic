import type { Plugin } from 'rollup';
import { objectKeys } from './utils';

const replace = (map: Record<string, string>): Plugin => {
  const keys = objectKeys(map);
  const formattedMap = keys.reduce<Record<string, string>>((accumulator, key) => {
    accumulator[key] = JSON.stringify(map[key]);
    return accumulator;
  }, {});
  return {
    name: 'replace',
    // renderChunk: can be used to transform individual chunks
    transform (code, id) {
      const targetKey = keys.find(key => code.includes(key));
      if (targetKey) {
        code = code.replace(targetKey, formattedMap[targetKey]);
      }
      return code;
    }
  };
};

export default replace;

// { MODE: JSON.stringify('mode') }

// console.log('MODE',MODE)
