import joi from "joi";

export const CreateLessonDTO = joi.object().keys({
	name: joi.string().required(),
	class_id: joi.string().required(),
	date: joi.string().required(),
});

export const UpdateLessonDTO = joi.object().keys({
	name: joi.string().required(),
	date: joi.string().required(),
	note: joi.string().required(),
	lesson_id: joi.string().required()
});

export const UpdateAbsentDTO = joi.object().keys({
	lesson_id: joi.string().required(),
	list: joi.array().required()
});

export const DeleteLessonDTO = joi.object().keys({
	lesson_id: joi.string().required(),
});