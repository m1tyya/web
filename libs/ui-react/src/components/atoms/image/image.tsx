import clsx from 'clsx';
import { type ImgHTMLAttributes } from 'react';

import { type Dimension } from '~';

type ImageProps = {
	dimension: Dimension;
	label: string;
	loading: 'eager' | 'lazy';
	position?: string;
	size_value: number;
	src: string;
};

export function Image({
	dimension,
	label,
	loading,
	position,
	size_value,
	src,
}: ImageProps): JSX.Element {
	const image_styles = clsx(position, {
			[`h-[${size_value}px]`]: dimension === `height`,
			[`w-[${size_value}px]`]: dimension === `width`,
		}),
		image_props: ImgHTMLAttributes<any> = {
			alt: label,
			height: dimension === `height` ? size_value : `undefined`,
			loading,
			src,
			width: dimension === `width` ? size_value : `undefined`,
		};

	return (
		<picture className={image_styles}>
			<img {...image_props} />
		</picture>
	);
}
