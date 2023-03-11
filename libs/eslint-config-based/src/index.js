const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		`./bases/functional`,
		`./bases/html`,
		`./bases/imports`,
		`./bases/javascript`,
		`./bases/json`,
		`./bases/package-json.js`,
		`./bases/playwright`,
		`./bases/react`,
		`./bases/regex`,
		`./bases/storybook`,
		`./bases/tailwind`,
		`./bases/typescript`,
		`./bases/typescript-only`,
		`./bases/next`,
		`./bases/vitest`,
	].map((element) => require.resolve(element)),
	ignorePatterns: [`./dist`, `./build`, `./node_modules`],
	noInlineConfig: true,
	parser: `@typescript-eslint/parser`,
	parserOptions: {
		ecmaVersion: `latest`,
		sourceType: `module`,
	},
	reportUnusedDisableDirectives: true,
});
