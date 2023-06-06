import { injectGlobal } from '@twind/core';
import install from '@twind/with-next/app';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import { Footer, Header } from '~';
import {
	ade_display,
	alegreya,
	brunizer,
	cormorant,
	domaine_display,
	doppelganger,
	glamour,
	lato,
	merriweather,
	naibo,
	playfair,
	syne,
} from '~/constants';

import config, { styles_reset } from '../../twind.config';

const font_variables = `${syne.variable} ${glamour.variable} ${merriweather.variable} ${doppelganger.variable} ${alegreya.variable} ${lato.variable} ${naibo.variable} ${ade_display.variable} ${domaine_display.variable} ${playfair.variable} ${brunizer.variable} ${cormorant.variable}`;
const header_height = '40',
	header_padding_x = '7',
	header_padding_y = '6';

const no_overlay_workaround_script = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	injectGlobal(styles_reset);

	return (
		<>
			<Head>
				{process.env.NODE_ENV !== 'production' && (
					<script dangerouslySetInnerHTML={{ __html: no_overlay_workaround_script }} />
				)}
				<title>Zip Pilates Studio | Gdynia</title>
			</Head>
			<div className={font_variables}>
				<Header
					background_color='bg'
					height={header_height}
					is_sticky
					padding_x={header_padding_x}
					padding_y={header_padding_y}
				/>
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}

export default install(config, MyApp);
