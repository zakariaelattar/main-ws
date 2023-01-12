const db = require('../models');
const Currency = db.currency;
const Country = db.country;
const Timezone = db.timezone;
const Language = db.language;

const he = require('he');

/**
 * Query for countries
 * @param {Object} filter - Pg filter
 * @param {Object} options - Query options
 * @param {string} [options.sort_by] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCountries = async() => {
    const countries = await Country.findAll();
    return countries;
};


/**
 * 
 * @returns 
 */
const queryCurrencies = async() => {
    const countries = await Currency.findAll()
    return countries;
};

/**
 * Query for countries
 * @param {Object} filter - Pg filter
 * @param {Object} options - Query options
 * @param {string} [options.sort_by] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLanguages = async() => {
    const languages = await Language.findAll();
    return languages;
};
/**
 * Query for countries
 * @param {Object} filter - Pg filter
 * @param {Object} options - Query options
 * @param {string} [options.sort_by] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTimezones = async() => {
    const timezones = await Timezone.findAll();
    return timezones;
};









module.exports = {
    queryCountries,
    queryTimezones,
    queryLanguages,
    queryCurrencies,


};