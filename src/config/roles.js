const { USERS_RIGHTS } = require('../config/constants');
const allRoles = {
    customer: [

        //ORDER MANAGEMENT
        USERS_RIGHTS.CREATE_ORDER,
        USERS_RIGHTS.GET_ORDERS,
        USERS_RIGHTS.UPDATE_ORDER,





    ],
    admin: [
        //USER MANAGEMENT
        USERS_RIGHTS.CREATE_USER,
        USERS_RIGHTS.GET_USERS,
        USERS_RIGHTS.UPDATE_USER,
        USERS_RIGHTS.DELETE_USER,

        // STORE MANAGEMENT
        USERS_RIGHTS.CREATE_STORE,
        USERS_RIGHTS.UPDATE_STORE,
        USERS_RIGHTS.GET_STORES,
        USERS_RIGHTS.DELETE_STORE,

        //ORDER MANAGEMENT
        USERS_RIGHTS.CREATE_ORDER,
        USERS_RIGHTS.GET_ORDERS,
        USERS_RIGHTS.UPDATE_ORDER,
        USERS_RIGHTS.DELETE_ORDER,

        //PRODUCT MANAGEMENT
        USERS_RIGHTS.CREATE_PRODUCT,
        USERS_RIGHTS.GET_PRODUCTS,
        USERS_RIGHTS.UPDATE_PRODUCT,
        USERS_RIGHTS.DELETE_PRODUCT,

        //REGION MANAGEMENT
        USERS_RIGHTS.CREATE_REGION,
        USERS_RIGHTS.GET_REGIONS,
        USERS_RIGHTS.UPDATE_REGION,
        USERS_RIGHTS.DELETE_REGION,





    ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
};