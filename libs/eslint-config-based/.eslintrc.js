const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	extends: [`./src/bases/javascript.js`, `./src/bases/typescript.js`, `./src/bases/json.js`].map(
		(element) => require.resolve(element),
	),
	root: true,
});
