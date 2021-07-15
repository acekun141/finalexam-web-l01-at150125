import joi from "joi";

export const RegisterTeacherDTO = joi.object().keys({
	first_name: joi.string().max(100).required(),
	last_name: joi.string().max(100).required(),
	date_of_birth: joi.string().min(10).max(10).required(),
	sex: joi.number().valid(0, 1).required(),
	phone_number: joi.string().required(),
	password: joi.string().min(6).max(30).required(),
	username: joi.string().min(6).max(30).required()
	// role: joi.string().valid('student', 'admin', 'teacher', 'parent').required()
});