const { extensionsUnitTests, matchAll } = require('../utils/get-file-patterns');

const { defineConfig } = require(`eslint-define-config`);

const vitest = defineConfig({
	overrides: [
		{
			env: {
				es2021: true,
				node: true,
				'vitest-globals/env': true,
			},
			files: matchAll(extensionsUnitTests({ isTyped: false })),
			plugins: [`vitest`, `vitest-globals`],
		},
	],
});

module.exports = vitest;
