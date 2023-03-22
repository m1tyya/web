import clsx from 'clsx';
import { motion, type MotionProps } from 'framer-motion';
import React, { memo } from 'react';

import { type Dimension } from '~';

type SvgrProps = {
	desc?: string;
	title?: string;
};

export type VectorProps = SvgrProps & {
	animation?: MotionProps;
	dimension: Dimension;
	dimension_value: string;
	on_click?: () => void;
	position?: string;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement> & SvgrProps>;
	z_index?: number;
};

export const Vector = memo(
	({
		animation,
		desc,
		dimension,
		dimension_value,
		on_click,
		position,
		props,
		Svg,
		title,
		z_index,
	}: VectorProps): JSX.Element => {
		const vector_styles = clsx(
			position,
			`z-${z_index === undefined ? `` : z_index}
			w-${dimension === `width` ? dimension_value : `auto`}
			h-${dimension === `height` ? dimension_value : `auto`}`,
		);

		return (
			<motion.div onClick={on_click} {...animation} className={vector_styles}>
				<Svg
					desc={desc}
					fontSize={dimension_value}
					height={dimension === `height` ? dimension_value : `auto`}
					role='img'
					title={title}
					width={dimension === `width` ? dimension_value : `auto`}
					{...props}
					preserveAspectRatio='xMidYMid meet'
				/>
			</motion.div>
		);
	},
);
