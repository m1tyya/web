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
	],
});

module.exports = next;
