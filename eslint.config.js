const eslint = require("@eslint/js");
const { defineConfig, globalIgnores } = require("eslint/config");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const roblox = require("eslint-plugin-roblox-ts");
const tseslint = require("typescript-eslint");

module.exports = defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	roblox.configs.tsRecommendedCompat,
	roblox.configs.recommended,
	prettierRecommended,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-declaration-merging": "off",
			"@typescript-eslint/no-empty-object-type": "off",
			"roblox-ts/no-any": "off",
			"roblox-ts/no-namespace-merging": "off",
		},
	},
	globalIgnores(["eslint.config.js"]),
);
