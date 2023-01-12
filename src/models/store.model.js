const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');



const storeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true

    },
    currency: {
        type: String,
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