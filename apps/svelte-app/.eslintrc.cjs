
const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	extends: ['@web/eslint-config-based'],
	settings: {
		tailwindcss: {
			config: `tailwind.config.cjs`,
		},
	},
	root: true
});
