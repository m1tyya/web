import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

type PageProps = PropsWithChildren & {
	background_color?: string;
	layout?: string;
};

export function Page({
	background_color = `transparent`,
	children,
	layout,
}: PageProps): JSX.Element {
	const page_styles = clsx(layout, `bg-${background_color} relative min-h-screen`);

	return <main className={clsx(page_styles)}>{children}</main>;
}
