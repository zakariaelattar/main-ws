const mongoose = require('mongoose');
const { Country } = require('../models');
const faker = require('faker');
const fs = require('fs');
const logger = require('../config/logger');
const path = require('path');



const filePath = path.join(__dirname, '..', 'developer-docs/json/countries.json');

const seedCountries = async() => {
    const countries = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const createCountries = await Country.create(countries);

    logger.info('Countries seeded successfully !')

    return createCountries;
};


module.exports = {
    seedCountries
}