import { Button, Container, type IconProps, Image, Text, Vector } from '@m1tyya/ui-react';
import Wave from 'public/vectors/wave.svg';
import { HiArrowLongRight } from 'react-icons/hi2';

import { container_padding } from '../hero';

type TrenerProps = {};

export function Trener({}: TrenerProps): JSX.Element {
	const icon_props: IconProps = {
		icon: {
			Svg: HiArrowLongRight,
			dimension: `width`,
			dimension_value: `[20px]`,
			fill: `light2`,
			layout: `group~button-hover:translate-x-[.5rem] group~button-active:translate-x-[.5rem] duration-[0.5s]`,
		},
		icon_side: `right`,
	};

	return (
		<>
			<Vector dimension='width' dimension_value='[100%]' fill='secondary/10' Svg={Wave} />
			<Container
				background_color='secondary/10'
				padding={container_padding}
				position='relative'
				tag='div'>
				<Text
					font_family='domaine'
					font_size='fluid-3xl'
					font_weight='semibold'
					tag='h2'
					text={`Trenerzy`}
					text_align='center'
					text_color='secondary-2'
				/>
				<Container display='flex' layout='mt-10 items-end justify-around' tag='div'>
					<Text
						font_family='domaine'
						font_size='fluid-xl'
						letter_spacing='[0.15rem]'
						line_height='[2.5]'
						max_width='[15ch]'
						styles='mt-8'
						tag='h3'
						text={`Tetyana Kantor`}
						text_color='primary-2'
					/>
					<Image
						alt='Trener'
						height={1024}
						loading='lazy'
						srcset={[{ descriptor: `768w`, src: `/images/trainer.webp` }]}
						styles='w-[250px]'
						width={768}
					/>
				</Container>
				<Text
					font_family='text'
					font_size='fluid-md'
					line_height='[1.6]'
					max_width='[90%]'
					styles='mt-10 mx-auto'
					tag='p'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Sapien et ligula ullamcorper malesuada proin libero nunc. Nulla facilisi etiam dignissim diam. Eu lobortis elementum nibh tellus molestie nunc non. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id aliquet risus feugiat in ante metus.'
					text_align='justify'
					text_color='[#703806]'
				/>
				<Container display='flex' layout='justify-center mt-10' tag='div'>
					<Button
						background_color='primary'
						border_radius='[3rem]'
						btn_text={{
							font_family: `text`,
							font_size: `fluid-md`,
							font_weight: `medium`,
							text_color: `light2`,
						}}
						gap='10'
						max_width='100%'
						padding_x='8'
						padding_y='button_y'
						width='[80%]'
						{...icon_props}
						position={`justify-center mr-8 hover:(border-black) active:(border-black) border-2 border-neutral-60 duration-[.5s]`}
						text='Dowiedz się więcej'
					/>
				</Container>
			</Container>
		</>
	);
}
