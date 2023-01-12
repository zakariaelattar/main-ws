const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const userValidation = require('../../../../validations/user.validation');
const userController = require('../../../../controllers/user.controller');
const { USER_RIGHTS } = require('../../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth(USER_RIGHTS.GET_USERS), validate(userValidation.getUser), userController.getUser)
    .patch(auth(USER_RIGHTS.UPDATE_USER), validate(userValidation.updateUser), userController.updateUser)
    .delete(auth(USER_RIGHTS.DELETE_USER), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;