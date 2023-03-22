import install from '@twind/with-next/app';
import { type AppProps } from 'next/app';
import { Syne } from 'next/font/google';
import localFont from 'next/font/local';

import config from '../../twind.config';

export const ade_display = localFont({
	src: '../../public/fonts/ade-display.woff2',
	variable: '--font-ade-display',
});

export const syne = Syne({ variable: '--font-syne' });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}

export default install(config, MyApp);
