import {
	type FieldValues,
	type Path,
	type RegisterOptions,
	type UseFormRegister,
} from 'react-hook-form';

import { Input, type InputProps } from '../input';

type FormInputProps<TFormValues extends FieldValues> = Omit<InputProps, 'name'> & {
	name: Path<TFormValues>;
	register?: UseFormRegister<TFormValues>;
	rules: RegisterOptions;
};

export function FormInput<TFormValues extends FieldValues>({
	name,
	register,
	rules,
	...props
}: FormInputProps<TFormValues>): JSX.Element {
	// @ts-ignored
	return <Input name={name} {...props} {...register?.(name, rules)} />;
}
