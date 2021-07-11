import joi from "joi";

export const LoginDTO = joi.object().keys({
	username: joi.string().required(),
	password: joi.string().required()
});

export const RegisterDTO = joi.object().keys({
	username: joi.string().min(6).max(256).required(),
	password: joi.string().min(6).max(256).required(),
	role: joi.string().valid('student', 'admin', 'teacher', 'parent').required()
});

export const RejectTokenDTO = joi.object().keys({
	refresh_token: joi.string().required()
});

export const RefreshTokenDTO = joi.object().keys({
	username: joi.string().required(),
	refresh_token: joi.string().required()
});