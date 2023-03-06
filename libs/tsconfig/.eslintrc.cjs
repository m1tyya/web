const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	extends: ['@web/eslint-config-based/json', '@web/eslint-config-based/javascript'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'script',
	},
	root: true,
});
