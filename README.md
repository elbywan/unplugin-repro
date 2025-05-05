# unplugin-repro

## Repro

1) Install yarn berry (or use corepack)
2) `yarn install`
3) `yarn generate-imports`
4) `yarn build`

```bash
# This is flaky, will fail at some point if run multiple times
yarn build
```

```bash
(… ✂️ …)

ERROR in ./src/imports/9995.ts 1:0-30
  × Error: ENOENT: no such file or directory, open '/Users/julien.elbaz/dev/experiments/unplugin-repro2/node_modules/.virtual/a%3Fvirtual9995'
  │

 @ /Users/julien.elbaz/dev/experiments/unplugin-repro2/src/imports|lazy|/^\.\/.*\.ts$/|groupOptions: {}|namespace object
 @ ./src/index2.ts

ERROR in ./src/imports/9996.ts 1:0-30
  × Error: ENOENT: no such file or directory, open '/Users/julien.elbaz/dev/experiments/unplugin-repro2/node_modules/.virtual/a%3Fvirtual9996'
  │

 @ /Users/julien.elbaz/dev/experiments/unplugin-repro2/src/imports|lazy|/^\.\/.*\.ts$/|groupOptions: {}|namespace object
 @ ./src/index2.ts

ERROR in ./src/imports/9997.ts 1:0-30
  × Error: ENOENT: no such file or directory, open '/Users/julien.elbaz/dev/experiments/unplugin-repro2/node_modules/.virtual/a%3Fvirtual9997'
  │

 @ /Users/julien.elbaz/dev/experiments/unplugin-repro2/src/imports|lazy|/^\.\/.*\.ts$/|groupOptions: {}|namespace object
 @ ./src/index2.ts

ERROR in ./src/imports/9998.ts 1:0-30
  × Error: ENOENT: no such file or directory, open '/Users/julien.elbaz/dev/experiments/unplugin-repro2/node_modules/.virtual/a%3Fvirtual9998'
  │

 @ /Users/julien.elbaz/dev/experiments/unplugin-repro2/src/imports|lazy|/^\.\/.*\.ts$/|groupOptions: {}|namespace object
 @ ./src/index2.ts

ERROR in ./src/imports/9999.ts 1:0-30
  × Error: ENOENT: no such file or directory, open '/Users/julien.elbaz/dev/experiments/unplugin-repro2/node_modules/.virtual/a%3Fvirtual9999'
  │

 @ /Users/julien.elbaz/dev/experiments/unplugin-repro2/src/imports|lazy|/^\.\/.*\.ts$/|groupOptions: {}|namespace object
 @ ./src/index2.ts

Rspack 1.3.8 compiled with 10000 errors in 12.99 s
```
