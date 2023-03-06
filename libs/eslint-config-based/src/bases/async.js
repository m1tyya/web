const { defineConfig } = require('eslint-define-config');

const { patternsJavascript } = require(`../utils/get-file-patterns.js`);

const async = defineConfig({
	overrides: [
		{
			files: patternsJavascript(),
			plugins: ['promise', 'unicorn'],
			rules: {
				'promise/prefer-await-to-then': `warn`,
				'unicorn/no-unnecessary-await': `warn`,
			},
		},
	],
});

module.exports = async;
