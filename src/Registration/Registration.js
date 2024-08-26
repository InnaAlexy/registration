import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import style from './Registration.module.css';
import RegistrationLayout from './RegistrationLayout';
import { initialState } from '../initialState';
import { formSchema } from '../Validate';

function Registration() {
	const {
		register,
		resetField,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: initialState,
		resolver: yupResolver(formSchema),
	});

	const isValid = Object.keys(errors).length === 0;

	const reset = () => {
		resetField('password');
		resetField('login');
		resetField('password2');
	};

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={style.Registration}>
			<RegistrationLayout
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
				errors={errors}
				register={register}
				isValid={isValid}
				reset={reset}
			/>
		</div>
	);
}

export default Registration;
