const { patternsJavascript } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

const imports = defineConfig({
	overrides: [
		{
			files: patternsJavascript(),
			plugins: [`import`, `simple-import-sort`, `unused-imports`],
			rules: {
				'import/first': `warn`,
				'import/newline-after-import': `warn`,
				'import/no-duplicates': [`warn`],
				'simple-import-sort/exports': `warn`,
				'simple-import-sort/imports': `warn`,
				'unused-imports/no-unused-imports': `warn`,
			},
		},
	],
});

module.exports = imports;
