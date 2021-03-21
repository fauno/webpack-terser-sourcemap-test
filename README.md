# Issue

https://github.com/webpack-contrib/terser-webpack-plugin/issues/310

With minification on, webpack-terser-plugin creates a sourcemap with
a single file and no sourcesContent.

# Tests

Test with minification enabled and disabled.  When minification is
disabled, the sourcemap file contains all included files and source
contents.  When minification is enabled, the sourcemap loses contents
and points to a single file.

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

# Working config

Turns out the issue was on the output configuration.  The filename can't
contain any path, only the filename.  Path must be on the `path` key.
It took me 8 hours to debug this so I'm leaving this here for posterity :)

Look at initial commit for the non-working version.
