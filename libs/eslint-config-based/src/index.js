const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	env: {
		commonjs: true,
	},
	extends: [
		'./bases/async',
		'./bases/functional',
		'./bases/html',
		'./bases/imports',
		'./bases/javascript',
		'./bases/json',
		'./bases/next',
		'./bases/playwright',
		'./bases/react',
		'./bases/regex',
		'./bases/storybook',
		'./bases/tailwind',
		'./bases/typescript',
		'./bases/vitest',
	].map((element) => require.resolve(element)),
	ignorePatterns: ['./dist', './build', './node_modules'],
	noInlineConfig: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	reportUnusedDisableDirectives: true,
});
