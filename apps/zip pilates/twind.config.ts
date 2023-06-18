import { type CSSBase, defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';

import { fluid_type_scale, type FluidType, type FluidTypeScale, weight_scale } from '~';

const font_weights_naming: Array<string> = [
		`microline`,
		`hairline`,
		`thin`,
		`ultralight`,
		`extralight`,
		`light`,
		`semilight`,
		`regular`,
		`book`,
		`medium`,
		`550`,
		`demibold`,
		`semibold`,
		`bold`,
		`heavy`,
		`extrabold`,
		`ultrabold`,
		`black`,
		`extrablack`,
		`ultrablack`,
	],
	fluid_type_defaults: FluidType = {
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
		steps: [`xs`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`] as const,
	},
	fluid_typography = fluid_type_scale(fluid_type_scale_defaults, fluid_type_defaults);

export const styles_reset: CSSBase = {
	'*': {
		'background-position': `center center`,
		'background-repeat': `no-repeat`,
		'border-color': `transparent`,
		'border-style': `solid`,
		'border-width': `0`,
		'box-sizing': `border-box`,
		margin: `0`,
		position: `relative`,
	},
	a: {
		color: `inherit`,
		'text-decoration': `inherit`,
	},
	address: {
		'font-style': `inherit`,
	},
	body: {
		'font-size': `1.6rem`,
		'line-height': `inherit`,
		margin: `0`,
	},
	'body::-webkit-scrollbar': {
		display: `none`,
	},
	"button,[type='button'],[type='reset'],[type='submit']": {
		'-webkit-appearance': `none`,
		appearance: `none`,
		'background-color': `transparent`,
		'background-image': `none`,
		cursor: `pointer`,
	},
	'button,input,optgroup,select,textarea': {
		color: `inherit`,
		'font-family': `inherit`,
		'font-size': `100%`,
		'font-weight': `inherit`,
		'line-height': `inherit`,
		margin: `0`,
		padding: `0`,
	},
	'button:focus': {
		outline: `none`,
	},
	div: {
		display: `flow-root`,
	},
	'h1,h2,h3,h4,h5,h6': {
		'font-size': `inherit`,
		'font-weight': `inherit`,
	},
	html: {
		'-moz-text-size-adjust': `none`,
		'-ms-overflow-style': `none`,
		'-webkit-text-size-adjust': `none`,
		'font-size': `62.5%`,
		'line-height': `1.5`,
		'scrollbar-width': `none`,
		'tab-size': `4`,
		'text-size-adjust': `none`,
	},
	'iframe:focus-visible': {
		outline: `inherit`,
	},
	img: {
		'object-fit': `contain`,
	},
	'img,svg,video,canvas,audio,iframe,embed,object': {
		display: `block`,
		'vertical-align': `middle`,
	},
	input: {
		display: `block`,
	},
	'ol,ul,menu': {
		'list-style': `none`,
		margin: `0`,
		padding: `0`,
	},
};

export default defineConfig({
	presets: [presetTailwind({ disablePreflight: true })],
	rules: [
		[
			`truncate-`,
			({ $$ }): CSSBase => ({
				'-webkit-box-orient': `vertical`,
				'-webkit-line-clamp': $$,
				display: `-webkit-box`,
				overflow: `hidden`,
				'text-overflow': `clip`,
			}),
		],
		[
			`text_stroke`,
			{
				'-webkit-text-stroke': `3px #4E4132`,
			},
		],
		[
			`rotate`,
			{
				'writing-mode': `vertical-lr`,
			},
		],
	],
	theme: {
		extend: {
			colors: {
				bg: `#F0EDE4`,
				brown_light: `#c5b69a`,
				light2: `#fefae0`,
				primary: `#606c38`,
				'primary-darker': `#525C30`,
				'primary-lighter': `#8B9D51`,
				secondary: `#44376C`,
				'secondary-darker': `#3A2F5D`,
				'secondary-lighter': `#59478D`,
				selected: `#655049`,
				silver: `#E0DED6`,
				test: `oklch(70% 0.144 152.47)`,
				text: `#766C3E`,
				text_darker: `#49411D`,
			},
			content: {
				divider: `url('/vectors/divider.svg')`,
			},
			fontFamily: {
				domaine: `var(--font-domaine)`,
				elegant: `var(--font-brunizer)`,
				heading: `var(--font-cormorant)`,
				heading2: `var(--font-playfair)`,
				merri: `var(--font-merri)`,
				naibo: `var(--font-naibo)`,
				text: `var(--font-lato)`,
			},
			fontSize: {
				...fluid_typography,
			},
			fontWeight: {
				...weight_scale(),
			},
			padding: {
				button_x: `5rem`,
				button_y: `.8rem`,
				page_horizontal: `15px`,
				page_vertical: `30px`,
			},
			spacing: {
				...fluid_typography,
			},
		},
	},
});
