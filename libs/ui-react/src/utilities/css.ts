import { type Padding } from '..';

export function resolve_padding({
	padding,
	padding_bottom,
	padding_start,
	padding_end,
	padding_top,
	padding_x,
	padding_y,
}: Padding): string | undefined {
	if (padding_top !== undefined) {
		return `pt-${padding_top}`;
	} else if (padding_end !== undefined) {
		return `pe-${padding_end}`;
	} else if (padding_bottom !== undefined) {
		return `pb-${padding_bottom}`;
	} else if (padding_start !== undefined) {
		return `ps-${padding_start}`;
	} else if (padding_y !== undefined) {
		return `py-${padding_y}`;
	} else if (padding_x !== undefined) {
		return `px-${padding_x}`;
	} else if (typeof padding === `string`) {
		return `p-${padding}`;
	} else {
		switch (padding.length) {
			case 2: {
				return `py-${padding[0]} px-${padding[1]}`;
			}
			case 3: {
				return `pt-${padding[0]} px-${padding[1]} pb-${padding[2]}`;
			}
			case 4: {
				return `pt-${padding[0]} pe-${padding[1]} pb-${padding[2]} ps-${padding[3]}`;
			}
		}
	}
}
