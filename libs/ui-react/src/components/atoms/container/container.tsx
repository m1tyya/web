import { clsx } from 'clsx';
import { motion, type MotionProps } from 'framer-motion';
import { memo, type PropsWithChildren } from 'react';

import { type BlockElement, type Display, type Padding, type Position } from '~';

type ContainerProps = Padding &
	PropsWithChildren & {
		animation?: MotionProps;
		background_color?: string;
		display?: Display;
		layout?: string;
		position?: Position;
		tag: BlockElement;
		z_index?: string;
	};

export const Container = memo(
	({
		animation,
		background_color,
		children,
		display,
		layout,
		padding,
		padding_bottom,
		padding_left,
		padding_right,
		padding_top,
		padding_x,
		padding_y,
		position,
		tag = `div`,
		z_index,
	}: ContainerProps): JSX.Element => {
		const CONTAINER_STYLES = clsx(
			((): string | undefined => {
				if (padding_x !== undefined) {
					return `px-${padding_x}`;
				} else if (padding_y !== undefined) {
					return `py-${padding_y}`;
				} else if (padding_top !== undefined) {
					return `pb-${padding_bottom} pt-${padding_top} pl-${padding_left} pr-${padding_right}`;
				} else if (padding === undefined) {
					return undefined;
				} else if (typeof padding === `string`) {
					return `p-${padding}`;
				} else {
					switch (padding.length) {
						case 2: {
							return `py-${padding[0]} px-${padding[1]}`;
						}
						case 3: {
							return `pt-${padding[0]} px-${padding[1]} pb-${padding[2]}`;
						}
						case 4: {
							return `pt-${padding[0]} pr-${padding[1]} pb-${padding[2]} pl-${padding[3]}`;
						}
					}
				}
			})(),
			background_color === undefined ? undefined : `bg-${background_color}`,
			position === undefined ? undefined : `${position}`,
			layout === undefined ? undefined : `${layout}`,
			display === undefined ? undefined : `${display}`,
			z_index === undefined ? undefined : `z-${z_index}`,
		);

		return (
			<motion.div {...animation} className={CONTAINER_STYLES}>
				{children}
			</motion.div>
		);
	},
);
