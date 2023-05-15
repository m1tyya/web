import clsx from 'clsx';
import { forwardRef } from 'react';

import { type BorderStyle, type Padding, type Styles, type TextProps, type Undefined } from '~';

import { resolve_padding } from '../../../utilities/css';

type LabelProps = Omit<TextProps, 'bind' | 'tag' | 'text_align'> & {
	is_before: boolean;
	is_enabled: boolean;
};

type BorderProps = {
	border_color: string;
	border_radius: string;
	border_style: BorderStyle;
	border_width: string;
};

export type InputProps = Padding &
	Pick<
		React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'id' | 'name' | 'onBlur' | 'onChange' | 'placeholder' | 'ref' | 'type'
	> & {
		label: LabelProps;
		styles?: string;
	} & (BorderProps | Partial<Undefined<BorderProps>>);

function resolve_styles({
	border_radius,
	border_style,
	border_width,
	display,
	font_family,
	font_size,
	font_weight,
	height,
	letter_spacing,
	line_height,
	max_height,
	max_width,
	opacity,
	position,
	text_align,
	text_color,
	width,
	z_index,
}: Partial<Styles>): string {
	const res = ``;

	if (border_width != undefined) {
		res.concat(`border-${border_width}`);
	}

	if (border_style != undefined) {
		res.concat(`border-${border_style}`);
	}

	if (opacity != undefined) {
		res.concat(`opacity-${opacity}`);
	}

	if (position != undefined) {
		res.concat(position);
	}

	if (max_height != undefined) {
		res.concat(`max-h-${max_height}`);
	}

	if (letter_spacing != undefined) {
		res.concat(`tracking-${letter_spacing}`);
	}

	if (width != undefined) {
		res.concat(`w-${width}`);
	}

	if (max_width != undefined) {
		res.concat(`max-w-${max_width}`);
	}

	if (text_align != undefined) {
		res.concat(`text-${text_align}`);
	}

	if (border_radius != undefined) {
		res.concat(`rounded-${border_radius}`);
	}

	if (display != undefined) {a
		res.concat(display);
	}

	if (height != undefined) {
		res.concat(`h-${height}`);
	}

	if (font_family != undefined) {
		res.concat(`font-${font_family}`);
	}

	if (font_size != undefined) {
		res.concat(`font-${font_size}`);
	}

	if (font_weight != undefined) {
		res.concat(`font-${font_weight}`);
	}

	if (line_height != undefined) {
		res.concat(`leading-${line_height}`);
	}

	if (text_color != undefined) {
		res.concat(`text-${text_color}`);
	}

	if (z_index != undefined) {
		res.concat(`z-${z_index}`);
	}

	return res;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
			border_color,
			border_radius,
			border_style,
			border_width,
			id,
			label,
			name,
			onBlur,
			onChange,
			placeholder,
			styles,
			type,
		} = props,
		// input_props: React.DetailedHTMLProps<
		// 	React.InputHTMLAttributes<HTMLInputElement>,
		// 	HTMLInputElement
		// > = {
		// 	name,
		// 	onBlur,
		// 	onChange,
		// 	placeholder,
		// 	type,
		// },
		input_styles = clsx(
			`w-full`,
			styles,
			resolve_styles({ border_color, border_radius, border_style, border_width }),
			resolve_padding({
				...props,
			} as Padding),
		),
		label_styles = ((): string => {
			const {
				font_family,
				font_size,
				font_weight,
				height,
				letter_spacing,
				line_height,
				max_height,
				max_width,
				opacity,
				position,
				text_color,
				z_index,
			} = label;

			return resolve_styles({
				font_family,
				font_size,
				font_weight,
				height,
				letter_spacing,
				line_height,
				max_height,
				max_width,
				opacity,
				position,
				text_color,
				z_index,
			});
		})();

	const label_jsx: JSX.Element = (
		<label className={label_styles} htmlFor={name} id={label.id}>
			{label.text}
		</label>
	);

	return (
		<>
			{label.is_enabled && label.is_before && label_jsx}
			<input
			required
				className={input_styles}
				id={id}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				placeholder={placeholder}
				ref={ref}
				type={type}
			/>
			{label.is_enabled && !label.is_before && label_jsx}
		</>
	);
});
