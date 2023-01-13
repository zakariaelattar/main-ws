const { USER_RIGHTS } = require('../config/constants');
const allRoles = {
    customer: [

        //ORDER MANAGEMENT
        USER_RIGHTS.CREATE_ORDER,
        USER_RIGHTS.GET_ORDERS,
        USER_RIGHTS.UPDATE_ORDER,





    ],
    admin: [
        //USER MANAGEMENT
        USER_RIGHTS.CREATE_USER,
        USER_RIGHTS.GET_USERS,
        USER_RIGHTS.UPDATE_USER,
        USER_RIGHTS.DELETE_USER,

        // STORE MANAGEMENT
        USER_RIGHTS.CREATE_STORE,
        USER_RIGHTS.UPDATE_STORE,
        USER_RIGHTS.GET_STORES,
        USER_RIGHTS.DELETE_STORE,

        //ORDER MANAGEMENT
        USER_RIGHTS.CREATE_ORDER,
        USER_RIGHTS.GET_ORDERS,
        USER_RIGHTS.UPDATE_ORDER,
        USER_RIGHTS.DELETE_ORDER,

        //PRODUCT MANAGEMENT
        USER_RIGHTS.CREATE_PRODUCT,
        USER_RIGHTS.GET_PRODUCTS,
        USER_RIGHTS.UPDATE_PRODUCT,
        USER_RIGHTS.DELETE_PRODUCT,

        //REGION MANAGEMENT
        USER_RIGHTS.CREATE_REGION,
        USER_RIGHTS.GET_REGIONS,
        USER_RIGHTS.UPDATE_REGION,
        USER_RIGHTS.DELETE_REGION,





    ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
};