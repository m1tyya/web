import { Page } from '@m1tyya/ui-react';

import { Hero, Reviews, Trener } from '~';

export function Home(): JSX.Element {
	return (
		<>
			<Page>
				<Hero />
				<Trener />
				<Reviews />
			</Page>
		</>
	);
}

export default Home;
