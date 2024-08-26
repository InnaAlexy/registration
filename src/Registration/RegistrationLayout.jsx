import React from 'react';
import style from './RegistrationLayout.module.css';

function RegistrationLayout({
	onSubmit,
	handleSubmit,
	register,
	errors,
	isValid,
	reset,
}) {
	return (
		<div className={style.content}>
			<h2> Registration </h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{errors.login?.message && <p>{errors.login?.message}</p>}
				<input {...register('login')} type="text" placeholder="Login" required />
				{errors.password?.message && <p>{errors.password.message}</p>}
				<input
					{...register('password')}
					type="password"
					placeholder="Password"
					required
				/>
				{errors.password2?.message && <p>{errors.password2?.message}</p>}
				<input
					{...register('password2')}
					type="password"
					placeholder="Repead password"
					required
				/>
				<button
					type="submit"
					className={isValid ? style.sendForm : style.sendFormDisabled}
					disabled={!isValid}
				>
					signup
				</button>
				<button type="button" className={style.clear} onClick={reset}>
					clean
				</button>
			</form>
		</div>
	);
}

export default RegistrationLayout;
