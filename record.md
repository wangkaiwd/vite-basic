### Why execute `tsc` before `vite build` command

* [No Emit](https://www.typescriptlang.org/tsconfig/#noEmit)

As a source code type-checker to find type problem ahead of time.

### How to split chunks to avoid warning

### Dependency pre-bundling

* CommonJS and UMD compatibility
  * convert CommonJS or UMD dependencies into ESM first
* Performance
  * converts ESM dependencies with many internal modules into a single module to improve subsequent page load performance
