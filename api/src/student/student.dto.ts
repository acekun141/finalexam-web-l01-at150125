import joi from "joi";

export const RegisterStudentDTO = joi.object().keys({
	first_name: joi.string().max(100).required(),
	last_name: joi.string().max(100).required(),
	date_of_birth: joi.string().min(10).max(10).required(),
	sex: joi.number().valid(0, 1).required(),
	// phone_number: joi.string().required(),
	password: joi.string().min(6).max(30).required(),
	username: joi.string().min(6).max(30).required()
	// role: joi.string().valid('student', 'admin', 'teacher', 'parent').required()
});

export const UpdateStudentDTO = joi.object().keys({
	student_id: joi.string().required(),
	parent_id: joi.string().required(),
	first_name: joi.string().required(),
	last_name: joi.string().required(),
	// phone_number: joi.string().required(),
	date_of_birth: joi.string().required(),
	sex: joi.number().valid(1, 0).required()
});

export const DeleteStudentDTO = joi.object().keys({
	student_id: joi.string().required(),
});

export const GetListWithParentDTO = joi.object().keys({
	parent_id: joi.string().required(),
});
