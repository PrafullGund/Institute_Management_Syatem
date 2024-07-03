const Joi = require('joi');

const userTypeJoi = Joi.object({
    UserTypeName: Joi.string().required().messages({
        'any.required': 'UserTypeName is required',
        'string.empty': 'UserTypeName cannot be empty'
    }),
    UserTypeDescription: Joi.string().required().messages({
        'any.required': 'UserTypeDescription is required',
        'string.empty': 'UserTypeDescription cannot be empty'
    })
});

module.exports = {
    userTypeJoi
};
