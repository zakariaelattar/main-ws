const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const storeValidation = require('../../../../validations/store.validation');
const storeController = require('../../../../controllers/store.controller');
const { USER_RIGHTS } = require('../../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth(USER_RIGHTS.GET_STORES), validate(storeValidation.getStore), storeController.getStore)
    .patch(auth(USER_RIGHTS.UPDATE_STORE), validate(storeValidation.updateStore), storeController.updateStore)
    .delete(auth(USER_RIGHTS.DELETE_STORE), validate(storeValidation.deleteStore), storeController.deleteStore);

module.exports = router;