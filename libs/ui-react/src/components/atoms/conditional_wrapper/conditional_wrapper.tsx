import type React from 'react';
import { type PropsWithChildren } from 'react';

type ConditionalWrapperProps = PropsWithChildren & {
	condition: boolean;
	wrapper: (children: React.ReactNode) => JSX.Element;
};

export function ConditionalWrapper({
	children,
	// eslint-disable-next-line @typescript-eslint/naming-convention
	condition,
	wrapper,
}: ConditionalWrapperProps): React.ReactNode {
	return condition ? wrapper(children) : children;
}
