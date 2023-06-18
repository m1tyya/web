import { Link, Vector } from '@m1tyya/ui-react';
import { cx } from '@twind/core';
import Logo from 'public/vectors/logo.svg';
import { useMediaQuery } from 'usehooks-ts';

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

type HeaderProps = {};

const st = {
	header: {
		_: `sticky top-0 left-0 drop-shadow-lg z-50 backdrop-blur-md w-full bg-[#CECECE]/50 flex items-center justify-between overflow-x-clip`,
		height: `40`,
		px: `7`,
		py: `6`,
	},
};

export function Header({}: HeaderProps): JSX.Element {
	const is_phone = useMediaQuery(`(max-width: 768px)`);

	return (
		<nav
			className={cx(st.header._, `h-${st.header.height} px-${st.header.px} py-${st.header.py}`)}
			id='nav'>
			<Link styles='w-[max(5vw,7rem)] md:(h-[105%] w-auto)' url='/'>
				{is_phone && (
					<Vector
						desc='Some description'
						dimension='width'
						dimension_value='full'
						layout='hover:(scale-[95%] -rotate-[10deg]) duration-[250ms]'
						Svg={Logo}
						title='Home page'
					/>
				)}
				{!is_phone && <img className='h-full' src='/images/logo-dark-big.png' />}
			</Link>
			<Menu animation_duration={MENU_ANIMATION_DURATION} bg_color='[#E5BF9F]' links={MENU_LINKS} />
			<MenuIcon
				color='black'
				height={st.header.height}
				padding_x={st.header.px}
				padding_y={st.header.py}
				size={30}
				weight='md'
			/>
		</nav>
	);
}
