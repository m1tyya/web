import { Button, type IconProps, Vector } from '@m1tyya/ui-react';
import HeroShape from 'public/vectors/hero-shape.svg';
import { HiArrowLongRight } from 'react-icons/hi2';
import { useMediaQuery } from 'usehooks-ts';

export const container_padding: [string, string] = [`page_vertical`, `page_horizontal`];

export const icon_props: IconProps = {
	icon: {
		dimension: `width`,
		dimension_value: `[20px]`,
		layout: `group~button-hover:(md:translate-x-[1.5rem] fill-primary) group~button-active:(md:translate-x-[1.5rem]) duration-[0.5s]`,
		Svg: HiArrowLongRight,
	},
	icon_side: `right`,
};

const st = {
	_: `px-page_horizontal pt-page_vertical`,
	btn_wrapper: {
		_: `mt-10 flex justify-center pl-8 pr-10 md:(p-0 justify-start mt-[3vw])`,
		btn: `w-full italic justify-center border-black hover:(border-primary) active:border-primary border-2 duration-[.5s] md:(w-fit px-16)`,
	},
	flex: {
		_: `md:(flex items-center justify-between relative px-[5vw]) lg:(px-[10vw])`,
		image: `mx-auto mt-20 md:(m-0)`,
		'left-col': `md:(mb-[3vw])`,
	},
	h1: `text-center font-heading text-fluid-5xl text-primary font-medium md:(text-start text-fluid-3xl)`,
	h2: `text-center font-text text-fluid-md md:(text-start text-fluid-base) max-w-[60%] max-w-full font-[500] tracking-[-0.05rem]`,
	text: `font-text text-fluid-md weight-[300] first-letter:(text-fluid-2xl leading-[.8]) mx-auto mt-10 leading-[1.6] md:(font-[500] mx-auto mt-40 max-w-[40ch] leading-[2] first-letter:(text-fluid-md)) lg:(ml-[15%] mt-8 max-w-[50ch])`,
};

const btn = (
	<div className={st.btn_wrapper._}>
		<Button
			border_radius='[3rem]'
			btn_text={{
				font_family: `text`,
				font_size: `fluid-lg md:(fluid-base) lg:(fluid-md)`,
				font_weight: `[500]`,
			}}
			gap='10'
			padding_x='8'
			padding_y='button_y'
			{...icon_props}
			position={st.btn_wrapper.btn}
			text='Dowiedz się więcej'
		/>
	</div>
);

export function Hero(): JSX.Element {
	const is_phone = useMediaQuery(`(max-width: 768px)`);

	return (
		<div className={st._}>
			<div className={st.flex._}>
				<div className={st.flex[`left-col`]}>
					<h1 className={st.h1}>Zip Pilates Studio</h1>
					<h2 className={st.h2}>Niech twoje ciało będzie w harmonii z twoją duszą</h2>
					{!is_phone && btn}
				</div>
				<Vector
					dimension='width'
					dimension_value='md:[35%]'
					layout={st.flex.image}
					Svg={HeroShape}
				/>
			</div>
			<p className={st.text}>
				Zip Pilates Studio – powstało z pasji do metody Josepha Pilatesa, z wykorzystaniem
				zaprojektowanego przez niego sprzętu. W przyjaznej atmosferze możesza poznawać technikę
				Pilates, również zgłębiać swoją wiedzę oraz umiejętności. Dzięki wykorzystaniu
				specjalistycznego sprzętu do Pilatesa – Reformer, Tower, Cadillac, Combo Chair, Ladder
				Barrel, zharmonizujesz ciało, umysł i duch. I co jest ważne – że wszystkie nabyte rezultaty
				osiadają w ciele na zawsze.
			</p>
			{is_phone && btn}
		</div>
	);
}
