const mongoose = require('mongoose');
const { Timezone } = require('../models');
const fs = require('fs');
const logger = require('../config/logger');
const path = require('path');


const filePath = path.join(__dirname, '..', 'developer-docs/json/timezones.json');



const seedTimezones = async() => {
    const timezones = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const createdTimezones = await Timezone.create(timezones);

    logger.info('Timezones seeded successfully !')

    return createdTimezones;
};


module.exports = {
    seedTimezones
}