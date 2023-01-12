const mongoose = require('mongoose');
const { User } = require('../models');
const faker = require('faker');
const logger = require('../config/logger');



const seedUsers = async() => {

    const users = [];
    for (let i = 0; i < 10; i++) {

        const randomRole = faker.random.arrayElement(["admin", "customer"]);
        const user = new User({
            name: faker.name.findName(),
            email: faker.internet.email(),
            password: "00000000Za",
            roles: ['customer'],
        });
        users.push(user);
    }


    await User.create(users);

    logger.info('Users seeded successfully !')
};


module.exports = {
    seedUsers
}