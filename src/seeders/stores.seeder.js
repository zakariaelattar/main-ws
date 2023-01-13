const mongoose = require('mongoose');
const { Store } = require('../models');
const faker = require('faker');
const logger = require('../config/logger');
const ObjectId = mongoose.Types.ObjectId;



const seedStores = async(productss = []) => {

    const stores = [];
    for (let i = 0; i < 5; i++) {
        const products = [];
        const store = new Store({
            title: faker.company.companyName(),
            products: [productss[i]['_id']],
            country: new ObjectId(),
            currency: new ObjectId()
        });
        stores.push(store);
    }
    await Store.create(stores);

    logger.info('Stores seeded successfully !')

};


module.exports = {
    seedStores
}