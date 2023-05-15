import { Button, Container, Link, type LinkProps, Text, Vector } from '@m1tyya/ui-react';
import { cx, tw } from '@twind/core';
import { motion, type MotionProps } from 'framer-motion';
import Facebook from 'public/vectors/facebook.svg';
import Instagram from 'public/vectors/instagram.svg';
import Whatsapp from 'public/vectors/whatsapp.svg';
import { useMediaQuery } from 'usehooks-ts';

import { handle_animation } from '~/components/atoms';
import { use_app_store } from '~/store';

export type MenuLink = Pick<LinkProps, 'url'> & { text: string };

export type MenuProps = {
	animation_duration: number;
	bg_color: string;
	links: Array<MenuLink>;
};

export const MENU_STATES = { CLOSED: `CLOSED`, OPEN: `OPEN` } as const;
export const MENU_ANIMATION_DURATION = 0.5;
export type MenuStates = (typeof MENU_STATES)[keyof typeof MENU_STATES];

const icon_size = `[30px]`,
	icon_margin = `6`,
	icon_scale = `[115%]`,
	button_scale = `[105%]`;

export function Menu({ animation_duration, bg_color, links }: MenuProps): JSX.Element {
	const is_small_screen = useMediaQuery(`(max-width: ${tw.theme(`screens.md`)})`);
	const { is_menu_open } = use_app_store(),
		links_animation: MotionProps = {
			animate: handle_animation(is_menu_open),
			initial: MENU_STATES.CLOSED,
			variants: {
				[MENU_STATES.CLOSED]: {
					opacity: 0,
					transition: {
						delay: animation_duration / 2,
						duration: animation_duration,
						ease: `easeInOut`,
					},
				},
				[MENU_STATES.OPEN]: {
					opacity: 1,
					transition: { duration: animation_duration / 2, ease: `easeInOut` },
				},
			},
		},
		menu_animation: MotionProps = {
			animate: handle_animation(is_menu_open),
			initial: MENU_STATES.CLOSED,
			transition: { duration: animation_duration, ease: `easeInOut` },
			variants: {
				[MENU_STATES.CLOSED]: { x: `100%` },
				[MENU_STATES.OPEN]: { x: 0 },
			},
		};

	return (
		<motion.menu
			{...(is_small_screen && menu_animation)}
			className={cx(
				`bg-${bg_color} md:bg-transparent fixed md:relative top-0 right-0 z-[100] h-screen md:h-auto w-full overscroll-y-contain`,
			)}
			id='menu'>
			<ul
				className={cx(
					`flex flex-col md:flex-row justify-between md:justify-end md:pr-4 pt-60 pb-10 md:p-0 flex flex-col h-screen md:h-auto w-full items-center gap-20 text-center`,
				)}>
				<Container display='flex' layout='flex-col md:flex-row gap-14' tag='div'>
					{links.map(({ text, url }) => (
						<motion.li {...(is_small_screen && links_animation)} key={url.toString()}>
							<Link url={url}>
								<Text
									font_family='heading'
									font_size='fluid-2xl md:fluid-base'
									font_weight='semibold md:bold'
									styles='uppercase md:normal-case tracking-[0.2rem] md:tracking-none font-heading md:font-naibo hover:(text-gray-500 scale-[105%] -rotate-3) duration-[.2s]'
									tag='p'
									text={text}
								/>
							</Link>
						</motion.li>
					))}
				</Container>
				<Container display='flex md:hidden' layout='flex-col gap-6' tag='div'>
					<Link url='/contact'>
						<Button
							align_items='center'
							border_color='primary-2'
							border_radius='full'
							border_style='solid'
							border_width={2}
							btn_text={{
								font_family: `merri`,
								font_size: `fluid-md`,
								letter_spacing: `[0.1rem]`,
								text_color: `primary-2`,
							}}
							padding_x='20'
							padding_y='5'
							position={`mt-20 mx-auto hover:scale-${button_scale} duration-[.3s]`}
							text='Zarezerwuj zajęcia'
						/>
					</Link>
					<Container
						display='flex md:none'
						layout='w-full flex-row justify-center gap-[2vw]'
						tag='div'>
						<Link url='https://www.instagram.com/zip.pilates.studio/'>
							<Vector
								dimension='width'
								dimension_value={icon_size}
								layout={`m-${icon_margin} hover:scale-${icon_scale} duration-[0.3s]`}
								Svg={Instagram}
							/>
						</Link>
						<Link url='https://www.facebook.com/ZipPilatesStudio'>
							<Vector
								dimension='width'
								dimension_value={icon_size}
								layout={`m-${icon_margin} hover:scale-${icon_scale} duration-[0.3s]`}
								Svg={Facebook}
							/>
						</Link>
						<Link url='https://wa.me/48732901415'>
							<Vector
								dimension='width'
								dimension_value={icon_size}
								layout={`m-${icon_margin} hover:scale-${icon_scale} duration-[0.3s]`}
								Svg={Whatsapp}
							/>
						</Link>
					</Container>
				</Container>
			</ul>
		</motion.menu>
	);
}
