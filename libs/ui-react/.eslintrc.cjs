module.exports = {
	extends: ['@web/eslint-config-based'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['tsconfig.eslint.json'],
	},
	root: true,
}