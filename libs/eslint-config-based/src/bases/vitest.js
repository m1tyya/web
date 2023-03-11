const { extensionsUnitTests, matchAll } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			env: {
				'vitest-globals/env': true,
			},
			files: matchAll(extensionsUnitTests()),
			plugins: [`vitest`, `vitest-globals`],
			rules: {},
		},
	],
});
