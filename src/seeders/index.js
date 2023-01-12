const { seedStores } = require('./stores.seeder');
const { seedProducts } = require('./products.seeder');
const { seedCountries } = require('./countries.seeder');
const { seedTimezones } = require('./timezones.seeder');
const { seedCurrencies } = require('./currencies.seeder');
const { seedUsers } = require('./users.seeder');
const logger = require('../config/logger');



/**
 * This is the main function that will seed values to database colletions
 * @returns 
 */

const runSeeder = async() => {
    try {
        return await Promise.all([
            seedUsers(),
            seedProducts(),
            seedStores(),
            // seedCountries(),
            //seedRegions(),
            seedCurrencies(),
            // seedPayments(),
            // seedOrders()

        ])

    } catch (err) {
        logger.error('An error occured', err)
    }
}


module.exports = {
    runSeeder
}