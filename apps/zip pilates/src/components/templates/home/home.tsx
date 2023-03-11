import { Container, Image, Page, Vector } from '@web/ui-react';
import { type MotionProps, useCycle } from 'framer-motion';
import Logo from 'public/vectors/logo.svg';
import { MenuIcon } from 'src/components/atoms/menu-icon';
import { Menu, Navbar } from 'src/components/organisms';

import { MENU_STATES, type MenuStates } from '~';

import { adeDisplay, syne } from '../../../pages/_app';

type HomeProps = {};

export function Home({}: HomeProps): JSX.Element {
	const [currentMenuState, toggleMenu] = useCycle<MenuStates>(...Object.values(MENU_STATES)),
		logoAnimation: MotionProps = {
			animate: currentMenuState,
			initial: MENU_STATES.CLOSED,
			variants: { [MENU_STATES.CLOSED]: { opacity: 1 }, [MENU_STATES.OPEN]: { opacity: 0 } },
		},
		navbarAnimation: MotionProps = {
			animate: currentMenuState,
			initial: MENU_STATES.CLOSED,
			variants: {
				[MENU_STATES.CLOSED]: { backdropFilter: `blur(20px)`, backgroundColor: `#D8D0AFBF` },
				[MENU_STATES.OPEN]: { backdropFilter: `none`, backgroundColor: `transparent` },
			},
		};

	return (
		<>
			<Menu bgColor='#D5B99A' currentMenuState={currentMenuState} />
			<Page bgColor='#f7efe7' isModalOpen={currentMenuState === `OPEN`}>
				<main className='relative'>
					<Navbar animation={navbarAnimation} height='md' isSticky={true} paddingX='md'>
						<Vector
							animation={logoAnimation}
							desc='Some description'
							Svg={Logo}
							title='Website logo'
							width={60}
							zIndex={0}
						/>
						<MenuIcon
							color='black'
							currentMenuState={currentMenuState}
							size={30}
							toggleMenu={toggleMenu}
							weight='md'
						/>
					</Navbar>
					<Container paddingX='md'>
						<Image
							height={300}
							label='Hello'
							loading='eager'
							src='/images/equipment.webp'
							width={500}
						/>
						<h1 className={`${adeDisplay.className} text-3xl font-semibold`}>
							{`Zip pilates studio`.toUpperCase()}
						</h1>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
						<h2 className={`${syne.className} text-xl`}>{`Harmonia ciała, umysłu i ducha`}</h2>
					</Container>
				</main>
			</Page>
		</>
	);
}

export default Home;
