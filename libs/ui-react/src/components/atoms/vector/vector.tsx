import clsx from 'clsx';
import { motion, type MotionProps } from 'framer-motion';
import React, { memo } from 'react';

import { type Dimension, type Position } from '../../../index';

type SvgrProps = {
	desc?: string;
	title?: string;
};

export type VectorProps = SvgrProps & {
	animation?: MotionProps;
	background_color?: string;
	dimension: Dimension;
	dimension_value: string;
	fill?: string;
	layout?: string;
	on_click?: () => void;
	padding?: string;
	position?: Position;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement> & SvgrProps>;
	z_index?: string;
};

export const Vector = memo(
	({
		animation,
		background_color,
		desc,
		dimension,
		dimension_value,
		fill,
		layout,
		on_click,
		padding,
		position,
		props,
		Svg,
		title,
		z_index,
	}: VectorProps): JSX.Element => {
		const vector_wrapper_styles = clsx(
				dimension == `height` ? `h-(${dimension_value}) w-auto` : undefined,
				dimension == `width` ? `w-(${dimension_value}) h-auto` : undefined,
				// `h-${dimension === `height` ? dimension_value : `auto`} w-${
				// 	dimension === `width` ? dimension_value : `auto`
				// }`,
				z_index === undefined ? `` : `z-${z_index}`,
				layout,
				position,
			),
			vector_styles = clsx(`p-${padding} fill-${fill} bg-${background_color} h-full w-full`);

		return (
			<motion.div onClick={on_click} {...animation} className={vector_wrapper_styles}>
				<Svg
					className={vector_styles}
					desc={desc}
					fill={fill}
					role='img'
					style={{ stroke: props?.stroke }}
					title={title}
					{...props}
					preserveAspectRatio='xMidYMid meet'
				/>
			</motion.div>
		);
	},
);
