import { type StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
	addons: [
		`@storybook/addon-links`,
		`@storybook/addon-essentials`,
		`@storybook/addon-interactions`,
		`@storybook/addon-svelte-csf`,
	],
	core: {
		builder: `@storybook/builder-vite`,
	},
	docs: {
		autodocs: `tag`,
	},
	features: {
		storyStoreV7: true,
	},
	framework: {
		name: `@storybook/svelte-vite`,
		options: {},
	},
	stories: [`../src/**/*.mdx`, `../src/**/*.stories.@(js|jsx|ts|tsx|svelte)`],
};
export default config;
