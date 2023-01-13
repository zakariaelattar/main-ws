const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const regionValidation = require('../../../validations/region.validation');
const regionController = require('../../../controllers/region.controller');
const { USER_RIGHTS } = require('../../../config/constants');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .post(auth(USER_RIGHTS.CREATE_REGION), validate(regionValidation.createRegion), regionController.createRegion)
    .get(auth(USER_RIGHTS.GET_REGIONS), validate(regionValidation.getRegions), regionController.getRegions);


module.exports = router;