import Joi from "joi";

export const CreateRequestDTO = Joi.object().keys({
    from: Joi.string().required(),
    student_id: Joi.string().required(),
    class_id: Joi.string().required()
});

export const DeleteRequestDTO = Joi.object().keys({
    request_id: Joi.string().required()
});

export const AcceptRequestDTO = Joi.object().keys({
    request_id: Joi.string().required()
});

export const UserRequestDTO = Joi.object().keys({
    user_id: Joi.string().required()
});