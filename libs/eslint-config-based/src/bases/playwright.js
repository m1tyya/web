const { extensionsE2ETests, matchAll } = require('../utils/get-file-patterns');

const { defineConfig } = require(`eslint-define-config`);

const playwright = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsE2ETests({ isTyped: false })),
			plugins: [`playwright`],
			rules: {},
		},
	],
});

module.exports = playwright;
