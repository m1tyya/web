import { clsx } from 'clsx';

type ContainerProps = {
	children: React.ReactNode;
	paddingX: 'lg' | 'md' | 'sm';
	paddingY?: 'lg' | 'md' | 'sm';
};

export function Container({ children, paddingX, paddingY }: ContainerProps): JSX.Element {
	const containerStyles = clsx(
		{
			'px-3': paddingX === `sm`,
			'px-6': paddingX === `md`,
			'px-9': paddingX === `lg`,
		},
		{
			'py-3': paddingY === `sm`,
			'py-6': paddingY === `md`,
			'py-9': paddingY === `lg`,
		},
	);

	return <div className={clsx(containerStyles)}>{children}</div>;
}
