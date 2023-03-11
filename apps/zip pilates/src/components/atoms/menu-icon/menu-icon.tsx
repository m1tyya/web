import clsx from 'clsx';
import { type Cycle, motion, type MotionProps } from 'framer-motion';

import { MENU_STATES, type MenuStates } from '~';

function barPath(startPoint: [number, number], width: number, thickness: number): string {
	return `M${startPoint[0]},${startPoint[1]}
							c${thickness},0,${thickness},${thickness},0,${thickness}
							h-${width}
							c-${thickness},0,-${thickness},-${thickness},0,-${thickness}
							h${width}`;
}

type MenuIconProps = {
	color: string;
	currentMenuState: MenuStates;
	size: number;
	toggleMenu: Cycle;
	weight: 'lg' | 'md' | 'sm';
};

export function MenuIcon({
	color,
	currentMenuState,
	size,
	toggleMenu,
	weight,
}: MenuIconProps): JSX.Element {
	const [THICKNESS, VERTICAL_SPACING] = ((): [number, number] => {
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
		TOP_BAR: MotionProps = {
			style: { originX: `${ORIGIN_X}`, originY: `${size * VERTICAL_SPACING + THICKNESS / 2}` },
			variants: {
				[MENU_STATES.CLOSED]: {
					d: barPath([ORIGIN_X, size * VERTICAL_SPACING], WIDTH_MD, THICKNESS),
					rotate: 0,
				},
				[MENU_STATES.OPEN]: {
					d: barPath([ORIGIN_X, size * VERTICAL_SPACING], WIDTH_X, THICKNESS),
					rotate: -45,
				},
			},
		},
		MIDDLE_BAR: MotionProps = {
			transition: { duration: 0.2, ease: `easeInOut` },
			variants: {
				[MENU_STATES.CLOSED]: {
					d: barPath([ORIGIN_X, size * 0.5], WIDTH_LG, THICKNESS),
					opacity: 1,
					translateX: 0,
				},
				[MENU_STATES.OPEN]: { opacity: 0, translateX: -20 },
			},
		},
		BOTTOM_BAR: MotionProps = {
			style: {
				originX: `${ORIGIN_X}`,
				originY: `${size * (1 - VERTICAL_SPACING) + THICKNESS / 2}`,
			},
			variants: {
				[MENU_STATES.CLOSED]: {
					d: barPath([ORIGIN_X, size * (1 - VERTICAL_SPACING)], WIDTH_SM, THICKNESS),
					rotate: 0,
				},
				[MENU_STATES.OPEN]: {
					d: barPath([ORIGIN_X, size * (1 - VERTICAL_SPACING)], WIDTH_X, THICKNESS),
					rotate: 45,
				},
			},
		};

	function handleMenu(): void {
		toggleMenu();
		document.body.style.overflowY = currentMenuState === `CLOSED` ? `hidden` : `unset`;
	}

	return (
		<button className={clsx(`z-50 cursor-pointer`)} onClick={handleMenu} type='button'>
			<motion.svg
				animate={currentMenuState}
				fill={color}
				overflow='visible'
				viewBox={`0 0 ${size} ${size}`}
				width={size}>
				<motion.path {...TOP_BAR} />
				<motion.path {...MIDDLE_BAR} />
				<motion.path {...BOTTOM_BAR} />
			</motion.svg>
		</button>
	);
}
