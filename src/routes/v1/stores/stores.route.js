const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const storeValidation = require('../../../validations/store.validation');
const storeController = require('../../../controllers/store.controller');
const { USER_RIGHTS } = require('../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .post(auth(USER_RIGHTS.CREATE_STORE), validate(storeValidation.createStore), storeController.createStore)
    .get(auth(USER_RIGHTS.GET_STORES), validate(storeValidation.getStores), storeController.getStores);


module.exports = router;