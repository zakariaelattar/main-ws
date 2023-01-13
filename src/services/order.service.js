const { externalService } = require('.');
const { Order } = require('../models');







/**
 * Query for orders
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryOrders = async(filter, options) => {
    options = {...options, populate: "products" }
    const orders = await Order.paginate(filter, options);
    return orders;
};


/**
 * Create a new order
 * @param {*} order 
 * @returns 
 */
const createOrder = async(order) => {

    const createdOrder = await Order.create(order);

    // execute the function asynchronously to not block the process
    externalService.payOrder(createdOrder);
    return createdOrder;
};


/**
 * Get order by id
 * @param {ObjectId} id
 * @returns {Promise<Order>}
 */
const getOrderById = async(id) => {
    return Order.findById(id).populate('products').populate('customer').populate('region');
};

/**
 * Update order by id
 * @param {ObjectId} orderId
 * @param {Object} updateBody
 * @returns {Promise<Order>}
 */
const updateOrderById = async(orderId, updateBody) => {
    const order = await getOrderById(orderId);
    if (!order) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
    }

    Object.assign(order, updateBody);
    await order.save();
    return order;
};

/**
 * Delete order by id
 * @param {ObjectId} orderId
 * @returns {Promise<Order>}
 */
const deleteOrderById = async(orderId) => {
    const order = await getOrderById(orderId);
    if (!order) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
    }
    await order.remove();
    return order;
};


module.exports = {
    createOrder,
    updateOrderById,
    getOrderById,
    deleteOrderById,
    queryOrders
};