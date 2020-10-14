import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    VERIFY_SUCCESS,
    VERIFY_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FORGOT_PASSWORD,
    FORGOT_ERROR,
    RESET_PASSWORD,
    RESET_ERROR,
    LOGOUT,
    CLEAR_AUTH,
    SET_CURRENT_USER
} from '../constants'
import isEmpty from '../../validation/is-empty'

const INIT_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isRegistered: null,
    loading: false,
    user: {},
    forgotPassword: null,
    resetPassword: null,
    message: false
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload.data
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isRegistered: true,
                loading: false,
            }
        case VERIFY_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                token: payload,
                isAuthenticated: true,
                loading: false,
            }

        case FORGOT_PASSWORD:
            return {
                ...state,
                forgotPassword: payload,
                loading: false,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: payload,
                loading: false,
            }

        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
            }

        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case VERIFY_FAIL:
            // localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isRegistered: false,
                isAuthenticated: false,
                loading: false,
                user: null,
                message: true
            }

        case FORGOT_ERROR:
        case RESET_ERROR:
            return {
                ...state,
                token: null,
                forgotPassword: null,
                resetPassword: null,
                message: true
            }

            case CLEAR_AUTH:
                return {
                    message: false
                }
            
            case SET_CURRENT_USER:
                return {
                    ...state,
                    isAuthenticated: !isEmpty(action.payload),
                    user: payload
                }

        default:
            return state
    }
}