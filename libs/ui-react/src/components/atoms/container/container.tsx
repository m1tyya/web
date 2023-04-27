import { clsx } from 'clsx';
import { type AnimationProps, motion } from 'framer-motion';
import { type HTMLAttributes, type PropsWithChildren, useRef } from 'react';

import { type BlockElement, type Display, type Padding, type Position } from '~';

type ContainerProps = Padding &
	PropsWithChildren & {
		animation?: AnimationProps;
		background_color?: string;
		display?: Display;
		layout?: string;
		line_height?: string;
		position?: Position;
		tag: BlockElement;
		z_index?: string;
	};

export function Container({
	animation,
	background_color,
	children,
	display,
	layout,
	line_height,
	padding,
	padding_bottom,
	padding_start,
	padding_end,
	padding_top,
	padding_x,
	padding_y,
	position,
	tag = `div`,
	z_index,
}: ContainerProps): JSX.Element {
	const { current: MotionTag } = useRef(motion<HTMLAttributes<HTMLDivElement>>(tag)),
		CONTAINER_STYLES = clsx(
			((): string | undefined => {
				if (padding_x !== undefined) {
					return `px-${padding_x}`;
				} else if (padding_y !== undefined) {
					return `py-${padding_y}`;
				} else if (padding_top !== undefined) {
					return `pb-${padding_bottom} pt-${padding_top} pl-${padding_start} pr-${padding_end}`;
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
			position,
			line_height === undefined ? undefined : `leading-${line_height}`,
			background_color === undefined ? undefined : `bg-${background_color}`,
			layout === undefined ? undefined : `${layout}`,
			display === undefined ? undefined : `${display}`,
			z_index === undefined ? undefined : `z-${z_index}`,
		);

	return (
		<MotionTag {...animation} className={CONTAINER_STYLES}>
			{children}
		</MotionTag>
	);
}
