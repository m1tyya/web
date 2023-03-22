import { type Undefined } from '~/components';

export type Dimension = 'height' | 'width';
export type Display = 'block' | 'flex' | 'grid' | 'inline';
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
export type Padding =
	| {
			padding: [string, string, string, string];
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x?: never;
			padding_y?: never;
	  }
	| {
			padding: [string, string, string];
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x?: never;
			padding_y?: never;
	  }
	| {
			padding: [string, string];
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x?: never;
			padding_y?: never;
	  }
	| {
			padding: string;
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x?: never;
			padding_y?: never;
	  }
	| {
			padding?: never;
			padding_bottom: string;
			padding_left: string;
			padding_right: string;
			padding_top: string;
			padding_x?: never;
			padding_y?: never;
	  }
	| {
			padding?: never;
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x: string;
			padding_y?: never;
	  }
	| {
			padding?: never;
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x?: never;
			padding_y: string;
	  }
	| {
			padding?: never;
			padding_bottom?: never;
			padding_left?: never;
			padding_right?: never;
			padding_top?: never;
			padding_x?: never;
			padding_y?: never;
	  };
type AllPadding = Undefined<{
	padding?: string;
	padding_bottom?: string;
	padding_left?: string;
	padding_right?: string;
	padding_top?: string;
	padding_x?: string;
	padding_y?: string;
}>;
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
