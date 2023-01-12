const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const orderValidation = require('../../../../validations/order.validation');
const orderController = require('../../../../controllers/order.controller');
const { USER_RIGHTS } = require('../../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth(USER_RIGHTS.GET_ORDERS), validate(orderValidation.getOrder), orderController.getOrder)
    .patch(auth(USER_RIGHTS.UPDATE_ORDER), validate(orderValidation.updateOrder), orderController.updateOrder)
    .delete(auth(USER_RIGHTS.DELETE_ORDER), validate(orderValidation.deleteOrder), orderController.deleteOrder);

module.exports = router;