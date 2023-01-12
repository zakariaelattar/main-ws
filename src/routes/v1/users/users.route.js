const express = require('express');
const auth = require('./../../../middlewares/auth');
const validate = require('./../../../middlewares/validate');
const userValidation = require('./../../../validations/user.validation');
const userController = require('./../../../controllers/user.controller');
const { USER_RIGHTS } = require('../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .post(auth(USER_RIGHTS.CREATE_USER), validate(userValidation.createUser), userController.createUser)
    .get(auth(USER_RIGHTS.GET_USERS), validate(userValidation.getUsers), userController.getUsers);


module.exports = router;