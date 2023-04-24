import clsx from 'clsx';

import { Text, type TextProps } from '../text';
import { Vector, type VectorProps } from '../vector';

export type Undefined<T> = {
	[PropertyKey in keyof T]: never;
};

type BorderProps = {
	border_color?: string;
	border_style?: 'dashed' | 'dotted' | 'solid';
	border_width: number;
};

export type IconProps = {
	icon: Omit<VectorProps, 'desc' | 'title'>;
	icon_side: 'left' | 'right';
};

type ButtonPropsGeneral = {
	align_items?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
	background_color?: string;
	border_radius?: string;
	gap?: string;
	max_width?: string;
	padding_x?: string;
	padding_y?: string;
	position?: string;
	text: string | false;
	type?: 'button' | 'reset' | 'submit';
	width?: string;
};

type ButtonTextProps = Omit<TextProps, 'max_width' | 'position' | 'tag' | 'text_align' | 'text'>;

type ButtonProps = ButtonPropsGeneral &
	ButtonTextProps &
	(
		| (BorderProps & IconProps)
		| (BorderProps & Partial<Undefined<IconProps>>)
		| (IconProps & Partial<Undefined<BorderProps>>)
		| (Partial<Undefined<BorderProps>> & Partial<Undefined<IconProps>>)
	);

export function Button({
	align_items = `center`,
	background_color = `transparent`,
	border_color = `unset`,
	border_radius = `0`,
	border_style = `solid`,
	border_width,
	font_family,
	font_size,
	font_weight,
	gap = `0`,
	icon,
	icon_side,
	letter_spacing,
	line_height,
	max_width,
	padding_x,
	padding_y,
	position,
	text,
	text_color = `black`,
	type,
	width,
	z_index,
}: ButtonProps): JSX.Element {
	const border_styles = clsx(
			((): string =>
				border_width === undefined
					? ``
					: `border-${border_color} border-${border_style} border-${border_width}`)(),
		),
		button_text_props: TextProps = {
			font_family,
			font_size,
			font_weight,
			letter_spacing,
			line_height,
			tag: `span`,
			text: text === false ? `` : text,
			text_color,
		};

	return (
		<button
			className={clsx(
				position,
				border_styles,
				`items-${align_items} bg-${background_color} rounded-${border_radius} group~button gap-${gap} py-${padding_y} px-${padding_x} max-w-${max_width} w-${width} flex h-auto`,
			)}
			title={button_text_props.text}
			type={type === undefined ? `button` : type}>
			{icon_side === `left` && <Vector {...icon} />}
			<Text {...button_text_props} />
			{icon_side === `right` && <Vector {...icon} />}
		</button>
	);
}
