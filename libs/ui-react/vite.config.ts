import { resolve } from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: resolve(__dirname, `index.ts`),
			fileName: (format) => `index.${format}.js`,
			formats: [`es`],
			name: `ui-react`,
		},
		rollupOptions: {
			external: Object.keys(packageJson.peerDependencies),
			output: {
				globals: {
					react: `React`,
					'react-dom': `ReactDOM`,
				},
			},
		},
		sourcemap: true,
		target: `esnext`,
	},
	plugins: [react(), dts({ include: [`src`] }), tsConfigPaths()],
});
