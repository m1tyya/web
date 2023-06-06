import { Button, Container, type IconProps, Text, Vector } from '@m1tyya/ui-react';
import HeroShape from 'public/vectors/hero-shape.svg';
import { HiArrowLongRight } from 'react-icons/hi2';

export const container_padding: [string, string] = [`page_vertical`, `page_horizontal`];

export const icon_props: IconProps = {
	icon: {
		dimension: `width`,
		dimension_value: `[20px]`,
		layout: `group~button-hover:translate-x-[.5rem] group~button-active:translate-x-[.5rem] duration-[0.5s]`,
		Svg: HiArrowLongRight,
	},
	icon_side: `right`,
};

export function Hero(): JSX.Element {
	return (
		<div className='px-page_horizontal pt-page_vertical'>
			<Container layout='md:(flex)' tag='div'>
				<div className='mx-6'>
					<Text
						font_family='heading'
						font_size='fluid-5xl md:fluid-2xl'
						styles=''
						tag='h1'
						text={`Zip Pilates Studio`}
						text_color=''
					/>
					<Text
						font_family='text'
						font_size='fluid-md md:fluid-base'
						font_weight='medium'
						letter_spacing='[-0.05rem]'
						max_width='[60%] md:full'
						styles=''
						tag='h2'
						text='Niech twoje ciało będzie w harmonii z twoją duszą'
						text_color=''
					/>
					<Vector
						dimension='width'
						dimension_value='md:[50%]'
						layout='mx-auto mt-20'
						Svg={HeroShape}
					/>
				</div>
			</Container>
			<Text
				font_family='text'
				font_size='fluid-md'
				font_weight='[300]'
				line_height='[1.6]'
				styles='mx-auto mt-10 first-letter:(text-fluid-2xl)'
				tag='p'
				text='Zip Pilates Studio – powstało z pasji do metody Josepha Pilatesa, z wykorzystaniem zaprojektowanego przez niego sprzętu. W przyjaznej atmosferze możesza poznawać technikę Pilates, również zgłębiać swoją wiedzę oraz umiejętności. Dzięki wykorzystaniu specjalistycznego sprzętu do Pilatesa – Reformer, Tower, Cadillac, Combo Chair, Ladder Barrel, zharmonizujesz ciało, umysł i duch. I co jest ważne – że wszystkie nabyte rezultaty osiadają w ciele na zawsze.'
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
					padding_x='8'
					padding_y='button_y'
					{...icon_props}
					position={`w-full italic justify-center border-black hover:(border-primary) active:border-primary border-1 duration-[.5s] `}
					text='Dowiedz się więcej'
				/>
			</Container>
		</div>
	);
}
