function matchAll(extensions) {
	const res = [];

	for (const extension of extensions) {
		res.push(`*.${extension}`);
	}

	return res;
}

function extensionsReact(isTyped = false) {
	return isTyped ? [`tsx`] : [`jsx`, `tsx`];
}

function extensionsModule(isEsm, isTyped = false) {
	const prefix = isEsm ? `m` : `c`;

	return isTyped ? [`${prefix}ts`] : [`${prefix}js`, `${prefix}ts`];
}

function extensionsJson() {
	return [`json`, `jsonc`, `json5`];
}

function extensionsStorybook(isTyped = false) {
	return isTyped ? [`stories.ts`] : [`stories.js`, `stories.ts`];
}

function extensionsUnitTests(isTyped = false) {
	return isTyped ? [`test.ts`] : [`test.js`, `test.ts`];
}

function extensionsE2ETests(isTyped = false) {
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
		...matchAll(extensionsModule(true)),
		...matchAll(extensionsModule(false)),
		...matchAll(extensionsReact()),
		...matchAll(extensionsStorybook()),
		...matchAll(extensionsUnitTests()),
		...matchAll(extensionsE2ETests()),
		...matchAll(extensionsJavascript()),
		...matchAll(extensionsSvelte()),
		...matchAll(extensionsTypescript()),
	];
}

function patternsTypescriptOnly() {
	return [
		...matchAll(extensionsModule(true, true)),
		...matchAll(extensionsModule(false, true)),
		...matchAll(extensionsReact(true)),
		...matchAll(extensionsStorybook(true)),
		...matchAll(extensionsUnitTests(true)),
		...matchAll(extensionsE2ETests(true)),
		...matchAll(extensionsSvelte()),
		...matchAll(extensionsTypescript()),
	];
}

function patternsTailwind() {
	return [
		...matchAll(extensionsJavascript()),
		...matchAll(extensionsTypescript()),
		...matchAll(extensionsReact()),
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
	patternsTypescriptOnly,
};
