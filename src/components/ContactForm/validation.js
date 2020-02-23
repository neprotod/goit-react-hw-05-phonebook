import Joi from '@hapi/joi';

export default Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Zа-яА-Я ]*$/, 'name')
    .required()
    .messages({
      'string.base': `"Name" should be a type of 'text'`,
      'string.empty': `"Name" cannot be an empty field`,
      'string.min': `"Name" should have a minimum length of {#limit}`,
      'string.max': `"Name" should have a maximum length of {#limit}`,
      'string.pattern.name': `"Name" we can use only alphanum`,
      'any.required': `"Name" is a required field`,
    }),

  number: Joi.string()
    .pattern(/^([0-9]+?[ -]?)+?[0-9]$/)
    .message(
      "Number isn't correct, please use only number and separator space or -",
    )
    .required(),
});
