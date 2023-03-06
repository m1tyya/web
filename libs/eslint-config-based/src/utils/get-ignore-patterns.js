function getIgnorePatternsDefault() {
	return [
		`**/.cache`,
		`**/.next`,
		`**/.svelte-kit`,
		`**/.yarn`,
		`**/${`node`}_modules`,
		`**/build`,
		`**/dist`,
		`**/storybook-static`,
	];
}

module.exports = { getIgnorePatternsDefault };
