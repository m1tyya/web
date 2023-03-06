const defaultTheme = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/**/*.{html,js,ts,svelte}`],
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				hest: 'st',
			},
		},
	},
};
