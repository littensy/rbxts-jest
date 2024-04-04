## Deviations

The source code has been modified to include the following changes:

- Dependencies shared between Jest Lua and React Lua are re-exported from `@rbxts/react-vendor` to avoid duplication.
- Occurrences of `__DEV__ = true` have been replaced with `__DEV__ = _G.__DEV__`.
