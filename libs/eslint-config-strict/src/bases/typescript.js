const { patternsJavascript } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			files: patternsJavascript(),
			parser: `@typescript-eslint/parser`,
			plugins: [`@typescript-eslint`, `canonical`, `typescript-sort-keys`],
			rules: {
				'@typescript-eslint/no-array-constructor': `warn`,
				'@typescript-eslint/no-extraneous-class': `warn`,
				'@typescript-eslint/no-restricted-imports': [
					`warn`,
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
						next: [`block-like`, `return`, `class`, `type`, `interface`, `throw`, `function`],
						prev: `*`,
					},
					{
						blankLine: `always`,
						next: `*`,
						prev: [`block-like`, `class`, `type`, `interface`, `function`],
					},
					{ blankLine: `always`, next: `*`, prev: `directive` },
					{ blankLine: `never`, next: `directive`, prev: `directive` },
					{ blankLine: `never`, next: `*`, prev: [`case`, `default`] },
				],
				'@typescript-eslint/prefer-optional-chain': `warn`,
				'@typescript-eslint/quotes': [`warn`, `backtick`],
				'canonical/sort-keys': [`warn`, `asc`, { natural: true }],
			},
		},
	],
});
