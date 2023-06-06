import { Container, Link, Vector } from '@m1tyya/ui-react';
import { cx } from '@twind/core';
import Logo from 'public/vectors/logo.svg';

import { MenuIcon } from '~/components/atoms';
import { Menu, MENU_ANIMATION_DURATION, type MenuLink } from '~/components/organisms';

const MENU_LINKS: Array<MenuLink> = [
	{
		text: `Cennik`,
		url: `/price`,
	},
	{
		text: `O Nas`,
		url: `/about`,
	},
	{
		text: `Kontakt`,
		url: `/contact`,
	},
];

const header_height = `40`,
	header_padding_x = `7`,
	header_padding_y = `6`;

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
		`w-full bg-[#CECECE]/10 flex items-center justify-between h-${height}`,
		`z-50 backdrop-blur-sm`,
	);

	return (
		<Container layout={HEADER_STYLES} padding={[padding_y, padding_x]} tag='nav'>
			<Link styles='w-[max(5vw,7rem)]' url='/'>
				<Vector
					desc='Some description'
					dimension='width'
					dimension_value='full'
					layout='hover:(scale-[95%] -rotate-[10deg]) duration-[250ms]'
					Svg={Logo}
					title='Home page'
				/>
			</Link>
			<Menu animation_duration={MENU_ANIMATION_DURATION} bg_color='[#E5BF9F]' links={MENU_LINKS} />
			<MenuIcon
				color='black'
				height={header_height}
				padding_x={header_padding_x}
				padding_y={header_padding_y}
				size={30}
				weight='md'
			/>
		</Container>
	);
}
