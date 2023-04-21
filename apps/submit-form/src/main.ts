import './styles.css';

import colors from 'tailwindcss/colors';

const form = document.getElementById(`sign_up`) as HTMLFormElement,
	input_boxes = document.querySelectorAll(`.input_wrapper`),
	f_name = document.getElementById(`f_name`) as HTMLInputElement,
	l_name = document.getElementById(`l_name`) as HTMLInputElement,
	birth_date = document.getElementById(`birth_date`) as HTMLInputElement,
	email = document.getElementById(`email`) as HTMLInputElement,
	password = document.getElementById(`password`) as HTMLInputElement,
	password_visibility_toggle = document.getElementById(`password_toggle`) as HTMLImageElement,
	password_confirmation = document.getElementById(`password_confirmation`) as HTMLInputElement,
	password_confirmation_visibility_toggle = document.getElementById(
		`password_confirmation_toggle`,
	) as HTMLImageElement,
	submit_btn = document.getElementById(`submit_btn`) as HTMLButtonElement;

form.addEventListener(`submit`, handle_submit);

for (const input_wrapper of input_boxes) {
	const i = input_wrapper as HTMLInputElement;
	i.addEventListener(`click`, () => {
		const input = input_wrapper.querySelector(`input`);
		input?.focus();
	});
}

f_name.addEventListener(`input`, () => {
	remove_input_error(`f_name`);
});
f_name.addEventListener(`invalid`, (e) => {
	e.preventDefault();
});

l_name.addEventListener(`input`, () => {
	remove_input_error(`l_name`);
});
l_name.addEventListener(`invalid`, (e) => {
	e.preventDefault();
});

birth_date.max = new Date().toLocaleDateString(`fr-ca`);
birth_date.addEventListener(`input`, () => {
	remove_input_error(`birth_date`);
});
birth_date.addEventListener(`invalid`, (e) => {
	e.preventDefault();
});

email.addEventListener(`input`, () => {
	remove_input_error(`email`);
});
email.addEventListener(`invalid`, (e) => {
	e.preventDefault();
});

const password_patterns = new Set<RegExp>();
password_patterns.add(/^.{8,}$/);
password_patterns.add(/(?=.*[A-Z])/);
password_patterns.add(/(?=.*\d)/);
password_patterns.add(/(?=.*[!#$%@])/);
password.addEventListener(`input`, () => {
	verify_same_passwords();

	let index = 1;
	let is_password_valid = true;

	for (const pattern of password_patterns) {
		const password_validation = document.getElementById(`password_validation${index}`);

		if (!password_validation) continue;

		const is_pattern_valid = pattern.test(password.value);

		if (is_pattern_valid) {
			password_validation.style.color = colors.green[600];
		} else {
			is_password_valid = false;
			password_validation.style.color = colors.red[500];
		}

		index++;
	}

	password.setCustomValidity(is_password_valid ? `` : `Invalid password.`);
});
password.addEventListener(`invalid`, (e) => {
	e.preventDefault();
});

password_visibility_toggle.addEventListener(`click`, () => {
	toggle_password(`password`);
});

password_confirmation.addEventListener(`input`, (e) => {
	verify_same_passwords();
});
password_confirmation.addEventListener(`invalid`, (e) => {
	e.preventDefault();
});

password_confirmation_visibility_toggle.addEventListener(`click`, () => {
	toggle_password(`password_confirmation`);
});

submit_btn.addEventListener(`click`, () => {
	validate_input_text(`f_name`, `Fill in first name`);
	validate_input_text(`l_name`, `Fill in last name`);
	validate_input_date();
	validate_email();
});

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
	error.style.opacity = error.innerText.length === 0 ? `0` : `1`;
}

function validate_input_date(): void {
	const input = document.getElementById(`birth_date`) as HTMLInputElement;

	if (input.validity.rangeOverflow) {
		input.setCustomValidity(`No time machine!`);
	} else if (input.validity.valueMissing) {
		input.setCustomValidity(`Fill in your birth date`);
	} else {
		input.setCustomValidity(``);
	}

	const error = document.getElementById(`birth_date_error`) as HTMLParagraphElement;

	error.innerText = input.validationMessage;
	error.style.opacity = error.innerText.length === 0 ? `0` : `1`;
}

function validate_email(): void {
	const input = document.getElementById(`email`) as HTMLInputElement;

	if (input.validity.typeMismatch) {
		input.setCustomValidity(`Enter email in a correct format`);
	} else if (input.validity.valueMissing) {
		input.setCustomValidity(`Fill in your email`);
	} else {
		input.setCustomValidity(``);
	}

	const error = document.getElementById(`email_error`) as HTMLParagraphElement;

	error.innerText = input.validationMessage;
	error.style.opacity = error.innerText.length === 0 ? `0` : `1`;
}

function remove_input_error(id: string): void {
	const error = document.getElementById(`${id}_error`) as HTMLParagraphElement;
	error.style.opacity = `0`;
}

function verify_same_passwords(): void {
	const current_input_password = document.getElementById(`password`) as HTMLInputElement,
		current_input_password_confirmation = document.getElementById(
			`password_confirmation`,
		) as HTMLInputElement,
		input_password_confirmation_error = document.getElementById(
			`password_confirmation_error`,
		) as HTMLParagraphElement;

	const is_same_password =
		current_input_password.value == current_input_password_confirmation.value;

	password_confirmation.setCustomValidity(is_same_password ? `` : `Passwords do not match`);
	input_password_confirmation_error.innerText = password_confirmation.validationMessage;
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
