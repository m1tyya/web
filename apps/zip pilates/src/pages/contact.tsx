import emailjs from '@emailjs/browser';
import { DevTool } from '@hookform/devtools';
import { Button, Container } from '@m1tyya/ui-react';
import clsx from 'clsx';
import { type ElementType, useRef } from 'react';
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

const VALIDATION_MESSAGES = {
	EMAIL: `Nieprawidłowy e-mail`,
	MAX: `Za długo`,
	MIN: `Za krótki`,
	REQUIRED: `Wymagane`,
};

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
			maxLength: {
				message: VALIDATION_MESSAGES.MAX,
				value: 25,
			},
			minLength: { message: VALIDATION_MESSAGES.MIN, value: 2 },
			required: VALIDATION_MESSAGES.REQUIRED,
		},
		Tag: `input`,
		type: `text`,
	},
	{
		label: `Email`,
		name: `email`,
		options: {
			maxLength: {
				message: VALIDATION_MESSAGES.MAX,
				value: 40,
			},
			pattern: {
				message: VALIDATION_MESSAGES.EMAIL,
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			},
			required: VALIDATION_MESSAGES.REQUIRED,
		},
		Tag: `input`,
		type: `email`,
	},
	{
		label: `Temat`,
		name: `subject`,
		options: {
			maxLength: {
				message: VALIDATION_MESSAGES.MAX,
				value: 30,
			},
			minLength: { message: VALIDATION_MESSAGES.MIN, value: 5 },
			required: VALIDATION_MESSAGES.REQUIRED,
		},
		Tag: `input`,
		type: `text`,
	},
	{
		label: `Wiadomość`,
		name: `message`,
		options: {
			maxLength: {
				message: VALIDATION_MESSAGES.MAX,
				value: 600,
			},
			minLength: { message: VALIDATION_MESSAGES.MIN, value: 10 },
			required: VALIDATION_MESSAGES.REQUIRED,
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
	const {
			control,
			formState: { errors },
			handleSubmit,
			register,
		} = useForm<InputData>({ reValidateMode: `onSubmit` }),
		on_submit: SubmitHandler<InputData> = async (data, event) => {
			event?.preventDefault();

			const reference_number = generate_reference_number();
			await emailjs.send(
				`service_8y6j8a9`,
				`template_onoy0wj`,
				{ ...data, reference_number },
				`heCYPcOhcvyZzSAHh`,
			);
		},
		on_error: SubmitErrorHandler<InputData> = (errors) => {
			for (const err of error_ref.current) {
				toggle_error(err);
			}
		},
		error_ref = useRef<Array<HTMLParagraphElement>>([]);

	function handle_change(e: any): void {
		toggle_label(e.target as HTMLInputElement);
		hide_error(e.target.id as string);
	}

	function toggle_label(target: HTMLInputElement): void {
		const label = document.getElementById(`${target.id}_label`) as HTMLLabelElement | null;

		if (!label) {
			console.warn(`Failed to retrieve ${target.id} input label`);

			return;
		}

		const is_empty = target.value.length === 0;

		if (is_empty) {
			label.classList.remove(...placeholder_focus_styles.split(` `));
		} else {
			label.classList.add(...placeholder_focus_styles.split(` `));
		}
	}

	function hide_error(id?: string): void {
		const error = document.getElementById(`${id}_error`) as HTMLParagraphElement | null;

		if (!error) {
			console.warn(`Failed to retrieve ${id} input error`);

			return;
		}

		error.style.opacity = `0`;
	}

	function toggle_error(error: HTMLParagraphElement): void {
		error.innerText = errors[error.id.slice(0, -6) as keyof InputData]?.message ?? ``;
		error.style.opacity = error.innerText.length === 0 ? `0` : `1`;
	}

	return (
		<div className='grid md:grid-cols-[2fr_3fr]'>
			<Container display='flex' layout='justify-center flex-row mt-10' tag='div'>
				<form
					className='relative flex w-[70%] flex-col gap-4 sm:w-1/2'
					noValidate
					onSubmit={handleSubmit(on_submit, on_error)}>
					{inputs.map(({ label, name, options, placeholder, Tag, type }, index) => (
						<div className='h-max' key={name}>
							<Tag
								className={`peer w-full resize-none rounded-3xl border-2 border-solid border-[#e3e3e3] px-8 py-3 outline-none duration-[200ms] focus:border-[#0c46da]`}
								id={name}
								placeholder={placeholder}
								rows='4'
								type={type}
								{...register(name, { ...options, onChange: handle_change })}
							/>
							<label
								// eslint-disable-next-line tailwindcss/classnames-order
								className={clsx(
									`z-10 top-[2rem] -translate-y-1/2 absolute left-8  transform bg-white transition-all duration-300 peer-focus:(text-base top-0 px-2) pointer-events-none`,
								)}
								id={`${name}_label`}>
								{label}
							</label>
							<p
								className={clsx(
									`text-fluid-sm ml-3 mt-2 h-[1.5rem] leading-[1rem] text-red-500 opacity-0 duration-[200ms]`,
								)}
								id={`${name}_error`}
								ref={(el) => {
									if (el) {
										error_ref.current[index] = el;
									}
								}}>
								{errors[name]?.message}
							</p>
						</div>
					))}
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
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd-9yn82h_UYRy-h9skYgTSg&key=AIzaSyDFcv2cokad4ZnVENTp3nnZ1oBtpo7p5Ps&zoom=18`}></iframe>
		</div>
	);
}

export default ContactPage;
