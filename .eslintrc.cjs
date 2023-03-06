const {defineConfig} = require('eslint-define-config');

module.exports = defineConfig({
	extends: ['@web/eslint-config-based'],
	ignorePatterns: ['apps', 'libs'],
	parserOptions: {   
		tsconfigRootDir: __dirname,
		project: ['tsconfig.eslint.json'],
	},
	root: true,
});
