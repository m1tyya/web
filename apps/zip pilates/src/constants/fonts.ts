/* eslint-disable @typescript-eslint/quotes */
import { Alegreya, Lato, Merriweather, Syne } from 'next/font/google';
import localFont from 'next/font/local';

export const naibo = localFont({
	src: '../../public/fonts/naibo.woff2',
	variable: '--font-naibo',
});

export const ade_display = localFont({
	src: '../../public/fonts/ade-display.woff2',
	variable: '--font-ade-display',
});

export const lato = Lato({ variable: '--font-lato', weight: ['400', '700', '300'] });

export const doppelganger = localFont({
	src: '../../public/fonts/doppelganger_display.woff2',
	variable: '--font-doppelganger',
});
export const merriweather = Merriweather({ variable: '--font-merri', weight: ['400'] });
export const syne = Syne({ variable: '--font-syne' });

export const alegreya = Alegreya({
	variable: '--font-alegreya',
});

export const glamour = localFont({
	src: '../../public/fonts/glamour_absolute.woff2',
	variable: '--font-glamour',
});
