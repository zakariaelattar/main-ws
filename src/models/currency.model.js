const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');


const currencySchema = mongoose.Schema({
    cc: {
        type: String
    },
    symbol: {
        type: String
    },
    name: {
        type: String
    }

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