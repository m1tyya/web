function matchAll(extensions) {
	const res = [];
	for (const extension of extensions) {
		res.push(`*.${extension}`);
	}
	return res;
}

function extensionsReact({ isTyped }) {
	return isTyped ? [`tsx`] : [`jsx`, `tsx`];
}

function extensionsModule({ isEsm, isTyped }) {
	const prefix = isEsm ? `m` : `c`;
	return isTyped ? [`${prefix}ts`] : [`${prefix}js`, `${prefix}ts`];
}

function extensionsJson() {
	return [`json`, `jsonc`, `json5`];
}

function extensionsStorybook({ isTyped }) {
	return isTyped ? [`stories.ts`] : [`stories.js`, `stories.ts`];
}

function extensionsUnitTests({ isTyped }) {
	return isTyped ? [`test.ts`] : [`test.js`, `test.ts`];
}

function extensionsE2ETests({ isTyped }) {
	return isTyped ? [`test.ts`] : [`test.js`, `test.ts`];
}

function extensionsHtml() {
	return [`html`];
}

function extensionsJavascript() {
	return [`js`];
}

function extensionsTypescript() {
	return [`ts`];
}

function extensionsSvelte() {
	return [`svelte`];
}

function patternsJavascript() {
	return [
		...matchAll(extensionsReact({ isTyped: false })),
		...matchAll(extensionsStorybook({ isTyped: false })),
		...matchAll(extensionsUnitTests({ isTyped: false })),
		...matchAll(extensionsE2ETests({ isTyped: false })),
		...matchAll(extensionsJavascript()),
		...matchAll(extensionsSvelte()),
		...matchAll(extensionsTypescript()),
	];
}

function patternsTypescript() {
	return [
		...matchAll(extensionsReact({ isTyped: true })),
		...matchAll(extensionsStorybook({ isTyped: true })),
		...matchAll(extensionsUnitTests({ isTyped: true })),
		...matchAll(extensionsE2ETests({ isTyped: true })),
		...matchAll(extensionsSvelte()),
		...matchAll(extensionsTypescript()),
	];
}

function patternsTailwind() {
	return [
		...matchAll(extensionsJavascript()),
		...matchAll(extensionsTypescript()),
		...matchAll(extensionsReact({ isTyped: false })),
	];
}

module.exports = {
	extensionsE2ETests,
	extensionsHtml,
	extensionsJson,
	extensionsModule,
	extensionsReact,
	extensionsStorybook,
	extensionsUnitTests,
	matchAll,
	patternsJavascript,
	patternsTailwind,
	patternsTypescript,
};
