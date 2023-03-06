/** @type {import('next').NextConfig} */

export default {
	experimental: {
		fontLoaders: [
			{
				loader: '@next/font/google',
				options: { display: 'swap', subsets: ['latin'] },
			},
		],
	},
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: ['ui'],
};
