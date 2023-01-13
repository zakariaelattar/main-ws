const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

const Schema = mongoose.Schema;

const regionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    country: {
        type: Schema.Types.ObjectId
    },
    currency: {
        type: Schema.Types.ObjectId
    },
    tax: {
        type: Number,
        min: 0,
        max: 100
    }

}, {
    timestamps: true,
});



// add plugin that converts mongoose to json
regionSchema.plugin(toJSON);
regionSchema.plugin(paginate);



/**
 * @typedef Region
 */
const Region = mongoose.model('Region', regionSchema);

module.exports = Region;