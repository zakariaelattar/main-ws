 const { Order } = require('../models');
 const faker = require('faker');

 const logger = require('../config/logger');


 const seedOrders = async(customers = []) => {

     const orders = [];
     for (let i = 0; i < 100; i++) {

         const order = new Order({
             customer: customers[i]['_id'],
             shipping_address: faker.address.streetAddress(),
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