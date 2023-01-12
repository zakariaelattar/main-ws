const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const productValidation = require('../../../validations/product.validation');
const productController = require('../../../controllers/product.controller');
const { USER_RIGHTS } = require('../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .post(auth(USER_RIGHTS.CREATE_PRODUCT), validate(productValidation.createProduct), productController.createProduct)
    .get(auth(USER_RIGHTS.GET_PRODUCTS), validate(productValidation.getProducts), productController.getProducts);


module.exports = router;