const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	plugins: [`unicorn`],
	rules: {
		'unicorn/filename-case': [`warn`, { case: `snakeCase` }],
	},
});
