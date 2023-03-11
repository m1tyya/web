import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

type PageProps = PropsWithChildren & {
	bgColor?: string;
	isModalOpen: boolean;
};

export function Page({ bgColor = `transparent`, children, isModalOpen }: PageProps): JSX.Element {
	const pageStyles = clsx(`bg-[${bgColor}] relative min-h-screen`);

	return <div className={clsx(pageStyles)}>{children}</div>;
}
