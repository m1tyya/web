import React from 'react';

type ImageProps = {
	height: number;
	label: string;
	loading: 'eager' | 'lazy';
	src: string;
	width: number;
};

export function Image({ height, label, loading, src, width }: ImageProps): JSX.Element {
	return (
		<picture>
			<img alt={label} height={height} loading={loading} src={src} width={width} />
		</picture>
	);
}
