const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createStore = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
        name: Joi.string().required(),
        role: Joi.string().required().valid('store', 'admin'),
    }),
};

const getStores = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getStore = {
    params: Joi.object().keys({
        storeId: Joi.string().custom(objectId),
    }),
};

const updateStore = {
    params: Joi.object().keys({
        storeId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            email: Joi.string().email(),
            password: Joi.string().custom(password),
            name: Joi.string(),
        })
        .min(1),
};

const deleteStore = {
    params: Joi.object().keys({
        storeId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createStore,
    getStores,
    getStore,
    updateStore,
    deleteStore,
};