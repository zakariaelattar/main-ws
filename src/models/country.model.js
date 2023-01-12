const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');



const countrySchema = mongoose.Schema({
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
countrySchema.plugin(toJSON);
countrySchema.plugin(paginate);



/**
 * @typedef Country
 */
const Country = mongoose.model('Country', countrySchema);

module.exports = Country;