const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const productValidation = require('../../../../validations/product.validation');
const productController = require('../../../../controllers/product.controller');
const { USER_RIGHTS } = require('../../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth(USER_RIGHTS.GET_PRODUCTS), validate(productValidation.getProduct), productController.getProduct)
    .patch(auth(USER_RIGHTS.UPDATE_PRODUCT), validate(productValidation.updateProduct), productController.updateProduct)
    .delete(auth(USER_RIGHTS.DELETE_PRODUCT), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;