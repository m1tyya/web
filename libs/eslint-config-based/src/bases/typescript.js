const { patternsJavascript } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`),
	typescript = defineConfig({
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
							next: `return`,
							prev: `*`,
						},
					],
					'@typescript-eslint/prefer-optional-chain': `warn`,
					'@typescript-eslint/quotes': [`warn`, `backtick`],
					'canonical/sort-keys': [`warn`, `asc`, { natural: true }],
				},
			},
		],
	});

module.exports = typescript;
