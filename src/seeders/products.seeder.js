const mongoose = require('mongoose');
const { Product } = require('../models');
const faker = require('faker');

const logger = require('../config/logger');


const seedProducts = async(regions = []) => {
    console.log(regions[0])

    const products = [];
    for (let i = 0; i < 10; i++) {

        const product = new Product({
            title: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            region: regions[i]['_id'],
            image_url: "https://via.placeholder.com/500",
            price: faker.commerce.price(),
            stock: faker.datatype.number({ min: 0, max: 1000 })
        });
        products.push(product);
    }
    const createdProducts = await Product.create(products);

    logger.info('Products seeded successfully !')

    return createdProducts;
};


module.exports = {
    seedProducts
}