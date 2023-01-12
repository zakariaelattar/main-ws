const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');



const productSchema = mongoose.Schema({
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
productSchema.plugin(toJSON);
productSchema.plugin(paginate);



/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;