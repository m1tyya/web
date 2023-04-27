import { injectGlobal } from '@twind/core';
import install from '@twind/with-next/app';
import { type AppProps } from 'next/app';
import Head from 'next/head';

import { Footer, Header, Menu, MENU_ANIMATION_DURATION, MenuIcon, type MenuLink } from '~';
import {
	ade_display,
	alegreya,
	brunizer,
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

const MENU_LINKS: Array<MenuLink> = [
	{
		text: 'Cennik',
		url: '/price',
	},
	{
		text: 'O Nas',
		url: '/about',
	},
	{
		text: 'Kontakt',
		url: '/contact',
	},
];

const font_variables = `${syne.variable} ${glamour.variable} ${merriweather.variable} ${doppelganger.variable} ${alegreya.variable} ${lato.variable} ${naibo.variable} ${ade_display.variable} ${domaine_display.variable} ${playfair.variable} ${brunizer.variable}`;
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
			<main className={font_variables}>
				<Header
					background_color='bg'
					height={header_height}
					is_sticky
					padding_x={header_padding_x}
					padding_y={header_padding_y}
				/>
				<MenuIcon
					color='black'
					height={header_height}
					padding_x={header_padding_x}
					padding_y={header_padding_y}
					size={30}
					weight='md'
				/>
				<Menu
					animation_duration={MENU_ANIMATION_DURATION}
					bg_color='[#E5BF9F]'
					links={MENU_LINKS}
				/>
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}

export default install(config, MyApp);
