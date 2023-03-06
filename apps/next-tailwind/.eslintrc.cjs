const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	extends: ['@web/eslint-config-based'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
	},
	root: true,
});
