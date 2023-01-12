const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const { runSeeder } = require('../src/seeders')

let server;


if (process.argv.includes("syncDb")) { // BLOCK EXECUTED WHEN ADDING FLAG TO NPM SCRIPT "syncDb", it is used to drop, recreate and seed db

    mongoose.connect(config.mongoose.url,
        config.mongoose.options).then(async() => {
        logger.info('Connected to MongoDB');
        // Add this block to drop and recreate collections
        // logger.info('start droping database');
        // await mongoose.connection.dropDatabase();
        // logger.info('database dropped successfully!');

        // const collections = await mongoose.connection.db.listCollections().toArray();
        // for (const collection of collections) {
        //     logger.info('creating collection ', collection.name);

        //     await mongoose.connection.db.createCollection(collection.name);
        //     logger.info(`collection ${collection.name} created successfully!`);

        // }
        logger.info('start seeding database');
        try {
            await runSeeder();
            logger.info('database successfully seeded');
            process.exit(0)

        } catch (err) {
            logger.error('An error while seeding database! ', err)
            process.exit(-1)
        }

    });

} else {
    mongoose.connect(config.mongoose.url,
        config.mongoose.options).then(() => {
        logger.info('Connected to MongoDB');
        server = app.listen(config.port, () => {
            logger.info(`Listening to port ${config.port}`);
        });
    });

}

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});