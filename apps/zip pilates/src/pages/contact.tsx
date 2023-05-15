import { init, sendForm } from '@emailjs/browser';
import { DevTool } from '@hookform/devtools';
import { Button, Container } from '@m1tyya/ui-react';
import { type BaseSyntheticEvent, type ElementType, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	type RegisterOptions,
	type SubmitErrorHandler,
	type SubmitHandler,
} from 'react-hook-form/dist/types';

import { env } from '~/config';

type InputData = {
	email: string;
	message: string;
	name: string;
	subject: string;
};

const input_props = {
	border_color: `[#e3e3e3]`,
	border_radius: `3xl`,
	border_style: `solid`,
	border_width: `2`,
	padding: [`3`, `8`],
	styles: `peer outline-none focus:border-[#0c46da] invalid:border-red-500 duration-[200ms]`,
};

const placeholder_focus_styles = `text-base top-0 px-2`,
	label_styles = `duration-300 top-[50%] -translate-y-1/2 absolute bg-white transform transition-all left-8 peer-focus:(${placeholder_focus_styles})`;

const inputs: Array<{
	label: string;
	name: keyof InputData;
	options?: RegisterOptions;
	placeholder?: string;
	Tag: ElementType;
	type: string;
}> = [
	{
		label: `Imię`,
		name: `name`,
		options: {
			maxLength: 25,
			minLength: 2,
			required: true,
		},
		Tag: `input`,
		type: `text`,
	},
	{
		label: `Email`,
		name: `email`,
		options: {
			maxLength: 40,
			required: true,
		},
		Tag: `input`,
		type: `email`,
	},
	{
		label: `Temat`,
		name: `subject`,
		options: {
			maxLength: 60,
			minLength: 2,
			required: true,
		},
		Tag: `input`,
		type: `text`,
	},
	{
		label: `Wiadomość`,
		name: `message`,
		options: {
			maxLength: 600,
			minLength: 5,
			required: true,
		},
		Tag: `textarea`,
		type: `text`,
	},
];

function random_int(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_reference_number(): string {
	return random_int(1, 1_000_000).toString();
}

function ContactPage(): JSX.Element {
	const form = useRef<HTMLFormElement>();

	const { control, handleSubmit, register } = useForm<InputData>(),
		on_submit: SubmitHandler<InputData> = async (data, event) => {
			event?.preventDefault();
			// console.log(data);
			set_reference_number(generate_reference_number());

			const res = await sendForm(
				process.env[`SERVICE_ID`]!,
				process.env[`TEMPLATE_ID`]!,
				form.current!,
				process.env[`PUBLIC_KEY`],
			);

			// console.log(res);
		},
		on_error: SubmitErrorHandler<InputData> = (errors, e) => {
			console.log(errors);
		};

	const [reference_number, set_reference_number] = useState(`000000`);

	function handle_change(e: any): void {
		const target = e.target as HTMLInputElement;

		const label = document.getElementById(`${target.id}_label`) as HTMLLabelElement | null;

		if (!label) {
			console.warn(`Failed to retrieve input label`);

			return;
		}

		const is_empty = target.value.length === 0;

		if (is_empty) {
			label.classList.remove(...placeholder_focus_styles.split(` `));
		} else {
			label.classList.add(...placeholder_focus_styles.split(` `));
		}
	}

	useEffect(() => {
		init(process.env[`PUBLIC_KEY`]!);
	}, []);

	function test(data: InputData, event: BaseSyntheticEvent | undefined) {
		event?.preventDefault();
		console.log(data);
		console.log(`sent`);
	}

	return (
		<div className='grid md:grid-cols-[2fr_3fr]'>
			<Container display='flex' layout='justify-center flex-row mt-10' tag='div'>
				<form
					className='relative flex w-[70%] flex-col gap-4 sm:w-1/2'
					noValidate
					// onSubmit={void handleSubmit(on_submit, on_error)}
					onSubmit={handleSubmit(test, on_error)}>
					{inputs.map(({ label, name, options, placeholder, Tag, type }) => (
						<div key={name}>
							{/* <Input
								{...input_props}
								id={name}
								label={{ id: `${name}_label`, position: label_styles, text: label }}
								placeholder={placeholder}
								type={type}
								{...register(name, options)}
							/> */}
							<Tag
								className='peer w-full rounded-3xl border-2 border-solid border-[#e3e3e3] px-8 py-3 outline-none duration-[200ms] invalid:border-red-500 focus:border-[#0c46da]'
								id={name}
								placeholder={placeholder}
								type={type}
								{...register(name, { ...options, onChange: handle_change })}
							/>
							<label
								// eslint-disable-next-line tailwindcss/classnames-order
								className={`absolute left-8 top-[50%] z-10 -translate-y-1/2 transform bg-white transition-all duration-300 peer-focus:(text-base top-0 px-2)`}
								id={`${name}_label`}>
								{label}
							</label>
						</div>
					))}
					{/* <input name='reference_number' type='hidden' value={reference_number} /> */}
					<Button
						align_items='center'
						btn_text={{ font_family: `text`, font_size: `fluid-md` }}
						justify_content='center'
						position='text-center rounded-xl w-full md:w-[70%] mx-auto mt-6 hover:(text-white bg-black) focus:(text-white bg-black) bg-white border-black border-2 py-2 transition-all duration-300'
						text='Wyślij'
						type='submit'
					/>
				</form>
				<DevTool control={control} />
			</Container>
			<iframe
				allowFullScreen
				className='md:(grow-[1] basis-[40%]) h-[70vh] w-auto w-full shrink'
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd-9yn82h_UYRy-h9skYgTSg&key=${env.NEXT_PUBLIC_GOOGLE_API}&zoom=18`}></iframe>
		</div>
	);
}

export default ContactPage;
