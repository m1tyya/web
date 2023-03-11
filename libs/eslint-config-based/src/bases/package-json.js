const { defineConfig } = require(`eslint-define-config`);
const { extensionsJson, matchAll } = require(`../utils/get-file-patterns`);

const functional = defineConfig({
	overrides: [
		{
			files: [`package.json`],
			parser: `eslint-plugin-package-json-dependencies`,
			plugins: [`package-json-dependencies`],
			rules: {
				'package-json-dependencies/no-missing-types': [`warn`, { excludePatterns: [`@web/*`] }],
			},
		},
	],
});

module.exports = functional;
