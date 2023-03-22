import { cx } from '@twind/core';
import { Link, type LinkProps, Text } from '@web/ui-react';
import { AnimatePresence, motion, type MotionProps } from 'framer-motion';

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

export function Menu({ animation_duration, bg_color, links }: MenuProps): JSX.Element {
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
		<>
			<motion.menu
				{...menu_animation}
				className={cx(
					`bg-[${bg_color}] fixed top-0 right-0 z-[100] h-screen w-full overscroll-y-contain`,
				)}
				id='menu'>
				<ul
					className={cx(
						`flex flex-col justify-center py-36 flex flex-col h-screen w-full items-center gap-10`,
					)}>
					<AnimatePresence>
						{links.map(({ text, url }) => (
							<motion.li {...links_animation} key={url.toString()}>
								<Link url={url}>
									<Text
										font_family='text'
										font_size='fluid-2xl'
										position='px-8 py-4 tracking-[0.2rem] font-heading hover:(text-gray-500 tracking-[0.24rem] scale-[105%]) duration-[.2s]'
										tag='p'
										text={text.toUpperCase()}
									/>
								</Link>
							</motion.li>
						))}
					</AnimatePresence>
				</ul>
			</motion.menu>
		</>
	);
}
