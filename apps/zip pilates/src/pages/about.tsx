import { About } from '~';

type AboutPageProps = {};

function AboutPage({}: AboutPageProps): JSX.Element {
	return (
		<div className='px-page_horizontal py-page_vertical'>
			<About />
		</div>
	);
}

export default AboutPage;
