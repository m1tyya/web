import clsx from 'clsx';

import { type TextElement } from '~';

export type TextProps = {
	font_family: string;
	font_size: string;
	font_weight?:
		| 'black'
		| 'bold'
		| 'extrabold'
		| 'extralight'
		| 'light'
		| 'medium'
		| 'normal'
		| 'semibold'
		| 'thin';
	letter_spacing?: string;
	line_height?: string;
	max_width?: string;
	position?: string;
	tag: TextElement;
	text: string;
	text_align?: 'center' | 'end' | 'justify' | 'start';
	text_color?: string;
	z_index?: string;
};

export function Text({
	font_family,
	font_size,
	font_weight = `normal`,
	letter_spacing = `0`,
	line_height = `1.5`,
	max_width = `full`,
	position,
	tag: Tag,
	text,
	text_align = `start`,
	text_color = `black`,
	z_index = `auto`,
}: TextProps): JSX.Element {
	return (
		<div className={clsx(position, `max-w-${max_width} z-${z_index}`)}>
			<Tag
				className={clsx(
					`font-${font_weight}`,
					`font-${font_family}`,
					`text-${font_size}`,
					`text-${text_align}`,
					`text-${text_color}`,
					`tracking-${letter_spacing}`,
					`leading-${line_height}`,
				)}>
				{text}
			</Tag>
		</div>
	);
}
