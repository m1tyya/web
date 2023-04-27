import { init, sendForm } from '@emailjs/browser';
import { DevTool } from '@hookform/devtools';
import { Button, Container, FormInput } from '@m1tyya/ui-react';
import { type BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	type RegisterOptions,
	type SubmitErrorHandler,
	type SubmitHandler,
} from 'react-hook-form/dist/types';

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
		type: `text`,
	},
	{
		label: `Email`,
		name: `email`,
		options: {
			maxLength: 40,
			required: true,
		},
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
		<>
			<Container display='flex' layout='justify-center flex-row mt-10' tag='div'>
				<form
					className='relative  flex w-1/2 flex-col gap-4'
					noValidate
					// onSubmit={void handleSubmit(on_submit, on_error)}
					onSubmit={handleSubmit(test, on_error)}>
					{/* {inputs.map(({ label, name, options, placeholder, type }) => (
						<div key={name}>
							<Input
								{...input_props}
								id={name}
								label={{ id: `${name}_label`, position: label_styles, text: label }}
								placeholder={placeholder}
								type={type}
								{...register(name, options)}
							/>
						</div>
					))} */}
					<FormInput
						id='email'
						label={{ is_before: true }}
						name='email'
						placeholder='Email'
						// @ts-ignore
						register={register}
						type='email'
						validation_schema={{ maxLength: 40, required: true }}
						{...input_props}
					/>
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
				className='h-[70vh] w-full'
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd-9yn82h_UYRy-h9skYgTSg&key=${
					process.env[`GOOGLE_API`]
				}&zoom=18`}></iframe>
		</>
	);
}

export default ContactPage;
