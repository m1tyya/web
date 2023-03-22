import { Container, Image } from '@web/ui-react';

import { ade_display, syne } from '../../../pages/_app';

type HomeProps = {};

export function Home({}: HomeProps): JSX.Element {
	return (
		<main>
			<Container paddingX='lg'>
				<Image
					height={300}
					label='Hello'
					loading='eager'
					src='/images/equipment.webp'
					width={500}
				/>
				<h1 className={`${ade_display.className} text-3xl font-semibold`}>
					{`Zip pilates studio`.toUpperCase()}
				</h1>
				<h2 className={`${syne.className} text-xl`}>Harmonia ciała, umysłu i ducha</h2>
			</Container>
		</main>
	);
}
