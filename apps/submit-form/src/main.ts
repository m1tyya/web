import './styles.css';

import colors from 'tailwindcss/colors';

const theme_toggle_btn = document.getElementById(`theme_btn`) as HTMLButtonElement,
	theme_icon = document.getElementById(`toggle`) as HTMLInputElement,
	form = document.getElementById(`sign_up`) as HTMLFormElement,
	input_boxes = document.querySelectorAll(`.input_wrapper`),
	f_name = document.getElementById(`f_name`) as HTMLInputElement,
	l_name = document.getElementById(`l_name`) as HTMLInputElement,
	birth_date = document.getElementById(`birth_date`) as HTMLInputElement,
	email = document.getElementById(`email`) as HTMLInputElement,
	password_icon = document.getElementById(`password_toggle`) as HTMLElement & SVGElement,
	password_confirmation_icon = document.getElementById(
		`password_confirmation_toggle`,
	) as HTMLElement & SVGElement,
	password = document.getElementById(`password`) as HTMLInputElement,
	password_visibility_toggle = document.getElementById(`password_toggle`) as HTMLImageElement,
	password_confirmation = document.getElementById(`password_confirmation`) as HTMLInputElement,
	password_confirmation_visibility_toggle = document.getElementById(
		`password_confirmation_toggle`,
	) as HTMLImageElement,
	submit_btn = document.getElementById(`submit_btn`) as HTMLButtonElement;

set_theme();
theme_toggle_btn.addEventListener(`click`, () => {
	set_theme(!is_theme_dark());
});

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

birth_date.max = new Date().getFullYear().toString();
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

const icon_show = `<svg class='icon' fill='currentColor' xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 128 128">
<path
	d="M64 104C22 104 1 67 1 66a4 4 0 0 1 0-4c0-1 21-38 63-38s63 37 63 38a4 4 0 0 1 0 4c0 1-21 38-63 38zM9 64c4 7 23 32 55 32s51-25 55-32c-4-7-23-32-55-32S13 57 9 64zm55 24a24 24 0 1 1 0-48 24 24 0 0 1 0 48zm0-40a16 16 0 1 0 0 32 16 16 0 0 0 0-32z"
	data-original="#000000" />
</svg>`,
	icon_hide = `<svg class='icon' fill='currentColor' xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 128 128">
	<path
		d="m79.9 65 7.3-7.2a24 24 0 0 1-29.4 29.4l7.3-7.3A16 16 0 0 0 79.9 65zm47.6-3c-.5-.8-7.5-13-21.1-23.4l-5.8 5.8A80 80 0 0 1 119.3 64C114.6 71.2 96 96 64 96c-4.8 0-9.2-.6-13.4-1.6L44 101c6 1.8 12.7 3 20 3 41.9 0 62.6-36.5 63.5-38a4 4 0 0 0 0-4zm-16.7-39.2-88 88a4 4 0 0 1-5.6 0 4 4 0 0 1 0-5.6L28.4 94A84 84 0 0 1 .5 66a4 4 0 0 1 0-4c.9-1.5 21.6-38 63.5-38 10.8 0 20.2 2.5 28.2 6.1l13-13a4 4 0 1 1 5.6 5.7zM34.3 88l10.2-10a24 24 0 0 1 33.4-33.4l8.2-8.2A58.9 58.9 0 0 0 64 32C32 32 13.4 56.8 8.7 64c3 4.6 11.7 16.1 25.6 24zm16-16L72 50.4a15.8 15.8 0 0 0-8-2.4 16 16 0 0 0-16 16c0 3 .9 5.7 2.3 8z"
		data-original="#000000" />
</svg>`;
password_icon.innerHTML = icon_show;
password_confirmation_icon.innerHTML = icon_show;
password_visibility_toggle.addEventListener(`click`, () => {
	toggle_password(`password`);
});
password_confirmation.addEventListener(`input`, () => {
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

function set_theme(is_dark?: boolean): void {
	if (is_dark != undefined) {
		if (is_dark) {
			switch_dark();
		} else {
			switch_light();
		}

		return;
	}

	if (is_theme_dark()) {
		switch_dark();
	} else {
		switch_light();
	}
}

function switch_dark(): void {
	theme_icon.checked = false;
	document.documentElement.classList.add(`dark`);
	localStorage[`theme`] = `dark`;
}

function switch_light(): void {
	theme_icon.checked = true;
	document.documentElement.classList.remove(`dark`);
	localStorage[`theme`] = `light`;
}

function is_theme_dark(): boolean {
	return (
		localStorage[`theme`] === `dark` ||
		(!(`theme` in localStorage) && window.matchMedia(`(prefers-color-scheme: dark)`).matches)
	);
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
	error.style.opacity = error.innerText.length === 0 ? `0` : `1`;
}

function validate_input_date(): void {
	const input = document.getElementById(`birth_date`) as HTMLInputElement;

	if (input.validity.rangeOverflow) {
		input.setCustomValidity(`No time machine!`);
	} else if (input.validity.rangeUnderflow) {
		input.setCustomValidity(`You're dead`);
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
		toggle_icon = document.getElementById(`${element_id}_toggle`) as HTMLElement & SVGElement;

	const current_view = element.getAttribute(`type`) as string;
	let updated_view;
	let updated_icon;

	if (current_view == `password`) {
		updated_view = `text`;
		updated_icon = icon_hide;
	} else {
		updated_view = `password`;
		updated_icon = icon_show;
	}

	element.setAttribute(`type`, updated_view);
	toggle_icon.innerHTML = updated_icon;
}
