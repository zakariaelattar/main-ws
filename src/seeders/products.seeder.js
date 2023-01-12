const mongoose = require('mongoose');
const { Product } = require('../models');
const faker = require('faker');

const logger = require('../config/logger');


const seedProducts = async() => {

    const products = [];
    for (let i = 0; i < 100; i++) {

        const product = new Product({
            title: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            image_url: faker.image.imageUrl(),
            price: faker.commerce.price(),
            stock: faker.datatype.number({ min: 0, max: 1000 })
        });
        products.push(product);
    }
    await Product.create(products);

    logger.info('Products seeded successfully !')

    return;
};


module.exports = {
    seedProducts
}