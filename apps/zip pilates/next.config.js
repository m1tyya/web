/** @type {import('next').NextConfig} */

export default {
	experimental: {
		fontLoaders: [
			{
				loader: `@next/font/google`,
				options: { display: `swap`, subsets: [`latin`] },
			},
		],
	},
	i18n: {
		defaultLocale: `pl`,
		locales: [`pl`],
	},
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: [`@web/eslint-config-based`, `@web/ui-react`, `@web/tsconfig`],
	webpack: (config) => {
		config.module.rules.push({
			issuer: /\.[jt]sx?$/,
			test: /\.svg$/i,
			use: [
				{
					loader: `@svgr/webpack`,
					options: {
						descProp: true,
						titleProp: true,
					},
				},
			],
		});

		return config;
	},
};
