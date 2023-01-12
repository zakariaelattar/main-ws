const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');
const { Product } = require('.');
const Schema = mongoose.Schema;



const storeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: true

    },
    currency: {
        type: Schema.Types.ObjectId,
        ref: 'Currency',
        required: true,

    },

}, {
    timestamps: true,
});



// add plugin that converts mongoose to json
storeSchema.plugin(toJSON);
storeSchema.plugin(paginate);



/**
 * @typedef Store
 */
const Store = mongoose.model('Store', storeSchema);

module.exports = Store;