import { motion, type SVGMotionProps } from 'framer-motion';

import { rect_path } from '../menu_icon';

type ScrollMouseProps = { size: number };

export function ScrollMouse({ size }: ScrollMouseProps): JSX.Element {
	const mouse: SVGMotionProps<SVGPathElement> = {
		d: rect_path([5, 0], 30, 10),
	};

	return (
		<motion.svg stroke='white' strokeWidth='1' viewBox={`0 0 ${size} ${size * 5}`} width={size}>
			<motion.path {...mouse} />
		</motion.svg>
	);
}
