import clsx from 'clsx';

import { type BorderStyle, type Padding, type TextPropsGeneral, type Undefined } from '~';

import { resolve_padding } from '../../../utilities/css';

type LabelProps = Omit<TextPropsGeneral, 'text_align'>;

type BorderProps = {
	border_color: string;
	border_style: BorderStyle;
	border_width: number;
};

export type InputProps = Padding &
	Pick<
		React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'name' | 'onBlur' | 'onChange' | 'placeholder' | 'ref' | 'type'
	> & {
		border_radius?: string;
		id?: string;
		label: LabelProps;
		styles?: string;
	} & (BorderProps | Partial<Undefined<BorderProps>>);

export function Input(props: InputProps): JSX.Element {
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
			ref,
			styles,
			type,
		} = props,
		input_props: React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		> = {
			name,
			onBlur,
			onChange,
			placeholder,
			type,
		},
		input_styles = clsx(
			styles,
			border_radius === undefined ? undefined : `rounded-${border_radius}`,
			border_width === undefined
				? undefined
				: `border-${border_width} border-${border_style} border-${border_color}`,
			resolve_padding({
				...props,
			} as Padding),
		),
		label_styles = label
			? clsx(label.position, `font-${label.font_family}`, `font-${label.font_size}`)
			: ``;

	return (
		<>
			<input
				id={id}
				minLength={2}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				ref={ref}
				type={type}
				{...input_props}
				className={input_styles}
				placeholder={placeholder}
			/>
			{label && (
				<label className={label_styles} htmlFor={name} id={label.id}>
					{label.text}
				</label>
			)}
		</>
	);
}
