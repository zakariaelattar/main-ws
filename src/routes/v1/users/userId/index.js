const express = require('express');
const rootRoute = require('./userId.route.js');

const router = express.Router({ mergeParams: true });

const defaultRoutes = [{
        path: '/',
        route: rootRoute
    }

];


// All users can access those routes, the only condition is to be authenticated
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});



module.exports = router;