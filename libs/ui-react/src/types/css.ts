import {
	type OmitTransform,
	type OmitTransformExclusive,
	type PickTransformExclusive,
} from './utilities';

type OmitTransformExclusiveNever<
	Obj extends object,
	ObjKeys extends keyof Obj,
> = OmitTransformExclusive<Obj, ObjKeys, never>;

type OmitTransformNever<Obj extends object, ObjKeys extends keyof Obj> = OmitTransform<
	Obj,
	ObjKeys,
	never
>;

export type PseudoClasses<T> = {
	active: T;
	focus: T;
	hover: T;
	visited: T;
};
export type MediaType = 'all' | 'print' | 'screen';
export type MediaFeature =
	| 'aspect-ratio'
	| 'max-width'
	| 'min-width'
	| 'monochrome'
	| 'orientation'
	| 'prefers-color-scheme'
	| 'prefers-contrast'
	| 'prefers-reduced-data'
	| 'prefers-reduced-motion';
export type LengthUnits = '%' | 'em' | 'px' | 'rem' | 'vh' | 'vmax' | 'vmin' | 'vw';
export type Dimension = 'height' | 'width';
export type Display = 'block' | 'flex' | 'grid' | 'inline-flex' | 'inline';
export type Position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
export type BlockElement =
	| 'address'
	| 'article'
	| 'aside'
	| 'div'
	| 'footer'
	| 'header'
	| 'main'
	| 'nav'
	| 'section';

type AllPadding = {
	padding: string;
	padding_bottom: string;
	padding_end: string;
	padding_start: string;
	padding_top: string;
	padding_x: string;
	padding_y: string;
};

type AllMargin = {
	margin: string;
	margin_bottom: string;
	margin_left: string;
	margin_right: string;
	margin_top: string;
	margin_x: string;
	margin_y: string;
};

export type Padding =
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding_bottom'> &
			Pick<AllPadding, 'padding_bottom'>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding_end'> &
			Pick<AllPadding, 'padding_end'>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding_start'> &
			Pick<AllPadding, 'padding_start'>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding_top'> &
			Pick<AllPadding, 'padding_top'>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding_x'> & Pick<AllPadding, 'padding_x'>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding_y'> & Pick<AllPadding, 'padding_y'>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding'> &
			PickTransformExclusive<AllPadding, 'padding', [string, string, string, string]>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding'> &
			PickTransformExclusive<AllPadding, 'padding', [string, string, string]>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding'> &
			PickTransformExclusive<AllPadding, 'padding', [string, string]>)
	| (OmitTransformExclusiveNever<Partial<AllPadding>, 'padding'> & Pick<AllPadding, 'padding'>);

export type Margin =
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin_bottom'> &
			Pick<AllMargin, 'margin_bottom'>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin_left'> &
			Pick<AllMargin, 'margin_left'>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin_right'> &
			Pick<AllMargin, 'margin_right'>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin_top'> & Pick<AllMargin, 'margin_top'>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin_x'> & Pick<AllMargin, 'margin_x'>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin_y'> & Pick<AllMargin, 'margin_y'>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin'> &
			PickTransformExclusive<AllMargin, 'margin', [string, string, string, string]>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin'> &
			PickTransformExclusive<AllMargin, 'margin', [string, string, string]>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin'> &
			PickTransformExclusive<AllMargin, 'margin', [string, string]>)
	| (OmitTransformExclusiveNever<Partial<AllMargin>, 'margin'> & Pick<AllMargin, 'margin'>);

export type TextElement =
	| 'a'
	| 'b'
	| 'code'
	| 'data'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span';
export type FontWeight =
	| '200'
	| 'black'
	| 'bold'
	| 'extrabold'
	| 'extralight'
	| 'light'
	| 'medium'
	| 'normal'
	| 'semibold'
	| 'thin';
export type TextAlign = 'center' | 'end' | 'justify' | 'start';
export type ArbitraryValue<T extends number | string> = `[${T}]`;
export type ArbitraryValuePercentage = ArbitraryValue<`${number}${Extract<LengthUnits, '%'>}`>;
export type ArbitraryValueNumber = ArbitraryValue<`${number}`>;
export type ArbitraryValueLength = ArbitraryValue<`${number}${LengthUnits}`>;
export type BorderStyle = 'dashed' | 'dotted' | 'double' | 'solid';
