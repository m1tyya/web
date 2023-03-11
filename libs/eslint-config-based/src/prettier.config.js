/** @type {import("prettier").Config} */
module.exports = {
	bracketSameLine: true,
	endOfLine: `lf`,
	jsxSingleQuote: true,
	plugins: [`@svgr/plugin-prettier`],
	printWidth: 100,
	singleQuote: true,
	trailingComma: `all`,
	useTabs: true,
};
