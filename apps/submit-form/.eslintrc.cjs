const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	extends: [`@m1tyya/eslint-config-strict`],
	parserOptions: {
		project: [`tsconfig.eslint.json`],
		tsconfigRootDir: __dirname,
	},
	root: true,
	rules: {},
});
