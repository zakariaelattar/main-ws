const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createOrder = {
    body: Joi.object().keys({
        shipping_address: Joi.string().required(),
        products: Joi.array().items(
            Joi.custom(objectId)
        ).min(1),
        order_total: Joi.number().required()
    }),
};

const getOrders = {
    query: Joi.object().keys({

        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getOrder = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId),
    }),
};

const updateOrder = {
    params: Joi.object().keys({
        orderId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            "shipping_address": Joi.string().required(),
            "products": Joi.array().items(
                Joi.custom(objectId)
            ),
            "order_total": Joi.number().required()
        })
        .min(1),
};

const deleteOrder = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};