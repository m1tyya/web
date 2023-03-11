import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { type URL } from 'url';

type Props = PropsWithChildren & {
	url: URL;
};

export function Link({ children, url }: Props) {
	return <NextLink href={url.href}>{children}</NextLink>;
}
