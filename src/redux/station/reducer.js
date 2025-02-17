import {
    CREATE_STATION,
    CREATE_STATION_SUCCESS,
    CREATE_STATION_FAILED
 } from './constant';

import isEmpty from '../../validation/is-empty'

const INIT_STATE = {
    create_station: null,
    error: null,
    loading: false,
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_STATION:
            return { ...state, loading: true };
        case CREATE_STATION_SUCCESS:
            return { ...state, create_station: payload, loading: false, error: null };
        case CREATE_STATION_FAILED:
            return { ...state, error: payload, loading: false };
        default:
            return state
    }
}