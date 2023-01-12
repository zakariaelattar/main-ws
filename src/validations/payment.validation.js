const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createPayment = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
        name: Joi.string().required(),
        role: Joi.string().required().valid('payment', 'admin'),
    }),
};

const getPayments = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getPayment = {
    params: Joi.object().keys({
        paymentId: Joi.string().custom(objectId),
    }),
};

const updatePayment = {
    params: Joi.object().keys({
        paymentId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            email: Joi.string().email(),
            password: Joi.string().custom(password),
            name: Joi.string(),
        })
        .min(1),
};

const deletePayment = {
    params: Joi.object().keys({
        paymentId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment,
};