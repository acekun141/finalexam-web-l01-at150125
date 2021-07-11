import joi from "joi";

export const CreateOrUpdateDTO = joi.object().keys({
	first_name: joi.string().required(),
	last_name: joi.string().required(),
	phone_number: joi.string().required(),
	date_of_birth: joi.string().required(),
	sex: joi.string().valid('male', 'female').required()
});