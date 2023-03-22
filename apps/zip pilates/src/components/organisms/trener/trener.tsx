import { Button, Container, Image, Text, Wave } from '@web/ui-react';
import clsx from 'clsx';
import { BsArrowUpRight } from 'react-icons/bs';

type TrenerProps = {};

const BG = `#C8B794`;

export function Trener({}: TrenerProps): JSX.Element {
	return (
		<>
			<Wave background_color={BG} />
			<Container layout={clsx(`bg-[${BG}] relative`)} padding_x='page_horizontal'>
				<Text
					font_family='text'
					font_size='fluid-2xl'
					position='mt-10'
					tag='h2'
					text='Trener'
					text_align='center'
				/>
				<div className='flex items-center gap-[10%]'>
					<Image
						dimension='height'
						label='Trener'
						loading='lazy'
						position='ml-[10%] mt-4'
						size_value={250}
						src='/images/trainer.webp'
					/>
					<Text
						font_family='naibo'
						font_size='3xl'
						position='mt-8'
						tag='h3'
						text='Tetyana Kantor'
					/>
				</div>
				<Text
					font_family='text'
					font_size='fluid-base'
					max_width='[40ch]'
					position='mt-8 mx-4'
					tag='p'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Sapien et ligula ullamcorper malesuada proin libero nunc. Nulla facilisi etiam dignissim diam. Eu lobortis elementum nibh tellus molestie nunc non. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id aliquet risus feugiat in ante metus.'
					text_align='justify'
					text_color='test'
				/>
				<Button
					background_color='gray-400'
					border_radius='sm'
					font_family='text'
					font_size='fluid-base'
					gap='2'
					icon={{ Svg: BsArrowUpRight, dimension: `width`, dimension_value: 10 }}
					icon_side='right'
					padding_x='4'
					padding_y='2'
					position='mt-4 ml-4'
					text='Dowiedz się więcej'
				/>
			</Container>
		</>
	);
}
