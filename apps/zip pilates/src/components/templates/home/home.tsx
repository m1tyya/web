import { Page } from '@m1tyya/ui-react';

import { Hero, Reviews, Trener } from '~';

export function Home(): JSX.Element {
	return (
		<>
			<Page background_color='bg'>
				<Hero />
				<Trener />
				<Reviews />
			</Page>
		</>
	);
}

export default Home;
