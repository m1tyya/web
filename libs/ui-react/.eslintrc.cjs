module.exports = {
	extends: ['@web/eslint-config-based'],
	parserOptions: {
		project: ['tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
	},
	root: true,
};
