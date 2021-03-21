https://github.com/webpack-contrib/terser-webpack-plugin/issues/310

Test with minification enabled and disabled.  When minification is
disabled, the sourcemap file contains all included files and source
contents.  When minification is enabled, the sourcemap loses contents.

```bash
jq . < pack.js.map
```
