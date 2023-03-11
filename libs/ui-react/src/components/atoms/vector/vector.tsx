import clsx from 'clsx';
import { motion, type MotionProps } from 'framer-motion';
import React from 'react';

type SVGRProps = {
	desc?: string;
	title?: string;
};

type VectorProps = SVGRProps & {
	animation?: MotionProps;
	onClick?: () => void;
	props?: React.SVGProps<SVGSVGElement>;
	Svg: React.FC<React.SVGProps<SVGSVGElement> & SVGRProps>;
	width: number;
	zIndex?: number;
};

export function Vector({
	animation,
	desc,
	onClick,
	props,
	Svg,
	title,
	width,
	zIndex,
}: VectorProps): JSX.Element {
	return (
		<motion.div
			onClick={onClick}
			{...animation}
			className={clsx(`z-[${zIndex ?? `auto`}] w-[${width}px] duration-1000 hover:scale-105`)}>
			<Svg
				desc={desc}
				fontSize={width}
				role='img'
				title={title}
				{...props}
				preserveAspectRatio='xMidYMid meet'
			/>
		</motion.div>
	);
}
