import keyMirror from 'fbjs/lib/keyMirror';

/**
 * Redux Actions Types
 */
export const actionTypes = Object.freeze(
  keyMirror({
    // app
    INIT_APP_MOUNT: undefined,
    INIT_APP_MOUNT_SUCCESS: undefined,
    INIT_APP_MOUNT_FAILURE: undefined,
    RESET_APP: undefined,
    REDIRECT_URL: undefined,

    SET_ERRORS: undefined,
    PURGE_ERRORS: undefined,

    SIGNUP_USER: undefined,
    SIGNUP_USER_REQUEST: undefined,
    SIGNUP_USER_SUCCESS: undefined,
    SIGNUP_USER_FAILURE: undefined,

    LOGIN_USER: undefined,
    LOGIN_USER_REQUEST: undefined,
    LOGIN_USER_SUCCESS: undefined,
    LOGIN_USER_FAILURE: undefined,

    LOGOUT_USER: undefined,
    SET_CURRENT_USER: undefined,
    UNSET_CURRENT_USER: undefined,

    CREATE_USER: undefined,
    CREATE_USER_REQUEST: undefined,
    CREATE_USER_SUCCESS: undefined,
    CREATE_USER_FAILURE: undefined,

    FETCH_USERS: undefined,
    FETCH_USERS_REQUEST: undefined,
    FETCH_USERS_SUCCESS: undefined,
    FETCH_USERS_FAILURE: undefined,

    DELETE_USER: undefined,
    DELETE_USER_REQUEST: undefined,
    DELETE_USER_SUCCESS: undefined,
    DELETE_USER_FAILURE: undefined,

    UPDATE_USER: undefined,
    UPDATE_USER_REQUEST: undefined,
    UPDATE_USER_SUCCESS: undefined,
    UPDATE_USER_FAILURE: undefined,

    FETCH_USER_ME: undefined,
    FETCH_USER_ME_REQUEST: undefined,
    FETCH_USER_ME_SUCCESS: undefined,
    FETCH_USER_ME_FAILURE: undefined,

    CREATE_CONTACTUS: undefined,
    CREATE_CONTACTUS_REQUEST: undefined,
    CREATE_CONTACTUS_SUCCESS: undefined,
    CREATE_CONTACTUS_FAILURE: undefined
  })
);

/**
 *  USER
 */
export const USER_ROLES = Object.freeze({
  CUSTOMER: 'customer',
  AGENT: 'agent',
  ADMIN: 'admin'
});

/**
 * CURRENCY
 */
export const CURRENCY = Object.freeze(
  keyMirror({
    BTC: undefined,
    ETH: undefined,
    USDT: undefined
  })
);

/**
 * Miscellaneous
 */
export const APP_NAME = 'KREDITPAY';
export const ACCESS_TOKEN = 'access_token';
export const SUBMIT_BTN_TYPE = Object.freeze({
  SAVE: '0',
  SAVE_AND_ADD: '1'
});
