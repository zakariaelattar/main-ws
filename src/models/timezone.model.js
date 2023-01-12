const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');



const timezoneSchema = mongoose.Schema({
    value: {
        type: String
    },
    abbe: {
        type: String
    },
    isdst: {
        type: Boolean
    },
    text: {
        type: String
    },
    utc: {
        type: [String]
    }

}, {
    timestamps: true,
});



// add plugin that converts mongoose to json
timezoneSchema.plugin(toJSON);
timezoneSchema.plugin(paginate);



/**
 * @typedef Timezone
 */
const Timezone = mongoose.model('Timezone', timezoneSchema);

module.exports = Timezone;