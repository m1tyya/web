import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

type PageProps = PropsWithChildren & {
	background_color?: string;
};

export function Page({ background_color = `transparent`, children }: PageProps): JSX.Element {
	const page_styles = clsx(`bg-${background_color} relative min-h-screen`);

	return <div className={clsx(page_styles)}>{children}</div>;
}
