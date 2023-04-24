const { extensionsHtml, matchAll } = require(`../utils/get-file-patterns`),
	{ defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsHtml()),
			parser: `@html-eslint/parser`,
			parserOptions: {
				extraFileExtensions: [`.svg`, `.html`],
			},
			plugins: [`@html-eslint`],
			rules: {
				'@html-eslint/id-naming-convention': `warn`,
				'@html-eslint/indent': [`warn`, `tab`],
				'@html-eslint/no-multiple-empty-lines': [`warn`, { max: 1 }],
				'@html-eslint/quotes': [`warn`, `single`],
				'no-trailing-spaces': `warn`,
			},
		},
	],
});
