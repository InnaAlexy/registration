import React, { useRef, useState } from 'react';
import style from './Registration.module.css';
import RegistrationLayout from './RegistrationLayout';
import { initialState } from '../initialState';

function Registration() {
	const [formData, setFormData] = useState(initialState);
	const [loginErrors, setLoginErrors] = useState('');
	const [passwordMatchErrors, setPasswordMatchErrors] = useState('');
	const submitButtonRef = useRef(null);
	let isValid = false;

	if (loginErrors === null && passwordMatchErrors === null) {
		isValid = true;
		console.log(loginErrors === null && passwordMatchErrors === null);
	} else {
		isValid = false;
	}

	const validateLogin = (value) => {
		let logError = null;
		if (!/^[\w_]*$/.test(value)) {
			logError = 'use letters, numbers, or _';
		} else if (value.length > 20) {
			logError = 'maximum of 20 characters';
		}
		setLoginErrors(logError);
	};

	const passwordMatch = (value) => {
		let matchError = null;
		if (value !== formData.password) {
			matchError = 'passwords did not match';
		} else {
			submitButtonRef.current.focus();
		}
		setPasswordMatchErrors(matchError);
	};

	function onChange(event) {
		const { name, value } = event.target;
		if (name === 'login') {
			validateLogin(value);
		}

		if (name === 'password2') {
			passwordMatch(value);
		}

		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}

	const sendData = (fieldState) => {
		console.log(fieldState);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(formData);
	};

	const clianForm = () => {
		setFormData(initialState);
		setLoginErrors([]);
		setPasswordMatchErrors([]);
	};

	return (
		<div className={style.Registration}>
			<RegistrationLayout
				formData={formData}
				onChange={onChange}
				clianForm={clianForm}
				onSubmit={onSubmit}
				loginErrors={loginErrors}
				passwordMatchErrors={passwordMatchErrors}
				isValid={isValid}
				submitButtonRef={submitButtonRef}
			/>
		</div>
	);
}

export default Registration;
