const { defineConfig } = require(`eslint-define-config`);

const next = defineConfig({
	overrides: [
		{
			files: [`./src/pages/*`],
			plugins: [`import`],
			rules: {
				'import/no-default-export': `off`,
			},
		},
		{
			files: [`_app.tsx`, `_app.jsx`],
			rules: {
				'@typescript-eslint/quotes': [`warn`, `single`],
			},
		},
	],
});

module.exports = next;
