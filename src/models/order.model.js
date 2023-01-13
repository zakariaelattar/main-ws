const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    shipping_address: {
        type: String,

    },
    orderTotal: {
        type: Number,
        required: true,

    },
    paidAt: {
        type: Date,
        default: null

    }

}, {
    timestamps: true,
});



// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);



/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;