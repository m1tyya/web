const { patternsTypescript } = require('../utils/get-file-patterns');

const { defineConfig } = require(`eslint-define-config`);

const typescript = defineConfig({
	overrides: [
		{
			env: {
				es2021: true,
				node: true,
			},
			files: patternsTypescript(),
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint', `canonical`, `sort`, `typescript-sort-keys`],
			rules: {
				'@typescript-eslint/array-type': [
					`warn`,
					{
						default: `generic`,
					},
				],
				'@typescript-eslint/dot-notation': 'warn',
				'@typescript-eslint/explicit-function-return-type': [`warn`, {}],
				'@typescript-eslint/method-signature-style': [`warn`, `property`],
				'@typescript-eslint/naming-convention': [
					`warn`,
					{
						format: [`UPPER_CASE`, `strictCamelCase`, `StrictPascalCase`],
						leadingUnderscore: `allow`,
						selector: `variable`,
					},
				],

				'@typescript-eslint/no-array-constructor': `warn`,
				'@typescript-eslint/no-explicit-any': `warn`,
				'@typescript-eslint/no-for-in-array': `warn`,
				'@typescript-eslint/no-restricted-imports': [
					`error`,
					{
						message: `Import from index.`,
						patterns: [`~/**/*`],
					},
				],
				'@typescript-eslint/no-useless-constructor': `warn`,
				'@typescript-eslint/padding-line-between-statements': [
					`warn`,
					{
						blankLine: `always`,
						next: `return`,
						prev: `*`,
					},
				],
				'@typescript-eslint/quotes': [`warn`, `backtick`],
				'@typescript-eslint/sort-type-constituents': `warn`,
				'@typescript-eslint/triple-slash-reference': [
					`warn`,
					{
						lib: `never`,
						path: `never`,
						types: `prefer-import`,
					},
				],
				// 'canonical/prefer-inline-type-import': `warn`,
				'sort/type-properties': `warn`,
			},
		},
	],
});

module.exports = typescript;
