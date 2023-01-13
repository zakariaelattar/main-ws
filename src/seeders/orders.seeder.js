 const { Order } = require('../models');
 const faker = require('faker');

 const logger = require('../config/logger');


 const seedOrders = async(customers = [], productss = []) => {

     const orders = [];
     for (let i = 0; i < 10; i++) {

         const order = new Order({
             customer: customers[i]['_id'],
             shipping_address: faker.address.streetAddress(),
             products: [productss[i]['_id']],
             order_total: faker.commerce.price(),
             paid_at: faker.date.past()
         });
         orders.push(order);
     }
     const createdOrders = await Order.create(orders);

     logger.info('Orders seeded successfully !')

     return createdOrders;
 };


 module.exports = {
     seedOrders
 }