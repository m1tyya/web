import { Container, Link, Text } from '@m1tyya/ui-react';

import { container_padding } from '../hero';

type FooterProps = {};

export function Footer({}: FooterProps): JSX.Element {
	const line_height = `[2]`,
		address_color = `[#A28C77]`,
		address_hover_color = `black`,
		address_hover_duration = `[0.4s]`;

	return (
		<Container
			background_color='secondary/20'
			line_height={line_height}
			padding={[...container_padding, `4`]}
			tag='footer'>
			<Container tag='address'>
				<Text
					font_family='text'
					font_size='fluid-md'
					font_weight='600'
					tag='h3'
					text='Skontaktuj się z nami'
				/>
				<Link url='tel:+48 732 901 415'>
					<Text
						font_family='text'
						font_size='fluid-base'
						position={`hover:text-${address_hover_color} duration-${address_hover_duration}`}
						tag='p'
						text='+48 732 901 415'
						text_color={address_color}
					/>
				</Link>
				<Link url='mailto:zip.pilates.studio@gmail.com'>
					<Text
						font_family='text'
						font_size='fluid-base'
						position={`hover:text-${address_hover_color} duration-${address_hover_duration}`}
						tag='p'
						text='zip.pilates.studio@gmail.com'
						text_color={address_color}
					/>
				</Link>
				<Text
					font_family='text'
					font_size='fluid-md'
					font_weight='600'
					position='mt-5'
					tag='h3'
					text='Nasz adres'
				/>
				<Link url='https://goo.gl/maps/NF4XZsZfhJ39fdHJ7'>
					<Text
						font_family='text'
						font_size='fluid-base'
						position={`hover:text-${address_hover_color} duration-${address_hover_duration}`}
						tag='h3'
						text={`Zip Pilates Studio
						Kazimierza Górskiego 1/1302
						81-304 Gdynia`}
						text_color={address_color}
					/>
				</Link>
			</Container>
			<Text
				font_family='text'
				font_size='fluid-sm'
				font_weight='400'
				position='mt-10'
				tag='p'
				text='© Zip Pilates Studio 2023. Wszelkie prawa zastrzeżone.'
			/>
		</Container>
	);
}
