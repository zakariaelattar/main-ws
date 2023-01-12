const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { ROLES } = require('../config/constants');



const orderSchema = mongoose.Schema({
    customer_name: {
        type: String,
        required: true,
    },
    shipping_address: {
        type: String,

    },
    order_total: {
        type: Number,
        required: true,

    },
    paid_at: {
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