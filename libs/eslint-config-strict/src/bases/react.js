const { extensionsReact, matchAll } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`);

module.exports = defineConfig({
	overrides: [
		{
			files: matchAll(extensionsReact()),
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			plugins: [`react-hooks`, `react`, `sort-react-dependency-arrays`, `jsx-a11y`, `react-perf`],
			rules: {
				'react/button-has-type': `warn`,
				'react/function-component-definition': [
					`warn`,
					{
						namedComponents: `function-declaration`,
					},
				],
				'react/jsx-boolean-value': [`warn`, `never`],
				'react/jsx-fragments': [`warn`, `syntax`],
				'react/jsx-handler-names': `warn`,
				'react/jsx-key': `warn`,
				'react/jsx-max-depth': [`warn`, { max: 5 }],
				'react/jsx-no-target-blank': `warn`,
				'react/jsx-pascal-case': `warn`,
				'react/jsx-sort-props': [
					`warn`,
					{
						ignoreCase: true,
					},
				],
				'react/no-array-index-key': `warn`,
				'react/no-children-prop': `error`,
				'react/no-multi-comp': `warn`,
				'react-hooks/exhaustive-deps': `warn`,
				'react-hooks/rules-of-hooks': `error`,
				'react-perf/jsx-no-jsx-as-prop': `warn`,
				'react-perf/jsx-no-new-array-as-prop': `warn`,
				'react-perf/jsx-no-new-function-as-prop': `warn`,
				'react-perf/jsx-no-new-object-as-prop': `warn`,
				'sort-react-dependency-arrays/sort': `warn`,
			},
		},
	],
	settings: {
		react: {
			version: `detect`,
		},
	},
});
