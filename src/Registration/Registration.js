import React, { useEffect, useRef, useState } from 'react';
import style from './Registration.module.css';
import RegistrationLayout from './RegistrationLayout';
import { initialState, initialTouchState } from '../initialState';
import { validate } from '../Validate';

function Registration() {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState(initialTouchState);

	const isValid = Object.keys(errors).length === 0;
	const submitButtonRef = useRef(null);

	const cleanForm = () => {
		setFormData(initialState);
		setErrors({});
		setTouched(initialTouchState);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (isValid) {
			console.log(formData);
			cleanForm();
		}
	};

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		if (!touched[name]) {
			setTouched((prevState) => ({ ...prevState, [name]: true }));
		}
	};

	const validateShema = {
		login: {
			required: {
				message: 'Login is required',
			},
		},
		password: {
			minLength: {
				message: 'Password less then 3 characters long',
				params: 3,
			},
		},
		password2: {
			required: {
				message: 'Reapid the password',
			},
			match: {
				message: 'Passwords did not match',
				params: `${formData.password}`,
			},
		},
	};

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	useEffect(() => {
		const errors = validate(formData, validateShema);
		setErrors(errors);
	}, [formData]);

	const showError = (name) => {
		return errors[name];
	};

	return (
		<div className={style.Registration}>
			<RegistrationLayout
				formData={formData}
				onChange={onChange}
				onSubmit={onSubmit}
				showError={showError}
				errors={errors}
				isValid={isValid}
				submitButtonRef={submitButtonRef}
				cleanForm={cleanForm}
				touched={touched}
			/>
		</div>
	);
}

export default Registration;
