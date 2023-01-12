const mongoose = require('mongoose');
const { Timezone } = require('../models');
const fs = require('fs');
const logger = require('../config/logger');

const faker = require('faker');





const seedTimezones = async() => {
    const timezones = JSON.parse(fs.readFileSync('developer-docs/json/timezones.json', 'utf-8'));
    await Timezone.create(timezones);

    logger.info('Timezones seeded successfully !')

    return;
};


module.exports = {
    seedTimezones
}