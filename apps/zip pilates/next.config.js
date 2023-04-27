import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const config = {
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
	images: {
		remotePatterns: [
			{
				hostname: `*.googleusercontent.com`,
				protocol: `https`,
			},
		],
	},
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: [`@m1tyya/eslint-config-strict`, `@m1tyya/ui-react`, `@m1tyya/tsconfig`],
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

const bundle_analyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === `true`,
});

export default bundle_analyzer(config);
