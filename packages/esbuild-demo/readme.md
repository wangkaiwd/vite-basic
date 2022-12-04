## Esbuild Plugin

* filter: go regular expression syntax
* namespace: "file" files on the file system, otherwise is virtual modules
* onResolve: run on each import in each module that esbuild builds
* onLoad: run for each unique path/namespace pair that has not been marked as external
