const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

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
    region: {
        type: Schema.Types.ObjectId,
        ref: 'Region',
        required: true

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