import { Container, Link, Vector } from '@m1tyya/ui-react';
import { cx } from '@twind/core';
import Logo from 'public/vectors/logo.svg';

type HeaderProps = {
	background_color: string;
	height: string;
	is_sticky: boolean;
	padding_x: string;
	padding_y: string;
};

export function Header({
	background_color,
	height,
	is_sticky,
	padding_x,
	padding_y,
}: HeaderProps): JSX.Element {
	const HEADER_STYLES = cx(
		{
			relative: !is_sticky,
			'sticky top-0 left-0': is_sticky,
		},
		`w-full bg-${background_color}/70 flex items-center justify-between h-${height}`,
		`z-50 backdrop-blur-md`,
	);

	return (
		<Container layout={HEADER_STYLES} padding={[padding_y, padding_x]} tag='nav'>
			<Link url='/'>
				<Vector
					desc='Some description'
					dimension='width'
					dimension_value='[50px]'
					layout='hover:(scale-[120%] -rotate-[15deg]) duration-[250ms]'
					Svg={Logo}
					title='Home page'
				/>
			</Link>
		</Container>
	);
}
