const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	extends: [`@m1tyya/eslint-config-strict`],
	ignorePatterns: [`apps`, `libs`],
	parserOptions: {
		project: [`tsconfig.eslint.json`],
		tsconfigRootDir: __dirname,
	},
	root: true,
});
