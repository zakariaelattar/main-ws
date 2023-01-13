const mongoose = require('mongoose');
const { Region } = require('../models');
const faker = require('faker');

const logger = require('../config/logger');


const seedRegions = async(countries = [], currencies = [], timezones = []) => {

    const regions = [];
    for (let i = 0; i < 10; i++) {

        const region = new Region({
            title: countries[i].name,
            country: countries[i]['_id'],
            currency: currencies[i]['_id'],
            currency: timezones[i]['_id'],
            tax: Math.floor(Math.random() * (100 + 1))

        });
        regions.push(region);
    }
    const createdRegions = await Region.create(regions);

    logger.info('Regions seeded successfully !')

    return createdRegions;
};


module.exports = {
    seedRegions
}