const mongoose = require('mongoose');
const { Store } = require('../models');
const faker = require('faker');
const logger = require('../config/logger');



const seedStores = async() => {

    const stores = [];
    for (let i = 0; i < 100; i++) {
        const products = [];
        const store = new Store({
            title: faker.company.companyName(),
            products,
            country: faker.address.country(),
            currency: faker.finance.currencyCode()
        });
        stores.push(store);
    }
    await Store.create(stores);

    logger.info('Stores seeded successfully !')

};


module.exports = {
    seedStores
}