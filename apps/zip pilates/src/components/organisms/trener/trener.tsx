import { Button, Container, Text } from '@m1tyya/ui-react';
import { useMediaQuery } from 'usehooks-ts';

import { icon_props } from '../hero';

type TrenerProps = {};

export function Trener({}: TrenerProps): JSX.Element {
	const is_phone = useMediaQuery(`(max-width: 768px)`);

	return (
		<>
			<div className='bg-primary/5 px-page_horizontal pt-page_vertical mt-40'>
				<div className='md:(px-[5vw]) lg:(px-[10vw])'>
					<h2 className='font-heading text-fluid-5xl md:(text-fluid-3xl text-start) text-center  font-medium font-normal'>
						Trener
					</h2>
					<Container display='flex' layout='mt-10 items-center justify-between w-full' tag='div'>
						<div className='w-[30%]'>
							<img
								alt='Trener'
								className='ml-4 h-auto w-full rotate-[-3deg]'
								height={1024}
								loading='lazy'
								srcSet='/images/trener-test.jpg 768w'
								width={768}
							/>
						</div>
						<p className='font-heading text-fluid-xl text-secondary mt-8 max-w-[20ch] font-medium leading-[1.1] tracking-[0.2rem]'>
							Nazywam się Tetyana Kantor i jestem zalożycielką Zip Pilates Studio w Gdyni
							(Trójmiasto).
						</p>
					</Container>
				</div>
				<Text
					font_family='text'
					font_size='fluid-md'
					font_weight='[300]'
					line_height='[1.6]'
					max_width='[90%]'
					styles='mt-10 first-letter:(text-fluid-2xl)'
					tag='p'
					text='Nazywam się Tetyana Kantor i jestem zalożycielką Zip Pilates Studio w Gdyni (Trójmiasto). Ukończyłam dwuletnie szkolienie Lolita’s Legacy według metody Lolity San Miguel (Floryda, USA), które uprawnia mnie do pracy na pilatesowym sprzęcie na wszystkich poziomach zaawansowania. Lolita San Miguel jest bezpośrednią uczennicą Josepha Pilatesa (First Generation Pilates Master Teacher).Ukończyłam również skolienie Michaela Kinga, założyciela brytyjskiej szkoły MK Pilates, a także brałam udział w warsztatach Alana Herdmana.'
				/>
				<Container display='flex' layout='justify-center mt-10 pl-8 pr-10' tag='div'>
					<a className='w-full' href='/about'>
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
					</a>
				</Container>
			</div>
		</>
	);
}
