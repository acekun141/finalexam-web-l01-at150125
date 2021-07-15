import React from "react";
import RegisterAccount from "../container/forms/RegisterAccount";

const RegisterPage = () => {
	return (
		<div className="register-page">
			<div className="register-page__left-side"></div>
			<div className="register-page__right-side">
				<h1>Register</h1>
				<RegisterAccount />
			</div>
		</div>
	)
}

export default RegisterPage;