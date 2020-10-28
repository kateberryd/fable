import {
    GET_USER_LIST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAILED
   } from './constant';
   import './constant';

import isEmpty from '../../validation/is-empty'

const INIT_STATE = {
    getUserList: null,
    error: null,
    loading: false,
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_LIST:
            return { ...state, loading: true };
        case GET_USER_LIST_SUCCESS:
            return { ...state, getUserList: payload, loading: false, error: null };
        case GET_USER_LIST_FAILED:
            return { ...state, error: payload, loading: false };
        default:
            return state
    }
}