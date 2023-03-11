const { patternsJavascript } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

const regex = defineConfig({
	overrides: [
		{
			files: patternsJavascript(),
			plugins: [`unicorn`],
			rules: {
				'unicorn/better-regex': `warn`,
			},
		},
	],
});

module.exports = regex;
