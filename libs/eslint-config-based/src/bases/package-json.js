const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			files: [`package.json`],
			parser: `eslint-plugin-package-json-dependencies`,
			plugins: [`package-json-dependencies`],
			rules: {
				'package-json-dependencies/no-missing-types': [`warn`, { excludePatterns: [`@web/*`] }],
			},
		},
	],
});
