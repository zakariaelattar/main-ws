const mongoose = require('mongoose');
const { User } = require('../models');
const faker = require('faker');
const logger = require('../config/logger');



const seedUsers = async() => {

    const customers = [];
    const admins = [];
    const customerAdmins = [];



    for (let i = 0; i < 10; i++) {

        const customer = new User({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: "00000000Za",
            roles: ['admin'],
        });
        customers.push(customer);

        const admin = new User({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: "00000000Za",
            roles: ['admin'],
        });

        admins.push(admin);

        const customerAdmin = new User({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: "00000000Za",
            roles: ['customer', 'admin'],
        });
        customerAdmins.push(customerAdmin);

    }

    const users = [...customers, ...admins, ...customerAdmins];


    console.log(users);
    await User.create(users);

    logger.info('Users seeded successfully !')

    return ({ customers, admins, customerAdmins })
};


module.exports = {
    seedUsers
}