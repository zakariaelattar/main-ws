const { seedStores } = require('./stores.seeder');
const { seedProducts } = require('./products.seeder');
const { seedCountries } = require('./countries.seeder');
const { seedRegions } = require('./regions.seeder');
const { seedTimezones } = require('./timezones.seeder');
const { seedCurrencies } = require('./currencies.seeder');
const { seedOrders } = require('./orders.seeder');
const { seedUsers } = require('./users.seeder');
const logger = require('../config/logger');



/**
 * This is the main function that will seed values to database colletions
 * @returns 
 */

const runSeeder = async() => {
    try {
        const currencies = await seedCurrencies();
        const timezones = await seedTimezones();
        const countries = await seedCountries();
        const regions = await seedRegions(countries, currencies, timezones);
        const products = await seedProducts(regions);
        const stores = await seedStores(products);
        const { customerAdmins, customers, admins } = await seedUsers();
        const orders = await seedOrders(customers, products);
        return;

    } catch (err) {
        logger.error('An error occured', err)
    }
}


module.exports = {
    runSeeder
}