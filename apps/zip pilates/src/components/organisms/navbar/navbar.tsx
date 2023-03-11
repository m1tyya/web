import { cx } from '@twind/core';
import { motion, type MotionProps } from 'framer-motion';
import { type PropsWithChildren } from 'react';

type NavbarProps = PropsWithChildren & {
	animation?: MotionProps;
	height: 'lg' | 'md' | 'sm';
	isSticky: boolean;
	paddingX?: 'lg' | 'md' | 'sm';
};

export function Navbar({
	animation,
	children,
	height,
	isSticky,
	paddingX,
}: NavbarProps): JSX.Element {
	const navbarStyles = cx(
		{
			fixed: isSticky,
		},
		{
			'px-4': paddingX === `sm`,
			'px-6': paddingX === `md`,
			'px-8': paddingX === `lg`,
		},
		{
			'h-16': height === `sm`,
			'h-20': height === `md`,
			'h-28': height === `lg`,
		},
	);

	return (
		<motion.header
			{...animation}
			className={cx(navbarStyles, `inset-0 z-50 flex w-full items-center justify-between`)}>
			{children}
		</motion.header>
	);
}
