const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');



const currencySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    image_url: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    stock: {
        type: Number,
        default: 0,

    },

}, {
    timestamps: true,
});



// add plugin that converts mongoose to json
currencySchema.plugin(toJSON);
currencySchema.plugin(paginate);



/**
 * @typedef Currency
 */
const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;