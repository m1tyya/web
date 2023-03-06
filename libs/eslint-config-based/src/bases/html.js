const { extensionsHtml, matchAll } = require('../utils/get-file-patterns');

const { defineConfig } = require(`eslint-define-config`);

const html = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsHtml()),
			parser: `@html-eslint/parser`,
			plugins: [`@html-eslint`],
			rules: {
				'@html-eslint/id-naming-convention': [`warn`, `kebab-case`],
				'@html-eslint/indent': [`warn`, `tab`],
				'@html-eslint/no-multiple-empty-lines': [`warn`, { max: 1 }],
				'@html-eslint/quotes': [`warn`, `single`],
				'no-trailing-spaces': `warn`,
			},
		},
	],
});

module.exports = html;
