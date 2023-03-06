import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

export default defineConfig({
	presets: [presetAutoprefix(), presetTailwind()],
	theme: {
		extend: {
			colors: {
				bg: `#F0EDE4`,
			},
			fontFamily: {
				text: [`var(--font-syne)`],
				title: [`var(--font-ade-display)`],
			},
		},
	},
});
