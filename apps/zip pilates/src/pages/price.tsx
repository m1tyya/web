import {
	Button,
	type ButtonProps,
	Container,
	type IconProps,
	Text,
	Vector,
} from '@m1tyya/ui-react';
import { apply, tw } from '@twind/core';
import Divider from 'public/vectors/divider_vertical.svg';
import Training2 from 'public/vectors/equipment.svg';
import Training1 from 'public/vectors/stretching.svg';
import Training3 from 'public/vectors/tower.svg';
import { useState } from 'react';

type BtnProps = Pick<
	ButtonProps,
	'border_color' | 'border_radius' | 'border_style' | 'border_width' | 'btn_text' | 'position'
>;

const btn_props: BtnProps = {
	border_radius: `xl`,
	border_style: `solid`,
	border_width: 2,
	btn_text: {
		font_family: `merri`,
		font_size: apply`fluid-xs`,
		font_weight: `light`,
		letter_spacing: `wider`,
	},
	position: apply`md:border-[3px] items-center border-brown_light justify-center py-[2vw] px-[4vw] md:(py-[1vw] px-[2vw]) gap-[3vw] shadow-[#402d27] duration-300 hover:border-[#4E4132]`,
};

const btn_training_props: BtnProps = {
	...btn_props,
	btn_text: {
		...btn_props.btn_text,
		styles: apply`min-[500px]:text-fluid-base md:text-fluid-sm xl:text-fluid-md`,
	},
};

const btn_quantity_props: BtnProps = {
	...btn_props,
	btn_text: { ...btn_props.btn_text, font_size: `fluid-xl` },
};

const btn_icon_props: Omit<IconProps, 'icon'> & {
	icon: Omit<IconProps['icon'], 'Svg'>;
} = {
	icon: {
		dimension: `width`,
		dimension_value: `[60%]`,
	},
	icon_side: `bottom`,
};

const btn_selected_styles = apply`bg-selected text-silver border-selected fill-silver stroke-silver hover:shadow-none hover:transform-none hover:border-selected`;
const btn_unselected_styles = apply`text-[#402d27] shadow-[0_0_10px_-5px_#585149] hover:shadow-[0_0_20px_0px_#585149] hover:scale-[102%] stroke-[#655049] fill-[#655049] `;

const btns_training: Array<{
	svg: React.FC<React.SVGProps<SVGSVGElement>>;
	text: string;
}> = [
	{
		svg: Training1,
		text: `Indywidualny`,
	},
	{
		svg: Training2,
		text: `Duecie`,
	},
	{
		svg: Training3,
		text: `Grupowy`,
	},
];

const btns_quantity: Array<number> = [1, 4, 8];

function Price(): JSX.Element {
	const [training_title, set_training_title] = useState(``);
	const [quantity_title, set_quantity_title] = useState(``);
	const { icon, icon_side } = btn_icon_props;

	function handle_training_selection(event: React.MouseEvent<HTMLButtonElement>): void {
		const updated_training = event.currentTarget;
		const updated_title = updated_training.title;

		if (training_title == updated_title) {
			return;
		}

		const selected_btn = document.getElementById(training_title) as HTMLButtonElement | null;

		console.log(selected_btn);

		if (selected_btn) {
			selected_btn.classList.remove(tw(btn_selected_styles));
		}

		updated_training.classList.add(tw(btn_selected_styles));
		set_training_title(updated_title);
	}

	function handle_quantity_selection(event: React.MouseEvent<HTMLButtonElement>): void {
		const updated_quantity = event.currentTarget;
		const updated_title = updated_quantity.title;

		if (quantity_title == updated_title) {
			return;
		}

		const selected_btn = document.getElementById(quantity_title) as HTMLButtonElement | null;

		if (selected_btn) {
			selected_btn.classList.remove(tw(btn_selected_styles));
		}

		updated_quantity.classList.add(tw(btn_selected_styles));
		set_quantity_title(updated_title);
	}

	function resolve_price(): number {
		switch (training_title) {
			case `Indywidualny`: {
				switch (quantity_title) {
					case `1`: {
						return 215;
					}
					case `4`: {
						return 195;
					}
					case `8`: {
						return 180;
					}
					default: {
						return 0;
					}
				}
			}
			case `Duecie`: {
				switch (quantity_title) {
					case `1`: {
						return 150;
					}
					case `4`: {
						return 130;
					}
					case `8`: {
						return 120;
					}
					default: {
						return 0;
					}
				}
			}
			case `Grupowy`: {
				switch (quantity_title) {
					case `1`: {
						return 90;
					}
					case `4`: {
						return 85;
					}
					case `8`: {
						return 80;
					}
					default: {
						return 0;
					}
				}
			}
			default: {
				return 0;
			}
		}
	}

	return (
		<Container background_color='bg' padding={[`16`, `8`]} tag='main'>
			<Text
				font_family='heading2'
				font_size='fluid-3xl'
				font_weight='semibold'
				letter_spacing='[0.15rem]'
				styles={`md:max-w-full col-span-3`}
				tag='h2'
				text='Wybierz klasę i liczbę zajęć'
				text_color='[#7B654C]'
			/>
			<Container
				display='grid'
				layout='mt-[min(10vw,_7rem)] items-center md:grid-cols-[3fr_2fr] lg:grid-cols-[5fr_2fr_3fr]'
				tag='div'>
				<Container
					display='grid'
					layout={`gap-x-[2vw] gap-y-[6vw] lg:gap-y-[3vw] grid-rows-2 grid-cols-3`}
					tag='div'>
					{btns_training.map(({ svg, text }) => (
						<Button
							icon={{ ...icon, Svg: svg }}
							icon_side={icon_side}
							id={text}
							on_click={handle_training_selection}
							{...btn_training_props}
							key={text}
							text={text}
						/>
					))}
					{btns_quantity.map((num) => (
						<Button
							on_click={handle_quantity_selection}
							{...btn_quantity_props}
							id={num.toString()}
							key={num.toString()}
							text={num.toString()}
						/>
					))}
				</Container>
				<Vector
					dimension='height'
					dimension_value='[19vw]'
					fill='selected'
					layout='hidden lg:block justify-self-center w-fit'
					Svg={Divider}
				/>
				<Container layout='font-merri text-center text-[#7B654C]' tag='div'>
					<Text font_size='fluid-md' styles='mt-20' tag='h3' text='Cena za zajęcia' />
					<Text
						font_size={tw(`fluid-5xl`)}
						styles={`after:(content-['.'] invisible)`}
						tag='h3'
						text={resolve_price() == 0 ? `` : `${resolve_price()} zł`}
						text_color='[#A58C70]'
					/>
				</Container>
			</Container>
		</Container>
	);
}

export default Price;
