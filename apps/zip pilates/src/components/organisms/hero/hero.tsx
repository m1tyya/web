import { Button, Container, type IconProps, Text, Vector } from '@web/ui-react';
import HeroShape from 'public/vectors/hero-shape.svg';
import { HiArrowLongRight } from 'react-icons/hi2';

const container_padding: [string, string] = [`page_vertical`, `page_horizontal`];

export function Hero(): JSX.Element {
	const ICON_SIZE = 30,
		icon_props: IconProps = {
			icon: {
				Svg: HiArrowLongRight,
				dimension: `width`,
				dimension_value: `[${ICON_SIZE}px]`,
				position: `group~button-hover:translate-x-[.1rem] duration-[0.5s]`,
			},
			icon_side: `right`,
		};

	return (
		<Container padding={container_padding}>
			<Container layout='py-12' position='relative'>
				<Text
					font_family='heading'
					font_size='fluid-4xl'
					font_weight='semibold'
					max_width='[50%]'
					position='absolute top-[0%]'
					tag='h1'
					text={`Zip Pilates Studio`.toUpperCase()}
					text_color='text'
					z_index='10'
				/>
				<Vector
					dimension='width'
					dimension_value='[80%]'
					position='mx-auto mt-20'
					Svg={HeroShape}
				/>
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
					gap='20'
					padding_x='button_x'
					padding_y='button_y'
					{...icon_props}
					font_weight='medium'
					position={`mr-8 hover:(border-black) border-2 border-neutral-60 duration-[.5s]`}
					text='Dowiedz się więcej'
					text_color='light'
				/>
			</Container>
		</Container>
	);
}
