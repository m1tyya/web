import { Container, Image, Text, Vector } from '@m1tyya/ui-react';
import { type AnimationProps, motion, useAnimation } from 'framer-motion';
import Quote from 'public/vectors/quote.svg';
import Wave from 'public/vectors/wave.svg';
import { useEffect, useState } from 'react';

import { container_padding } from '../hero';

type Testimonial = {
	avatar?: string;
	name: string;
	text: string;
};

const MotionText = motion(Text),
	MotionImage = motion(Image);

export const testimonials: Array<Testimonial> = [
	{
		avatar: `https://lh3.googleusercontent.com/a-/ACB-R5QU6I82CCRt5MVNAPZIiWCS7zCjoYOI9kSQlnejnw=w75-h75-p-rp-mo-br100`,
		name: `Joanna G`,
		text: `Serdecznie polecam.  Tatiana cudownie pomaga Ci odzyskać kontakt z własnym ciałem.  Zajęcia to inwestycja w swoje zdrowie i samopoczucie. Tatiana dba o każdy szczegół, dopilnuje, aby wszystko robić dokładnie i mieć rezultaty.  Polecam z całego serca.`,
	},
	{
		avatar: `https://lh3.googleusercontent.com/a-/ACB-R5Qm30zEFtbTW89lgI6e3SwhGxHR7Cf_mYFtPJuvsQ=w75-h75-p-rp-mo-br100`,
		name: `Łukasz Sady`,
		text: `Pełen profesjonalizm, 100% zaangażowania i ogromna cierpliwość Tatiany. Doskonały trening rozciągający i oddechowy. Gorąco polecam!!!`,
	},
];

const review_lines = 9,
	review_line_height = 2,
	review_font_size = 2;

export function Reviews(): JSX.Element {
	const [active_testimonial_index, set_active_testimonial_index] = useState(0),
		controls = useAnimation(),
		{ avatar, name, text } = testimonials.at(active_testimonial_index)!,
		review_animation: AnimationProps = {
			animate: { opacity: 1 },
			initial: { opacity: 0 },
			transition: { duration: 1.5 },
		};

	useEffect(() => {
		setTimeout(() => {
			if (active_testimonial_index === testimonials.length - 1) {
				set_active_testimonial_index(0);
			} else {
				set_active_testimonial_index(active_testimonial_index + 1);
			}
		}, 10_000);
	}, [active_testimonial_index, controls]);

	return (
		<>
			<Vector
				background_color='primary/5'
				dimension='width'
				dimension_value='[100%]'
				fill='white'
				Svg={Wave}
			/>
			<Container background_color='white' padding={container_padding} tag='div'>
				<Text
					font_family='heading'
					font_size='fluid-lg'
					font_weight='medium'
					letter_spacing='[0.1rem]'
					tag='h2'
					text='Nasi klienci są bardzo zadowoleni'
					text_align='center'
				/>
				<Container display='flex' layout='items-center flex-col mt-20' tag='div'>
					<div>
						<Container
							display='flex'
							layout='max-w-min top-[-3rem] left-[10%] gap-2'
							position='absolute'
							tag='div'>
							<Vector dimension='width' dimension_value='[10vw]' fill='white' Svg={Quote} />
							<Vector dimension='width' dimension_value='[10vw]' fill='white' Svg={Quote} />
						</Container>
						<MotionText
							key={text}
							{...review_animation}
							font_family='text'
							font_size={`[${review_font_size}rem]`}
							font_weight='[300]'
							height={`[${review_line_height * review_font_size * review_lines}rem]`}
							line_height={`[${review_line_height}]`}
							max_width='[70%]'
							styles={`truncate-${review_lines} mx-auto`}
							tag='p'
							text={text}
							text_align='center'
							z_index='10'
						/>
						<Container
							display='flex'
							layout='bottom-[-3rem] right-[10%] gap-2 rotate-180'
							position='absolute'
							tag='div'>
							<Vector dimension='width' dimension_value='[10vw]' fill='white' Svg={Quote} />
							<Vector dimension='width' dimension_value='[10vw]' fill='white' Svg={Quote} />
						</Container>
					</div>
					{avatar !== undefined && (
						<MotionImage
							{...review_animation}
							alt={`${name} photo`}
							height={60}
							key={avatar}
							loading='lazy'
							srcset={[{ descriptor: `75w`, src: avatar }]}
							styles='mt-10'
							width={60}
						/>
					)}
					<MotionText
						key={name}
						{...review_animation}
						font_family='heading'
						font_size='fluid-base'
						font_weight='normal'
						styles='mt-5'
						tag='h3'
						text={name}
					/>
					<Container display='flex' layout='items-center mt-10' tag='div'>
						<MotionText
							key={active_testimonial_index}
							{...review_animation}
							font_family='text'
							font_size='fluid-lg'
							font_weight='semibold'
							tag='span'
							text={(active_testimonial_index + 1).toString().padStart(2, `0`)}
						/>
						<hr className='mx-4 w-20 border-t-2 border-black' />
						<Text
							font_family='text'
							font_size='fluid-lg'
							font_weight='semibold'
							tag='span'
							text={testimonials.length.toString().padStart(2, `0`)}
						/>
					</Container>
				</Container>
			</Container>
		</>
	);
}
