import {createRequire} from 'module';

export const requireResolve = (filename: string) => {
	const require = createRequire(import.meta.url);
	return require.resolve(filename);
};
