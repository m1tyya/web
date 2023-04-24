import { Button, Container, type IconProps, Text, Vector } from '@m1tyya/ui-react';
import HeroShape from 'public/vectors/hero-shape.svg';
import { HiArrowLongRight } from 'react-icons/hi2';

export const container_padding: [string, string] = [`page_vertical`, `page_horizontal`];

export function Hero(): JSX.Element {
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
		<Container padding={container_padding}>
			<Container layout='py-12' position='relative'>
				<Text
					font_family='domaine'
					font_size='fluid-4xl'
					font_weight='semibold'
					max_width='[50%]'
					position='absolute top-[0%] z-10'
					tag='h1'
					text={`Zip Pilates Studio`}
					text_color='text'
				/>
				<Vector dimension='width' dimension_value='[80%]' layout='mx-auto mt-20' Svg={HeroShape} />
				<Text
					font_family='text'
					font_size='fluid-md'
					font_weight='medium'
					letter_spacing='[-0.05rem]'
					max_width='[30%]'
					position='absolute bottom-[10%] right-0'
					tag='h2'
					text='Niech twoje ciało będzie w harmonii z twoją duszą'
					text_color='text_darker'
				/>
			</Container>
			<Text
				font_family='text'
				font_size='fluid-md'
				line_height='[1.6]'
				max_width='[90%]'
				position='mx-auto mt-10'
				tag='p'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				text_align='justify'
				text_color='text_darker'
			/>
			<Container display='flex' layout='justify-center mt-10'>
				<Button
					background_color='secondary-2'
					border_radius='[3rem]'
					font_family='text'
					font_size='fluid-md'
					gap='10'
					max_width='100%'
					padding_x='8'
					padding_y='button_y'
					width='[80%]'
					{...icon_props}
					font_weight='medium'
					position={`justify-center mr-8 hover:(border-black) active:(border-black) border-2 border-neutral-60 duration-[.5s]`}
					text='Dowiedz się więcej'
					text_color='light2'
				/>
			</Container>
		</Container>
	);
}
