const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');



const countrySchema = mongoose.Schema({
    name: {
        type: String
    },
    code: {
        type: String
    }

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