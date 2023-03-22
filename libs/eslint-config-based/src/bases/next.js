const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			files: [`./src/pages/*`],
			plugins: [`import`],
			rules: {
				'import/no-default-export': `off`,
			},
		},
		{
			files: [`_app.tsx`, `_app.jsx`, `_document.tsx`, `_document.jsx`],
			rules: {
				'@typescript-eslint/quotes': [`warn`, `single`],
				'one-var': `off`,
			},
		},
	],
});
