const defaultTheme = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/**/*.ts`, `./index.html`],
	theme: {
		fontFamily: {
			label: [`Work Sans`, defaultTheme.fontFamily.sans],
		},
	},
};
