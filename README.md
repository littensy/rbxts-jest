<p align="center">
  <p align="center">
    <img width="150" height="150" src="https://github.com/littensy/rbxts-jest/blob/main/assets/logo.png?raw=true" alt="Logo">
  </p>
  <h1 align="center"><b>@rbxts/jest</b></h1>
  <p align="center">
    TypeScript type definitions for Jest Lua.
    <br />
    <a href="https://npmjs.com/package/@rbxts/jest"><strong>npm package →</strong></a>
  </p>
</p>

TypeScript type definitions for [Jest Lua](https://github.com/jsdotlua/jest-lua) and [roblox-ts](https://roblox-ts.com), sourced from the official Jest types. Currently, `jest` and `jest-globals` are ported, while `jest-benchmark` is not yet available.

See the [Jest Lua documentation](https://jsdotlua.github.io/jest-lua/) for more information on how to use Jest Lua.

## Setup

Install Jest and Jest Globals with your package manager of choice:

```sh
npm install @rbxts/jest @rbxts/jest-globals
yarn add @rbxts/jest @rbxts/jest-globals
pnpm add @rbxts/jest @rbxts/jest-globals # 🛑 See below
```

Then, add the following to your Rojo project file, under the `node_modules` folder:

```json
"node_modules": {
  "$className": "Folder",
  "@rbxts": {
    "$path": "node_modules/@rbxts"
  },
  "@rbxts-js": {
    "$path": "node_modules/@rbxts-js"
  }
}
```

### Usage with pnpm

If you're using pnpm as your package manager, you'll need to create a `.npmrc` file in the root of your project with the following content:

```ini
node-linker=hoisted
```

## License

This project is licensed under the [MIT license](LICENSE).
