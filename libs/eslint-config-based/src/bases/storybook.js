const { extensionsStorybook, matchAll } = require('../utils/get-file-patterns');

const { defineConfig } = require(`eslint-define-config`);

const storybook = defineConfig({
	overrides: [
		{
			env: {
				browser: true,
				es2021: true,
				node: true,
			},
			files: matchAll(extensionsStorybook({ isTyped: false })),
			rules: {},
		},
	],
});

module.exports = storybook;
