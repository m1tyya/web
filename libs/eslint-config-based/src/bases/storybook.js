const { extensionsStorybook, matchAll } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

const storybook = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsStorybook()),
			rules: {},
		},
	],
});

module.exports = storybook;
