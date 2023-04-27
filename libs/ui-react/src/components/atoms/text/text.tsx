import clsx from 'clsx';

import {
	type FontWeight,
	type Position,
	type PseudoClasses,
	type TextAlign,
	type TextElement,
} from '~';

type TextPropsGeneral = {
	font_family?: string;
	font_size?: string;
	font_weight?: FontWeight;
	height?: string;
	id?: string;
	letter_spacing?: string;
	line_height?: string;
	max_height?: string;
	max_width?: string;
	opacity?: string;
	position?: Position;
	text: string;
	text_align?: TextAlign;
	text_color?: string;
	z_index?: string;
};

export type TextProps = TextPropsGeneral &
	({ bind: string; tag: 'label' } | { bind?: never; tag: TextElement });

function resolve_pseudo_classes(
	template: string,
	{ active, focus, focus_within, hover, target, visited }: Partial<PseudoClasses<string>>,
): string {
	const res = ``;

	if (active != undefined) {
		res.concat(`active:${template}${active}`);
	}

	if (focus != undefined) {
		res.concat(`focus:${template}${focus}`);
	}

	if (focus_within != undefined) {
		res.concat(`focus-within:${template}${focus_within}`);
	}

	if (hover != undefined) {
		res.concat(`hover:${template}${hover}`);
	}

	if (target != undefined) {
		res.concat(`target:${template}${target}`);
	}

	if (visited != undefined) {
		res.concat(`visited:${template}${visited}`);
	}

	return res;
}

export function Text({
	bind,
	font_family,
	font_size,
	font_weight,
	height,
	id,
	letter_spacing,
	line_height,
	max_height,
	max_width,
	opacity,
	position,
	tag: Tag,
	text,
	text_align,
	text_color,
	z_index,
}: TextProps): JSX.Element {
	return (
		<Tag
			className={clsx(
				position,
				`font-${font_family}`,
				`text-${font_size}`,
				// resolve_pseudo_classes(`text-`, font_size[1]),
				opacity === undefined ? undefined : `opacity-${opacity}`,
				font_weight === undefined ? undefined : `font-${font_weight}`,
				letter_spacing === undefined ? undefined : `tracking-${letter_spacing}`,
				line_height === undefined ? undefined : `leading-${line_height}`,
				text_color === undefined ? undefined : `text-${text_color}`,
				text_align === undefined ? undefined : `text-${text_align}`,
				max_width === undefined ? undefined : `max-w-${max_width}`,
				max_height === undefined ? undefined : `max-h-${max_height}`,
				height === undefined ? undefined : `h-${height}`,
				z_index === undefined ? undefined : `z-${z_index}`,
				`whitespace-pre-line`,
			)}
			htmlFor={bind}
			id={id}>
			{text}
		</Tag>
	);
}
