import { Page } from '@web/ui-react';

import { Hero, Trener } from '~';

export function Home(): JSX.Element {
	return (
		<>
			<Page background_color='bg'>
				<Hero />
				<Trener />
			</Page>
		</>
	);
}

export default Home;
