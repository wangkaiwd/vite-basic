## Esbuild

### Esbuild Plugin

> [Plugins](https://esbuild.github.io/plugins/)

* filter: go regular expression syntax
* namespace: "file" files on the file system, otherwise is virtual modules
* onResolve: run on each import in each module that esbuild builds. The callback can customize how esbuild does path
	resolution.
* onLoad: run for each unique path/namespace pair that has not been marked as external. Return the contents of modules
	and tell esbuild how to interpret it
