const Joi = require('joi');

const usersJoi = Joi.object({
    FirstName: Joi.string().required().messages({
        'any.required': 'FirstName is required',
        'string.empty': 'FirstName cannot be empty'
    }),
    LastName: Joi.string().required().messages({
        'any.required': 'LastName is required',
        'string.empty': 'LastName cannot be empty'
    }),
    DOB: Joi.string().required().messages({
        'any.required': 'DOB is required',
        'string.empty': 'DOB cannot be empty'
    }),
    UserTypeId: Joi.string().required().messages({
        'any.required': 'UserTypeId is required',
        'string.empty': 'UserTypeId cannot be empty'
    })
});

module.exports = { usersJoi };
