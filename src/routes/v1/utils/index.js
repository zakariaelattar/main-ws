const express = require('express');
const utilController = require('../../../controllers/util.controller');


// mergeParams is used to handle the case of nested params
const router = express.Router({ mergeParams: true });

router.route('/countries').get(utilController.getCountries)
router.route('/currencies').get(utilController.getCurrencies)
router.route('/languages').get(utilController.getLanguages)


module.exports = router;