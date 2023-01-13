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
    const { order_total: amount } = order;
    try {
        const response = await axios.post(`${config.externalWs.paymentWs}payOrder`, amount);
        if (1) {
            return await Order.updateOne({ id: order.id }, { payedAt: new Date() })
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