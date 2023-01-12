const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const orderValidation = require('../../../validations/order.validation');
const orderController = require('../../../controllers/order.controller');
const { USER_RIGHTS } = require('../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .post(auth(USER_RIGHTS.CREATE_ORDER), validate(orderValidation.createOrder), orderController.createOrder)
    .get(auth(USER_RIGHTS.GET_ORDERS), validate(orderValidation.getOrders), orderController.getOrders);


module.exports = router;