const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	extends: ['@m1tyya/eslint-config-strict/json', '@m1tyya/eslint-config-strict/javascript'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'script',
	},
	root: true,
});
