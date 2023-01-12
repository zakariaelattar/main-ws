module.exports = {
    ROLES: {
        ADMIN: 'admin',
        CUSTOMER: 'customer'
    },
    USER_RIGHTS: {

        //USER MANAGEMENT
        CREATE_USER: 'create_user',
        GET_USERS: 'get_users',
        UPDATE_USER: 'update_user',
        DELETE_USER: 'delete_user',

        // STORE MANAGEMENT
        CREATE_STORE: 'create_store',
        UPDATE_STORE: 'update_store',
        GET_STORES: 'get_stores',
        DELETE_STORE: 'delete_store',

        //ORDER MANAGEMENT
        CREATE_ORDER: 'create_order',
        GET_ORDERS: 'get_orders',
        UPDATE_ORDER: 'update_order',
        DELETE_ORDER: 'delete_order',

        //PRODUCT MANAGEMENT
        CREATE_PRODUCT: 'create_product',
        GET_PRODUCTS: 'get_products',
        UPDATE_PRODUCT: 'update_product',
        DELETE_PRODUCT: 'delete_product',

        //REGION MANAGEMENT
        CREATE_REGION: 'create_region',
        GET_REGIONS: 'get_regions',
        UPDATE_REGION: 'update_region',
        DELETE_REGION: 'delete_region',


        //payment MANAGEMENT
        CREATE_PAYMENT: 'create_payment',
        GET_PAYMENTS: 'get_payments',
        UPDATE_PAYMENT: 'update_payment',
        DELETE_PAYMENT: 'delete_payment',


    }
}