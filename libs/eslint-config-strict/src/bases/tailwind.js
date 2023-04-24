const { patternsTailwind } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

const tailwind = defineConfig({
	overrides: [
		{
			files: patternsTailwind(),
			plugins: [`tailwindcss`],
			rules: {
				'tailwindcss/classnames-order': `warn`,
				'tailwindcss/enforces-negative-arbitrary-values': `warn`,
				'tailwindcss/enforces-shorthand': `warn`,
				// 'tailwindcss/no-custom-classname': `warn`,
			},
		},
	],
});

module.exports = tailwind;
