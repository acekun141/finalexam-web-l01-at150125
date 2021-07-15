import joi from "joi";

export const CreateClassDTO = joi.object().keys({
	name: joi.string().max(100).required(),
	type: joi.string().min(1).max(1).valid("A", "B", "C", "D").required(),
	date: joi.number().min(0).max(6).required(),
	open: joi.number().min(0).max(24).required(),
	close: joi.number().min(0).max(24).required(),
});

export const AddStudentDTO = joi.object().keys({
	student_id: joi.string().required(),
	class_id: joi.string().required()
});

export const UpdateTeacherDTO = joi.object().keys({
	teacher_id: joi.string().required(),
	class_id: joi.string().required()
});

export const GetInfoDTO = joi.object().keys({
	class_id: joi.string().required()
});
