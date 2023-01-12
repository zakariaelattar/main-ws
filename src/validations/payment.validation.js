const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createPayment = {
    body: Joi.object().keys({

    }),
};

const getPayments = {
    query: Joi.object().keys({

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