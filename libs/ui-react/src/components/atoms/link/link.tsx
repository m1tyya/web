import { type URL } from 'node:url';

import { type PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren & {
	styles?: string;
	url: URL | string;
};

export function Link({ children, styles, url }: LinkProps): JSX.Element {
	const href = typeof url === `string` ? url : url.href;

	return (
		<a className={styles} href={href}>
			{children}
		</a>
	);
}
