const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const paymentValidation = require('../../../../validations/payment.validation');
const paymentController = require('../../../../controllers/payment.controller');
const { USER_RIGHTS } = require('../../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth(USER_RIGHTS.GET_PAYMENTS), validate(paymentValidation.getPayment), paymentController.getPayment)
    .patch(auth(USER_RIGHTS.UPDATE_PAYMENT), validate(paymentValidation.updatePayment), paymentController.updatePayment)
    .delete(auth(USER_RIGHTS.DELETE_PAYMENT), validate(paymentValidation.deletePayment), paymentController.deletePayment);

module.exports = router;