import Joi from "joi";

const schema = Joi.object({
    category_name: Joi.string().max(100).required(),
    description: Joi.string().optional()
})

export {
    schema
}
