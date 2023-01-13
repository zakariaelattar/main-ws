const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const regionValidation = require('../../../../validations/region.validation');
const regionController = require('../../../../controllers/region.controller');
const { USER_RIGHTS } = require('../../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth(USER_RIGHTS.GET_REGIONS), validate(regionValidation.getRegion), regionController.getRegion)
    .patch(auth(USER_RIGHTS.UPDATE_REGION), validate(regionValidation.updateRegion), regionController.updateRegion)
    .delete(auth(USER_RIGHTS.DELETE_REGION), validate(regionValidation.deleteRegion), regionController.deleteRegion);

module.exports = router;