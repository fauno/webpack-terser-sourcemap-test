https://github.com/webpack-contrib/terser-webpack-plugin/issues/310

Test with minification enabled and disabled.  When minification is
disabled, the sourcemap file contains all included files and source
contents.  When minification is enabled, the sourcemap loses contents.

```bash
# Inspect the sourcemap
jq . < pack.js.map

# Minify manually for comparison
./node_modules/.bin/terser \
  --source-map url=pack.min.js.map,includeSources \
  --output pack.min.js \
  pack.js

jq . < pack.min.js.map
```
