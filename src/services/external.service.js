const axios = require('axios');
const httpStatus = require('http-status');
const config = require('../config/config');
const logger = require('../config/logger');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');


/**
 * This function call the external payment service to pay a certain order
 * @param {*} order 
 */
const payOrder = async(order) => {
    const { orderTotal: amount } = order;
    console.log(amount)
    logger.info(`interrogating ws ${config.externalWs.paymentWs}...`)
    try {
        const response = await axios.post(`${config.externalWs.paymentWs}payments/payOrder`, { amount }, {});
        const { status } = response;
        console.log(response.status);
        if (status == 200) {
            const paidAt = new Date();
            logger.info(`Updating order payed at ${paidAt}`)
            return await Order.updateOne({ _id: order['_id'] }, { paidAt })
        } else {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Something wrong happened')
        }

    } catch (err) {
        logger.error(err);
        return;
    }
}



module.exports = {
    payOrder
}