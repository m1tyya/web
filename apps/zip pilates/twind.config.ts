import { type CSSBase, defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';

import { fluid_type_scale, type FluidType, type FluidTypeScale } from '~';

const fluid_type_defaults: FluidType = {
		max_screen_width: 1400,
		min_screen_width: 370,
		precision: 2,
		rem_value: 10,
	},
	fluid_type_scale_defaults: FluidTypeScale = {
		base_step: `base`,
		base_value_max: 19,
		base_value_min: 16,
		prefix: `fluid`,
		scale_max: 1.25,
		scale_min: 1.15,
		steps: [`xs`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`] as const,
	},
	fluid_typography = fluid_type_scale(fluid_type_scale_defaults, fluid_type_defaults).reduce(
		(prev, next) => ({ ...prev, ...next }),
	);

export const styles_reset: CSSBase = {
	body: {
		'font-size': `1.6rem`,
	},
	'body::-webkit-scrollbar': {
		display: `none`,
	},
	div: {
		display: `flow-root`,
	},
	html: {
		'-moz-text-size-adjust': `none`,
		'-ms-overflow-style': `none`,
		'-webkit-text-size-adjust': `none`,
		'font-size': `62.5%`,
		'scrollbar-width': `none`,
		'text-size-adjust': `none`,
	},
	img: {
		'max-height': `100%`,
		'max-width': `100%`,
	},
	picture: {
		display: `block`,
		width: `max-content`,
	},
};

export default defineConfig({
	presets: [presetTailwind()],
	rules: [],
	theme: {
		extend: {
			colors: {
				bg: `#F0EDE4`,
				light: `#fefae0`,
				primary: `#606c38`,
				'primary-2': `#283618`,
				secondary: `#dda15e`,
				'secondary-2': `#bc6c25`,
				test: `oklch(70% 0.144 152.47)`,
				text: `#766C3E`,
				text_darker: `#49411D`,
			},
			fontFamily: {
				heading: `var(--font-ade-display)`,
				merri: `var(--font-merri)`,
				naibo: `var(--font-naibo)`,
				text: `var(--font-syne)`,
			},
			fontSize: {
				...fluid_typography,
			},
			padding: {
				button_x: `5rem`,
				button_y: `.8rem`,
				page_horizontal: `15px`,
				page_vertical: `30px`,
			},
		},
	},
});
