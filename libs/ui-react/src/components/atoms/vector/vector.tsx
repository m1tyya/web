import clsx from 'clsx';
import { motion, type MotionProps } from 'framer-motion';
import React, { memo } from 'react';

import { type Dimension, type Position } from '~';

type SvgrProps = {
	desc?: string;
	title?: string;
};

export type VectorProps = SvgrProps & {
	padding?: string;
	animation?: MotionProps;
	background_color?: string;
	dimension: Dimension;
	dimension_value: string;
	fill?: string;
	layout?: string;
	on_click?: () => void;
	position?: Position;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement> & SvgrProps>;
	z_index?: string;
};

export const Vector = memo(
	({
		padding,
		animation,
		background_color,
		desc,
		dimension,
		dimension_value,
		fill,
		layout,
		on_click,
		position,
		props,
		Svg,
		title,
		z_index,
	}: VectorProps): JSX.Element => {
		const vector_wrapper_styles = clsx(
				layout,
				position,
				z_index === undefined ? `` : `z-${z_index}`,
				`h-${dimension === `height` ? dimension_value : `auto`} w-${
					dimension === `width` ? dimension_value : `auto`
				}`,
			),
			vector_styles = clsx(`p-${padding} fill-${fill} bg-${background_color} h-full w-full`);

		return (
			<motion.div onClick={on_click} {...animation} className={vector_wrapper_styles}>
				<Svg
					className={vector_styles}
					desc={desc}
					fill={fill}
					role='img'
					title={title}
					{...props}
					preserveAspectRatio='xMidYMid meet'
				/>
			</motion.div>
		);
	},
);
