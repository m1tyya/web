import clsx from 'clsx';
import { type AnimationProps, motion } from 'framer-motion';

import { MENU_STATES, type MenuStates } from '~';

type MenuProps = {
	bgColor: string;
	currentMenuState: MenuStates;
};

export function Menu({ bgColor, currentMenuState }: MenuProps): JSX.Element {
	const MENU_ANIMATION: AnimationProps = {
		transition: { duration: 0.5, ease: `easeInOut` },
		variants: {
			[MENU_STATES.CLOSED]: { width: 0 },
			[MENU_STATES.OPEN]: { width: `100%` },
		},
	};

	return (
		<motion.menu
			animate={currentMenuState}
			exit={MENU_STATES.CLOSED}
			initial={MENU_STATES.CLOSED}
			{...MENU_ANIMATION}
			className={clsx(
				`bg-[${bgColor}] fixed top-0 right-0 z-50 h-screen overscroll-y-contain`,
			)}></motion.menu>
	);
}
