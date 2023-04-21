const defaultTheme = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [`./src/**/*.ts`, `./index.html`],
	darkMode: `class`,
	theme: {
		extend: {
			backgroundColor: {
				dark: `#0a0a0a`,
				light: `#f6f6f6`,
			},
			borderColor: {
				dark: `#414141`,
				light: `#e3e3e3`,
			},
			colors: {
				btn_dark: `#23262F`,
				btn_light: `#E5E5E5`,
				primary: `#0C46DA`,
				primary_brighter: `#1250ED`,
				primary_darker: `#2A73A3`,
			},
			textColor: {
				dark: `#F7F7F7`,
				light: `#1C1E21`,
				placeholder_dark: `#707070`,
				placeholder_light: ``,
			},
		},
		fontFamily: {
			label: [`Work Sans`, defaultTheme.fontFamily.sans],
		},
	},
};
