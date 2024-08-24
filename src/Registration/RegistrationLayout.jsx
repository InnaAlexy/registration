import React from 'react';
import style from './RegistrationLayout.module.css';

function RegistrationLayout({
	formData,
	onSubmit,
	onChange,
	clianForm,
	loginErrors,
	passwordMatchErrors,
	isValid,
	submitButtonRef,
}) {
	return (
		<div className={style.content}>
			<h2> Registration </h2>
			<form onSubmit={onSubmit}>
				<div> {loginErrors} </div>
				<input
					type="text"
					name="login"
					value={formData.login}
					placeholder="Login"
					onChange={onChange}
				></input>
				<div>{passwordMatchErrors}</div>
				<input
					type="password"
					name="password"
					value={formData.password}
					placeholder="Password"
					onChange={onChange}
				></input>
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
				<button type="button" onClick={clianForm} className={style.clear}>
					clear
				</button>
			</form>
		</div>
	);
}

export default RegistrationLayout;
