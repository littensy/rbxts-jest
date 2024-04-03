<p align="center">
  <p align="center">
    <img width="150" height="150" src="https://github.com/littensy/rbxts-jest/blob/main/images/logo.png?raw=true" alt="Logo">
  </p>
  <h1 align="center"><b>@rbxts/jest</b></h1>
  <p align="center">
    TypeScript type definitions for Jest Lua.
    <br />
    <a href="https://npmjs.com/package/@rbxts/jest"><strong>npm package →</strong></a>
  </p>
</p>

TypeScript type definitions for [Jest Lua](https://github.com/jsdotlua/jest-lua) and [roblox-ts](https://roblox-ts.com), sourced from the official Jest types.

See the [Jest Lua documentation](https://jsdotlua.github.io/jest-lua/) for more information on how to use Jest Lua.

> [!NOTE]
> Currently, installing `@rbxts/jest` will also install `@rbxts/react-vendor` as a dependency. While Jest Lua does not need React Lua to run, `@rbxts/jest` reuses the React vendor package to avoid duplicating React and other internal modules. This may change in the future.

## Setup

```sh
npm install @rbxts/jest @rbxts/jest-globals
yarn add @rbxts/jest @rbxts/jest-globals
pnpm add @rbxts/jest @rbxts/jest-globals # 🛑 See below
```

### Usage with pnpm

If you're using pnpm as your package manager, you'll need to create a `.npmrc` file in the root of your project with the following content:

```ini
node-linker=hoisted
```

## Examples

TODO

## License

This project is licensed under the [MIT license](LICENSE).
