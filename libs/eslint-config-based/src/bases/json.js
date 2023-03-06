const { extensionsJson, matchAll } = require('../utils/get-file-patterns');
const prettierConfig = require('../prettier.config');

const { defineConfig } = require(`eslint-define-config`);

const json = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsJson()),
			parser: `jsonc-eslint-parser`,
			plugins: [`jsonc`, `prettier`],
			rules: {
				'jsonc/sort-array-values': [`warn`, { order: { type: `asc` }, pathPattern: `.*` }],
				'jsonc/sort-keys': [`warn`, { order: { type: `asc` }, pathPattern: `.*` }],
				'prettier/prettier': [`warn`, prettierConfig],
			},
		},
	],
});

module.exports = json;
