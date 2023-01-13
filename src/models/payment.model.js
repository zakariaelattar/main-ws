const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');



const paymentSchema = mongoose.Schema({


}, {
    timestamps: true,
});



// add plugin that converts mongoose to json
paymentSchema.plugin(toJSON);
paymentSchema.plugin(paginate);



/**
 * @typedef Payment
 */
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;