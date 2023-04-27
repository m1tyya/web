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
	icon_side: 'bottom' | 'left' | 'right' | 'top';
};

type ButtonPropsGeneral = {
	align_items?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
	background_color?: string;
	border_radius?: string;
	gap?: string;
	id?: string;
	justify_content?: 'center' | 'end' | 'start';
	max_width?: string;
	on_change?: React.FormEventHandler<HTMLButtonElement> | undefined;
	on_click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	padding_x?: string;
	padding_y?: string;
	position?: string;
	text: string | false;
	type?: 'button' | 'reset' | 'submit';
	width?: string;
};

export type ButtonTextProps = Omit<TextProps, 'max_width' | 'tag' | 'text_align' | 'text'>;

export type ButtonProps = ButtonPropsGeneral & {
	btn_text: ButtonTextProps;
} & (
		| (BorderProps & IconProps)
		| (BorderProps & Partial<Undefined<IconProps>>)
		| (IconProps & Partial<Undefined<BorderProps>>)
		| (Partial<Undefined<BorderProps>> & Partial<Undefined<IconProps>>)
	);

export function Button({
	align_items,
	background_color,
	border_color,
	border_radius,
	border_style,
	border_width,
	btn_text,
	gap,
	icon,
	icon_side,
	id,
	justify_content,
	max_width,
	on_change,
	on_click,
	padding_x,
	padding_y,
	position,
	text,
	type,
	width,
}: ButtonProps): JSX.Element {
	const border_styles = clsx(
			border_width == undefined ? `` : ` border-${border_width}`,
			border_color == undefined ? `` : `border-${border_color}`,
			border_style == undefined ? `` : `border-${border_style}`,
		),
		button_text_props: TextProps = {
			...btn_text,
			bind: undefined,
			tag: `span`,
			text: text === false ? `` : text,
		};

	return (
		<button
			className={clsx(
				position,
				border_styles,
				max_width == undefined ? `` : `max-w-${max_width}`,
				width == undefined ? `` : `w-${width}`,
				padding_y == undefined ? `` : `py-${padding_y}`,
				padding_x == undefined ? `` : `px-${padding_x}`,
				align_items == undefined ? `` : `items-${align_items}`,
				justify_content == undefined ? `` : `justify-${justify_content}`,
				gap == undefined ? `` : `gap-${gap}`,
				background_color == undefined ? `` : `bg-${background_color}`,
				border_radius == undefined ? `` : `rounded-${border_radius}`,
				icon_side == `top` || icon_side == `bottom` ? `flex-col` : ``,
				`group~button flex`,
			)}
			id={id}
			onChange={on_change}
			onClick={on_click}
			title={button_text_props.text}
			type={type === undefined ? `button` : type}>
			{(icon_side == `left` || icon_side == `top`) && <Vector {...icon} />}
			{text != false && <Text {...button_text_props} />}
			{(icon_side == `right` || icon_side == `bottom`) && <Vector {...icon} />}
		</button>
	);
}
