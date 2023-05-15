const { patternsTypescriptOnly } = require(`../utils/get-file-patterns`);

const { defineConfig } = require(`eslint-define-config`),
	vitest = defineConfig({
		overrides: [
			{
				files: patternsTypescriptOnly(),
				parser: `@typescript-eslint/parser`,
				plugins: [`@typescript-eslint`, `sort`],
				rules: {
					'@typescript-eslint/array-type': [
						`warn`,
						{
							default: `generic`,
						},
					],
					'@typescript-eslint/ban-ts-comment': `warn`,
					'@typescript-eslint/ban-types': `warn`,
					'@typescript-eslint/class-literal-property-style': `warn`,
					'@typescript-eslint/consistent-generic-constructors': `warn`,
					'@typescript-eslint/consistent-indexed-object-style': `warn`,
					'@typescript-eslint/consistent-type-assertions': [
						`warn`,
						{ assertionStyle: `as`, objectLiteralTypeAssertions: `never` },
					],
					'@typescript-eslint/consistent-type-definitions': [`warn`, `type`],
					'@typescript-eslint/consistent-type-exports': [
						`warn`,
						{ fixMixedExportsWithInlineTypeSpecifier: true },
					],
					'@typescript-eslint/consistent-type-imports': [
						`warn`,
						{ fixStyle: `inline-type-imports` },
					],
					'@typescript-eslint/dot-notation': `warn`,
					'@typescript-eslint/explicit-function-return-type': [
						`warn`,
						{ allowHigherOrderFunctions: false },
					],
					'@typescript-eslint/explicit-member-accessibility': `warn`,
					'@typescript-eslint/method-signature-style': [`warn`, `property`],
					'@typescript-eslint/naming-convention': [
						`warn`,
						{
							format: [`snake_case`],
							selector: [`default`],
						},
						{
							format: [`snake_case`],
							selector: `objectLiteralMethod`,
						},
						{
							format: [`snake_case`],
							prefix: [`is_`, `has_`, `can_`],
							selector: [`variableLike`],
							types: [`boolean`],
						},
						{
							format: [`UPPER_CASE`, `snake_case`],
							modifiers: [`const`],
							selector: `variable`,
						},
						{
							format: [`PascalCase`],
							selector: `typeLike`,
						},
						{
							format: [`StrictPascalCase`, `snake_case`],
							selector: [`function`],
						},
						{
							format: null,
							selector: `objectLiteralProperty`,
						},
						{
							format: [`UPPER_CASE`],
							selector: [`enum`],
						},
						{
							format: [`snake_case`],
							modifiers: [`destructured`],
							selector: [`default`],
						},
						{
							format: [`snake_case`],
							leadingUnderscore: `require`,
							modifiers: [`private`],
							selector: [`memberLike`],
						},
					],
					'@typescript-eslint/no-base-to-string': `warn`,
					'@typescript-eslint/no-confusing-non-null-assertion': `warn`,
					'@typescript-eslint/no-confusing-void-expression': `warn`,
					'@typescript-eslint/no-duplicate-enum-values': `warn`,
					'@typescript-eslint/no-dynamic-delete': `warn`,
					'@typescript-eslint/no-explicit-any': `warn`,
					'@typescript-eslint/no-floating-promises': `warn`,
					'@typescript-eslint/no-for-in-array': `warn`,
					'@typescript-eslint/no-inferrable-types': `warn`,
					'@typescript-eslint/no-misused-promises': `warn`,
					'@typescript-eslint/no-namespace': `warn`,
					'@typescript-eslint/no-non-null-asserted-nullish-coalescing': `warn`,
					'@typescript-eslint/no-non-null-asserted-optional-chain': `warn`,
					'@typescript-eslint/no-non-null-assertion': `warn`,
					'@typescript-eslint/no-redundant-type-constituents': `warn`,
					'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
						`warn`,
						{
							allowComparingNullableBooleansToFalse: false,
							allowComparingNullableBooleansToTrue: false,
						},
					],
					'@typescript-eslint/no-unnecessary-condition': [
						`warn`,
						{
							allowConstantLoopConditions: true,
						},
					],
					'@typescript-eslint/no-unnecessary-qualifier': `warn`,
					'@typescript-eslint/no-unnecessary-type-arguments': `warn`,
					'@typescript-eslint/no-unnecessary-type-assertion': `warn`,
					'@typescript-eslint/no-unnecessary-type-constraint': `warn`,
					'@typescript-eslint/no-unsafe-declaration-merging': `warn`,
					'@typescript-eslint/prefer-as-const': `warn`,
					'@typescript-eslint/prefer-enum-initializers': `warn`,
					'@typescript-eslint/prefer-function-type': `warn`,
					'@typescript-eslint/prefer-includes': `warn`,
					'@typescript-eslint/prefer-nullish-coalescing': `warn`,
					'@typescript-eslint/prefer-optional-chain': `warn`,
					'@typescript-eslint/prefer-readonly': `warn`,
					'@typescript-eslint/prefer-reduce-type-parameter': `warn`,
					'@typescript-eslint/prefer-regexp-exec': `warn`,
					'@typescript-eslint/prefer-string-starts-ends-with': `warn`,
					'@typescript-eslint/require-array-sort-compare': `warn`,
					'@typescript-eslint/restrict-plus-operands': [`warn`, { checkCompoundAssignments: true }],
					'@typescript-eslint/restrict-template-expressions': `warn`,
					'@typescript-eslint/sort-type-constituents': `warn`,
					'@typescript-eslint/strict-boolean-expressions': [
						`warn`,
						{
							allowNullableEnum: false,
							allowNumber: false,
							allowString: false,
						},
					],
					'@typescript-eslint/switch-exhaustiveness-check': `warn`,
					'@typescript-eslint/triple-slash-reference': [
						`warn`,
						{
							lib: `never`,
							path: `never`,
							types: `prefer-import`,
						},
					],
					'canonical/prefer-inline-type-import': `warn`,
					'etc/no-assign-mutated-array': `warn`,
					'sort/type-properties': `warn`,
				},
			},
		],
	});

module.exports = vitest;
