import { Container } from '@m1tyya/ui-react';
import clsx from 'clsx';
import { AnimatePresence, motion, type MotionProps } from 'framer-motion';
import { useEffect } from 'react';

import { MENU_STATES, type MenuStates, use_app_store } from '~';

export function rect_path(start_point: [number, number], width: number, thickness: number): string {
	return `M${start_point[0]},${start_point[1]}
							c${thickness},0,${thickness},${thickness},0,${thickness}
							h-${width}
							c-${thickness},0,-${thickness},-${thickness},0,-${thickness}
							h${width}`;
}

type MenuIconProps = {
	color: string;
	height: string;
	padding_x: string;
	padding_y: string;
	size: number;
	weight: 'lg' | 'md' | 'sm';
};

export function handle_animation(is_menu_open: boolean): MenuStates {
	return is_menu_open ? `OPEN` : `CLOSED`;
}

export function MenuIcon({
	color,
	height,
	padding_x,
	padding_y,
	size,
	weight,
}: MenuIconProps): JSX.Element {
	const { is_menu_open, toggle_menu } = use_app_store(),
		[THICKNESS, VERTICAL_SPACING] = ((): [number, number] => {
			switch (weight) {
				case `lg`: {
					return [3, 0.15];
				}
				case `md`: {
					return [2, 0.25];
				}
				case `sm`: {
					return [1, 0.3];
				}
			}
		})(),
		ORIGIN_X = size,
		WIDTH_LG = size,
		WIDTH_MD = size * 0.7,
		WIDTH_SM = size * 0.5,
		WIDTH_X = Math.sqrt((size * (1 - 2 * VERTICAL_SPACING)) ** 2 * 2),
		top_bar: MotionProps = {
			style: { originX: `${ORIGIN_X}`, originY: `${size * VERTICAL_SPACING + THICKNESS / 2}` },
			variants: {
				[MENU_STATES.CLOSED]: {
					d: rect_path([ORIGIN_X, size * VERTICAL_SPACING], WIDTH_MD, THICKNESS),
					rotate: 0,
				},
				[MENU_STATES.OPEN]: {
					d: rect_path([ORIGIN_X, size * VERTICAL_SPACING], WIDTH_X, THICKNESS),
					rotate: -45,
				},
			},
		},
		middle_bar: MotionProps = {
			transition: { duration: 0.2, ease: `easeInOut` },
			variants: {
				[MENU_STATES.CLOSED]: {
					d: rect_path([ORIGIN_X, size * 0.5], WIDTH_LG, THICKNESS),
					opacity: 1,
					x: 0,
				},
				[MENU_STATES.OPEN]: { opacity: 0, x: -20 },
			},
		},
		bottom_bar: MotionProps = {
			style: {
				originX: `${ORIGIN_X}`,
				originY: `${size * (1 - VERTICAL_SPACING) + THICKNESS / 2}`,
			},
			variants: {
				[MENU_STATES.CLOSED]: {
					d: rect_path([ORIGIN_X, size * (1 - VERTICAL_SPACING)], WIDTH_SM, THICKNESS),
					rotate: 0,
				},
				[MENU_STATES.OPEN]: {
					d: rect_path([ORIGIN_X, size * (1 - VERTICAL_SPACING)], WIDTH_X, THICKNESS),
					rotate: 45,
				},
			},
		};

	function handle_menu(): void {
		toggle_menu();
		document.body.style.overflowY = is_menu_open ? `unset` : `hidden`;
	}

	return (
		<AnimatePresence>
			<Container
				layout={`h-${height} ml-auto top-0 right-0 px-${padding_x} py-${padding_y} w-min flex items-center`}
				position='fixed'
				tag='div'
				z_index='[200]'>
				<button
					aria-controls='menu'
					aria-expanded={is_menu_open}
					className={clsx(`w-[${size}px] h-[${size}px] cursor-pointer`)}
					onClick={handle_menu}
					title='menu'
					type='button'>
					<motion.svg
						animate={handle_animation(is_menu_open)}
						className={clsx(`z-[200]`)}
						fill={color}
						overflow='visible'
						viewBox={`0 0 ${size} ${size}`}>
						<motion.path {...top_bar} />
						<motion.path {...middle_bar} />
						<motion.path {...bottom_bar} />
					</motion.svg>
				</button>
			</Container>
		</AnimatePresence>
	);
}
