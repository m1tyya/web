const { defineConfig } = require(`eslint-define-config`);
const { patternsJavascript } = require('../utils/get-file-patterns');

const functional = defineConfig({
	overrides: [
		{
			files: patternsJavascript(),
			plugins: [`functional`],
			rules: {},
		},
	],
});

module.exports = functional;
