function getIgnorePatternsDefault() {
	return [
		`**/.cache`,
		`**/.next`,
		`**/.svelte-kit`,
		`**/${`node`}_modules`,
		`**/build`,
		`**/dist`,
		`**/storybook-static`,
	];
}

module.exports = { getIgnorePatternsDefault };
