const express = require('express');
const authRoute = require('./auth');
const userRoute = require('./users');
const productRoute = require('./products');
const storeRoute = require('./stores');
const utilRoute = require('./utils');
const orderRoute = require('./orders');
const docsRoute = require('./docs');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [{
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: userRoute,
    },
    {
        path: '/orders',
        route: orderRoute,
    },

    {
        path: '/stores',
        route: storeRoute,
    },
    {
        path: '/products',
        route: productRoute,
    },
    {
        path: '/utils',
        route: utilRoute,
    },

];

const devRoutes = [
    // routes available only in development mode
    {
        path: '/docs',
        route: docsRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

module.exports = router;