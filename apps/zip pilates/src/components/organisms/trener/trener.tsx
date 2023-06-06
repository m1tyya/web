import { Button, Container, Text, Vector } from '@m1tyya/ui-react';
import Wave from 'public/vectors/wave.svg';

import { icon_props } from '../hero';

type TrenerProps = {};

export function Trener({}: TrenerProps): JSX.Element {
	return (
		<>
			<Vector dimension='width' dimension_value='[100%]' fill='primary/5' Svg={Wave} />
			<div className='bg-primary/5 px-page_horizontal'>
				<Text
					font_family='heading'
					font_size='fluid-5xl'
					styles='mx-6'
					tag='h2'
					text={`Trenerzy`}
				/>
				<Container display='flex' layout='mt-10 items-center justify-evenly w-full' tag='div'>
					<div className='w-[40%]'>
						<img
							alt='Trener'
							className='h-auto w-full'
							height={1024}
							loading='lazy'
							srcSet='/images/trener-test.jpg 768w'
							width={768}
						/>
					</div>
					<Text
						font_family='heading'
						font_size='fluid-3xl'
						font_weight='[500]'
						letter_spacing='[0.2rem]'
						line_height='[.8]'
						styles='mt-8 w-min first-letter:(ml-8)'
						tag='h3'
						text={`Tetyana Kantor`}
						text_color='secondary-2'
					/>

					{/* srcset={[{ descriptor: `768w`, src: `/images/trainer.webp` }]} */}
				</Container>
				<Text
					font_family='text'
					font_size='fluid-md'
					font_weight='[300]'
					line_height='[1.6]'
					max_width='[90%]'
					styles='mt-10 first-letter:(text-fluid-2xl)'
					tag='p'
					text='Nazywam się Tatiana Kantor i jestem zalożycielką Zip Pilates Studio w Gdyni (Trójmiasto). Ukończyłam dwuletnie szkolienie Lolita’s Legacy według metody Lolity San Miguel (Floryda, USA), które uprawnia mnie do pracy na pilatesowym sprzęcie na wszystkich poziomach zaawansowania. Lolita San Miguel jest bezpośrednią uczennicą Josepha Pilatesa (First Generation Pilates Master Teacher).Ukończyłam również skolienie Michaela Kinga, założyciela brytyjskiej szkoły MK Pilates, a także brałam udział w warsztatach Alana Herdmana.'
				/>
				<Container display='flex' layout='justify-center mt-10 pl-8 pr-10' tag='div'>
					<Button
						border_radius='[3rem]'
						btn_text={{
							font_family: `text`,
							font_size: `fluid-lg`,
							font_weight: `[500]`,
						}}
						gap='10'
						max_width='100%'
						padding_x='8'
						padding_y='button_y'
						width='[80%]'
						{...icon_props}
						position={`w-full italic justify-center border-black hover:(border-primary) active:border-primary border-1 duration-[.5s]`}
						text='Biografia'
					/>
				</Container>
			</div>
		</>
	);
}
