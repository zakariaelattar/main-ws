const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createProduct = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string(),
        price: Joi.number(),
        image_url: Joi.string(),
        stock: Joi.number()
    }),
};

const getProducts = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getProduct = {
    params: Joi.object().keys({
        productId: Joi.string().custom(objectId),
    }),
};

const updateProduct = {
    params: Joi.object().keys({
        productId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            title: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            image_url: Joi.string(),
            stock: Joi.number()
        })
        .min(1),
};

const deleteProduct = {
    params: Joi.object().keys({
        productId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};