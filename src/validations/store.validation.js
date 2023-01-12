const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createStore = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        products: Joi.array().items(
            Joi.custom(objectId)
        ),
        country: Joi.custom(objectId),
        currency: Joi.custom(objectId)
    }),
};

const getStores = {
    query: Joi.object().keys({
        title: Joi.string(),
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
            title: Joi.string(),
            country: Joi.custom(objectId),
            currency: Joi.custom(objectId)
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