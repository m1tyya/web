const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	extends: ['./src/index.js'].map((element) => require.resolve(element)),
	root: true,
});
