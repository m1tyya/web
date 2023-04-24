const { extensionsE2ETests, matchAll } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsE2ETests()),
			plugins: [`playwright`],
			rules: {},
		},
	],
});
