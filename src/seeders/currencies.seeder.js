const mongoose = require('mongoose');
const { Currency } = require('../models');
const fs = require('fs');
const path = require('path');
const faker = require('faker');
const logger = require('../config/logger');



const filePath = path.join(__dirname, '..', 'developer-docs/json/currencies.json');

const seedCurrencies = async() => {
    const currencies = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    await Currency.create(currencies);

    logger.info('Currencies seeded successfully !')

    return;
};


module.exports = {
    seedCurrencies
}