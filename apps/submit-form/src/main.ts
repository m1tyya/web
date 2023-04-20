import './styles.css';

const form = document.getElementById(`sign_up`) as HTMLFormElement,
	f_name = document.getElementById(`f_name`) as HTMLInputElement,
	birth_date_picker = document.getElementById(`birth_date`) as HTMLInputElement,
	password = document.getElementById(`password`) as HTMLInputElement,
	password_visibility_toggle = document.getElementById(`password_toggle`) as HTMLImageElement,
	password_confirmation = document.getElementById(`password_confirmation`) as HTMLInputElement,
	password_confirmation_visibility_toggle = document.getElementById(
		`password_confirmation_toggle`,
	) as HTMLImageElement,
	submit_btn = document.getElementById(`submit_btn`) as HTMLButtonElement;

const password_patterns = new Set<RegExp>();

birth_date_picker.max = new Date().toLocaleDateString(`fr-ca`);

password_patterns.add(/^.{8,}$/);
password_patterns.add(/(?=.*[A-Z])/);
password_patterns.add(/(?=.*\d)/);
password_patterns.add(/(?=.*[!#$%@])/);

form.addEventListener(`submit`, handle_submit);

password.addEventListener(`input`, (event) => {
	verify_same_passwords();

	let index = 1;
	let is_password_valid = true;

	for (const pattern of password_patterns) {
		const password_validation_text = document.getElementById(`password_validation${index}`);

		if (!password_validation_text) continue;

		const is_pattern_valid = pattern.test(password.value);

		if (is_pattern_valid) {
			password_validation_text.style.color = `green`;
		} else {
			password.setAttribute(`aria-invalid`, `true`);
			is_password_valid = false;
			password_validation_text.style.color = `red`;
		}

		index++;
	}

	password.setCustomValidity(is_password_valid ? `` : `Invalid password.`);
});

password_visibility_toggle.addEventListener(`click`, () => {
	toggle_password(`password`);
});

password_confirmation.addEventListener(`input`, (e) => {
	verify_same_passwords();
});

password_confirmation_visibility_toggle.addEventListener(`click`, () => {
	toggle_password(`password_confirmation`);
});

submit_btn.addEventListener(`submit`, () => {
	validate_input_text(`f_name`, `Fill in first name`);
});

f_name.minLength = 2;
f_name.maxLength = 25;
f_name.required = true;

f_name.addEventListener(`input`, (e) => {
	console.log(f_name.validationMessage);
});

function verify_same_passwords(): void {
	const current_input_password = document.getElementById(`password`) as HTMLInputElement;
	const current_input_password_confirmation = document.getElementById(
		`password_confirmation`,
	) as HTMLInputElement;

	const is_same_password =
		current_input_password.value == current_input_password_confirmation.value;

	password_confirmation.setCustomValidity(is_same_password ? `` : `Password is not the same.`);
}

function handle_submit(event: Event): void {
	event.preventDefault();

	const form_data = Object.fromEntries(new FormData(form));

	console.log(`Request body: `);
	console.log(form_data);

	void fetch(`https://jsonplaceholder.typicode.com/posts`, {
		body: JSON.stringify(form_data),
		headers: {
			'Content-Type': `application/json`,
		},
		method: `post`,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(`Response: `);
			console.log(data);
		});
}

function validate_input_text(id: string, message_empty: string): void {
	const input = document.getElementById(id) as HTMLInputElement;

	if (input.validity.tooLong) {
		input.setCustomValidity(`Maximum length: ${input.maxLength}`);
	} else if (input.validity.tooShort) {
		input.setCustomValidity(`Minimum length: ${input.minLength}`);
	} else if (input.validity.valueMissing) {
		input.setCustomValidity(message_empty);
	} else {
		input.setCustomValidity(``);
	}

	const error = document.getElementById(`${id}_error`) as HTMLParagraphElement;

	error.innerText = input.validationMessage;
}

function toggle_password(element_id: string): void {
	const element = document.getElementById(element_id) as HTMLInputElement,
		element_toggle = document.getElementById(`${element_id}_toggle`) as HTMLImageElement;

	const current_view = element.getAttribute(`type`) as string;
	let updated_view;
	let updated_icon_string;

	if (current_view == `password`) {
		updated_view = `text`;
		updated_icon_string = `hide`;
	} else {
		updated_view = `password`;
		updated_icon_string = `show`;
	}

	element.setAttribute(`type`, updated_view);
	const icon_path = `/icons/`;
	element_toggle.setAttribute(`src`, `${icon_path}password_${updated_icon_string}.svg`);
}
