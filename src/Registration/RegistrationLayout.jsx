import React from 'react';
import style from './RegistrationLayout.module.css';

function RegistrationLayout({
	formData,
	onSubmit,
	onChange,
	showError,
	errors,
	isValid,
	submitButtonRef,
	cleanForm,
	touched,
}) {
	return (
		<div className={style.content}>
			<h2> Registration </h2>
			<form onSubmit={onSubmit}>
				{touched.login && showError('login') && <p>{errors.login}</p>}
				<input
					type="text"
					name="login"
					value={formData.login}
					placeholder="Login"
					onChange={onChange}
				></input>
				{touched.password && showError('password') && <p>{errors.password}</p>}
				<input
					type="password"
					name="password"
					value={formData.password}
					placeholder="Password"
					onChange={onChange}
				></input>
				{touched.password2 && showError('password2') && <p>{errors.password2}</p>}
				<input
					type="password"
					name="password2"
					value={formData.password2}
					placeholder="Repeat password"
					onChange={onChange}
				></input>
				<button
					type="submit"
					className={isValid ? style.sendForm : style.sendFormDisabled}
					disabled={!isValid}
					ref={submitButtonRef}
				>
					signup
				</button>
				<button type="button" className={style.clear} onClick={cleanForm}>
					clear
				</button>
			</form>
		</div>
	);
}

export default RegistrationLayout;
