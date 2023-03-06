const { extensionsReact, matchAll } = require('../utils/get-file-patterns');

const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	overrides: [
		{
			files: matchAll(extensionsReact({ isTyped: false })),
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			plugins: [`react-hooks`, `react`, `sort-react-dependency-arrays`, `jsx-a11y`],
			rules: {
				'react/boolean-prop-naming': [
					`warn`,
					{
						message: `Use 'has' or 'is' before boolean prop name.`,
						propTypeNames: [`boolean`],
						validateNested: true,
					},
				],
				'react/destructuring-assignment': [`warn`, `always`],
				'react/function-component-definition': [
					`warn`,
					{
						namedComponents: `function-declaration`,
					},
				],
				'react/hook-use-state': `warn`,
				'react/jsx-boolean-value': [`warn`, `always`],
				'react/jsx-fragments': [`warn`, `syntax`],
				'react/jsx-key': `warn`,
				'react/jsx-pascal-case': `warn`,
				'react/jsx-sort-props': [
					`warn`,
					{
						ignoreCase: true,
					},
				],
				'react/no-array-index-key': `warn`,
				'react/no-children-prop': `error`,
				'react-hooks/exhaustive-deps': `off`,
				'sort-react-dependency-arrays/sort': `warn`,
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
});
