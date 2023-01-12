const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { utilService } = require('../services');



const getCountries = catchAsync(async(req, res) => {
    const countries = await utilService.queryCountries();
    res.send(countries);
})

const getCurrencies = catchAsync(async(req, res) => {
    const currencies = await utilService.queryCurrencies();
    res.send(currencies);
})

const getLanguages = catchAsync(async(req, res) => {
    const languages = await utilService.queryLanguages();
    res.send(languages);
})

const getRegions = catchAsync(async(req, res) => {
    const regions = await utilService.queryRegions();
    res.send(regions);
})
const getTimezones = catchAsync(async(req, res) => {
    const timezones = await utilService.queryTimezones();
    res.send(timezones);
})
module.exports = {
    getCountries,
    getCurrencies,
    getRegions,
    getLanguages,
    getTimezones

};