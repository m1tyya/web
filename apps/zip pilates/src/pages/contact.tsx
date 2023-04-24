import { DevTool } from '@hookform/devtools';
import { Button, Container, Input } from '@m1tyya/ui-react';
import { useForm } from 'react-hook-form';
import { type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form/dist/types';

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

const inputs: Array<{ label: string; name: string; placeholder?: string; type: string }> = [
	{
		label: `Imię`,
		name: `name`,
		type: `text`,
	},
	{
		label: `Email`,
		name: `email`,
		type: `email`,
	},
	{
		label: `Temat`,
		name: `subject`,
		type: `text`,
	},
	{
		label: `Wiadomość`,
		name: `message`,
		type: `text`,
	},
];

function ContactPage(): JSX.Element {
	const { control, handleSubmit, register } = useForm<InputData>(),
		on_submit: SubmitHandler<InputData> = ({ email, message, name, subject }) => {
			console.log(email);
		},
		on_error: SubmitErrorHandler<InputData> = (errors, e) => {
			console.log(errors);
		};

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

	return (
		<>
			<Container display='flex w-fit' layout='flex-col' tag='div'>
				<form
					className='relative mt-10'
					noValidate
					onSubmit={void handleSubmit(on_submit, on_error)}>
					{inputs.map(({ label, name, placeholder, type }) => (
						<div key={name}>
							<Input
								{...input_props}
								id={name}
								label={{ id: `${name}_label`, position: label_styles, text: label }}
								placeholder={placeholder}
								type={type}
								// @ts-expect-error
								{...register(name, { minLength: 5, onChange: handle_change, required: true })}
							/>
						</div>
					))}
					<Button
						font_family='text'
						font_size='fluid-md'
						position='rounded-xl w-full md:w-[70%] mx-auto mt-6 hover:(text-white bg-black) bg-white border-black border-2 py-2 transition-all duration-300'
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
