import Joi from "joi";


export const joiValidator = Joi.object({
    title: Joi.string()
        .required()
        .max(25)
        .messages({
            'string.max' : 'Max quantity of symbols are 25.'
        }),
    body: Joi.string()
        .required()
        .max(256)
        .messages({
            'string.max' : 'Max quantity of symbols are 256.'
        }),
    userId: Joi.number()
        .required()
        .min(1)
        .max(10)
        .messages({
            'number.min' : 'Enter id, from 1 to 10, of the user to add post.',
            'number.max' : 'Enter id, from 1 to 10, of the user to add post.'
        })
})